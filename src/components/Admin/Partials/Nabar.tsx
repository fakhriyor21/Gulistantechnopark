import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutAdmin } from "@/lib/adminStorage";
import { Button } from "../../../components/ui/button";

export default function NavbarAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  const links = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/news", label: "News management" },
    { to: "/admin/messages", label: "Messages management" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-700 dark:bg-[#08101B]/95">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <button
          className="text-lg font-semibold text-slate-900 transition hover:text-blue-700 dark:text-white"
          onClick={() => navigate("/admin/dashboard")}
          type="button"
        >
          Texnopark Admin
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
                to={link.to}
              >
                {link.label}
              </Link>
            );
          })}
          <Button onClick={handleLogout} size="sm" variant="destructive">
            Chiqish
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 px-4 py-3 md:hidden dark:border-slate-700">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    active
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                  onClick={() => setOpen(false)}
                  to={link.to}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button onClick={handleLogout} variant="destructive">
              Chiqish
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
