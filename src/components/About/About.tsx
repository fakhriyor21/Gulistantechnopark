import { useEffect, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { djangoListAboutCompany, stripHtml } from "@/services/djangoCms";
import { mediaFileUrl } from "@/lib/apiOrigin";
import { useLanguage, useMessages } from "@/contexts/LanguageContext";

const director = new URL("../../assets/images/hero/director.png", import.meta.url).href;

interface SlideData {
  id: number;
  name: string;
  description: string;
  image1: string;
  image2: string;
  active: boolean;
}

export default function About() {
  const { language } = useLanguage();
  const m = useMessages();
  const [data, setData] = useState<SlideData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void djangoListAboutCompany()
      .then((rows) => {
        if (cancelled) return;
        const slides: SlideData[] = rows.map((r) => {
          const img1 = r.image ? mediaFileUrl(r.image) : director;
          const img2 = r.image2 ? mediaFileUrl(r.image2) : img1;
          return {
            id: r.id,
            name: r.title,
            description: stripHtml(r.text || "").slice(0, 600),
            image1: img1,
            image2: img2,
            active: true,
          };
        });
        setData(slides);
        setActiveIndex(0);
      })
      .catch(() => {
        if (!cancelled) setData([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center py-24" id="about-section">
        <LiaSpinnerSolid className="size-12 animate-spin text-[#0B4397] dark:text-white" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div id="about-section" className="container px-5 py-16 text-center text-[#5b6b88] dark:text-white/70 lg:px-16">
        <p className="text-lg font-medium text-[#33445F] dark:text-white">{m.aboutHome.emptyTitle}</p>
        <p className="mt-2 text-sm">{m.aboutHome.emptyHint}</p>
      </div>
    );
  }

  return (
    <div id="about-section" className="relative ">
      <div className="pointer-events-none absolute hidden rotate-180 blur-2xl lg:flex">
        <svg xmlns="http://www.w3.org/2000/svg" width={462} height={474} viewBox="0 0 462 474" fill="none">
          <g opacity="0.5" filter="url(#filter0_f_2002_124648)">
            <path d="M-70 214L166 202.636L202 -67H74.5L70 7V79.5L-70 214Z" fill="#568BD8" />
          </g>
          <defs>
            <filter
              id="filter0_f_2002_124648"
              x="-329.3"
              y="-326.3"
              width="790.6"
              height="799.6"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="129.65" result="effect1_foregroundBlur_2002_124648" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="container px-5 py-8 lg:px-16 lg:pb-16">
        <div className="relative mb-2.5 flex flex-col items-center">
          <div className="pointer-events-none absolute top-0 left-0 h-28 w-full bg-section-header-bg-primary transition-colors dark:bg-section-header-bg-primary-dark" />
          <div className="mt-10 inline-flex flex-col items-center">
            <div className="inline-flex rounded-lg px-3 py-1.5 text-lg font-semibold text-[#074196] transition-colors dark:text-[#568BD8] md:text-xl lg:text-2xl">
              {m.aboutHome.sectionTitle}
            </div>
            <div className="pointer-events-none -mt-10 h-12 w-full bg-primary-section-gradient transition-colors" />
            <div className="h-px w-full bg-primary-line-gradient transition-colors" />
          </div>
        </div>

        <div className="flex flex-col gap-5 px-0 text-center lg:px-20">
          <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-3xl">{m.footer.tagline}</h1>
          <p className="text-sm text-[#8F98A7] dark:text-white lg:text-lg">{m.aboutHome.apiHint}</p>
        </div>

        <div className="flex flex-col">
          <div
            className={`relative mt-11 grid grid-cols-1 gap-5 rounded-3xl bg-white/60 p-2 transition-all duration-700 lg:grid-cols-3 lg:grid-rows-1 ${
              isSwitching ? "scale-[0.995] opacity-70" : "scale-100 opacity-100"
            }`}
            key={data[activeIndex].id}
          >
            <div className="relative h-[11.25rem] w-full rounded-2xl sm:h-52 lg:h-[24.75rem]">
              <img
                className="size-full shrink-0 rounded-2xl bg-no-repeat object-cover"
                src={data[activeIndex].image2}
                alt=""
              />
            </div>
            <div className="relative h-[15.188rem] w-full rounded-3xl sm:h-72 lg:col-span-2 lg:h-[24.75rem]">
              <img
                className="size-full shrink-0 rounded-3xl bg-no-repeat object-cover"
                src={data[activeIndex].image1}
                alt=""
              />
              {isSwitching ? (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl bg-[#0a1f42]/55 backdrop-blur-[1px]">
                  <div className="relative h-12 w-12">
                    <span className="absolute inset-0 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                    <span className="absolute inset-2 rounded-full bg-gradient-to-br from-[#9bd4ff] to-[#4b8dff] shadow-[0_0_20px_rgba(120,188,255,0.9)]" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="border-1 grid gap-3 pt-5 lg:order-1 xl:grid-cols-4 xl:items-stretch">
            {data.map((item, index) => (
              <div
                className={`flex cursor-pointer flex-col gap-2 rounded-2xl border p-4 text-lg transition-all duration-300 ease-out ${
                  activeIndex === index
                    ? "relative z-10 -translate-y-2 scale-[1.02] border-2 border-[#4a7fd4] bg-gradient-to-b from-white to-[#e8f1fc] shadow-[0_8px_16px_-4px_rgba(43,95,173,0.22)] dark:from-[#1a2744] dark:to-[#152238] dark:border-[#568BD8]"
                    : "border border-[#e6edf9] bg-white hover:-translate-y-0.5 hover:border-[#b9cff2] hover:shadow-md dark:border-slate-700 dark:bg-slate-900/40"
                }`}
                key={item.id}
                onClick={() => {
                  if (index === activeIndex || isSwitching) return;
                  setPendingIndex(index);
                  setIsSwitching(true);
                  setTimeout(() => {
                    setActiveIndex(index);
                    setIsSwitching(false);
                    setPendingIndex(null);
                  }, 900);
                }}
              >
                <h1 className={`${activeIndex === index ? "text-[#568BD8]" : ""} font-bold leading-[1.35rem]`}>
                  {item.name}
                </h1>
                <p className="flex-1 text-sm leading-[1.181rem] text-[#33445F] dark:text-white">{item.description}</p>
                <div className="mt-1 flex items-center justify-between text-xs text-[#5b6b88]">
                  <span>{activeIndex === index ? m.aboutHome.cardSelected : m.aboutHome.cardView}</span>
                  <span>{pendingIndex === index && isSwitching ? "..." : "→"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-8 right-0 hidden shrink-0 rotate-180 blur-2xl lg:flex">
        <svg xmlns="http://www.w3.org/2000/svg" width={462} height={474} viewBox="0 0 462 474" fill="none">
          <g opacity="0.5" filter="url(#filter0_f_about2)">
            <path d="M-70 214L166 202.636L202 -67H74.5L70 7V79.5L-70 214Z" fill="#568BD8" />
          </g>
          <defs>
            <filter
              id="filter0_f_about2"
              x="-329.3"
              y="-326.3"
              width="790.6"
              height="799.6"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="129.65" result="effect1_foregroundBlur_about2" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
