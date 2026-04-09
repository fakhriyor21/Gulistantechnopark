import { useState, useEffect } from "react";
import logowhite from "../../assets/images/logo/logo-white.png";
import logo from "../../assets/images/logo/logo.png";
import { Button } from "../ui/button";
import { IoLogIn } from "react-icons/io5";
import DarkMode from "../Mode/DarkMode";
import { Search } from "../Search/Search";
import { useTheme } from "../provider/theme-provider";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const logoPath = theme === "dark" ? logowhite : logo;
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
    alert(
      "Innoid bo'limi ishlab chiqish jarayonida tez orada ishga tushiriladi!"
    );
  };
  return (
    <nav
      className={`fixed  w-full z-20 top-0 start-0 border-b border-gray-200  dark:border-gray-600 transition-colors backdrop-blur-lg  ${
        isScrolled
          ? "bg-white dark:bg-gray-900 dark:backdrop-blur-lg dark:bg-opacity-80 "
          : " bg-[#0B4397] dark:bg-gray-900 dark:backdrop-blur-lg dark:bg-opacity-80"
      }`}
    >
      <Marquee className="text-red-500 font-bold">
        Sayt test rejimida ishlamoqda
      </Marquee>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {isScrolled ? (
            <img
              src={logoPath}
              className="h-14 max-lg:h-8"
              alt="Technopark Logo"
            />
          ) : (
            <img
              src={logowhite}
              className="h-14 max-lg:h-8"
              alt="Technopark Logo"
            />
          )}
        </div>
        <div className="flex md:order-2 space-x-3 max-lg:space-x-0 md:space-x-0 rtl:space-x-reverse gap-3">
          <div className="max-lg:hidden ">
            <Search />
          </div>

          <DarkMode />
          <Button
            type="button"
            className=" "
            variant={"outline"}
            onClick={innoid}
          >
            <IoLogIn className="text-lg " /> INNO ID
          </Button>
          <div id="google_translate_element "></div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <div className="border p-1 rounded-2xl border-y-blue-950">
            <ul className="flex flex-col md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li
                className={`hover:bg-blue-900 hover:text-white p-2  rounded-lg  `}
              >
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white ${isScrolled ? "text-blue-800 hover:text-white" : "text-white"} `}
                  aria-current="page"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li className="hover:bg-blue-900 hover:text-white p-2 rounded-lg hover:bg-opacity-90">
                <Link
                  to="/about"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white ${isScrolled ? "text-blue-800 hover:text-white" : "text-white"} `}
                >
                  Biz haqimizda
                </Link>
              </li>
              <li className="hover:bg-blue-900 hover:text-white p-2 rounded-lg hover:bg-opacity-90">
                <Link
                  to="/services"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white ${isScrolled ? "text-blue-800 hover:text-white" : "text-white"} `}
                >
                  Xizmatlar
                </Link>
              </li>
              <li className="hover:bg-blue-900 hover:text-white p-2 rounded-lg hover:bg-opacity-90 relative">
                <Link
                  to="/innoweek"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white ${isScrolled ? "text-blue-800 hover:text-white" : "text-white"} `}
                >
                  INNOWEEK
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-red-600 text-xs font-bold tracking-wide m-1 ">
                    New
                  </div>
                </Link>
              </li>

              {/* <li className="hover:bg-blue-900 hover:text-white p-2 rounded-lg hover:bg-opacity-90">
                <Link
                  to="/projects"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white ${isScrolled ? "text-blue-800 hover:text-white" : "text-white"} `}
                >
                  Loyihalar
                </Link>
              </li> */}
              <li className="hover:bg-blue-900 hover:text-white p-2 rounded-lg hover:bg-opacity-90">
                <Link
                  to="/news"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white ${isScrolled ? "text-blue-800 hover:text-white" : "text-white"} `}
                >
                  Yangiliklar
                </Link>
              </li>
              <li className="hover:bg-blue-900 hover:text-white p-2 rounded-lg hover:bg-opacity-90">
                <Link
                  to="/contact"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white ${isScrolled ? "text-blue-800 hover:text-white" : "text-white"} `}
                >
                  Kontaktlar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
