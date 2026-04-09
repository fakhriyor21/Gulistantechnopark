import { Link } from "react-router-dom";
import flagUzb from "../assets/images/hero/flag-uzb.png";
import innoweek from "../assets/images/hero/innoweek.jpg";
import Quote from "../components/Quote/Quote";
import CountdownTimer from "../components/Countdown/CountdownTimer";

export default function Innoweek() {
  const targetDate = new Date("2024-11-13T23:59:59");
  return (
    <div className="pt-32   dark:bg-[#08101B] ">
      <div>
        <CountdownTimer targetDate={targetDate} />
      </div>

      <div className="flex 10 gap-10 pt-5 text-center lg:pt-20 lg:text-left p-8">
        <div className="flex w-full flex-col items-center gap-4 lg:items-start 2xl:w-2/3">
          <h1 className="text-2xl font-bold text-[#33445F] dark:text-white lg:text-4xl lg:leading-snug xl:text-[2.688rem]">
            14-16-noyabr kunlari bo‘lib o‘tadigan “Innoweek-2024” xalqaro
            innovatsion g‘oyalar haftaligiga marhamat!
          </h1>
          <p className="mb-3.5 lg:text-lg text-justify">
            Xalqaro innovatsion g‘oyalar haftaligi — “Innoweek.uz” respublikada
            innovatsion rivojlanishni jadallashtirish, iqtisodiyotning barcha
            tarmoqlarida innovatsiyalar va texnologiyalarni keng tatbiq qilish,
            inson kapitalini, ilm-fan va innovatsiya sohalarini rivojlantirish
            maqsadida 2018-yildan buyon o‘tkazib kelinmoqda. O‘tgan davr
            mobaynida Prezident Shavkat Mirziyoyev rahbarligida rivojlanib,
            Markaziy Osiyoda ilg‘or innovatsiyalarni namoyish qilish va global
            hamkorlikni rivojlantirish uchun eng yirik maydonga aylandi. Tadbir
            har yili yetakchi mahalliy va xalqaro kompaniyalar, investorlar,
            diplomatlar, tadbirkorlar, olimlar, startaplar, texnologiya
            ekspertlari va davlat idoralari vakillarini bir davrada
            birlashtiradi. Shuningdek, innovatsion sektor yetakchilari,
            hamkorlik va investitsiyalarga oid soha egalari bilan muloqot qilish
            uchun ideal platforma.
          </p>
          <Link
            to={"https://www.innoweek.uz/"}
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md border border-solid border-[#EF7F1A] bg-[#EF7F1A] font-semibold text-white px-4 py-3 text-sm w-full sm:w-1/2 xl:w-1/3"
          >
            <button>Ko'proq ma'lumot olish</button>
          </Link>
        </div>
        <div className="relative hidden h-[500px] w-full lg:flex justify-end ">
          <img
            className=" shrink-0 rounded-2xl bg-no-repeat "
            src={flagUzb}
            alt="background-2"
          />
        </div>
      </div>
      <div className=" p-10">
        <img
          className=" shrink-0 rounded-2xl bg-no-repeat "
          src={innoweek}
          alt="background-2"
        />
      </div>
      <div className="p-10">
        <Quote
          title={
            "InnoWeek haftaligi doirasida innovatsion maxsulotlardan foydalangan holda texnologik yechimlarni ishlab chiqish boʻyicha har yili oʻtkaziladigan tadbir. Turli xil muammolarga innovatsion yechimlar!"
          }
        />
      </div>
    </div>
  );
}
