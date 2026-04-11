import { type ComponentType } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";
import laser from "../../assets/images/home/5.jpeg";
import { RiDashboardLine } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";
import { PiPlantFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";
import { IoRocket } from "react-icons/io5";
import itcourse from "../../assets/images/home/itcourse.jpg";
import innovation from "../../assets/images/home/_1425232e-b3b9-4124-a2a3-68b248b33c59.jpg";
import consulting from "../../assets/images/home/consulting.jpg";
import { Link } from "react-router-dom";

type IconType = ComponentType<{ className?: string }>;

type ServiceTile = {
  title: string;
  to: string;
  icon: IconType;
  image?: string;
};

const SERVICE_TILES: ServiceTile[] = [
  {
    title: "Dasturiy ta'minot xizmatlari",
    to: "/services/industries/dasturiy-taminot",
    icon: HiOutlineComputerDesktop,
  },
  {
    title: "Ishlab chiqarish (FABLAB)",
    to: "/services/industries/fablab-ishlab-chiqarish",
    icon: MdMiscellaneousServices,
    image: laser,
  },
  {
    title: "O‘quv kurslari",
    to: "/services",
    icon: PiStudentFill,
  },
  {
    title: "Xalqaro aloqalar",
    to: "/services/industries/xalqaro-aloqalar",
    icon: RiGlobalFill,
  },
  {
    title: "Qishloq xo‘jaligi",
    to: "/services/industries/qishloq-xojaligi",
    icon: PiPlantFill,
  },
  {
    title: "Robototexnika",
    to: "/services/industries/qishloq-xojaligi",
    icon: FaRobot,
  },
  {
    title: "IT kurslari",
    to: "/services/industries/dasturiy-taminot",
    icon: FaComputer,
    image: itcourse,
  },
  {
    title: "Inkubatsiya",
    to: "/services/industries/startaplar-uchun-qollab-quvvatlash",
    icon: IoRocket,
    image: innovation,
  },
  {
    title: "Konsalting",
    to: "/services/industries/startaplar-uchun-qollab-quvvatlash",
    icon: PiStudentFill,
    image: consulting,
  },
];

const cardBase =
  "group flex h-full min-h-[160px] gap-3 rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-lg backdrop-blur-[10px] transition-all duration-300 dark:bg-[#08101b40] " +
  "hover:scale-[1.02] hover:cursor-pointer hover:shadow-[0_12px_40px_-12px_rgba(43,95,173,0.2)]";

function ServiceCard({ tile }: { tile: ServiceTile }) {
  const Icon = tile.icon;
  return (
    <Link to={tile.to} className={cardBase}>
      <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
      <div className="relative flex w-full min-w-0 flex-col justify-center gap-3">
        {tile.image ? (
          <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-[10px] sm:h-32">
            <img
              src={tile.image}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt=""
            />
          </div>
        ) : null}
        <div className="relative size-8 shrink-0">
          <Icon className="size-8 text-blue-800 dark:text-blue-400" />
        </div>
        <p className="text-left text-base font-bold leading-snug text-[#333333] dark:text-white">
          {tile.title}
        </p>
      </div>
    </Link>
  );
}

export default function Service() {
  return (
    <div className="w-full min-w-0">
      <div className="relative w-full">
        <div className="w-full max-w-none px-4 py-8 sm:px-6 lg:px-10 lg:pb-16 xl:px-14 2xl:px-16">
          <div className="relative mb-2.5 flex flex-col items-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(86,139,216,0.38)] via-50% to-transparent transition-colors" />
            <div className="pointer-events-none absolute top-0 left-0 h-28 w-full bg-section-header-bg-primary transition-colors dark:bg-section-header-bg-primary-dark" />
            <div className="mt-10 inline-flex flex-col items-center">
              <div className="inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#074196] transition-colors dark:text-[#568BD8] sm:text-sm">
                Texnopark xizmatlari
              </div>
              <div className="pointer-events-none -mt-10 h-12 w-full bg-primary-section-gradient transition-colors" />
              <div className="h-px w-full bg-primary-line-gradient transition-colors" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-5 lg:gap-8">
            <div className="w-full max-w-4xl px-2 text-center lg:max-w-5xl">
              <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-4xl">
                Yoshlar texnoparkida tashkil etilgan asosiy xizmatlar
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#5b6b88] dark:text-white/70 lg:text-base">
                Dasturlash, FABLAB, inkubatsiya va boshqa yo‘nalishlar — har
                bir kartochkadan batafsil sahifaga o‘ting.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 2xl:gap-7">
              {SERVICE_TILES.map((tile) => (
                <ServiceCard key={tile.title} tile={tile} />
              ))}
              <Link
                to="/services"
                className="flex min-h-[140px] flex-col items-start justify-center gap-3 rounded-2xl border border-white/10 bg-[#074196] px-5 py-5 font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:bg-[#2155A1] sm:col-span-2 lg:col-span-3 dark:bg-[#568BD840] dark:hover:bg-[#2155A1]"
              >
                <RiDashboardLine className="size-8 text-white dark:text-blue-200" />
                <div className="flex w-full items-center justify-between gap-2">
                  <p className="max-w-[220px] text-left text-base font-black leading-snug sm:text-lg">
                    Barcha xizmatlarni ko‘rish
                  </p>
                  <svg
                    className="shrink-0 text-[#9ec5ff]"
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth="1.5"
                      d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute left-32 top-1/3 hidden shrink-0 blur-2xl lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={462}
            height={474}
            viewBox="0 0 462 474"
            fill="none"
          >
            <g opacity="0.5" filter="url(#filter0_f_service_l)">
              <path
                d="M-70 214L166 202.636L202 -67H74.5L70 7V79.5L-70 214Z"
                fill="#568BD8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_service_l"
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
                  result="effect1_foregroundBlur_service_l"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="pointer-events-none absolute right-1/3 top-1/4 hidden shrink-0 blur-2xl lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={462}
            height={474}
            viewBox="0 0 462 474"
            fill="none"
          >
            <g opacity="0.5" filter="url(#filter0_f_service_r)">
              <path
                d="M-70 214L166 202.636L202 -67H74.5L70 7V79.5L-70 214Z"
                fill="#568BD8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_service_r"
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
                  result="effect1_foregroundBlur_service_r"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
