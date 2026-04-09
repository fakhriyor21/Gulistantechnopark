import { NavLink } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CiSquareInfo } from "react-icons/ci";
// import { AiFillProject } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import innoweeklogo from "../../assets/images/logo/logo-innoweek.webp";
export default function MobileMenu() {
  return (
    <div>
      <div className="fixed left-0 top-[100vh] z-10 flex w-full -translate-y-full items-center justify-around border-t bg-white py-2 dark:border-white/15 dark:bg-[#0E1F34] xl:hidden">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#074196] dark:text-white flex flex-col items-center  gap-2"
              : "text-[#6E7985] flex flex-col items-center gap-2"
          }
          to="/"
        >
          <AiFillHome className="text-2xl" />
          <span className="text-xs">Bosh sahifa</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#074196] dark:text-white flex flex-col items-center  gap-2"
              : "text-[#6E7985] flex flex-col items-center gap-2"
          }
          to="/about"
        >
          <CiSquareInfo className="text-2xl" />
          <span className="text-xs">Biz haqimizda</span>
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
              ? "text-[#074196] dark:text-white flex flex-col items-center  gap-2"
              : "text-[#6E7985] flex flex-col items-center gap-2"
          }
          to="/innoweek"
        >
          <img src={innoweeklogo} alt="innoweek logo" className="w-12" />
          <span className="text-xs uppercase">Innoweek</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#074196] dark:text-white flex flex-col items-center  gap-2"
              : "text-[#6E7985] flex flex-col items-center gap-2"
          }
          to="/services"
        >
          <MdMiscellaneousServices className="text-2xl" />
          <span className="text-xs">Xizmatlar</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#074196] dark:text-white flex flex-col items-center  gap-2"
              : "text-[#6E7985] flex flex-col items-center gap-2"
          }
          to="/contact"
        >
          <FaPhoneSquareAlt className="text-2xl" />
          <span className="text-xs">Kontaktlar</span>
        </NavLink>
      </div>
    </div>
  );
}
