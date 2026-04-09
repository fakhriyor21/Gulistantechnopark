import { useLocation } from "react-router-dom";
import serviceData from "../data/serviceData";
import { FaCheckCircle } from "react-icons/fa";
import NotFound from "./NotFound";
import Contact from "../components/Contact/Contact";
import Quote from "../components/Quote/Quote";


export default function Industries() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const industries = serviceData.find((item) => item.id === id);
  if(industries === undefined) {
    return <NotFound/>
  }
  return (
    <div className="dark:bg-[#08101B] ">
      <div className=" lg:px-10 pt-24">
        <div className="relative my-5 lg:my-10">
          <div className="overflow-hidden rounded-3xl">
            <img
              alt=""
              src={industries?.icon}
              className="absolute left-0 top-0 size-full rounded-3xl object-cover opacity-50"
            />
            <div className="absolute left-0 top-0 size-full rounded-3xl bg-black/40" />
            <div className="relative flex flex-col items-center gap-5 px-5 py-24 lg:px-32 lg:py-48">
              <h1 className="w-full text-center text-[1.5rem] font-bold text-white md:text-[2.375rem] lg:w-1/2">
                {industries?.name}
              </h1>
              <button className="m-auto flex h-[3.063rem] w-[16.375rem] items-center justify-center rounded-lg border border-[#EF7F1A] bg-[#EF7F1A] font-semibold text-white">
                Biz bilan bog'lanish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-5 lg:p-10">
        <div className="flex flex-col pb-5">
          <h1 className="text-[1.5rem] font-bold text-[#33445F] dark:text-white md:text-[2.688rem]">
            {industries?.section.title}
          </h1>
          <p className="w-full text-[0.875rem] leading-6 text-[#8F98A7] dark:text-white md:w-[762px] md:text-[1.125rem]">
            {industries?.description}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 pt-5 md:grid-cols-2 xl:grid-cols-3">
          {industries?.section.data.map((item, index) => (
          <div className="flex w-full flex-col p-0 md:px-4 md:py-[1.875rem]" key={index}>
            <FaCheckCircle className="text-3xl text-blue-600"/>
            <div className="mt-5 text-xl font-bold text-[#354866] dark:text-white">
             {item.title}
            </div>
            <div className="mb-5 mt-2 text-lg font-light text-[#8F98A7] dark:text-white">
             {item.description}
            </div>
          </div>
          ))}
        </div>
      </div>
      <div className="relative lg:p-10 max-lg:pt-28 ">
     
          <Quote title={industries.section.description}/>
     
      </div>
      <div className="relative lg:p-10 max-lg:pt-28 ">
      <Contact/>
      </div>
      
    </div>
  );
}
