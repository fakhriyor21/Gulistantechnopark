import { Link } from "react-router-dom";
import NewsCard from "../../components/Admin/NewsCard";
import NavbarAdmin from "../../components/Admin/Partials/Nabar";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export default function Dashboard() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("newsItems");
      const items: News[] = stored ? JSON.parse(stored) : [];
      setNews(items);
    } catch (error) {
      console.error(error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDelete = (id: string) => {
    setNews((prevNews) => {
      const updated = prevNews.filter((item) => item.id !== id);
      localStorage.setItem("newsItems", JSON.stringify(updated));
      return updated;
    });
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
