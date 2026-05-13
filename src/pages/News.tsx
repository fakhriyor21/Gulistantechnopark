import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaSpinnerSolid } from "react-icons/lia";
import { PageContent, PageHero } from "../components/Layout/PageLayout";
import newsPlaceholder from "../assets/images/home/itcourse.jpg";
import { mediaFileUrl } from "../lib/apiOrigin";
import { formatNewsDate } from "../lib/utils";
import { djangoListNews } from "@/services/djangoCms";
import { useLanguage, useMessages } from "@/contexts/LanguageContext";

type CardItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  datatime: string;
  mediaType?: "image" | "video";
};

function cardCover(item: CardItem): string {
  if (item.imageUrl?.startsWith("http") || item.imageUrl?.startsWith("data:")) return item.imageUrl;
  if (item.imageUrl) return mediaFileUrl(item.imageUrl);
  return newsPlaceholder;
}

function isVideoCard(item: CardItem): boolean {
  if (item.mediaType === "video") return true;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(item.imageUrl);
}

export default function News() {
  const { language } = useLanguage();
  const m = useMessages();
  const [news, setNews] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void (async () => {
      try {
        const rows = await djangoListNews();
        if (cancelled) return;
        setNews(
          rows.map((r) => {
            const img = r.img || "";
            return {
              id: String(r.id),
              title: r.title,
              description: r.body_small ?? "",
              imageUrl: img || newsPlaceholder,
              datatime: r.created_at,
              mediaType: /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(img) ? ("video" as const) : ("image" as const),
            };
          }),
        );
      } catch {
        if (!cancelled) setNews([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [language]);

  const cardShellClass =
    "group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_14px_50px_-22px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.22)] dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:shadow-[0_16px_50px_-18px_rgba(0,0,0,0.45)]";

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fbff] dark:bg-[#060b14]">
        <LiaSpinnerSolid className="animate-spin-slow text-[#2563eb] dark:text-white text-5xl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-[#08101B]">
      <div className="relative isolate overflow-hidden bg-[#0b1630]">
        <img src={newsPlaceholder} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081426]/95 via-[#0B4397]/70 to-[#081426]/95" />
        <PageHero
          eyebrow={m.news.pageEyebrow}
          title={m.news.pageTitle}
          subtitle={m.news.pageSubtitle}
        />
      </div>
      <PageContent className="overflow-x-hidden pb-12 pt-8">
        {news.length === 0 ? (
          <p className="text-center text-slate-600 dark:text-slate-400">{m.news.empty}</p>
        ) : (
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {news.map((item) => (
              <div key={item.id} className={`${cardShellClass} group`}>
                <div className="relative overflow-hidden">
                  {isVideoCard(item) ? (
                    <video
                      src={cardCover(item)}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                      muted
                      controls
                    />
                  ) : (
                    <img
                      src={cardCover(item)}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = newsPlaceholder;
                      }}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                      alt={item.title}
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-slate-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg">
                    {formatNewsDate(item.datatime)}
                  </div>
                </div>
                <div className="flex flex-col gap-4 px-6 py-6">
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                    <p
                      className="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span className="uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                      {m.news.tag}
                    </span>
                  </div>
                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex w-fit items-center justify-center rounded-lg bg-[#0B4397] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#09367a] dark:bg-[#1f4f9b] dark:hover:bg-[#2b63bc]"
                  >
                    {m.news.readMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </PageContent>
    </div>
  );
}
