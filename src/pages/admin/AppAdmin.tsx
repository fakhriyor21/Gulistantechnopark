import { Link } from "react-router-dom";

import { djangoAdminUrl } from "@/lib/apiOrigin";

import { useLanguage, useMessages } from "@/contexts/LanguageContext";



export default function AppAdmin() {

  const { language } = useLanguage();

  const m = useMessages();

  const adminUrl = djangoAdminUrl(language);



  return (

    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a1624] px-6 py-16 text-white">

      <div className="max-w-lg rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center shadow-xl backdrop-blur-sm">

        <h1 className="text-2xl font-bold tracking-tight">{m.admin.title}</h1>

        <p className="mt-4 text-sm leading-relaxed text-white/75">{m.admin.body}</p>

        <a

          href={adminUrl}

          target="_blank"

          rel="noopener noreferrer"

          className="mt-8 inline-flex rounded-xl bg-[#0B4397] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#09367a]"

        >

          {m.admin.cta}

        </a>

        <p className="mt-6 text-xs text-white/50 break-all">{adminUrl}</p>

        <Link to="/" className="mt-8 inline-block text-sm text-sky-300 hover:underline">

          {m.admin.back}

        </Link>

      </div>

    </div>

  );

}

