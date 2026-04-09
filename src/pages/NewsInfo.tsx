import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByNews } from "../server/Admin/Server";
import { LiaSpinnerSolid } from "react-icons/lia";
import { mediaFileUrl } from "../lib/apiOrigin";
import newsPlaceholder from "../assets/images/home/itcourse.jpg";

export default function NewsInfo() {
  interface News {
    id: number;
    title: string;
    description: string;
    datatime: string;
    file: string[];
  }
  const [news, setNews] = useState<News>({
    id: 0,
    title: "",
    description: "",
    datatime: "",
    file: [],
  });
  const [loading, setLoading] = useState(true);
  const id = useParams().id;
  useEffect(() => {
    const fetchNews = async () => {
      const response = await getByNews(Number(id));
      setNews(
        response?.message && typeof response.message === "object"
          ? response.message
          : {
              id: 0,
              title: "",
              description: "",
              datatime: "",
              file: [],
            }
      );
      setLoading(false);
    };
    fetchNews();
  }, [id]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LiaSpinnerSolid className="animate-spin-slow text-blue-500 dark:text-white text-4xl" />
      </div>
    );
  }
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
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden pt-28">
      <div className="container mx-auto px-5 pb-5 xl:px-16">
        <div className="mx-auto flex max-w-[860px] flex-col gap-2 xl:gap-5">
          <h1 className="mt-[2.125rem] text-2xl font-bold text-[#33445F] dark:text-white xl:text-[2.25rem]">
            {news.title}
          </h1>

          <div className="flex flex-col gap-3">
            <div className="flex w-full items-center justify-between gap-3 pt-4">
              <p className="font-semibold text-[#8F98A7] dark:text-white lg:text-lg">
                {formatDate(news.datatime)}
              </p>
            </div>
            {news.file?.length ? (
              news.file.map((item, index) => (
                <img
                  src={mediaFileUrl(item)}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = newsPlaceholder;
                  }}
                  className="w-full rounded-xl bg-no-repeat object-cover xl:max-h-[800px]"
                  alt={news.title}
                  key={index}
                />
              ))
            ) : (
              <img
                src={newsPlaceholder}
                className="w-full rounded-xl bg-no-repeat object-cover xl:max-h-[800px]"
                alt={news.title}
              />
            )}
            <div
              className="w-full text-sm text-[#33445F] dark:text-white lg:text-base"
              dangerouslySetInnerHTML={{
                __html: news.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
