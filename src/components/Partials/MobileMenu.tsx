import { NavLink, useLocation } from "react-router-dom";
import { MdMiscellaneousServices, MdPhotoLibrary } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CiSquareInfo } from "react-icons/ci";
// import { AiFillProject } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import innoweeklogo from "../../assets/images/logo/logo-innox.webp";

const serviceQuickLinks = [
  { to: "/services/industries/startaplar-uchun-qollab-quvvatlash", label: "Startap" },
  { to: "/services/industries/fablab-ishlab-chiqarish", label: "FABLAB" },
  { to: "/services/industries/dasturiy-taminot", label: "Dasturiy" },
  { to: "/services/industries/qishloq-xojaligi", label: "Agro" },
];

export default function MobileMenu() {
  const location = useLocation();
  const showServiceShortcuts = location.pathname.startsWith("/services");
  const baseDockItemClass =
    "group relative flex min-w-[58px] flex-col items-center justify-center gap-1 rounded-2xl px-2 py-1.5 text-[10px] font-medium transition-all duration-200";
  const dockLabelClass = "max-w-[64px] truncate text-center leading-tight";

  return (
    <div>
      {showServiceShortcuts && (
        <div className="fixed bottom-[92px] left-1/2 z-20 flex flex-wrap justify-center w-[calc(100%-1rem)] max-w-xl -translate-x-1/2 gap-2 rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-[0_18px_40px_-18px_rgba(14,36,70,0.7)] backdrop-blur dark:border-white/10 dark:bg-[#10243e]/90 xl:hidden">
          {serviceQuickLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `shrink-0 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-[#074196] text-white dark:bg-sky-500 dark:text-slate-900"
                    : "bg-[#eef4fd] text-[#1f3b66] dark:bg-white/10 dark:text-slate-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
      <div className="fixed bottom-3 left-1/2 z-20 w-[calc(100%-0.75rem)] max-w-xl -translate-x-1/2 xl:hidden">
        <div className="rounded-[26px] border border-slate-200/80 bg-white/85 p-2 shadow-[0_22px_45px_-16px_rgba(12,38,74,0.7)] backdrop-blur-xl dark:border-white/15 dark:bg-[#0E1F34]/90">
          <div className="flex flex-wrap items-end justify-center gap-1 pb-0.5">
        <NavLink
          className={({ isActive }) =>
            isActive
                  ? `${baseDockItemClass} -translate-y-1 bg-[#074196] text-white shadow-md dark:bg-sky-500 dark:text-slate-950`
                  : `${baseDockItemClass} text-[#6E7985] hover:bg-[#edf3fb] dark:text-slate-300 dark:hover:bg-white/10`
          }
          to="/"
        >
              <AiFillHome className="text-[1.3rem]" />
              <span className={dockLabelClass}>Bosh sahifa</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
                  ? `${baseDockItemClass} -translate-y-1 bg-[#074196] text-white shadow-md dark:bg-sky-500 dark:text-slate-950`
                  : `${baseDockItemClass} text-[#6E7985] hover:bg-[#edf3fb] dark:text-slate-300 dark:hover:bg-white/10`
          }
          to="/about"
        >
              <CiSquareInfo className="text-[1.3rem]" />
              <span className={dockLabelClass}>Biz haqimizda</span>
        </NavLink>
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#074196] dark:text-white flex flex-col items-center  gap-2" : "text-[#6E7985] flex flex-col items-center gap-2"          }
          to="/projects"
        >
         <AiFillProject className="text-2xl" />
          <span className="text-xs">Loyihalar</span>
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            isActive
                  ? `${baseDockItemClass} -translate-y-1 bg-[#074196] text-white shadow-md dark:bg-sky-500 dark:text-slate-950`
                  : `${baseDockItemClass} text-[#6E7985] hover:bg-[#edf3fb] dark:text-slate-300 dark:hover:bg-white/10`
          }
          to="/innox"
        >
              <img src={innoweeklogo} alt="innox logo" className="h-[1.25rem] w-[1.6rem] object-contain" />
              <span className={dockLabelClass}>InnoX</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
                  ? `${baseDockItemClass} -translate-y-1 bg-[#074196] text-white shadow-md dark:bg-sky-500 dark:text-slate-950`
                  : `${baseDockItemClass} text-[#6E7985] hover:bg-[#edf3fb] dark:text-slate-300 dark:hover:bg-white/10`
          }
          to="/services"
        >
              <MdMiscellaneousServices className="text-[1.3rem]" />
              <span className={dockLabelClass}>Xizmatlar</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
                  ? `${baseDockItemClass} -translate-y-1 bg-[#074196] text-white shadow-md dark:bg-sky-500 dark:text-slate-950`
                  : `${baseDockItemClass} text-[#6E7985] hover:bg-[#edf3fb] dark:text-slate-300 dark:hover:bg-white/10`
          }
          to="/news"
        >
              <IoNewspaperOutline className="text-[1.3rem]" />
              <span className={dockLabelClass}>Yangiliklar</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
                  ? `${baseDockItemClass} -translate-y-1 bg-[#074196] text-white shadow-md dark:bg-sky-500 dark:text-slate-950`
                  : `${baseDockItemClass} text-[#6E7985] hover:bg-[#edf3fb] dark:text-slate-300 dark:hover:bg-white/10`
          }
          to="/gallery"
        >
              <MdPhotoLibrary className="text-[1.3rem]" />
              <span className={dockLabelClass}>Galereya</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
                  ? `${baseDockItemClass} -translate-y-1 bg-[#074196] text-white shadow-md dark:bg-sky-500 dark:text-slate-950`
                  : `${baseDockItemClass} text-[#6E7985] hover:bg-[#edf3fb] dark:text-slate-300 dark:hover:bg-white/10`
          }
          to="/contact"
        >
              <FaPhoneSquareAlt className="text-[1.3rem]" />
              <span className={dockLabelClass}>Kontaktlar</span>
        </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
