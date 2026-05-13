import { useLanguage } from "@/contexts/LanguageContext";
import type { AppLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LABELS: Record<AppLocale, string> = {
  uz: "O'zb",
  en: "EN",
  ru: "RU",
};

type LanguageSwitcherProps = {
  /** Navbar: oq fon / scroll holatiga mos */
  variant?: "navbarOnBlue" | "navbarOnLight" | "mobile";
};

export default function LanguageSwitcher({ variant = "navbarOnBlue" }: LanguageSwitcherProps) {
  const { language, setLanguage, locales } = useLanguage();

  const baseBtn =
    "min-w-[2.75rem] rounded-lg px-2 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors";

  const active =
    variant === "navbarOnLight"
      ? "bg-[#0B4397] text-white shadow-sm"
      : variant === "mobile"
        ? "bg-[#074196] text-white dark:bg-sky-500 dark:text-slate-900"
        : "bg-white/95 text-[#0B4397] shadow-sm dark:bg-white/15 dark:text-white";

  const idle =
    variant === "navbarOnLight"
      ? "text-[#33445F] hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
      : variant === "mobile"
        ? "text-[#1f3b66] hover:bg-[#eef4fd] dark:text-slate-200 dark:hover:bg-white/10"
        : "text-white/90 hover:bg-white/15 dark:hover:bg-white/10";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-xl border p-0.5",
        variant === "navbarOnLight"
          ? "border-slate-200/90 bg-white/90 dark:border-white/10 dark:bg-[#101b2f]/80"
          : variant === "mobile"
            ? "border-slate-200/80 bg-white/95 dark:border-white/10 dark:bg-[#10243e]/90"
            : "border-white/30 bg-white/10",
      )}
      role="group"
      aria-label="Sayt tili"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          className={cn(baseBtn, language === code ? active : idle)}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  );
}
