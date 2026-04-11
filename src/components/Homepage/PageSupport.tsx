import innox from "../../assets/images/home/1.jpeg";
import innox2 from "../../assets/images/home/2.jpeg";
import innox3 from "../../assets/images/home/3.jpeg";

const SUMMARY_TITLE = "Texnopark — barcha imkoniyatlar bir muhitda";
const SUMMARY_TEXT =
  "Erkin ish muhiti yoshlarni tahliliy fikrlash va innovatsion loyihalarga jalb qiladi; " +
  "zamonaviy ishlab chiqarish va texnika bo‘yicha amaliy bilim ularni real tajribaga bog‘laydi; " +
  "qulay joylashuv va infratuzilma esa startap va hamkorlik uchun barqaror asos beradi. " +
  "Shu uch yo‘nalish bitta texnopark ekotizimida birlashtirilgan.";

const features = [
  {
    title: "Erkin ish muhiti",
    description:
      "Yoshlarning tahliliy fikrlashini rivojlantirish, ilmiy-tadqiqot va innovatsion loyihalarga keng jalb qilish.",
    image: innox,
    alt: "Tajriba va innovatsiya",
    large: true,
  },
  {
    title: "Ishlab chiqarish",
    description:
      "Ishlab chiqarish va mashinani o‘rganish bo‘yicha yetakchi imkoniyatlar va amaliy mashg‘ulotlar.",
    image: innox2,
    alt: "Aqlli texnologiyalar",
    large: false,
  },
  {
    title: "Qulay joylashuv",
    description:
      "Biznesingiz rivojlanishi uchun ishonchli infratuzilma va qulay geografik joylashuv.",
    image: innox3,
    alt: "IT hamkor",
    large: false,
  },
] as const;

const cardShell =
  "group flex flex-col overflow-hidden rounded-3xl border border-[#e3ebf5] bg-white p-0 shadow-[0_10px_40px_-16px_rgba(43,95,173,0.18)] transition-all duration-300 " +
  "hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(43,95,173,0.22)] " +
  "dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]";

const cardBodyClass =
  "shrink-0 border-t border-[#e8edf5] bg-[#f7f9fc] px-4 py-4 sm:px-5 sm:py-4 dark:border-slate-600 dark:bg-slate-800/90";

export default function PageSupport() {
  const [main, ...side] = features;

  return (
    <div className=" relative">
      <div className=" px-5 py-8 lg:px-16 lg:pb-16">
        <div className="relative mb-2.5 flex flex-col items-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(86,139,216,0.38)] via-50% to-transparent transition-colors" />
          <div className="pointer-events-none absolute top-0 left-0 h-28 w-full bg-section-header-bg-secondary transition-colors dark:bg-section-header-bg-secondary-dark" />
          <div className="mt-10 inline-flex flex-col items-center">
            <div className="inline-flex rounded-3xl px-2.5 py-1 text-sm text-[#EF7F1A] transition-colors dark:text-[#EF7F1A]">
              TEXNOPARK QULAYLIKLAR
            </div>
            <div className="pointer-events-none -mt-10 h-12 w-full bg-secondary-section-gradient transition-colors" />
            <div className="h-px w-full bg-secondary-line-gradient transition-colors" />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10">
          <h1 className="text-center text-xl font-bold text-[#33445F] dark:text-white lg:text-4xl">
            Texnoparkda qanday qulayliklar mavjud?
          </h1>
          <p className="text-center text-xs text-[#5b6b88] dark:text-white/65 sm:text-sm">
            Asosiy qulayliklar bento-tor ko‘rinishda: katta vitrina va yon
            kartalar — bitta ekotizim haqida pastdagi xulosada jamlangan.
          </p>

          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2">
              <article
                className={`${cardShell} flex h-full min-h-[280px] lg:col-span-2 lg:row-span-2 lg:min-h-[420px]`}
              >
                <div className="relative min-h-[220px] w-full flex-1 basis-0 overflow-hidden">
                  <img
                    className="absolute inset-0 size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    src={main.image}
                    alt={main.alt}
                  />
                </div>
                <div className={cardBodyClass}>
                  <h2 className="text-lg font-bold text-[#33445F] dark:text-white sm:text-xl lg:text-2xl">
                    {main.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6b88] dark:text-white/75">
                    {main.description}
                  </p>
                </div>
              </article>

              {side.map((item) => (
                <article
                  key={item.title}
                  className={`${cardShell} min-h-0 lg:col-span-2 lg:h-full`}
                >
                  <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-52">
                    <img
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      src={item.image}
                      alt={item.alt}
                    />
                  </div>
                  <div className={cardBodyClass}>
                    <h2 className="text-base font-bold text-[#33445F] dark:text-white sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-[#5b6b88] dark:text-white/75 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}

              <div className="lg:col-span-4">
                <div className="overflow-hidden rounded-3xl border border-[#d4e0f2] bg-white shadow-[0_14px_44px_-14px_rgba(43,95,173,0.25)] dark:border-slate-600 dark:bg-slate-900">
                  <div className="grid grid-cols-3 gap-px bg-[#e3ebf5] dark:bg-slate-700">
                    <img
                      className="aspect-[4/3] w-full object-cover object-center"
                      src={innox}
                      alt="Erkin ish muhiti"
                    />
                    <img
                      className="aspect-[4/3] w-full object-cover object-center"
                      src={innox2}
                      alt="Ishlab chiqarish"
                    />
                    <img
                      className="aspect-[4/3] w-full object-cover object-center"
                      src={innox3}
                      alt="Qulay joylashuv"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-[#2a3f63] via-[#3d5a8a] to-[#568BD8] px-5 py-5 sm:px-7 sm:py-6 dark:from-[#1a2740] dark:via-[#243552] dark:to-[#2d4a73]">
                    <h2 className="text-center text-lg font-bold text-white sm:text-left sm:text-xl">
                      {SUMMARY_TITLE}
                    </h2>
                    <p className="mt-2 text-center text-sm leading-relaxed text-white/95 sm:text-left">
                      {SUMMARY_TEXT}
                    </p>
                  </div>
                </div>
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
