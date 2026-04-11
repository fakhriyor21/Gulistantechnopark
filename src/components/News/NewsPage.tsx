import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../../server/Admin/Server";
import { mediaFileUrl } from "../../lib/apiOrigin";
import newsPlaceholder from "../../assets/images/home/itcourse.jpg";

export default function NewsPage() {
  interface News {
    id: number;
    title: string;
    description: string;
    datatime: string;
    file: string[];
  }
  const [news, setNews] = useState<News[]>([]);
  const visibleNews = news.slice(0, 3);
  const placeholderCount = Math.max(0, 3 - visibleNews.length);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await getNews();
      setNews(Array.isArray(response?.message) ? response.message : []);
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
  return (
    <div className="relative">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-10 lg:pb-16 xl:px-14 2xl:px-16 dark:bg-[#08101B40]">
        <div className="relative mb-2.5 flex flex-col items-center">
          <div className="w-full transition-colors h-px bg-gradient-to-r from-transparent via-[rgba(86,139,216,0.38)] via-50% to-transparent" />
          <div className="absolute top-0 left-0 w-full transition-colors h-28 pointer-events-none bg-section-header-bg-primary dark:bg-section-header-bg-primary-dark" />
          <div className="mt-10 inline-flex flex-col items-center">
            <div className="px-2.5 py-1 rounded-lg transition-colors inline-flex text-sm text-[#074196] dark:text-[#568BD8]">
              Eng so'nggi yangiliklardan xabardor bo'ling
            </div>
            <div className="w-full transition-colors h-12 -mt-10 pointer-events-none bg-primary-section-gradient" />
            <div className="h-px transition-colors w-full bg-primary-line-gradient" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="w-full text-center text-xl font-bold text-[#33445F] dark:text-white lg:text-4xl">
            Yangiliklar va maqolalar
          </h1>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleNews.map((item) => (
              <Link
                className="flex flex-col justify-between gap-4 rounded-xl border border-solid border-[#ffffff1a] bg-[#F4F6F9] py-5 backdrop-blur-[0.625rem] dark:bg-[#081E3F4D]"
                to={`/news/${item.id}`}
                key={item.id}
              >
                <div className="flex min-h-32 flex-col gap-3 px-5">
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
            {Array.from({ length: placeholderCount }).map((_, index) => (
              <div
                key={`news-placeholder-${index}`}
                className="flex min-h-[420px] flex-col justify-between gap-4 rounded-xl border border-dashed border-[#d4dbe7] bg-[#F4F6F9]/60 py-5 backdrop-blur-[0.625rem] dark:border-[#ffffff1a] dark:bg-[#081E3F33]"
              >
                <div className="flex min-h-32 flex-col gap-3 px-5">
                  <div className="h-3 w-20 animate-pulse rounded bg-[#dbe4f4] dark:bg-[#243149]" />
                  <div className="h-6 w-full animate-pulse rounded bg-[#dbe4f4] dark:bg-[#243149]" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-[#dbe4f4] dark:bg-[#243149]" />
                  <div className="h-4 w-3/4 animate-pulse rounded bg-[#dbe4f4] dark:bg-[#243149]" />
                </div>
                <div className="px-5">
                  <div className="h-52 w-full animate-pulse rounded bg-[#dbe4f4] dark:bg-[#243149]" />
                </div>
                <div className="px-5 pb-2 text-xs text-[#9CA1A9] dark:text-[#8e98a8]">
                  Tez orada yangilik qo'shiladi
                </div>
              </div>
            ))}
          </div>
          <Link className="flex w-full justify-center" to="/news">
            <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full rounded-lg border-[0.094rem] border-solid border-[#E7ECF5] font-bold text-[#074196] hover:bg-white/10 dark:border-[#ffffff1a] dark:text-white px-6 py-5 text-lg">
              Hammasini ko'rish
            </button>
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-40 left-0 hidden shrink-0 blur-2xl lg:flex">
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
              fill="#EF7F1A"
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
      <div className="pointer-events-none absolute -bottom-40 -right-32 hidden shrink-0 blur-2xl lg:flex">
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
              fill="#EF7F1A"
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
