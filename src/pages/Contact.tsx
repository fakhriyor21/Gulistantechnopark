import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../assets/images/logo/logo-crup.png";
import { IoTimeSharp } from "react-icons/io5";
export default function Contact() {
  return (
    <div className="dark:bg-[#08101B]">
      <div className="flex flex-1 flex-col overflow-x-hidden pt-20">
        <div className="container mx-auto px-5 pt-5 xl:px-16">
          <div className="flex flex-col gap-5">
            <h1 className="text-left text-2xl font-bold text-[#33445F] dark:text-white lg:pb-4 lg:pt-5 lg:text-center lg:text-[2.688rem]">
              Kontaktlar
            </h1>
          </div>
          <div className="flex flex-col gap-5 pb-[3.75rem] pt-[1.875rem]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex w-full flex-col gap-9 rounded-xl border border-solid border-[#E7ECF5] bg-[#F4F6F9] p-6 dark:border-[#172333] dark:bg-[#081e3f4d]">
                <FaPhoneAlt className="text-4xl dark:text-blue-500  text-blue-600" />
                <div className="flex grow flex-col gap-2">
                  <h1 className="font-semibold text-[#33445F] dark:text-white">
                    Qo'ng'iroqlar markazi
                  </h1>
                  <p className="whitespace-pre-line text-sm text-[#9CA1A9]">
         
                    +998 (97) 275 - 98 - 97
                  </p>
                </div>
                <a
                  className="flex w-fit items-center gap-2"
                  target="_blank"
                  href="tel:+998972759897"
                >
                  <div className="text-sm text-blue-600">Telefon qilish</div>
                </a>
              </div>
              <div className="flex w-full flex-col gap-9 rounded-xl border border-solid border-[#E7ECF5] bg-[#F4F6F9] p-6 dark:border-[#172333] dark:bg-[#081e3f4d]">
                <MdEmail className="text-4xl dark:text-blue-500  text-blue-600" />
                <div className="flex grow flex-col gap-2">
                  <h1 className="font-semibold text-[#33445F] dark:text-white">
                    E-mail
                  </h1>
                  <p className="whitespace-pre-line text-sm text-[#9CA1A9]">
                    Savollaringiz bo'lsa, bizga xat yozishingiz va elektron
                    formatda javob olishingiz mumkin.
                  </p>
                </div>
                <a
                  className="flex w-fit items-center gap-2"
                  target="_blank"
                  href="mailto:syrdaryatechnopark@gmail.com"
                >
                  <div className="text-sm text-blue-600">
                    syrdaryatechnopark@gmail.com
                  </div>
                </a>
              </div>
              <div className="flex w-full flex-col gap-9 rounded-xl border border-solid border-[#E7ECF5] bg-[#F4F6F9] p-6 dark:border-[#172333] dark:bg-[#081e3f4d]">
                <FaLocationDot className="text-4xl dark:text-blue-500  text-blue-600" />
                <div className="flex grow flex-col gap-2">
                  <h1 className="font-semibold text-[#33445F] dark:text-white">
                    Manzil
                  </h1>
                  <p className="whitespace-pre-line text-sm text-[#9CA1A9]">
                    O‘zbekiston Respublikasi ,Sirdaryo viloyati, Guliston
                    shahar, Guliston ko‘chasi, 2-uy
                  </p>
                </div>
                <a
                  className="flex w-fit items-center gap-2"
                  target="_blank"
                  href="https://maps.app.goo.gl/WXYDVjPiNgFcM7oj9"
                >
                  <div className="text-sm text-blue-600">
                    Ochish Google Maps
                  </div>
                </a>
              </div>
              <div className="flex w-full flex-col gap-9 rounded-xl border border-solid border-[#E7ECF5] bg-[#F4F6F9] p-6 dark:border-[#172333] dark:bg-[#081e3f4d]">
                <IoTimeSharp className="text-4xl dark:text-blue-500  text-blue-600" />
                <div className="flex grow flex-col gap-2">
                  <h1 className="font-semibold text-[#33445F] dark:text-white">
                    Ish vaqti
                  </h1>
                  <p className="whitespace-pre-line text-sm text-[#9CA1A9]">
                    Dushanbadan jumagacha 9:00 dan 18:00 gacha
                  </p>
                  <p className="whitespace-pre-line text-sm text-[#9CA1A9]">
                    Tushlik tanaffusi: 13:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
            <div className="relative ">
              <iframe
                className="relative w-full rounded-xl xl:col-span-3"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.5620961385507!2d68.77823247682039!3d40.50706547142525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b20786fad1fc55%3A0xed271e381b97e2cd!2sSirdaryo%20viloyati%20Yoshlar%20Texnoparki!5e0!3m2!1sen!2s!4v1727156574496!5m2!1sen!2s"
                width={600}
                height={450}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                target="_blank"
                className="absolute bottom-8 right-5"
                href="https://maps.app.goo.gl/WXYDVjPiNgFcM7oj9"
              >
                <button className="justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/10 bg-[#074196] text-white hover:bg-[#2155A1] px-4 py-3 text-sm flex items-center gap-2.5">
                  <div className="text-sm">
                    Ochish <span className="font-semibold">Google Maps</span>
                  </div>
                  <img src="/contacts-items/routing.svg" alt="" />
                </button>
              </a>
            </div>
            <div className="my-5 xl:my-[3.75rem]">
              <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-xl border border-solid border-[#E7ECF5] bg-[#F4F6F9] p-5 dark:border-[#172333] dark:bg-[#081e3f4d] sm:p-12">
                <div className="flex flex-col gap-2">
                  <div className="text-[#EF7F1A]">Ariza formasi</div>
                  <div className="h-px w-full bg-secondary-line-gradient transition-colors" />
                </div>
                <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
                  <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-[1.75rem]">
                    Savollaringiz bormi? So'rov qoldiring va administratorimiz
                    tez orada siz bilan bog'lanadi!
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
      </div>
    </div>
  );
}
