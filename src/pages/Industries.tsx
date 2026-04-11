import { useLocation } from "react-router-dom";
import serviceData from "../data/serviceData";
import { FaCheckCircle } from "react-icons/fa";
import NotFound from "./NotFound";
import Contact from "../components/Contact/Contact";
import Quote from "../components/Quote/Quote";
import { PageContent } from "../components/Layout/PageLayout";

export default function Industries() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const industries = serviceData.find((item) => item.id === id);
  if (industries === undefined) {
    return <NotFound />;
  }
  return (
    <div className="min-h-screen dark:bg-[#08101B]">
      <div className="px-4 pt-24 sm:px-6 lg:px-10">
        <div className="relative mx-auto my-5 max-w-6xl overflow-hidden rounded-3xl lg:my-10">
          <div className="overflow-hidden rounded-3xl">
            <img
              alt=""
              src={industries?.icon}
              className="absolute left-0 top-0 size-full rounded-3xl object-cover opacity-50"
            />
            <div className="absolute left-0 top-0 size-full rounded-3xl bg-black/45" />
            <div className="relative flex flex-col items-center gap-6 px-5 py-20 text-center lg:px-12 lg:py-28">
              <h1 className="max-w-4xl text-2xl font-bold text-white md:text-3xl lg:text-[2.375rem]">
                {industries?.name}
              </h1>
              <a
                href="/contact"
                className="flex h-12 min-w-[14rem] items-center justify-center rounded-xl border border-[#EF7F1A] bg-[#EF7F1A] font-semibold text-white transition hover:bg-[#e06f0a]"
              >
                Biz bilan bog‘lanish
              </a>
            </div>
          </div>
        </div>
      </div>

      <PageContent className="pt-4">
        <div className="flex flex-col gap-4 border-b border-slate-200/60 pb-8 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-[#33445F] dark:text-white md:text-3xl">
            {industries?.section.title}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#64748b] dark:text-white/80 md:text-base">
            {industries?.description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 pt-10 md:grid-cols-2 xl:grid-cols-3">
          {industries?.section.data.map((item, index) => (
            <div
              className="flex flex-col rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-[#0d1829]/90"
              key={index}
            >
              <FaCheckCircle className="text-2xl text-blue-600 dark:text-blue-400" />
              <div className="mt-4 text-lg font-bold text-[#354866] dark:text-white">
                {item.title}
              </div>
              <div className="mt-2 text-sm font-light leading-relaxed text-[#64748b] dark:text-white/80">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </PageContent>

      <div className="relative px-4 pb-10 pt-10 lg:px-10 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <Quote title={industries.section.description} />
        </div>
      </div>
      <div className="relative px-4 pb-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Contact />
        </div>
      </div>
    </div>
  );
}
