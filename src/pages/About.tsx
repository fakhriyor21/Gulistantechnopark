import logo from "../assets/images/logo/logo-crup.png";
import citation from "../assets/images/hero/citation.svg";
import director from "../assets/images/hero/director.png";
import { FaCheckCircle } from "react-icons/fa";
import groupimage from "../assets/images/home/imagegroup.png";
import Team from "../components/Team/Team";

export default function About() {
  return (
    <div className="dark:bg-[#08101B] ">
      <div className="pt-24 max-w-screen-2xl items-center justify-between mx-auto p-4 ">
        <div className="flex w-full flex-col items-center justify-between gap-5 pt-5 text-center xl:flex-row xl:gap-7 xl:pt-10 xl:text-left">
          <h1 className="w-full text-2xl font-bold text-[#33445F] dark:text-white xl:w-2/3 xl:text-[2.625rem] xl:leading-[3.825rem]">
            Har bir daqiqangiz qadrli, har bir g‘oyangiz – innovatsiyalar sari
            yo‘l!
          </h1>
          <p className="w-full pt-0 text-sm text-[#8F98A7] dark:text-white xl:w-2/3 xl:pt-5 xl:text-lg">
            Bugungi kunda biz texnoparkda texnologik yutuqlar va innovatsiyalar
            markazida turibmiz. Bizning asosiy vazifamiz – yangi g‘oyalarni
            qo‘llab-quvvatlash, kelajak avlodiga zamonaviy sharoitlarni yaratish
            va yurtimizning innovatsion salohiyatini kuchaytirishdir. Sizlarning
            har bir g‘oyangiz – kelajakdagi yirik yutuqlar sari qadamdir.
            Birgalikda har qanday to‘siqni yengib, global bozorda o‘z o‘rnimizni
            topishimiz mumkin.{" "}
          </p>
        </div>
        <div className="relative mt-5 w-full xl:mt-11">
          <img
            className="size-full shrink-0 rounded-2xl bg-no-repeat object-cover"
            alt="Photo"
            src={groupimage}
            />
        </div>
        <div className="flex flex-col gap-5 pt-10">
          <h1 className="text-sm text-[#8F98A7] dark:text-white lg:text-lg">
          Biz texnoparkda bebaho tajriba va chuqur bilimlarni jamlagan holda, hududiy va respublika miqyosidagi innovatsion loyihalar ustida ishlaymiz. Har bir soha uchun yuqori malakali mutaxassislardan iborat jamoani shakllantirdik.
          </h1>
          <p className="text-sm text-[#8F98A7] dark:text-white lg:text-lg">
          Texnoparkimiz mutaxassislarining malakasi bizga har bir mijozning individual ehtiyojlarini chuqur tushunish va yechimlarni taqdim etishga imkon beradi. Qisqa vaqt ichida turli murakkablikdagi loyihalarni muvaffaqiyatli amalga oshirib, startaplardan tortib davlat miqyosidagi innovatsion yechimlargacha bo‘lgan keng ko‘lamdagi vazifalarni hal qila olamiz. Biz texnologiyalar orqali hududlarning iqtisodiy va ijtimoiy rivojlanishiga katta hissa qo‘shamiz.
          </p>
        </div>
        <div style={{
          background: `linear-gradient(0deg, rgba(62,74,231,0.87718837535014) 0%, rgba(7,65,150,1) 100%)`
        }} className="relative my-5 flex flex-col gap-6 overflow-hidden rounded-xl border border-solid border-[#095e9e4d]  p-9 xl:my-[3.75rem]">
          <div className="flex flex-col gap-2">
            <img
              alt="Citation"
              loading="lazy"
              width={24}
              height={24}
              decoding="async"
              data-nimg={1}
              className="opacity-50"
              src={citation}
              style={{ color: "transparent" }}
            />
            <h1 className="text-xl text-white">
              Bizning asosiy vazifamiz – yangi g‘oyalarni qo‘llab-quvvatlash,
              kelajak avlodiga zamonaviy sharoitlarni yaratish va yurtimizning
              innovatsion salohiyatini kuchaytirishdir. Sizlarning har bir
              g‘oyangiz – kelajakdagi yirik yutuqlar sari qadamdir.
            </h1>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="border-opacity/50 flex items-center justify-center rounded-full border border-solid border-white">
              <img
                alt="Avatar"
                loading="lazy"
                width={48}
                height={48}
                decoding="async"
                data-nimg={1}
                className="shrink-0 rounded-full bg-no-repeat object-cover p-[2px]"
                srcSet={director}
                src={director}
                style={{ color: "transparent" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-medium text-white">
                Mamatov Avaz Muxiddinovich
              </h1>
              <p className="text-sm text-[#ffffffd9]">
                Sirdaryo yoshlar texnoparki direktori
              </p>
            </div>
          </div>
          <img
            alt=" Logo"
            loading="lazy"
            width={200}
            height={202}
            decoding="async"
            data-nimg={1}
            className="absolute bottom-0 -right-20 shrink-0 opacity-25 "
            src={logo}
            style={{ color: "transparent" }}
          />
        </div>

        <div className="flex flex-col gap-3 py-5 xl:gap-[1.875rem] xl:pb-[1.875rem] xl:pt-0">
          <h1 className="w-full text-2xl font-bold text-[#33445F] dark:text-white xl:w-1/3 xl:text-[2.625rem] xl:leading-[3.825rem]">
            Kompaniyaning asosiy maqsad va vazifalari
          </h1>
          <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <FaCheckCircle className="text-3xl text-blue-600"/>
              <p className="text-sm text-[#33445F] dark:text-white">
                Kompaniya texnologik yangiliklar va innovatsion yechimlar orqali
                mahsulotlar va xizmatlarni doimiy ravishda takomillashtirishni
                maqsad qilgan. Raqobatbardosh bo‘lish va bozorda yetakchi
                o‘rinni egallash uchun yangi texnologiyalarni joriy qilish
                ustuvor vazifadir.
              </p>
            </div>
            <div className="flex flex-col gap-4">
            <FaCheckCircle className="text-3xl text-blue-600"/>
              <p className="text-sm text-[#33445F] dark:text-white">
                Mahsulot va xizmatlarning sifati kompaniya muvaffaqiyatining
                asosi hisoblanadi. Kompaniya zamonaviy talablar va xalqaro
                standartlarga javob beradigan yuqori sifatli mahsulotlar
                yaratish orqali mijozlar ishonchini qozonish va saqlab qolishni
                maqsad qiladi.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <FaCheckCircle className="text-3xl text-blue-600"/>
              <p className="text-sm text-[#33445F] dark:text-white">
                Kompaniyaning rivoji uchun malakali va professional kadrlar
                tayyorlash muhim ahamiyatga ega. Shuningdek, yosh mutaxassislar
                va startaplar uchun sharoit yaratish, ularni qo‘llab-quvvatlash
                va ilmiy-tadqiqot ishlari bilan shug‘ullanishga yo‘naltirish
                asosiy vazifalardan biridir.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <FaCheckCircle className="text-3xl text-blue-600"/>
              <p className="text-sm text-[#33445F] dark:text-white">
                Kompaniya xalqaro miqyosda innovatsiyalar va tajriba almashishni
                rivojlantirishga intiladi. Yetakchi texnoparklar, ilmiy
                markazlar va xorijiy kompaniyalar bilan hamkorlik orqali yangi
                imkoniyatlarni ochish va global bozorda o‘z o‘rnini
                mustahkamlash asosiy maqsadlardandir.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <FaCheckCircle className="text-3xl text-blue-600"/>
              <p className="text-sm text-[#33445F] dark:text-white">
                Kompaniya ilm-fan va ishlab chiqarish jarayonlari o‘rtasidagi
                uzviy bog‘liqlikni mustahkamlash orqali zamonaviy
                texnologiyalarni tatbiq etish, talabalarga amaliy ko‘nikmalar
                berish hamda ishlab chiqarishni yanada samarali qilishni o‘z
                oldiga vazifa qilib qo‘ygan.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <FaCheckCircle className="text-3xl text-blue-600"/>
              <p className="text-sm text-[#33445F] dark:text-white">
                Kompaniya o‘z faoliyatida ekologik barqarorlik va ijtimoiy
                mas'uliyatni asosiy tamoyil sifatida qo‘llaydi. Barqaror
                rivojlanish uchun yashil texnologiyalarni joriy qilish va
                resurslardan oqilona foydalanish maqsad qilingan.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <Team/>
        <hr />
        <div className="my-5 xl:my-[3.75rem]">
          <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-xl border border-solid border-[#E7ECF5] bg-[#F4F6F9] p-5 dark:border-[#172333] dark:bg-[#081e3f4d] sm:p-12">
            <div className="flex flex-col gap-2">
              <div className="text-[#EF7F1A]">Ariza formasi</div>
              <div className="h-px w-full bg-secondary-line-gradient transition-colors" />
            </div>
            <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
              <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-[1.75rem]">
                Savollaringiz bormi? So'rov qoldiring va administratorimiz tez
                orada siz bilan bog'lanadi!
              </h1>
              <form className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-4 lg:flex-row">
                  <div className="space-y-2 w-full">
                    <span className="flex items-center">
                      <input
                        className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                        placeholder="Familiya"
                        name="last_name"
                        id=":r1c:-form-item"
                        aria-describedby=":r1c:-form-item-description"
                        aria-invalid="false"
                        defaultValue=""
                      />
                    </span>
                  </div>
                  <div className="space-y-2 w-full">
                    <span className="flex items-center">
                      <input
                        className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                        placeholder="Ism"
                        name="first_name"
                        id=":r1d:-form-item"
                        aria-describedby=":r1d:-form-item-description"
                        aria-invalid="false"
                        defaultValue=""
                      />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="space-y-2 w-full">
                    <span className="flex items-center">
                      <input
                        className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                        placeholder="Telefon raqam"
                        name="phone"
                        id=":r1e:-form-item"
                        aria-describedby=":r1e:-form-item-description"
                        aria-invalid="false"
                        defaultValue=""
                      />
                    </span>
                  </div>
                  <div className="space-y-2 w-full">
                    <span className="flex items-center">
                      <input
                        className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                        placeholder="Kompaniya/Tashkilot nomi"
                        name="company_name"
                        id=":r1f:-form-item"
                        aria-describedby=":r1f:-form-item-description"
                        aria-invalid="false"
                        defaultValue=""
                      />
                    </span>
                  </div>
                  <div className="space-y-2 w-full">
                    <textarea
                      className="flex w-full h-[7.875rem] rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Savolingizning qisqacha tavsifi"
                      name="message"
                      id=":r1g:-form-item"
                      aria-describedby=":r1g:-form-item-description"
                      aria-invalid="false"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <label className="flex w-fit cursor-pointer select-none items-center gap-2 text-sm leading-[0.875rem] text-[#33445F] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-[#095E9E] dark:text-white shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#095E9E] data-[state=checked]:text-primary-foreground"
                  />
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    tabIndex={-1}
                    defaultValue="on"
                    style={{
                      transform: "translateX(-100%)",
                      position: "absolute",
                      pointerEvents: "none",
                      opacity: 0,
                      margin: 0,
                      width: 16,
                      height: 16,
                    }}
                  />
                  <span>Men ma'lumotlarni qayta ishlashga roziman</span>
                </label>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md border border-solid border-[#443ee4] bg-[#171779] font-semibold text-white px-4 py-3 text-sm mt-5"
                  type="submit"
                >
                  Ma'lumotlarni yuborish
                </button>
              </form>
            </div>
            <img
              alt=" Logo"
              loading="lazy"
              width={1}
              height={1}
              decoding="async"
              data-nimg={1}
              className="pointer-events-none absolute -left-28 bottom-0 h-[205px] w-[218px] shrink-0 select-none opacity-5 lg:h-[305px] lg:w-[318px]"
              src={logo}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      
      </div>
    </div>
  );
}
