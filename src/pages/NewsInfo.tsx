import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LiaSpinnerSolid } from "react-icons/lia";
import { mediaFileUrl } from "../lib/apiOrigin";
import newsPlaceholder from "../assets/images/home/itcourse.jpg";
import { formatNewsDate } from "../lib/utils";
import { getAdminNews } from "@/lib/adminStorage";
import { SAMPLE_NEWS } from "@/data/sampleNews";

export default function NewsInfo() {
  interface News {
    id: string;
    title: string;
    description: string;
    datatime: string;
    file: string[];
  }
  const [news, setNews] = useState<News>({
    id: "",
    title: "",
    description: "",
    datatime: "",
    file: [],
  });
  const [loading, setLoading] = useState(true);
  const id = useParams().id;
  useEffect(() => {
    const fetchNews = () => {
      const adminItem = getAdminNews().find((item) => item.id === id);
      if (adminItem) {
        setNews({
          id: adminItem.id,
          title: adminItem.title,
          description: adminItem.description,
          datatime: adminItem.createdAt,
          file: adminItem.imageUrl ? [adminItem.imageUrl] : [],
        });
        setLoading(false);
        return;
      }

      const sample = SAMPLE_NEWS.find((item) => String(item.id) === id);
      if (sample) {
        setNews({
          id: String(sample.id),
          title: sample.title,
          description: sample.description,
          datatime: sample.datatime,
          file: sample.file ?? [],
        });
      }
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
                {formatNewsDate(news.datatime)}
              </p>
            </div>
            {news.file?.length ? (
              news.file.map((item, index) => (
                <img
                  src={item.startsWith("http") ? item : mediaFileUrl(item)}
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
