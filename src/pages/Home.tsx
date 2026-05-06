import { Button } from "../components/ui/button";

import About from "../components/About/About";
import Service from "../components/Service/Service";
import PageSupport from "../components/Homepage/PageSupport";
import { useTheme } from "../components/provider/theme-provider";
import NewsPage from "../components/News/NewsPage";
import Hero from "../components/Hero/Hero";
import OpenVideo from "../components/OpenVideo/OpenVideo";



export default function Home() {
  const { theme } = useTheme();
  let bgImage =
    "linear-gradient(0deg, rgba(103,144,205,1) 0%, rgba(9,66,150,1) 100%)";
  if (theme === "dark") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bgImage =
      "linear-gradient(0deg, rgba(54,65,85,1) 0%, rgba(8,16,28,1) 100%)";
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bgImage =
      "linear-gradient(0deg, rgba(103,144,205,1) 0%, rgba(9,66,150,1) 100%)";
  }
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="">
      <div className="pointer-events-none absolute hidden rotate-180 blur-2xl lg:flex animate-pulse">
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
      <div
        className=" h-screen "
        style={{
          background: bgImage,
        }}
      >
        {/* Background Video */}

        {/* Content */}
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 h-full">
          <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 px-6 max-lg:px-0">
            <div>
              <h1 className="mb-4 text-2xl font-poppins font-bold leading-none tracking-tight max-lg:text-center max-lg:text-3xl md:text-2xl lg:text-6xl text-white">
                INNOVATSION RIVOJLANISH AGENTLIGI HUZURIDAGI
                <br />
                <span className="text-blue-200">
                  GULISTON YOSHLAR TEXNOPARKI
                </span>
              </h1>
              <p className="text-lg font-semibold text-white italic">
                Guliston Yoshlar Texnoparki — ilg‘or texnologiyalar, yaratgan
                g‘oyalar va ertangi kunni shakllantiruvchi avlodning markazi!
              </p>
              <hr className="mt-5 mb-5 dark:border-white/20" />
              <div className="flex gap-5">
                <OpenVideo />

                <Button
                  variant={"secondary"}
                  className="gap-2 text-blue-500"
                  onClick={scrollToAbout}
                >
                  Batafsil
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Hero />
            </div>
          </div>
        </div>
      </div>
      <section id="about">
        <div className="w-full flex justify-center dark:bg-[#08101B]">
          <About />
        </div>
      </section>

      <div className="w-full flex justify-center dark:bg-[#08101B]">
        <PageSupport />
      </div>
      <div className="w-full flex justify-center dark:bg-[#08101B] ">
        <Service />
      </div>
      <div className="w-full  flex justify-center dark:bg-[#08101B] ">
        <NewsPage />
      </div>
    </div>
  );
}
