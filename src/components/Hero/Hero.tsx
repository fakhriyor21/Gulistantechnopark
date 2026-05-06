import logowhite from "../../assets/images/logo/logo-crup.png";
import { IoIosRocket } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { VscProject } from "react-icons/vsc";
import { FaComputer } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
export default function Hero() {
  return (
    <div>
      <section className="">
        <div className="pointer-events-none absolute hidden rotate-180 blur-xl lg:flex animate-pulse">
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
        <div className="main">
          <div className="big-circle">
            <div className="icon-block ">
              <div className="image flex items-center justify-center">
                <IoIosRocket className="text-white" size={40} />
              </div>
            </div>
            <div className="icon-block">
              <div className="image flex items-center justify-center">
                <IoPeopleSharp className="text-white" size={40} />
              </div>
            </div>
            <div className="icon-block">
              <div className="image flex items-center justify-center">
                <PiStudentFill className="text-white" size={40} />
              </div>
            </div>
            <div className="icon-block">
              <div className="image flex items-center justify-center">
                <VscProject className="text-white" size={40} />
              </div>
            </div>
          </div>
          <div className="circle">
            <div className="icon-block">
              <div className="image flex items-center justify-center">
                <FaComputer className="text-white" size={40} />
              </div>
            </div>
            <div className="icon-block">
              <div className="image flex items-center justify-center">
                <FaChartPie className="text-white" size={40} />
              </div>
            </div>
            <div className="icon-block">
              <div className="image flex items-center justify-center">
                <GrLineChart className="text-white" size={40} />
              </div>
            </div>
            <div className="icon-block">
              <div className="image flex items-center justify-center">
                <GiTeamIdea className="text-white" size={40} />
              </div>
            </div>
          </div>
          <div className="center-logo hover:animate-pulse hover:cursor-pointer ">
            <img className="h-56 " src={logowhite} alt="logo" />
          </div>
        </div>
      </section>
    </div>
  );
}
