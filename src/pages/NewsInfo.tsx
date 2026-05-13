import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LiaSpinnerSolid } from "react-icons/lia";
import { mediaFileUrl } from "../lib/apiOrigin";
import newsPlaceholder from "../assets/images/home/itcourse.jpg";
import { formatNewsDate } from "../lib/utils";
import { djangoGetNews, djangoListNews } from "@/services/djangoCms";
import { useLanguage, useMessages } from "@/contexts/LanguageContext";

export default function NewsInfo() {
  const { language } = useLanguage();
  const m = useMessages();
  const resolveMediaSrc = (value: string) => {
    if (value.startsWith("http") || value.startsWith("data:")) return value;
    return mediaFileUrl(value);
  };
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
  const [notFound, setNotFound] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);

    void (async () => {
      try {
        const nid = Number(id);
        const row = Number.isFinite(nid) ? await djangoGetNews(nid) : null;
        const list = await djangoListNews();
        if (cancelled) return;
        if (row) {
          setNotFound(false);
          const img = row.img ?? "";
          setNews({
            id: String(row.id),
            title: row.title,
            description: row.body_small ?? "",
            datatime: row.created_at,
            file: img ? [img] : [],
            mediaType: /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(img) ? "video" : "image",
          });
          setRelated(
            list
              .filter((r) => String(r.id) !== id)
              .slice(0, 3)
              .map((r) => ({
                id: String(r.id),
                title: r.title,
                description: r.body_small ?? "",
                datatime: r.created_at,
                file: r.img ? [r.img] : [],
              })),
          );
        } else {
          setNotFound(true);
          setNews({ id: "", title: "", description: "", datatime: "", file: [], mediaType: "image" });
          setRelated([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id, language]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LiaSpinnerSolid className="animate-spin-slow text-4xl text-blue-500 dark:text-white" />
      </div>
    );
  }

  if (notFound || !news.title) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 pt-28 pb-16">
        <p className="text-lg font-semibold text-[#33445F] dark:text-white">{m.news.notFoundTitle}</p>
        <Link
          to="/news"
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-[#0B4397] hover:bg-slate-50 dark:border-[#22334f] dark:text-sky-300 dark:hover:bg-[#102038]"
        >
          {m.news.notFoundBack}
        </Link>
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
            {m.news.back}
          </Link>
          <h1 className="mt-[2.125rem] text-2xl font-bold text-[#33445F] dark:text-white xl:text-[2.25rem]">{news.title}</h1>

          <div className="flex flex-col gap-3">
            <div className="flex w-full items-center justify-between gap-3 pt-4">
              <p className="font-semibold text-[#8F98A7] dark:text-white lg:text-lg">{formatNewsDate(news.datatime)}</p>
            </div>
            {news.file?.length ? (
              news.file.map((item, index) =>
                news.mediaType === "video" || /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(item) ? (
                  <video
                    key={index}
                    src={resolveMediaSrc(item)}
                    controls
                    className="w-full rounded-xl bg-black object-contain xl:max-h-[800px]"
                  />
                ) : (
                  <img
                    src={resolveMediaSrc(item)}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = newsPlaceholder;
                    }}
                    className="w-full rounded-xl bg-no-repeat object-cover xl:max-h-[800px]"
                    alt={news.title}
                    key={index}
                  />
                ),
              )
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
            />
            {related.length > 0 ? (
              <div className="mt-8 rounded-xl border border-slate-200 p-4 dark:border-[#22334f]">
                <h2 className="mb-3 text-lg font-semibold dark:text-white">{m.news.related}</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      to={`/news/${item.id}`}
                      className="rounded-lg border p-3 hover:bg-slate-50 dark:border-[#22334f] dark:hover:bg-[#0d1a2b]"
                    >
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
