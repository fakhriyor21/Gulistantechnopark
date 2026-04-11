import flagUzb from "../assets/images/hero/flag-uzb.png";
import innoweek from "../assets/images/hero/innoweek.jpg";
import Quote from "../components/Quote/Quote";
import CountdownTimer from "../components/Countdown/CountdownTimer";
import { PageContent, PageHero } from "../components/Layout/PageLayout";

export default function Innoweek() {
  const targetDate = new Date("2024-11-13T23:59:59");
  return (
    <div className="min-h-screen dark:bg-[#08101B]">
      <div className="pt-24">
        <CountdownTimer targetDate={targetDate} />
      </div>

      <PageHero
        eyebrow="INNOWEEK"
        title="Xalqaro innovatsion g‘oyalar haftaligi"
        subtitle="14–16-noyabr kunlari bo‘lib o‘tadigan tadbirga marhamat. Innovatsiya, texnologiya va hamkorlik uchun platforma."
      />

      <PageContent className="pt-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex w-full flex-col gap-4 lg:w-2/3">
            <p className="text-justify text-sm leading-relaxed text-[#33445F] dark:text-white/85 md:text-base">
              Xalqaro innovatsion g‘oyalar haftaligi — “Innoweek.uz”
              respublikada innovatsion rivojlanishni jadallashtirish, iqtisodiyotning
              barcha tarmoqlarida innovatsiyalar va texnologiyalarni keng tatbiq
              qilish, inson kapitalini, ilm-fan va innovatsiya sohalarini
              rivojlantirish maqsadida 2018-yildan buyon o‘tkazib kelinmoqda.
              O‘tgan davr mobaynida Prezident Shavkat Mirziyoyev rahbarligida
              rivojlanib, Markaziy Osiyoda ilg‘or innovatsiyalarni namoyish qilish
              va global hamkorlikni rivojlantirish uchun eng yirik maydonga aylandi.
              Tadbir har yili yetakchi mahalliy va xalqaro kompaniyalar,
              investorlar, diplomatlar, tadbirkorlar, olimlar, startaplar,
              texnologiya ekspertlari va davlat idoralari vakillarini bir
              davrada birlashtiradi.
            </p>
            <a
              href="https://www.innoweek.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-md items-center justify-center rounded-xl border border-solid border-[#EF7F1A] bg-[#EF7F1A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e06f0a] sm:w-auto"
            >
              Ko‘proq ma&apos;lumot olish
            </a>
          </div>
          <div className="relative hidden w-full shrink-0 justify-end lg:flex lg:w-1/3">
            <img
              className="max-h-[420px] w-full max-w-md shrink-0 rounded-2xl object-cover object-top shadow-lg"
              src={flagUzb}
              alt=""
            />
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/60 shadow-md dark:border-white/10">
          <img
            className="w-full object-cover"
            src={innoweek}
            alt="Innoweek"
          />
        </div>

        <div className="mt-12">
          <Quote
            title={
              "InnoWeek haftaligi doirasida innovatsion mahsulotlardan foydalangan holda texnologik yechimlarni ishlab chiqish boʻyicha har yili oʻtkaziladigan tadbir. Turli xil muammolarga innovatsion yechimlar!"
            }
          />
        </div>
      </PageContent>
    </div>
  );
}
