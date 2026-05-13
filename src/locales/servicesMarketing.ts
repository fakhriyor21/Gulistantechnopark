import type { AppLocale } from "@/lib/i18n";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices, MdDeveloperMode, MdWeb } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import type { ComponentType } from "react";

export type ServiceMarketingCard = {
  id: string;
  title: string;
  description: string;
  slug: string;
};

export type ServicesMarketingStrings = {
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  djangoCardBlurb: string;
  staticCards: ServiceMarketingCard[];
};

const ICONS: ComponentType<{ className?: string }>[] = [
  BsFillRocketTakeoffFill,
  MdOutlineMiscellaneousServices,
  PiPlantFill,
  RiGlobalFill,
  FaComputer,
  MdDeveloperMode,
  FaPeopleArrows,
  MdWeb,
];

const UZ_CARDS: ServiceMarketingCard[] = [
  {
    id: "startap",
    title: "Startaplar",
    description:
      "G‘oyangizni haqiqatga aylantirish uchun inkubator, mentorlik va investorlar bilan bog‘lanish.",
    slug: "startaplar-uchun-qollab-quvvatlash",
  },
  {
    id: "fablab",
    title: "FABLAB",
    description: "3D printer, lazer kesish va prototiplash uchun zamonaviy texnik baza.",
    slug: "fablab-ishlab-chiqarish",
  },
  {
    id: "agro",
    title: "Qishloq xo‘jaligi",
    description: "Agro yo‘nalishda samaradorlikni oshirish uchun texnologik yechimlar.",
    slug: "qishloq-xojaligi",
  },
  {
    id: "xalqaro",
    title: "Xalqaro aloqalar",
    description: "Grantlar, hamkorlik va xalqaro bozorga chiqish bo‘yicha yordam.",
    slug: "xalqaro-aloqalar",
  },
  {
    id: "software",
    title: "Dasturiy ta’minot",
    description: "Veb, mobil va backend yechimlar orqali raqamli mahsulotlar yaratish.",
    slug: "dasturiy-taminot",
  },
  {
    id: "mobile",
    title: "Mobil ilovalar",
    description: "iOS va Android platformalari uchun zamonaviy ilovalar ishlab chiqish.",
    slug: "dasturiy-taminot",
  },
  {
    id: "it-consulting",
    title: "IT Konsalting",
    description: "Jarayonlarni tahlil qilish va raqamlashtirish bo‘yicha strategik maslahatlar.",
    slug: "dasturiy-taminot",
  },
  {
    id: "web",
    title: "Veb dasturlash",
    description: "Korporativ saytlar va veb-ilovalar: tezkor, qulay va moslashuvchan.",
    slug: "dasturiy-taminot",
  },
];

const EN_CARDS: ServiceMarketingCard[] = [
  {
    id: "startap",
    title: "Startups",
    description: "Incubation, mentoring and connections with investors to turn your idea into reality.",
    slug: "startaplar-uchun-qollab-quvvatlash",
  },
  {
    id: "fablab",
    title: "FABLAB",
    description: "Modern equipment for 3D printing, laser cutting and prototyping.",
    slug: "fablab-ishlab-chiqarish",
  },
  {
    id: "agro",
    title: "Agriculture",
    description: "Technology solutions to improve efficiency in agriculture.",
    slug: "qishloq-xojaligi",
  },
  {
    id: "xalqaro",
    title: "International relations",
    description: "Grants, partnerships and support for entering international markets.",
    slug: "xalqaro-aloqalar",
  },
  {
    id: "software",
    title: "Software",
    description: "Building digital products with web, mobile and backend solutions.",
    slug: "dasturiy-taminot",
  },
  {
    id: "mobile",
    title: "Mobile apps",
    description: "Modern applications for iOS and Android.",
    slug: "dasturiy-taminot",
  },
  {
    id: "it-consulting",
    title: "IT consulting",
    description: "Strategic advice on process analysis and digital transformation.",
    slug: "dasturiy-taminot",
  },
  {
    id: "web",
    title: "Web development",
    description: "Corporate websites and web apps: fast, convenient and flexible.",
    slug: "dasturiy-taminot",
  },
];

const RU_CARDS: ServiceMarketingCard[] = [
  {
    id: "startap",
    title: "Стартапы",
    description: "Инкубация, менторство и связи с инвесторами, чтобы воплотить идею в жизнь.",
    slug: "startaplar-uchun-qollab-quvvatlash",
  },
  {
    id: "fablab",
    title: "FABLAB",
    description: "Современная база для 3D-печати, лазерной резки и прототипирования.",
    slug: "fablab-ishlab-chiqarish",
  },
  {
    id: "agro",
    title: "Сельское хозяйство",
    description: "Технологические решения для повышения эффективности в агросекторе.",
    slug: "qishloq-xojaligi",
  },
  {
    id: "xalqaro",
    title: "Международные связи",
    description: "Гранты, партнёрства и поддержка при выходе на международные рынки.",
    slug: "xalqaro-aloqalar",
  },
  {
    id: "software",
    title: "Программное обеспечение",
    description: "Цифровые продукты на базе веб, мобильных и backend-решений.",
    slug: "dasturiy-taminot",
  },
  {
    id: "mobile",
    title: "Мобильные приложения",
    description: "Современные приложения для iOS и Android.",
    slug: "dasturiy-taminot",
  },
  {
    id: "it-consulting",
    title: "IT-консалтинг",
    description: "Стратегические консультации по анализу процессов и цифровизации.",
    slug: "dasturiy-taminot",
  },
  {
    id: "web",
    title: "Веб-разработка",
    description: "Корпоративные сайты и веб-приложения: быстро, удобно и гибко.",
    slug: "dasturiy-taminot",
  },
];

export const servicesMarketing: Record<AppLocale, ServicesMarketingStrings> = {
  uz: {
    heroEyebrow: "Xizmat yo'nalishlari",
    heroTitle: "Innovatsion xizmatlar",
    heroIntro:
      "Tajribali jamoamiz texnoparkda texnologik taraqqiyot va innovatsiyalar markazida yechimlar taklif qiladi. Har bir g‘oya — kelajakdagi yutuqlar sari yo‘l.",
    djangoCardBlurb: "Ma'lumotlar Django admin orqali yangilanadi. Batafsil sahifaga o'ting.",
    staticCards: UZ_CARDS,
  },
  en: {
    heroEyebrow: "Service areas",
    heroTitle: "Innovative services",
    heroIntro:
      "Our experienced team offers solutions focused on technological development and innovation at the technopark. Every idea is a step toward future success.",
    djangoCardBlurb: "Details are updated in Django admin. Open the detail page.",
    staticCards: EN_CARDS,
  },
  ru: {
    heroEyebrow: "Направления услуг",
    heroTitle: "Инновационные услуги",
    heroIntro:
      "Наша команда предлагает решения в центре технологического развития и инноваций технопарка. Каждая идея — шаг к будущим достижениям.",
    djangoCardBlurb: "Данные обновляются в Django admin. Перейдите на страницу услуги.",
    staticCards: RU_CARDS,
  },
};

export function servicesMarketingDisplayItems(lang: AppLocale) {
  const m = servicesMarketing[lang];
  return m.staticCards.map((c, i) => ({
    ...c,
    icon: ICONS[i % ICONS.length]!,
    floatDelay: (i % 8) * 0.12,
  }));
}
