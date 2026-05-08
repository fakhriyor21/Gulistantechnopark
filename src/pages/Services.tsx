import { useEffect, useRef, useState, type ComponentType, type CSSProperties, type ReactNode } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices, MdDeveloperMode, MdWeb } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { collection, onSnapshot } from "firebase/firestore";
import { canUseFirebase } from "@/services/firebaseCms";
import { getServiceIcon } from "@/data/serviceIconMap";
import { db } from "@/firebase/config";

type ServiceIcon = ComponentType<{ className?: string }>;

type LocalServiceItem = {
  title: string;
  description: string;
  slug: string;
  icon: ServiceIcon;
  floatDelay: number;
};

const FALLBACK_SERVICES: LocalServiceItem[] = [
  {
    title: "Startaplar",
    description:
      "G‘oyangizni haqiqatga aylantirish uchun inkubator, mentorlik va investorlar bilan bog‘lanish — startap ekotizimidagi to‘liq qo‘llab-quvvatlash.",
    slug: "startaplar-uchun-qollab-quvvatlash",
    icon: BsFillRocketTakeoffFill,
    floatDelay: 0,
  },
  {
    title: "FABLAB",
    description:
      "3D printer, lazer kesish va prototiplash: zamonaviy uskunalar va mutaxassislar yordamida loyihangizni tezda sinovdan o‘tkazing.",
    slug: "fablab-ishlab-chiqarish",
    icon: MdOutlineMiscellaneousServices,
    floatDelay: 0.4,
  },
  {
    title: "Qishloq xo‘jaligi",
    description:
      "Agro texnologiyalar va ishlab chiqarishni optimallashtirish — qishloq xo‘jaligida innovatsiyalarni joriy qilish bo‘yicha yordam.",
    slug: "qishloq-xojaligi",
    icon: PiPlantFill,
    floatDelay: 0.8,
  },
  {
    title: "Xalqaro aloqalar",
    description:
      "Xalqaro hamkorlik, grantlar va tajriba almashinuvi — texnologik rivojlanish va yangi bozorlarni ochish imkoniyatlari.",
    slug: "xalqaro-aloqalar",
    icon: RiGlobalFill,
    floatDelay: 1.2,
  },
  {
    title: "Dasturiy ta’minot",
    description:
      "Backend va frontend, integratsiyalar va qo‘llab-quvvatlash — biznes maqsadlaringizga mos barqaror dasturiy yechimlar.",
    slug: "dasturiy-taminot",
    icon: FaComputer,
    floatDelay: 0.2,
  },
  {
    title: "Mobil ilovalar",
    description:
      "iOS va Android uchun zamonaviy interfeys va API integratsiyasi — raqobatbardosh mobil mahsulot ishlab chiqish.",
    slug: "dasturiy-taminot",
    icon: MdDeveloperMode,
    floatDelay: 0.6,
  },
  {
    title: "IT Konsalting",
    description:
      "Raqamlashtirish strategiyasi va axborot texnologiyalaridan samarali foydalanish — jarayonlarni tahlil qilish va yaxshilash.",
    slug: "dasturiy-taminot",
    icon: FaPeopleArrows,
    floatDelay: 1,
  },
  {
    title: "Veb dasturlash",
    description:
      "Korporativ saytlar va veb-ilovalar: tez yuklanish, qulay interfeys va mobil qurilmalarga moslashgan dizayn.",
    slug: "dasturiy-taminot",
    icon: MdWeb,
    floatDelay: 1.4,
  },
];

const MAX_TILT = 7;

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

type DisplayItem = LocalServiceItem & { key: string };

export default function Services() {
  const [items, setItems] = useState<DisplayItem[]>(() =>
    FALLBACK_SERVICES.map((s, i) => ({ ...s, key: `fb-${i}` })),
  );

  useEffect(() => {
    if (!canUseFirebase()) return;
    const fallback = FALLBACK_SERVICES.map((s, i) => ({ ...s, key: `fb-${i}` }));

    const unsub = onSnapshot(collection(db(), "services"), (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as ServiceItem,
      }));

      const sorted = docs.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
      if (sorted.length === 0) {
        setItems(fallback);
        return;
      }

      const mapped = sorted.map(({ id, data }) => ({
        title: data.title,
        description: data.description,
        slug: data.linkPath.replace(/^industries\//, ""),
        icon: getServiceIcon(data.iconId),
        floatDelay: (data.order ?? 0) * 0.12,
        key: id,
      }));
      setItems(mapped);
    });

    return () => unsub();
  }, []);

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
          Xizmatlar
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
                key={item.key}
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
                    className={cn(
                      "inline-flex h-12 w-full items-center justify-center rounded-[10px] border text-sm font-semibold transition-colors",
                      "border-[#074196]/35 bg-[#074196]/8 text-[#074196] hover:border-[#074196] hover:bg-[#074196] hover:text-white",
                      "dark:border-sky-400/35 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:border-violet-300/80 dark:hover:bg-violet-500/45 dark:hover:text-white",
                    )}
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
