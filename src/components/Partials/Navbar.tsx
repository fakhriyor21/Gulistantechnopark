import { useState, useEffect } from "react";
import logowhite from "../../assets/images/logo/logo-white.png";
import logo from "../../assets/images/logo/logo.png";
import { Button } from "../ui/button";
import { IoLogIn } from "react-icons/io5";
import DarkMode from "../Mode/DarkMode";
import { Search } from "../Search/Search";
import { useTheme } from "../provider/theme-provider";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import LanguageSwitcher from "../LanguageSwitcher";
import { useMessages } from "@/contexts/LanguageContext";

const navItemClass =
  "relative block rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 after:absolute after:bottom-0 after:left-4 after:h-0.5 after:w-0 after:rounded-full after:bg-current after:transition-all after:duration-200 hover:after:w-[calc(100%-2rem)]";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const logoPath = theme === "dark" ? logowhite : logo;
  const m = useMessages();
  const serviceMenuItems = m.nav.serviceCards;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const innoid = () => {
    alert(m.nav.innoAlert);
  };
  return (
    <nav
      className={`fixed  w-full z-20 top-0 start-0 border-b border-gray-200  dark:border-gray-600 transition-colors backdrop-blur-lg  ${
        isScrolled
          ? "bg-white dark:bg-gray-900 dark:backdrop-blur-lg dark:bg-opacity-80 "
          : " bg-[#0B4397] dark:bg-gray-900 dark:backdrop-blur-lg dark:bg-opacity-80"
      }`}
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {isScrolled ? (
            <img src={logoPath} className="h-14 max-lg:h-8" alt={m.nav.logoAlt} />
          ) : (
            <img src={logowhite} className="h-14 max-lg:h-8" alt={m.nav.logoAlt} />
          )}
        </div>
        <div className="flex md:order-2 space-x-3 max-lg:space-x-0 md:space-x-0 rtl:space-x-reverse gap-3">
          <div className="max-lg:hidden ">
            <Search />
          </div>

          <LanguageSwitcher variant={isScrolled ? "navbarOnLight" : "navbarOnBlue"} />
          <DarkMode />
          <Button type="button" className=" " variant={"outline"} onClick={innoid}>
            <IoLogIn className="text-lg " /> {m.nav.innoId}
          </Button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <div
            className={`rounded-2xl border p-1.5 shadow-[0_14px_35px_-15px_rgba(11,67,151,0.6)] ${
              isScrolled
                ? "border-[#0B4397]/20 bg-white/90 dark:border-white/10 dark:bg-[#101b2f]/80"
                : "border-white/35 bg-white/10"
            }`}
          >
            <ul className="flex flex-col md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li className="rounded-xl p-1 transition-colors hover:bg-[#0b4397]/90 hover:text-white">
                <Link
                  to="/"
                  className={`${navItemClass} dark:text-white ${isScrolled ? "text-blue-900 hover:text-white" : "text-white"}`}
                  aria-current="page"
                >
                  {m.nav.home}
                </Link>
              </li>
              <li className="rounded-xl p-1 transition-colors hover:bg-[#0b4397]/90 hover:text-white">
                <Link
                  to="/about"
                  className={`${navItemClass} dark:text-white ${isScrolled ? "text-blue-900 hover:text-white" : "text-white"}`}
                >
                  {m.nav.about}
                </Link>
              </li>
              <li className="group relative rounded-xl p-1 transition-colors hover:bg-[#0b4397]/90 hover:text-white">
                <Link
                  to="/services"
                  className={`${navItemClass} flex items-center gap-2 dark:text-white ${isScrolled ? "text-blue-900 group-hover:text-white" : "text-white"}`}
                >
                  <BsStars className="text-sm opacity-90" />
                  {m.nav.services}
                </Link>
                <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-4 w-[680px] -translate-x-1/2 rounded-3xl border border-blue-100/80 bg-white/95 p-5 opacity-0 shadow-[0_35px_70px_-20px_rgba(24,57,106,0.45)] backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 dark:border-white/15 dark:bg-[#0f1d33]/95">
                  <div className="grid grid-cols-[260px_1fr] gap-4">
                    <div className="rounded-2xl bg-[linear-gradient(145deg,#0a3f8a,#115fc4)] p-4 text-white shadow-inner">
                      <p className="text-xs uppercase tracking-[0.16em] text-sky-100/80">{m.nav.ddSpotlight}</p>
                      <p className="mt-2 text-lg font-semibold leading-snug">{m.nav.ddSpotlightBody}</p>
                      <Link
                        to="/services"
                        className="mt-4 inline-flex rounded-lg bg-white/15 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/25"
                      >
                        {m.nav.ddServicesPage}
                      </Link>
                    </div>
                    <div>
                      <div className="mb-3 flex items-center justify-between border-b border-blue-100 pb-3 dark:border-white/10">
                        <p className="text-sm font-semibold text-[#0a3f8a] dark:text-sky-300">{m.nav.ddPathsTitle}</p>
                        <Link
                          to="/services"
                          className="text-xs font-medium text-[#0a3f8a] hover:underline dark:text-sky-300"
                        >
                          {m.nav.ddViewAll}
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {serviceMenuItems.map((item) => (
                          <Link
                            key={`${item.title}-${item.to}`}
                            to={item.to}
                            className="rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-[#0a3f8a]/20 hover:bg-[#0a3f8a]/5 dark:hover:border-sky-400/30 dark:hover:bg-sky-400/10"
                          >
                            <p className="text-sm font-semibold text-[#1e2f48] dark:text-white">{item.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-[#5c6f8e] dark:text-slate-300">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative rounded-xl p-1 transition-colors hover:bg-[#0b4397]/90 hover:text-white">
                <Link
                  to="/innox"
                  className={`${navItemClass} dark:text-white ${isScrolled ? "text-blue-900 hover:text-white" : "text-white"}`}
                >
                  {m.nav.innox}
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-red-600 text-xs font-bold tracking-wide m-1 ">
                    {m.nav.newBadge}
                  </div>
                </Link>
              </li>

              <li className="rounded-xl p-1 transition-colors hover:bg-[#0b4397]/90 hover:text-white">
                <Link
                  to="/news"
                  className={`${navItemClass} dark:text-white ${isScrolled ? "text-blue-900 hover:text-white" : "text-white"}`}
                >
                  {m.nav.news}
                </Link>
              </li>
              <li className="rounded-xl p-1 transition-colors hover:bg-[#0b4397]/90 hover:text-white">
                <Link
                  to="/contact"
                  className={`${navItemClass} dark:text-white ${isScrolled ? "text-blue-900 hover:text-white" : "text-white"}`}
                >
                  {m.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
