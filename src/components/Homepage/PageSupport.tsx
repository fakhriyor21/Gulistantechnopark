
import innox from "../../assets/images/home/1.jpeg"
import innox2 from "../../assets/images/home/2.jpeg"
import innox3 from "../../assets/images/home/3.jpeg"

export default function PageSupport() {
  return (
    <div className=" relative">
      <div className=" px-5 py-8 lg:px-16 lg:pb-16">
        <div className="relative mb-2.5 flex flex-col items-center">
          <div className="w-full transition-colors h-px bg-gradient-to-r from-transparent via-[rgba(86,139,216,0.38)] via-50% to-transparent" />
          <div className="absolute top-0 left-0 w-full transition-colors h-28 pointer-events-none bg-section-header-bg-secondary dark:bg-section-header-bg-secondary-dark" />
          <div className="mt-10 inline-flex flex-col items-center">
            <div className="px-2.5 py-1 rounded-3xl transition-colors inline-flex text-sm text-[#EF7F1A] dark:text-[#EF7F1A]">
               TEXNOPARK QULAYLIKLAR
            </div>
            <div className="w-full transition-colors h-12 -mt-10 pointer-events-none bg-secondary-section-gradient" />
            <div className="h-px transition-colors w-full bg-secondary-line-gradient" />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10">
          <h1 className="text-center text-xl font-bold text-[#33445F] dark:text-white lg:text-4xl">
            Texnoparkda qanday qulayliklar mavjud?
          </h1>
          <div className="mx-auto my-0 flex w-full flex-col items-center justify-center gap-5 xl:flex-row">
            <div
              className="relative w-full"
              style={{ minWidth: 280, maxWidth: 600 }}
            >
              <div className="absolute left-[5px] z-[1] flex flex-col gap-2.5 top-[315px]">
                <p
                  className="text-lg font-bold leading-[26px]"
                  style={{ width: 200 }}
                >
                 Erkin ish muhiti
                </p>
                <p
                  className="line-clamp-2 break-words text-xs leading-[18px] false"
                  style={{ width: 250 }}
                >
                  
                  Yoshlarning tahliliy fikrlashini rivojlantirish, ilmiy-tadqiqot va innovatsion loyihalarga keng jalb qilish
                </p>
              </div>
              <div className="choose-us-custom-filter w-full">
                <img
                  className="h-[393px] w-full object-cover object-center rounded-3xl"
                  src={innox}
                  alt="Tajriba va innovatsiya"
                  style={{
                    clipPath:
                      "polygon(0px 75%, 49% 75%, 49% 88%, 77% 88%, 77% 100%, 100% 100%, 100% 0px, 0px 0px)",
                  }}
                />
                <svg
                  className="invisible absolute size-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="flt_tag">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation={10}
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="flt_tag"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="flt_tag"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              className="relative w-full"
              style={{ minWidth: 640, maxWidth: "none" }}
            >
              <div className="absolute left-[5px] z-[1] flex flex-col gap-2.5 top-[5px]">
                <p
                  className="text-lg font-bold leading-[26px]"
                  style={{ width: 250 }}
                >
                  Ishlab chiqarish 
                </p>
                <p
                  className="line-clamp-2 break-words text-xs leading-[18px] xl:line-clamp-3"
                  style={{ width: 200 }}
                >
                  Ishlab chiqarish va mashinani o'rganish bo'yicha yetakchilar.
                </p>
              </div>
              <div className="choose-us-custom-filter w-full">
                <img
                  className="h-[393px] w-full object-cover object-center rounded-3xl"
                  src={innox2}
                  alt="Aqlli texnologiyalar"
                  style={{
                    clipPath:
                      "polygon(100% 0px, 100% 100%, 0px 100%, 0px 28%, 35% 28%, 35% 14%, 45% 14%, 45% 0px)",
                  }}
                />
                <svg
                  className="invisible absolute size-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="flt_tag">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation={10}
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="flt_tag"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="flt_tag"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              className="relative w-full"
              style={{ minWidth: 280, maxWidth: 600 }}
            >
              <div className="absolute left-[5px] z-[1] flex flex-col gap-2.5 top-[315px] ">
                <p
                  className="text-lg font-bold leading-[26px]"
                  style={{ width: 200 }}
                >
                  Qulay joylashuv
                </p>
                <p
                  className="line-clamp-2 break-words text-xs leading-[18px] false"
                  style={{ width: 250 }}
                >
                  Biznesingiz rivojlanishi uchun ishonchli qulay joylashuv.
                </p>
              </div>
              <div className="choose-us-custom-filter w-full">
                <img
                  className="h-[393px] w-full object-cover object-center  rounded-3xl"
                  src={innox3}
                  alt="IT hamkor"
                  style={{
                    clipPath:
                      "polygon(0px 75%, 49% 75%, 49% 88%, 77% 88%, 77% 100%, 100% 100%, 100% 0px, 0px 0px)",
                  }}
                />
                <svg
                  className="invisible absolute size-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="flt_tag">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation={10}
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="flt_tag"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="flt_tag"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-32 left-0 hidden shrink-0 translate-y-10 -rotate-90 blur-2xl lg:flex">
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
