import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Mail,
  Newspaper,
  FileText,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const items = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/messages", label: "Xabarlar", icon: Mail },
  { to: "/admin/news", label: "Yangiliklar", icon: Newspaper },
  { to: "/admin/about", label: "Biz haqimizda", icon: FileText },
];

export default function AdminSidebar() {
  const { logOut } = useAuth();

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-[#172333] bg-[#081426] text-white lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <div className="border-b border-white/10 px-5 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">Texnopark</p>
        <p className="mt-1 text-lg font-bold leading-tight">Admin panel</p>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                isActive
                  ? "bg-[#0B4397] text-white shadow-lg shadow-black/25"
                  : "text-white/75 hover:bg-white/10 hover:text-white",
              )
            }
            end={to === "/admin/dashboard"}
          >
            <Icon className="size-5 shrink-0 opacity-90" aria-hidden />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-white/10 p-3">
        <Button
          type="button"
          variant="destructive"
          className="w-full justify-start gap-2 bg-red-600/90 hover:bg-red-700"
          onClick={() => void logOut()}
        >
          <LogOut className="size-4" />
          Chiqish
        </Button>
      </div>
    </aside>
  );
}
