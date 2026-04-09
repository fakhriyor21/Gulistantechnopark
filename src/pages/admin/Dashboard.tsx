import { Link } from "react-router-dom";
import NewsCard from "../../components/Admin/NewsCard";
import NavbarAdmin from "../../components/Admin/Partials/Nabar";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { getNews } from "../../server/Admin/Server";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function Dashboard() {
  interface News {
    id: number;
    title: string;
    description: string;
    datatime: string;
    file: string[];
  }
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await getNews();
      setNews(response.message);
      setLoading(false);
    };
    fetchNews();
  });
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LiaSpinnerSolid className="animate-spin-slow text-blue-500 dark:text-white text-4xl" />
      </div>
    );
  }
  return (
    <>
      <NavbarAdmin />
      <h1 className="pt-24 text-center font-semibold text-3xl">
        Yangiliklarni boshqarish
      </h1>
      <Link
        to={"/admin/add-news"}
        className="px-5 py-8 lg:px-16 flex justify-end max-lg:justify-center w-full"
      >
        <Button className="max-lg:w-full">Yangilik qo'shish</Button>
      </Link>
      <div className=" px-5 py-8 lg:px-16 lg:pb-16 flex justify-center">
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 ">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </>
  );
}
