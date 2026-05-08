import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LiaSpinnerSolid } from "react-icons/lia";
import { mediaFileUrl } from "../lib/apiOrigin";
import newsPlaceholder from "../assets/images/home/itcourse.jpg";
import { formatNewsDate } from "../lib/utils";
import { canUseFirebase, watchNews } from "@/services/firebaseCms";
import { SAMPLE_NEWS } from "@/data/sampleNews";
import { timestampToIsoString } from "@/lib/firestoreDates";

export default function NewsInfo() {
  interface NewsShape {
    id: string;
    title: string;
    description: string;
    datatime: string;
    file: string[];
    mediaType?: "image" | "video";
  }

  const [news, setNews] = useState<NewsShape>({
    id: "",
    title: "",
    description: "",
    datatime: "",
    file: [],
    mediaType: "image",
  });
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState<NewsShape[]>([]);
  const id = useParams().id;

  useEffect(() => {
    if (!id) return;
    if (!canUseFirebase()) {
      const sample = SAMPLE_NEWS.find((item) => String(item.id) === id);
      if (sample) {
        setNews({
          id: String(sample.id),
          title: sample.title,
          description: sample.description,
          datatime: sample.datatime,
          file: sample.file ?? [],
        });
        setRelated(
          SAMPLE_NEWS.filter((n) => String(n.id) !== id).slice(0, 3).map((n) => ({
            id: String(n.id),
            title: n.title,
            description: n.description,
            datatime: n.datatime,
            file: n.file ?? [],
          })),
        );
      }
      setLoading(false);
      return;
    }
    const unsub = watchNews(
      (rows) => {
        const all = rows
          .filter((r) => r.data.active !== false)
          .map(({ id: rowId, data }) => ({
            id: rowId,
            title: data.title,
            description: data.description,
            datatime: timestampToIsoString(data.createdAt) || "",
            file: data.imageUrl ? [data.imageUrl] : [],
            mediaType: data.mediaType === "video" ? "video" : "image",
          }));
        const current = all.find((item) => item.id === id);
        if (current) setNews(current);
        setRelated(all.filter((item) => item.id !== id).slice(0, 3));
        setLoading(false);
      },
      () => setLoading(false),
    );
    return unsub;
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
          <Link
            to="/news"
            className="w-fit rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-[#0B4397] hover:bg-slate-50 dark:border-[#22334f] dark:text-sky-300 dark:hover:bg-[#102038]"
          >
            ← Orqaga
          </Link>
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
                news.mediaType === "video" || /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(item) ? (
                  <video
                    key={index}
                    src={item.startsWith("http") ? item : mediaFileUrl(item)}
                    controls
                    className="w-full rounded-xl bg-black object-contain xl:max-h-[800px]"
                  />
                ) : (
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
                )
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
            {related.length > 0 ? (
              <div className="mt-8 rounded-xl border border-slate-200 p-4 dark:border-[#22334f]">
                <h2 className="mb-3 text-lg font-semibold dark:text-white">O‘xshash yangiliklar</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {related.map((item) => (
                    <Link key={item.id} to={`/news/${item.id}`} className="rounded-lg border p-3 hover:bg-slate-50 dark:border-[#22334f] dark:hover:bg-[#0d1a2b]">
                      <p className="text-sm font-semibold dark:text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{formatNewsDate(item.datatime)}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
