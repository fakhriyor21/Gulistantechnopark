import { useEffect, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import {
  watchContactMessages,
  watchNews,
} from "@/services/firebaseCms";

export default function AdminDashboard() {
  const [n, setN] = useState({ news: 0, messages: 0 });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubs = [
      watchNews((rows) => {
        setN((prev) => ({ ...prev, news: rows.length }));
        setLoading(false);
      }),
      watchContactMessages((rows) => setN((prev) => ({ ...prev, messages: rows.length }))),
    ];
    return () => unsubs.forEach((u) => u());
  }, []);

  const tiles = [
    { label: "Yangiliklar", value: n.news, accent: "text-sky-600 dark:text-sky-400" },
    { label: "Xabarlar", value: n.messages, accent: "text-emerald-600 dark:text-emerald-400" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#33445F] dark:text-white">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Firebase CMS bo‘yicha qisqa statistika. O‘zgarishlar real vaqtda yangilanadi.
      </p>
      {loading ? (
        <div className="mt-3 flex items-center gap-2 text-slate-500">
          <LiaSpinnerSolid className="size-5 animate-spin" />
          Yuklanmoqda...
        </div>
      ) : null}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#172333] dark:bg-[#0d1829]"
          >
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.label}</p>
            <p className={`mt-2 text-3xl font-bold ${t.accent}`}>{t.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 dark:border-[#172333] dark:bg-[#0d1829] dark:text-slate-300">
        Har bir bo‘limda amallar: <b>qo‘shish</b>, <b>tahrirlash</b>, <b>o‘chirish</b>. Yangiliklarda qo‘shimcha <b>faol/nofaol</b> rejimi mavjud.
      </div>
    </div>
  );
}
