import { useRef, type ComponentType, type CSSProperties, type ReactNode } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices, MdDeveloperMode, MdWeb } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

type ServiceIcon = ComponentType<{ className?: string }>;
type DisplayItem = {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: ServiceIcon;
  floatDelay: number;
};

const MAX_TILT = 7;

const STATIC_SERVICES: DisplayItem[] = [
  {
    id: "startap",
    title: "Startaplar",
    description:
      "G‘oyangizni haqiqatga aylantirish uchun inkubator, mentorlik va investorlar bilan bog‘lanish.",
    slug: "startaplar-uchun-qollab-quvvatlash",
    icon: BsFillRocketTakeoffFill,
    floatDelay: 0,
  },
  {
    id: "fablab",
    title: "FABLAB",
    description: "3D printer, lazer kesish va prototiplash uchun zamonaviy texnik baza.",
    slug: "fablab-ishlab-chiqarish",
    icon: MdOutlineMiscellaneousServices,
    floatDelay: 0.3,
  },
  {
    id: "agro",
    title: "Qishloq xo‘jaligi",
    description: "Agro yo‘nalishda samaradorlikni oshirish uchun texnologik yechimlar.",
    slug: "qishloq-xojaligi",
    icon: PiPlantFill,
    floatDelay: 0.6,
  },
  {
    id: "xalqaro",
    title: "Xalqaro aloqalar",
    description: "Grantlar, hamkorlik va xalqaro bozorga chiqish bo‘yicha yordam.",
    slug: "xalqaro-aloqalar",
    icon: RiGlobalFill,
    floatDelay: 0.9,
  },
  {
    id: "software",
    title: "Dasturiy ta’minot",
    description: "Veb, mobil va backend yechimlar orqali raqamli mahsulotlar yaratish.",
    slug: "dasturiy-taminot",
    icon: FaComputer,
    floatDelay: 0.2,
  },
  {
    id: "mobile",
    title: "Mobil ilovalar",
    description: "iOS va Android platformalari uchun zamonaviy ilovalar ishlab chiqish.",
    slug: "dasturiy-taminot",
    icon: MdDeveloperMode,
    floatDelay: 0.45,
  },
  {
    id: "it-consulting",
    title: "IT Konsalting",
    description: "Jarayonlarni tahlil qilish va raqamlashtirish bo‘yicha strategik maslahatlar.",
    slug: "dasturiy-taminot",
    icon: FaPeopleArrows,
    floatDelay: 0.75,
  },
  {
    id: "web",
    title: "Veb dasturlash",
    description: "Korporativ saytlar va veb-ilovalar: tezkor, qulay va moslashuvchan.",
    slug: "dasturiy-taminot",
    icon: MdWeb,
    floatDelay: 1,
  },
];

function ServiceTiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    let rx = -py * 2 * MAX_TILT;
    let ry = px * 2 * MAX_TILT;
    rx = Math.max(-MAX_TILT, Math.min(MAX_TILT, rx));
    ry = Math.max(-MAX_TILT, Math.min(MAX_TILT, ry));
    el.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.04)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <article
      ref={ref}
      className={cn(
        "flex h-full flex-col rounded-[18px] border p-7 backdrop-blur-[16px] [transform-style:preserve-3d]",
        "border-[#d4e0f0] bg-white/85 shadow-[0_12px_40px_-8px_rgba(43,95,173,0.12)]",
        "dark:border-white/[0.12] dark:bg-white/[0.06] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
        className,
      )}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </article>
  );
}

export default function Services() {
  const items = STATIC_SERVICES;

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-x-hidden bg-fixed text-slate-800",
        "[background-image:radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(86,139,216,0.2)_0%,transparent_55%),linear-gradient(180deg,#e8f0fb_0%,#f7f9fc_45%,#ffffff_100%)]",
        "dark:text-[#e8edf5] dark:[background-image:radial-gradient(ellipse_120%_80%_at_50%_-20%,#152238_0%,transparent_55%),linear-gradient(180deg,#0a0f1f_0%,#03050b_100%)]",
      )}
    >
      <section className="mx-auto max-w-2xl px-5 pb-4 pt-20 text-center sm:px-6 lg:px-8 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#074196] dark:text-sky-400 sm:text-sm">
          Xizmat yo'nalishlari
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#1e293b] dark:text-white md:text-3xl">
          Innovatsion xizmatlar
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#5b6b88] dark:text-slate-400 md:text-base">
          Tajribali jamoamiz texnoparkda texnologik taraqqiyot va innovatsiyalar markazida yechimlar taklif
          qiladi. Har bir g‘oya — kelajakdagi yutuqlar sari yo‘l.
        </p>
      </section>

      <div
        id="xizmatlar"
        className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 lg:px-8"
        style={{ perspective: "1200px" } as CSSProperties}
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="services-page-float h-full"
                style={
                  {
                    "--services-float-delay": `${item.floatDelay}s`,
                  } as CSSProperties
                }
              >
                <ServiceTiltCard className="items-stretch">
                  <span
                    className="mb-4 inline-flex text-[2.75rem] text-[#074196] dark:text-sky-400 dark:drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                    aria-hidden
                  >
                    <Icon className="size-[1em]" />
                  </span>
                  <h2 className="text-lg font-semibold text-[#33445F] dark:text-white">{item.title}</h2>
                  <p className="mb-5 mt-2 flex-1 text-sm leading-relaxed text-[#5b6b88] dark:text-slate-400">
                    {item.description}
                  </p>
                  <Link
                    to={`/services/industries/${item.slug}`}
                    className="inline-flex h-12 w-full items-center justify-center rounded-[10px] border border-[#074196]/35 bg-[#074196]/8 text-sm font-semibold text-[#074196] transition hover:border-[#074196] hover:bg-[#074196] hover:text-white"
                  >
                    Batafsil
                  </Link>
                </ServiceTiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
