import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 dark:bg-[#060b14] lg:flex-row">
      <AdminSidebar />
      <div className="flex min-h-0 flex-1 flex-col">
        <main className="flex-1 overflow-x-hidden p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
