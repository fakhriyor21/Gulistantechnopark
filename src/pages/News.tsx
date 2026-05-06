import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../server/Admin/Server";
import { LiaSpinnerSolid } from "react-icons/lia";
import { mediaFileUrl } from "../lib/apiOrigin";
import newsPlaceholder from "../assets/images/home/itcourse.jpg";
import { PageContent, PageHero } from "../components/Layout/PageLayout";
import { formatNewsDate } from "../lib/utils";
import { SAMPLE_NEWS, type PublicNewsItem } from "../data/sampleNews";

function newsCoverSrc(item: PublicNewsItem): string {
  if (item.demoImageSrc) return item.demoImageSrc;
  if (item.file?.[0]) return mediaFileUrl(item.file[0]);
  return newsPlaceholder;
}

export default function News() {
  const [news, setNews] = useState<PublicNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showingSamples, setShowingSamples] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const fetchNews = async () => {
      try {
        const response = await getNews();
        if (!cancelled) {
          const raw = Array.isArray(response?.message) ? response.message : [];
          const useSamples = raw.length === 0;
          setShowingSamples(useSamples);
          setNews(useSamples ? SAMPLE_NEWS : (raw as PublicNewsItem[]));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchNews();
    return () => {
      cancelled = true;
    };
  }, []);

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
      <PageHero
        eyebrow="Yangiliklar"
        title="So‘nggi e’lonlar va voqealar"
        subtitle="Texnopark hayoti, tadbirlar va startaplar haqida yangilanishlar."
      />
      <PageContent className="overflow-x-hidden pt-4">
        {showingSamples ? (
          <p className="mb-8 rounded-3xl border border-amber-200/80 bg-amber-50/90 px-5 py-4 text-center text-sm text-amber-950 shadow-sm dark:border-amber-500/30 dark:bg-amber-950/30 dark:text-amber-100">
            Quyidagi kartalar dizayn uchun <strong>namunaviy</strong>. Backend ulanishi bilan ular haqiqiy e’lonlar bilan almashtiriladi.
          </p>
        ) : null}

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {news.map((item) => {
            const cardInner = (
              <>
                <div className="relative overflow-hidden">
                  <img
                    src={newsCoverSrc(item)}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = newsPlaceholder;
                    }}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    alt={item.title}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-slate-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg">
                    {formatNewsDate(item.datatime)}
                  </div>
                  {item.demo ? (
                    <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg">
                      Namuna
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-4 px-6 py-6">
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h2>
                    <p
                      className="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span className="uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Texnopark yangiliklari</span>
                    {!item.demo ? (
                      <span className="font-semibold text-sky-600 transition group-hover:text-sky-800 dark:text-sky-400 dark:group-hover:text-sky-300">
                        Batafsil →
                      </span>
                    ) : null}
                  </div>
                </div>
              </>
            );

            return item.demo ? (
              <div key={item.id} className={`${cardShellClass} cursor-default`}>
                {cardInner}
              </div>
            ) : (
              <Link key={item.id} className={`${cardShellClass} group`} to={`/news/${item.id}`}>
                {cardInner}
              </Link>
            );
          })}
        </div>
      </PageContent>
    </div>
  );
}
