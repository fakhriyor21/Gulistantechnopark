import director from "../../assets/images/team/director.png"
import otabek from "../../assets/images/team/otabek.png"
import maryam from "../../assets/images/team/maryam.png"
import jasur from "../../assets/images/team/jasur.png"
import shakhlo from "../../assets/images/team/shakhlo.png"
import ulugbek from "../../assets/images/team/ulugbeks.jpg"
export default function Team() {
  return (
    <section className="pb-24">
        
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  
      <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
        <div className="w-full lg:w-1/2">
       
          <h2 className="font-manrope text-5xl  font-bold leading-[4rem] mb-7 text-center lg:text-left">
            Bizning jamoa
          </h2>
          <p className="text-lg  mb-16 text-center lg:text-left">
          Bizning kompaniyamizni ko'p yillik tajribaga ega bo'lgan tajribali mutaxassislar jamoasi 
          </p>
         
        </div>
        <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
          <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
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
            <img
              src={otabek}
              alt="Team tailwind section"
              className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
            />
            <img
              src={director}
              alt="Team tailwind section"
              className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
            />
            <img
              src={jasur}
              alt="Team tailwind section"
              className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
            />
            <img
              src={maryam}
              alt="Team tailwind section"
              className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
            />
            <img
             src={ulugbek}
              alt="Team tailwind section"
              className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
            />
            
            <img
              src={shakhlo}
              alt="Team tailwind section"
              className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
            />
            <div
             
              className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
            />
            <img
             src={ulugbek}
              alt="Team tailwind section"
              className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
            />
            
            <div
             
              className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}
