import { Link, useNavigate } from "react-router-dom";
import NewsCard from "../../components/Admin/NewsCard";
import NavbarAdmin from "../../components/Admin/Partials/Nabar";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { getAllNews, type News } from "@/services/newsService";
import { LiaSpinnerSolid } from "react-icons/lia";
import { useToast } from "../../hooks/use-toast";

export default function Dashboard() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("userData");
    if (!storedUser) {
      navigate("/admin", { replace: true });
      return;
    }

    try {
      const parsed = JSON.parse(storedUser) as { expiry?: number };
      if (!parsed?.expiry || Date.now() > parsed.expiry) {
        sessionStorage.removeItem("userData");
        navigate("/admin", { replace: true });
        return;
      }
    } catch {
      sessionStorage.removeItem("userData");
      navigate("/admin", { replace: true });
      return;
    }

    const fetchNews = async () => {
      try {
        const items = await getAllNews();
        setNews(items);
      } catch (error) {
        console.error(error);
        toast({
          title: "Yangiliklarni olishda xatolik",
          description: "Yangiliklar yuklanmadi. Iltimos, sahifani qayta yuklang.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [navigate, toast]);

  const handleDelete = (id: string) => {
    setNews((prevNews) => prevNews.filter((item) => item.id !== id));
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#08101B]">
        <LiaSpinnerSolid className="animate-spin text-blue-500 dark:text-white text-4xl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08101B] pb-16">
      <NavbarAdmin />
      <div className="pt-24 px-5 lg:px-16">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Yangiliklarni boshqarish
          </h1>
          <Link to="/admin/add-news" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Yangilik qo'shish</Button>
          </Link>
        </div>

        {news.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            Hozircha hech qanday yangilik yo'q.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
