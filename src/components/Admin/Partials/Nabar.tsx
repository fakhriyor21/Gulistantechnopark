import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export default function NavbarAdmin() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  };

  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-700 dark:text-blue-500" : "text-gray-700 dark:text-gray-400";
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer hover:text-blue-700"
            onClick={() => navigate("/admin/dashboard")}
          >
            Texnopark Admin
          </span>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
              Chiqish
            </Button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  onClick={() => navigate("/admin/dashboard")}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-blue-700 dark:hover:text-blue-500 transition ${isActive("/admin/dashboard")}`}
                >
                  Yangiliklarni boshqarish
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/admin/add-news")}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-blue-700 dark:hover:text-blue-500 transition ${isActive("/admin/add-news")}`}
                >
                  Yangilik qo'shish
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/admin/messages")}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-blue-700 dark:hover:text-blue-500 transition ${isActive("/admin/messages")}`}
                >
                  Murojaat xabarlari
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
