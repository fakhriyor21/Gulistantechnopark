import { useState } from "react";

const director = new URL("../../assets/images/hero/director.png", import.meta.url).href;
const imageBek = new URL("../../assets/images/hero/hero4.png", import.meta.url).href;
const agentlik = new URL("../../assets/images/hero/agentlik.jpg", import.meta.url).href;
const texnopark = new URL("../../assets/images/news/5.jpg", import.meta.url).href;
const event2 = new URL("../../assets/images/news/aok.jpg", import.meta.url).href;
const imagegroup = new URL("../../assets/images/home/imagegroup.png", import.meta.url).href;
export default function About() {
  interface Data {
    id: number;
    name: string;
    description: string;
    image1: string;
    image2: string;
    active: boolean;
  }

  const data: Data[] = [
    {
      id: 1,
      name: "Agentlik rahbari tashrifi",
      description:
        "Innovatsion rivojlanish agentligi rahbari Sharof Rajabbayev Guliston Yoshlar Texnoparkiga tashrif buyurdi hamda  texnoparkning faoliyati va unda ishtirok etayotgan yoshlarning innovatsion startaplari bilan tanishdi. ",
      image1: imageBek,
      image2: agentlik,
      active: true
    },
    {
      id: 2,
      name: "Biz haqimizda",
      description:
        "Bizning asosiy vazifamiz – yangi g‘oyalarni qo‘llab-quvvatlash, kelajak avlodiga zamonaviy sharoitlarni yaratish va yurtimizning innovatsion salohiyatini kuchaytirishdir.",
      image1: texnopark,
      image2: director,
      active: true
    },
    {
      id: 3,
      name: "Tadbirlar",
      description:
        "Texnopark  texnologiyalar va innovatsiya bilan bog‘liq ko‘plab tadbirlarni tashkil etishda va o‘tkazishda faol ishtirok etadi.",
      image1: event2,
      image2: texnopark,
      active: true
    },
    {
      id: 4,
      name: "Rahbariyat",
      description:
        "Texnoparkimiz mutaxassislarining malakasi bizga har bir mijozning individual ehtiyojlarini chuqur tushunish va yechimlarni taqdim etishga imkon beradi.  ",
      image1: imagegroup,
      image2: director,
      active: true
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isSwitching, setIsSwitching] = useState<boolean>(false);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  return (
    <div id="about-section" className="relative ">
      <div className="pointer-events-none absolute hidden rotate-180 blur-2xl lg:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={462}
          height={474}
          viewBox="0 0 462 474"
          fill="none"
        >
          <g opacity="0.5" filter="url(#filter0_f_2002_124648)">
            <path
              d="M-70 214L166 202.636L202 -67H74.5L70 7V79.5L-70 214Z"
              fill="#568BD8"
            />
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
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="129.65"
                result="effect1_foregroundBlur_2002_124648"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="container px-5 py-8 lg:px-16 lg:pb-16">
        <div className="relative mb-2.5 flex flex-col items-center">
          <div className="w-full transition-colors h-px bg-gradient-to-r from-transparent via-[rgba(86,139,216,0.38)] via-50% to-transparent" />
          <div className="absolute top-0 left-0 w-full transition-colors h-28 pointer-events-none bg-section-header-bg-primary dark:bg-section-header-bg-primary-dark" />
          <div className="mt-10 inline-flex flex-col items-center">
            <div className="px-3 py-1.5 rounded-lg transition-colors inline-flex text-lg font-semibold text-[#074196] dark:text-[#568BD8] md:text-xl lg:text-2xl">
              Kompaniyamiz haqida
            </div>
            <div className="w-full transition-colors h-12 -mt-10 pointer-events-none bg-primary-section-gradient" />
            <div className="h-px transition-colors w-full bg-primary-line-gradient" />
          </div>
        </div>

        <div className="flex flex-col gap-5 px-0 text-center lg:px-20">
          <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-4xl">
            Innovatsion texnopark yoshlar uchun imkoniyatlar maskani
          </h1>
          <p className="text-sm text-[#8F98A7] dark:text-white lg:text-lg">
            "Kelajakka tayyorlanamiz: yoshlar yaratadi, texnopark
            qo‘llab-quvvatlaydi! Guliston Yoshlar Texnoparki – g‘oyalar amalga
            oshadigan joy!"
          </p>
        </div>

        {/* Render the active data item */}
        <div className="flex flex-col">
          <div
            className={`relative mt-11 grid grid-cols-1 gap-5 rounded-3xl bg-white/60 p-2 transition-all duration-700 lg:grid-cols-3 lg:grid-rows-1 ${
              isSwitching ? "opacity-70 scale-[0.995]" : "opacity-100 scale-100"
            }`}
            key={data[activeIndex].id}
          >
            <div className="relative h-[11.25rem] w-full rounded-2xl sm:h-52 lg:h-[24.75rem]">
              <img
                className="size-full shrink-0 rounded-2xl bg-no-repeat object-cover"
                src={data[activeIndex].image2}
                alt="background-2"
              />
            </div>
            <div className="relative h-[15.188rem] w-full rounded-3xl sm:h-72 lg:col-span-2 lg:h-[24.75rem]">
              <img
                className="size-full shrink-0 rounded-3xl bg-no-repeat object-cover"
                src={data[activeIndex].image1}
                alt="background-1"
              />
              {isSwitching && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl bg-[#0a1f42]/55 backdrop-blur-[1px]">
                  <div className="relative h-12 w-12">
                    <span className="absolute inset-0 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                    <span className="absolute inset-2 rounded-full bg-gradient-to-br from-[#9bd4ff] to-[#4b8dff] shadow-[0_0_20px_rgba(120,188,255,0.9)]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-9 animate-pulse rounded-full bg-[#9fd4ff]" />
                    <span className="h-1.5 w-16 animate-pulse rounded-full bg-[#6eb5ff] [animation-delay:0.12s]" />
                    <span className="h-1.5 w-9 animate-pulse rounded-full bg-[#9fd4ff] [animation-delay:0.24s]" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="border-1 grid gap-3 pt-5 lg:order-1 xl:grid-cols-4 xl:items-stretch">
            {data.map((item, index) => (
              <div
                className={`flex cursor-pointer flex-col gap-2 rounded-2xl border p-4 text-lg transition-all duration-300 ease-out ${
                  activeIndex === index
                    ? "relative z-10 -translate-y-2 scale-[1.02] border-2 border-[#4a7fd4] bg-gradient-to-b from-white to-[#e8f1fc] shadow-[0_1px_0_0_rgba(255,255,255,0.95)_inset,0_8px_16px_-4px_rgba(43,95,173,0.22),0_20px_44px_-8px_rgba(43,95,173,0.38),0_32px_64px_-16px_rgba(56,119,189,0.18)] dark:from-[#1a2744] dark:to-[#152238] dark:border-[#568BD8] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_12px_40px_-6px_rgba(0,0,0,0.45),0_24px_48px_-12px_rgba(86,139,216,0.25)]"
                    : "border border-[#e6edf9] bg-white hover:border-[#b9cff2] hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/40"
                }`}
                key={index}
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
                <h1 className={`${activeIndex === index && 'text-[#568BD8]'}  font-bold leading-[1.35rem]`}>
                  {item.name}
                </h1>
                <p className="text-[#33445F] dark:text-white flex-1 text-sm leading-[1.181rem]">
                  {item.description}
                </p>
                <div className="mt-1 flex items-center justify-between text-xs text-[#5b6b88]">
                  <span>{activeIndex === index ? "Tanlangan" : "Ko'rish"}</span>
                  <span>{pendingIndex === index && isSwitching ? "..." : "→"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-8 right-0 hidden shrink-0 rotate-180 blur-2xl lg:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={462}
          height={474}
          viewBox="0 0 462 474"
          fill="none"
        >
          <g opacity="0.5" filter="url(#filter0_f_2002_124648)">
            <path
              d="M-70 214L166 202.636L202 -67H74.5L70 7V79.5L-70 214Z"
              fill="#568BD8"
            />
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
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="129.65"
                result="effect1_foregroundBlur_2002_124648"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
