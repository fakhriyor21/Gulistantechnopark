import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <div className="dark:bg-[#08101B] ">
      <div className=" pt-24 flex flex-col justify-center items-center">
        <div className="max-w-screen-2xl flex w-full flex-col items-center justify-between gap-5 pt-5 text-center xl:flex-row xl:gap-7 xl:pt-10 xl:text-left">
          <h1 className="w-full text-2xl font-bold text-[#33445F] dark:text-white xl:w-2/3 xl:text-[2.625rem] xl:leading-[3.825rem]">
            Ko'p yillik tajribaga ega jamoamiz sizga innovatsion xizmatlarni
            taklif qiladi.
          </h1>
          <p className=" w-full pt-0 text-sm text-[#8F98A7] dark:text-white xl:w-2/3 xl:pt-5 xl:text-lg">
            Bugungi kunda biz texnoparkda texnologik taraqqiyot va
            innovatsiyalar markazida turibmiz. Bizning asosiy maqsadimiz — yangi
            g‘oyalarni rivojlantirish, kelajak avlodiga zamonaviy texnologik
            sharoitlarni taqdim etish va yurtimizning innovatsion salohiyatini
            kuchaytirishdir. Har bir mijozimizning g‘oyasi biz uchun kelajakdagi
            katta yutuqlar sari yo‘l bo‘lib xizmat qiladi.
          </p>
        </div>
        <div className="container mb-[3.75rem] grid w-full grid-cols-1 gap-5 pt-5 md:grid-cols-2 md:pt-12 xl:grid-cols-4">
          <div className="flex flex-col items-center rounded-xl py-5 px-4 bg-white dark:bg-[#081e3f4d] border border-[#e7ecf540] dark:border-[#ffffff0f] shadow-[0_2px_45px_0_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
            <BsFillRocketTakeoffFill className="text-4xl dark:text-blue-500  text-blue-600" />
            <p className="mt-5 text-center font-bold text-[#33445F] dark:text-white">
              Startaplar uchun qo‘llab-quvvatlash va inkubatsiya xizmatlari
            </p>
            <p className="mb-5 mt-2 text-center text-sm font-light text-[#33445fcc] dark:text-white">
              G‘oyangizni haqiqatga aylantirish uchun kerakli resurslar va
              tajriba.
            </p>
            <div className="flex-1" />
            <Link
              className="flex h-[3.063rem] w-full items-center justify-center rounded-lg border hover:cursor-pointer hover:translate-y-1 border-blue-900 bg-blue-800 font-semibold text-white"
              to="industries/startaplar-uchun-qollab-quvvatlash"
            >
              Batafsil
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-xl py-5 px-4 bg-white dark:bg-[#081e3f4d] border border-[#e7ecf540] dark:border-[#ffffff0f] shadow-[0_2px_45px_0_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
            <MdOutlineMiscellaneousServices className="text-4xl dark:text-blue-500  text-blue-600" />
            <p className="mt-5 text-center font-bold text-[#33445F] dark:text-white">
              FABLAB - ishlab chiqarish
            </p>
            <p className="mb-5 mt-2 text-center text-sm font-light text-[#33445fcc] dark:text-white">
              bu zamonaviy ishlab chiqarish markazi bo‘lib, texnologik
              asbob-uskunalar va yuqori darajadagi bilimlarga ega bo‘lgan
              mutaxassislar bilan ta’minlangan.
            </p>
            <div className="flex-1" />
            <Link
              className="flex h-[3.063rem] w-full items-center justify-center rounded-lg border hover:cursor-pointer hover:translate-y-1 border-blue-900 bg-blue-800 font-semibold text-white"
              to="industries/fablab-ishlab-chiqarish"
            >
              Batafsil
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-xl py-5 px-4 bg-white dark:bg-[#081e3f4d] border border-[#e7ecf540] dark:border-[#ffffff0f] shadow-[0_2px_45px_0_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
            <PiPlantFill className="text-4xl dark:text-blue-500  text-blue-600" />
            <p className="mt-5 text-center font-bold text-[#33445F] dark:text-white">
              Qishloq xo'jaligi
            </p>
            <p className="mb-5 mt-2 text-center text-sm font-light text-[#33445fcc] dark:text-white">
              Qishloq xo‘jaligi sohasida ham yangi texnologiyalarni joriy qilish
              va ishlab chiqarish jarayonlarini optimallashtirishga xizmat
              qiladi.
            </p>
            <div className="flex-1" />
            <Link
              className="flex h-[3.063rem] w-full items-center justify-center rounded-lg border hover:cursor-pointer hover:translate-y-1 border-blue-900 bg-blue-800 font-semibold text-white"
              to="industries/qishloq-xojaligi"
            >
              Batafsil
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-xl py-5 px-4 bg-white dark:bg-[#081e3f4d] border border-[#e7ecf540] dark:border-[#ffffff0f] shadow-[0_2px_45px_0_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
            <RiGlobalFill className="text-4xl dark:text-blue-500  text-blue-600" />
            <p className="mt-5 text-center font-bold text-[#33445F] dark:text-white">
              Xalqaro aloqalar
            </p>
            <p className="mb-5 mt-2 text-center text-sm font-light text-[#33445fcc] dark:text-white">
              Xalqaro miqyosdagi innovatsiyalar va texnologik rivojlanishni
              qo‘llab-quvvatlash uchun keng imkoniyatlar yaratadi.
            </p>
            <div className="flex-1" />
            <Link
              className="flex h-[3.063rem] w-full items-center justify-center rounded-lg border hover:cursor-pointer hover:translate-y-1 border-blue-900 bg-blue-800 font-semibold text-white"
              to="industries/xalqaro-aloqalar"
            >
              Batafsil
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-xl py-5 px-4 bg-white dark:bg-[#081e3f4d] border border-[#e7ecf540] dark:border-[#ffffff0f] shadow-[0_2px_45px_0_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
            <FaComputer className="text-4xl dark:text-blue-500  text-blue-600" />
            <p className="mt-5 text-center font-bold text-[#33445F] dark:text-white">
              Dasturiy ta'minotni ishlab chiqish
            </p>
            <p className="mb-5 mt-2 text-center text-sm font-light text-[#33445fcc] dark:text-white">
              Bizning dasturiy ta'minotni ishlab chiqish xizmatlari
              kompaniyalarga biznes maqsadlariga erishish uchun innovatsion va
              samarali yechimlarni yaratishda yordam beradi.
            </p>
            <div className="flex-1" />
            <Link
              className="flex h-[3.063rem] w-full items-center justify-center rounded-lg border hover:cursor-pointer hover:translate-y-1 border-blue-900 bg-blue-800 font-semibold text-white"
              to="industries/dasturiy-taminot"
            >
              Batafsil
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-xl py-5 px-4 bg-white dark:bg-[#081e3f4d] border border-[#e7ecf540] dark:border-[#ffffff0f] shadow-[0_2px_45px_0_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
            <MdDeveloperMode className="text-4xl dark:text-blue-500  text-blue-600" />
            <p className="mt-5 text-center font-bold text-[#33445F] dark:text-white">
              Mobil ilovalarni ishlab chiqish
            </p>
            <p className="mb-5 mt-2 text-center text-sm font-light text-[#33445fcc] dark:text-white">
              Raqamli davrda raqobatbardoshligingizni oshiruvchi biznesingiz
              uchun innovatsion mobil ilovalar yaratamiz
            </p>
            <div className="flex-1" />
            <Link
              className="flex h-[3.063rem] w-full items-center justify-center rounded-lg border hover:cursor-pointer hover:translate-y-1 border-blue-900 bg-blue-800 font-semibold text-white"
              to="industries/dasturiy-taminot"
            >
              Batafsil
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-xl py-5 px-4 bg-white dark:bg-[#081e3f4d] border border-[#e7ecf540] dark:border-[#ffffff0f] shadow-[0_2px_45px_0_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
            <FaPeopleArrows className="text-4xl dark:text-blue-500  text-blue-600" />
            <p className="mt-5 text-center font-bold text-[#33445F] dark:text-white">
              IT Konsalting
            </p>
            <p className="mb-5 mt-2 text-center text-sm font-light text-[#33445fcc] dark:text-white">
              IT-konsalting kompaniyalarga biznes maqsadlariga erishish uchun
              axborot texnologiyalaridan eng samarali foydalanishga yordam
              beradi.
            </p>
            <div className="flex-1" />
            <Link
              className="flex h-[3.063rem] w-full items-center justify-center rounded-lg border hover:cursor-pointer hover:translate-y-1 border-blue-900 bg-blue-800 font-semibold text-white"
              to="industries/dasturiy-taminot"
            >
              Batafsil
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-xl py-5 px-4 bg-white dark:bg-[#081e3f4d] border border-[#e7ecf540] dark:border-[#ffffff0f] shadow-[0_2px_45px_0_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_0_rgba(0,0,0,0.12)]">
            <MdWeb className="text-4xl dark:text-blue-500  text-blue-600" />
            <p className="mt-5 text-center font-bold text-[#33445F] dark:text-white">
              Veb Dasturlash
            </p>
            <p className="mb-5 mt-2 text-center text-sm font-light text-[#33445fcc] dark:text-white">
              Biz noyob veb-saytlarni yaratamiz, ular nafaqat chiroyli, balki
              funktsional va ulardan foydalanish oson.
            </p>
            <div className="flex-1" />
            <Link
              className="flex h-[3.063rem] w-full items-center justify-center rounded-lg border hover:cursor-pointer hover:translate-y-1 border-blue-900 bg-blue-800 font-semibold text-white"
              to="industries/dasturiy-taminot"
            >
              Batafsil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
