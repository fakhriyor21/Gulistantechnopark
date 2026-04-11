import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../server/Admin/Server";
import { LiaSpinnerSolid } from "react-icons/lia";
import { mediaFileUrl } from "../lib/apiOrigin";
import newsPlaceholder from "../assets/images/home/itcourse.jpg";
import { PageContent, PageHero } from "../components/Layout/PageLayout";

export default function News() {
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
      setNews(Array.isArray(response?.message) ? response.message : []);
      setLoading(false);
    };
    fetchNews();
  }, []);
  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    const day: string = String(date.getDate()).padStart(2, "0");
    const month: string = String(date.getMonth() + 1).padStart(2, "0");
    const year: number = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LiaSpinnerSolid className="animate-spin-slow text-blue-500 dark:text-white text-4xl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-[#08101B]">
      <PageHero
        eyebrow="Yangiliklar"
        title="So‘nggi e’lonlar va voqealar"
        subtitle="Texnopark hayoti, tadbirlar va startaplar haqida yangilanishlar."
      />
      <PageContent className="overflow-x-hidden pt-4">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {news.map((item) => (
              <Link
                className="flex flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-[#0d1829] dark:shadow-none dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)]"
                to={`/news/${item.id}`}
                key={item.id}
              >
                <div className="flex min-h-32 flex-col gap-3 px-5 pt-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs leading-[1.2rem] text-[#9CA1A9]">
                      {formatDate(item.datatime)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="line-clamp-2 break-words text-lg font-bold leading-[1.6rem] text-[#33445F] dark:text-white">
                      {item.title}
                    </h1>
                    <p
                      className="line-clamp-2 break-words leading-[1.4rem] text-[#8F98A7] dark:text-[#9CA1A9]"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="relative h-52">
                    <img
                      src={
                        item.file?.[0]
                          ? mediaFileUrl(item.file[0])
                          : newsPlaceholder
                      }
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = newsPlaceholder;
                      }}
                      className="size-full shrink-0 bg-no-repeat object-cover"
                      alt="news"
                    />
                  </div>
                  <div className="flex justify-between px-5 text-xs font-medium leading-[1.2rem] text-[#33445F] dark:text-white">
                    <p>
                      <span className="font-semibold text-[#EF7F1A]">
                        {item.title.split("").length}
                      </span>{" "}
                      ko'rishlar
                    </p>
                    <p>
                      <span className="font-semibold text-[#EF7F1A]">
                        {item.id}
                      </span>{" "}
                      marta ulashildi
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </PageContent>
    </div>
  );
}
