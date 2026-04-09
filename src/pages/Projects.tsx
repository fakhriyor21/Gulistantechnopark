import work1 from "../assets/images/projects/work1.png"
import work2 from "../assets/images/projects/work2.png"
import work3 from "../assets/images/projects/work3.png"
import work4 from "../assets/images/projects/work4.png"
import work5 from "../assets/images/projects/work5.png"
export default function Projects() {
  return (
    <div className="dark:bg-[#08101B] ">
      <div className=" pt-24 flex flex-1 flex-col overflow-x-hidden">
        <div className="container mx-auto px-5 pt-5 xl:px-16 xl:pt-11">
          <div className="flex flex-col items-center text-left lg:text-center">
            <h1 className="max-w-[612px] text-2xl font-bold text-[#33445F] dark:text-white lg:text-[2.688rem] lg:leading-10">
              Biz har bir loyihaga alohida mehr beramiz
            </h1>
            <div className=" mt-4 max-w-[923px] text-sm text-[#8F98A7] dark:text-white lg:text-[1.1rem]">
              Biz jamiyatga innovatsion startup loyihalarni va hayotni yangi imkoniyatlar bilan
              to‘ldirishga yordam beradigan noyob innovatsion yechimlarni yaratamiz.
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 mt-10 mb-10">
            <div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F4F6F9] p-5 backdrop-blur-[0.625rem] dark:bg-[#081e3f4d] lg:flex-row lg:gap-12 lg:p-11">
              <div className="flex flex-1 flex-col justify-between gap-5">
                <div className="flex flex-col items-center gap-2 lg:items-start">
                  <h1 className="text-2xl font-bold text-[#33445F] dark:text-white lg:text-[2rem]">
                    Workflow
                  </h1>
                  <p className="text-center text-sm text-[#8F98A7] dark:text-white lg:text-left xl:text-lg ">
                    Xodimlarning ish vaqtini qayd etish va ularni boshqarish
                    tizimi Inson resurslarini boshqarishni avtomatlashtirish
                    hisobiga xodimlarga sarflanadigan xarajatlarni kamaytiradi
                    va vaqtni tejaydi.
                  </p>
                </div>
                <div
                  className="hidden w-fit lg:flex"
                
                >
                  <button className="flex justify-center rounded-lg border border-solid border-[#ffffff1a] bg-[#074196] px-6 py-[1.063rem] text-sm font-medium text-white hover:opacity-90 hover:dark:bg-white/5 hover:dark:opacity-100 xl:text-lg">
                    Batafsil
                  </button>
                </div>
              </div>
              <div className="grid h-full grid-flow-row grid-cols-[repeat(5,40px)] grid-rows-[repeat(5,30px)] justify-center gap-3 sm:grid-cols-[repeat(5,75px)] sm:grid-rows-[repeat(5,50px)] xl:grid-cols-[repeat(5,100px)] xl:grid-rows-[repeat(5,65px)] 2xl:grid-cols-[repeat(5,125px)] 2xl:grid-rows-[repeat(5,75px)]">
                <div
                  className="row-span-3 col-span-2 pointer-events-none size-full rounded-md bg-cover bg-center bg-no-repeat sm:rounded-xl xl:rounded-[20px]"
                  style={{
                    backgroundImage:
                      `url(${work1})`,
                  }}
                />
                <div
                  className="row-span-1 col-span-3 pointer-events-none size-full rounded-md bg-cover bg-center bg-no-repeat sm:rounded-xl xl:rounded-[20px]"
                  style={{
                    backgroundImage:
                     `url(${work5})`,
                  }}
                />
                <div
                  className="row-span-2 col-span-3 pointer-events-none size-full rounded-md bg-cover bg-center bg-no-repeat sm:rounded-xl xl:rounded-[20px]"
                  style={{
                    backgroundImage:
                     `url(${work3})`,
                  }}
                />
                <div
                  className="row-span-2 col-span-2 pointer-events-none size-full rounded-md bg-cover bg-center bg-no-repeat sm:rounded-xl xl:rounded-[20px]"
                  style={{
                    backgroundImage:
                    `url(${work2})`,
                  }}
                />
                <div
                  className="row-span-2 col-span-3 pointer-events-none size-full rounded-md bg-cover bg-center bg-no-repeat sm:rounded-xl xl:rounded-[20px]"
                  style={{
                    backgroundImage:
                    `url(${work4})`,
                  }}
                />
              </div>
              <a
                className="flex w-full lg:hidden"
                href="/"
              >
                <button className="items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#2155A1] flex w-full rounded-lg border border-solid border-[#ffffff1a] bg-[#074196] px-6 py-[1.063rem] text-sm font-medium text-white hover:dark:bg-white/5 xl:text-lg">
                  Batafsil
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
