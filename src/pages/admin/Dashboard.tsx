import { Link } from "react-router-dom";
import NavbarAdmin from "../../components/Admin/Partials/Nabar";
import { useEffect, useState } from "react";
import { getAdminNews, getContactMessages } from "@/lib/adminStorage";

export default function Dashboard() {
  const [newsCount, setNewsCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const news = getAdminNews();
    const messages = getContactMessages();
    setNewsCount(news.length);
    setMessageCount(messages.length);
    setUnreadCount(messages.filter((item) => !item.read).length);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08101B] pb-16">
      <NavbarAdmin />
      <div className="mx-auto w-full max-w-screen-2xl px-4 pb-10 pt-24 sm:px-6 lg:px-10">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Saytdagi localStorage ma'lumotlari bo'yicha umumiy holat.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Jami yangiliklar</p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{newsCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Jami xabarlar</p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{messageCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">O'qilmagan xabarlar</p>
            <p className="mt-2 text-3xl font-bold text-blue-700 dark:text-blue-400">{unreadCount}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900"
            to="/admin/news"
          >
            <p className="text-lg font-semibold text-slate-900 dark:text-white">News Management</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Yangilik qo'shish, o'chirish va public news sahifasini boshqarish.
            </p>
          </Link>
          <Link
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900"
            to="/admin/messages"
          >
            <p className="text-lg font-semibold text-slate-900 dark:text-white">Messages Management</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Contact form orqali yuborilgan xabarlarni ko'rish va boshqarish.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
