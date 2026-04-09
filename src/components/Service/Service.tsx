
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
import itcourse from "../../assets/images/home/itcourse.jpg"
import innovation from "../../assets/images/home/_1425232e-b3b9-4124-a2a3-68b248b33c59.jpg"
import consulting from "../../assets/images/home/consulting.jpg"
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <div>
      <div className="relative">
        <div className="container px-5 py-8 lg:px-16 lg:pb-16">
          <div className="relative mb-2.5 flex flex-col items-center">
            <div className="w-full transition-colors h-px bg-gradient-to-r from-transparent via-[rgba(86,139,216,0.38)] via-50% to-transparent" />
            <div className="absolute top-0 left-0 w-full transition-colors h-28 pointer-events-none bg-section-header-bg-primary dark:bg-section-header-bg-primary-dark" />
            <div className="mt-10 inline-flex flex-col items-center">
              <div className="px-2.5 py-1 rounded-lg transition-colors inline-flex text-sm text-[#074196] dark:text-[#568BD8]">
                Bizning xizmatlarimiz
              </div>
              <div className="w-full transition-colors h-12 -mt-10 pointer-events-none bg-primary-section-gradient" />
              <div className="h-px transition-colors w-full bg-primary-line-gradient" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 lg:gap-10">
            <h1 className="w-full text-center text-xl font-bold text-[#33445F] dark:text-white lg:w-1/2 lg:text-4xl">
              Yoshlar texnoparkida tashkil etilgan xizmatlar
            </h1>
            <div className="grid w-full grid-cols-1 gap-5 xl:grid-flow-row xl:grid-cols-[repeat(5,1fr)] xl:grid-rows-[repeat(4,168px)]">
              <div className="xl:row-span-1 xl:col-span-2 hover:cursor-pointer  hover:scale-105 transition-all rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                <Link to={'/services/industries/dasturiy-taminot'} className="flex h-full gap-3">
                 
                  <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                
                  <div className="relative flex w-full flex-col justify-center gap-3">
                    <div className="relative size-8 shrink-0">
                      <HiOutlineComputerDesktop  className="size-8 dark:text-blue-400  text-blue-800 " />
                     
                    </div>
                    <p className="text-left font-bold text-[#333333] dark:text-white">
                      Dasturiy ta'minot xizmatlari
                    </p>
                  </div>
               
                </Link>
                
              </div>
            
                <div className="xl:row-span-2 xl:col-span-1 hover:cursor-pointer  hover:scale-105 transition-all rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                  <Link to={'/services/industries/fablab-ishlab-chiqarish'} className="flex h-full gap-3">
                    <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                    <div className="relative flex w-full flex-col justify-center gap-3">
                      <div className="relative h-full overflow-hidden rounded-[10px]">
                        <img
                          src={laser}
                          className="size-full shrink-0 bg-no-repeat object-cover"
                          alt="background"
                        />{" "}
                      </div>
                      <div className="relative size-8 shrink-0">
                      <MdMiscellaneousServices  className="size-8 dark:text-blue-400  text-blue-800 " />
                      </div>
                      <p className="text-left font-bold text-[#333333] dark:text-white">
                        Ishlab chiqarish
                      </p>
                    </div>
                  </Link>
                </div>
           
              <div className="xl:row-span-1 xl:col-span-1 hover:cursor-pointer  hover:scale-105 transition-all  rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                <Link to={'/services/industries/qishloq-xojaligi'} className="flex h-full gap-3">
                  <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                  <div className="relative flex w-full flex-col justify-center gap-3">
                    <div className="relative size-8 shrink-0">
                    <PiStudentFill  className="size-8 dark:text-blue-400  text-blue-800 " />
                    </div>
                    <p className="text-left font-bold text-[#333333] dark:text-white">
                      O'quv kurslari
                    </p>
                  </div>
                </Link>
              </div>
              <div className="xl:row-span-1 xl:col-span-1 hover:cursor-pointer  hover:scale-105 transition-all  rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                <Link to={'/services/industries/xalqaro-aloqalar'} className="flex h-full gap-3">
                  <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                  <div className="relative flex w-full flex-col justify-center gap-3">
                    <div className="relative size-8 shrink-0">
                    <RiGlobalFill  className="size-8 dark:text-blue-400  text-blue-800 " />
                    </div>
                    <p className="text-left font-bold text-[#333333] dark:text-white">
                      Xalqaro aloqalar
                    </p>
                  </div>
                </Link>
              </div>
              <div className="xl:row-span-1 xl:col-span-2 hover:cursor-pointer  hover:scale-105 transition-all  rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                <Link to={'/services/industries/qishloq-xojaligi'} className="flex h-full gap-3">
                  <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                  <div className="relative flex w-full flex-col justify-center gap-3">
                    <div className="relative size-8 shrink-0">
                    <PiPlantFill  className="size-8 dark:text-blue-400  text-blue-800 " />
                    </div>
                    <p className="text-left font-bold text-[#333333] dark:text-white">
                      Qishloq xo'jaligi
                    </p>
                  </div>
                </Link>
              </div>
              <div className="xl:row-span-1 xl:col-span-1 hover:cursor-pointer  hover:scale-105 transition-all  rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                <Link to={"/services/industries/dasturiy-taminot"} className="flex h-full gap-3">
                  <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                  <div className="relative flex w-full flex-col justify-center gap-3">
                    <div className="relative size-8 shrink-0">
                    <FaRobot  className="size-8 dark:text-blue-400  text-blue-800 " />
                    </div>
                    <p className="text-left font-bold text-[#333333] dark:text-white">
                      Robototexnika
                    </p>
                  </div>
                </Link>
              </div>
              <div className="xl:row-span-2 xl:col-span-1 hover:cursor-pointer  hover:scale-105 transition-all  rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                <Link to={'/services/industries/dasturiy-taminot'} className="flex h-full gap-3">
                  <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                  <div className="relative flex w-full flex-col justify-center gap-3">
                    <div className="relative h-full overflow-hidden rounded-[10px]">
                      <img
                        src={itcourse}
                        className="size-full shrink-0 bg-no-repeat object-cover"
                        alt="background"
                      />{" "}
                    </div>
                    <div className="relative size-8 shrink-0">
                    <FaComputer  className="size-8 dark:text-blue-400  text-blue-800 " />
                    </div>
                    <p className="text-left font-bold text-[#333333] dark:text-white">
                     IT kurslari
                    </p>
                  </div>
                </Link>
              </div>
              <div className="xl:row-span-2 xl:col-span-3 hover:cursor-pointer  hover:scale-105 transition-all  rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                <Link to={'/services/industries/startaplar-uchun-qollab-quvvatlash'} className="flex h-full gap-3">
                  <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                  <div className="relative flex w-full flex-col justify-center gap-3">
                    <div className="relative h-full overflow-hidden rounded-[10px]">
                      <img
                        src={innovation}
                        className="size-full shrink-0 bg-no-repeat object-cover"
                        alt="background"
                      />{" "}
                    </div>
                    <div className="relative size-8 shrink-0">
                    <IoRocket  className="size-8 dark:text-blue-400  text-blue-800 " />
                    </div>
                    <p className="text-left font-bold text-[#333333] dark:text-white">
                      Inkubatsiya
                    </p>
                  </div>
                </Link>
              </div>
              <div className="xl:row-span-2 xl:col-span-1 hover:cursor-pointer  hover:scale-105 transition-all  rounded-2xl border border-solid border-[#ffffff0f] bg-[#F4F6F9] p-5 text-center text-lg backdrop-blur-[10px] dark:bg-[#08101b40]">
                <Link to={"/services/industries/dasturiy-taminot"} className="flex h-full gap-3">
                  <div className="w-1 shrink-0 rounded-[5px] bg-gradient-to-b from-[#07419600] to-[#076B9640] dark:from-[#FFCDB000] dark:to-[#211c82]" />
                  <div className="relative flex w-full flex-col justify-center gap-3">
                    <div className="relative h-full overflow-hidden rounded-[10px]">
                      <img
                        src={consulting}
                        className="size-full shrink-0 bg-no-repeat object-cover"
                        alt="background"
                      />{" "}
                    </div>
                    <div className="relative size-8 shrink-0">
                    <PiStudentFill  className="size-8 dark:text-blue-400  text-blue-800 " />
                    </div>
                    <p className="text-left font-bold text-[#333333] dark:text-white">
                      Konsalting
                    </p>
                  </div>
                </Link>
              </div>
              <Link
                className="p-0 xl:col-span-1 xl:row-span-1"
                to="/services"
              >
                <button className="whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-white/10 bg-[#074196] text-white hover:bg-[#2155A1] py-3 text-sm flex size-full flex-col items-start justify-center gap-3 rounded-[20px] border px-[20px] dark:bg-[#568BD840] dark:hover:bg-[#2155A1]">
                <RiDashboardLine  className="size-8 dark:text-blue-400  text-white " />
                  <div className="flex w-full items-center justify-between gap-2">
                    <p className="h-auto max-w-[180px] text-wrap text-left text-lg font-black">
                      Barcha xizmatlarni ko'rish
                    </p>
                    <svg
                      className="text-[#568BD8]"
                      width={24}
                      height={24}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
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
                </button>
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
            <g opacity="0.5" filter="url(#filter0_f_2002_124648)">
              <path
                d="M-70 214L166 202.636L202 -67H74.5L70 7V79.5L-70 214Z"
                fill="#568BD8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2002_124648"
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
                  result="effect1_foregroundBlur_2002_124648"
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
            <g opacity="0.5" filter="url(#filter0_f_2002_124648)">
              <path
                d="M-70 214L166 202.636L202 -67H74.5L70 7V79.5L-70 214Z"
                fill="#568BD8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2002_124648"
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
                  result="effect1_foregroundBlur_2002_124648"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
