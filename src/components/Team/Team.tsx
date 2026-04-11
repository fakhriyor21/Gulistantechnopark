import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import director from "../../assets/images/team/director.png";
import otabek from "../../assets/images/team/otabek.png";
import maryam from "../../assets/images/team/maryam.png";
import jasur from "../../assets/images/team/jasur.png";
import shakhlo from "../../assets/images/team/shakhlo.png";
import ulugbek from "../../assets/images/team/ulugbeks.jpg";
import { cn } from "../../lib/utils";

type SocialPlatform = "telegram" | "instagram" | "linkedin" | "youtube" | "facebook" | "github";

type TeamSocialLink = {
  platform: SocialPlatform;
  href: string;
  label?: string;
};

type TeamMemberData = {
  name: string;
  role: string;
  image: string;
  socials: TeamSocialLink[];
};

/** Ekranda har doim 4 ta mayda tugma — tartib */
const FOUR_PLATFORMS: SocialPlatform[] = ["telegram", "instagram", "linkedin", "youtube"];

function SocialPlatformIcon({ platform, className }: { platform: SocialPlatform; className?: string }) {
  const c = cn("shrink-0", className);
  switch (platform) {
    case "telegram":
      return <FaTelegramPlane className={c} aria-hidden />;
    case "instagram":
      return <FaInstagram className={c} aria-hidden />;
    case "linkedin":
      return <FaLinkedinIn className={c} aria-hidden />;
    case "youtube":
      return <FaYoutube className={c} aria-hidden />;
    case "facebook":
      return <FaFacebookF className={c} aria-hidden />;
    case "github":
      return <FaGithub className={c} aria-hidden />;
    default:
      return null;
  }
}

function getSocialByPlatform(socials: TeamSocialLink[], platform: SocialPlatform): TeamSocialLink | undefined {
  return socials.find((s) => s.platform === platform);
}

/** Havolalarni keyinroq haqiqiy profillarga almashtiring */
const teamMembers: TeamMemberData[] = [
  {
    name: "Avaz",
    role: "Direktor",
    image: director,
    socials: [
      { platform: "telegram", href: "https://t.me/sirdaryo_texnopark" },
      { platform: "linkedin", href: "https://www.linkedin.com/" },
      { platform: "instagram", href: "https://www.instagram.com/" },
    ],
  },
  {
    name: "Otabek",
    role: "Dasturchi",
    image: otabek,
    socials: [
      { platform: "telegram", href: "https://t.me/" },
      { platform: "github", href: "https://github.com/" },
    ],
  },
  {
    name: "Jasur",
    role: "Mentor",
    image: jasur,
    socials: [
      { platform: "telegram", href: "https://t.me/" },
      { platform: "instagram", href: "https://www.instagram.com/" },
    ],
  },
  {
    name: "Maryam",
    role: "Dizayner",
    image: maryam,
    socials: [
      { platform: "instagram", href: "https://www.instagram.com/" },
      { platform: "telegram", href: "https://t.me/" },
    ],
  },
  {
    name: "Ulugbek",
    role: "Loyiha menejeri",
    image: ulugbek,
    socials: [
      { platform: "linkedin", href: "https://www.linkedin.com/" },
      { platform: "telegram", href: "https://t.me/" },
    ],
  },
  {
    name: "Shaxlo",
    role: "Marketing",
    image: shakhlo,
    socials: [
      { platform: "instagram", href: "https://www.instagram.com/" },
      { platform: "facebook", href: "https://www.facebook.com/" },
    ],
  },
  {
    name: "Anvar",
    role: "O'qituvchi",
    image: director,
    socials: [{ platform: "telegram", href: "https://t.me/" }],
  },
  {
    name: "Sardor",
    role: "Mentor",
    image: jasur,
    socials: [
      { platform: "youtube", href: "https://www.youtube.com/" },
      { platform: "telegram", href: "https://t.me/" },
    ],
  },
  {
    name: "Dilshod",
    role: "Dasturchi",
    image: otabek,
    socials: [
      { platform: "github", href: "https://github.com/" },
      { platform: "telegram", href: "https://t.me/" },
    ],
  },
  {
    name: "Aziza",
    role: "Kontent",
    image: maryam,
    socials: [
      { platform: "instagram", href: "https://www.instagram.com/" },
      { platform: "telegram", href: "https://t.me/" },
    ],
  },
  {
    name: "Jamshid",
    role: "Texnik mutaxassis",
    image: ulugbek,
    socials: [{ platform: "linkedin", href: "https://www.linkedin.com/" }],
  },
  {
    name: "Nodira",
    role: "Administrator",
    image: shakhlo,
    socials: [
      { platform: "telegram", href: "https://t.me/" },
      { platform: "instagram", href: "https://www.instagram.com/" },
    ],
  },
];

export default function Team() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const selected = selectedIndex !== null ? teamMembers[selectedIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  const closeDetail = () => setSelectedIndex(null);

  const overlay =
    mounted &&
    selected &&
    createPortal(
      <div
        className="fixed inset-0 z-[220] flex items-center justify-center bg-[#0a1624]/65 px-3 py-8 backdrop-blur-[3px] sm:px-6 sm:py-10"
        role="presentation"
        onClick={closeDetail}
      >
        <div
          className="team-overlay-panel relative flex w-full max-w-[min(100%,42rem)] flex-col items-center rounded-2xl border border-white/20 bg-[#f7f9fd]/96 px-6 py-9 shadow-[0_40px_120px_-24px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-[#0c1524]/96 dark:shadow-[0_50px_120px_-30px_rgba(0,0,0,0.75)] sm:rounded-3xl sm:px-10 sm:py-11 md:max-w-[min(100%,48rem)] md:px-12 md:py-12"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-overlay-name"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={closeDetail}
            className="absolute right-3 top-3 rounded-full p-2.5 text-[#5f708b] transition hover:bg-black/5 hover:text-[#1f3046] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4aa2] dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-[#8ab8ff]"
            aria-label="Yopish"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>

          <div className="mt-2 flex flex-col items-center text-center">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6eb0ff]/40 to-[#0b4397]/20 blur-lg" aria-hidden />
              <img
                src={selected.image}
                alt=""
                className="relative h-[7.5rem] w-[7.5rem] rounded-full border-[3px] border-white object-cover shadow-lg ring-2 ring-[#dbe7fb] dark:border-[#1a2d4a] dark:ring-[#243a55] sm:h-[8.5rem] sm:w-[8.5rem]"
              />
            </div>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b4aa2] dark:text-[#8ab8ff]">
              {selected.role}
            </p>
            <h3 id="team-overlay-name" className="mt-1 text-2xl font-bold text-[#1f3046] dark:text-white sm:text-3xl">
              {selected.name}
            </h3>

            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a9ab5] dark:text-white/45">
              Ijtimoiy tarmoqlar
            </p>
            <div className="mt-3 flex w-full max-w-xs flex-wrap items-center justify-center gap-4 sm:max-w-none sm:gap-6">
              {FOUR_PLATFORMS.map((platform) => {
                const link = getSocialByPlatform(selected.socials, platform);
                const label =
                  platform === "telegram"
                    ? "Telegram"
                    : platform === "instagram"
                      ? "Instagram"
                      : platform === "linkedin"
                        ? "LinkedIn"
                        : "YouTube";

                if (link) {
                  return (
                    <a
                      key={platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfe0f7] bg-white text-[#0b4aa2] shadow-sm transition hover:scale-105 hover:border-[#0b4397]/50 hover:shadow-md dark:border-[#2a3f5b] dark:bg-[#152238] dark:text-[#93c5fd] dark:hover:border-[#4a7ecf]"
                    >
                      <SocialPlatformIcon platform={platform} className="h-[0.85rem] w-[0.85rem]" />
                      <span className="sr-only">{label}</span>
                    </a>
                  );
                }

                return (
                  <span
                    key={platform}
                    title={`${label} — havola qo'shilmagan`}
                    className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-dashed border-[#d5deeb] bg-[#f0f4fa]/80 text-[#b8c5d9] dark:border-[#2f4058] dark:bg-[#121c2e] dark:text-white/20"
                    aria-hidden
                  >
                    <SocialPlatformIcon platform={platform} className="h-[0.85rem] w-[0.85rem]" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <section className="relative left-1/2 right-1/2 mt-8 w-screen -translate-x-1/2 overflow-x-hidden overflow-y-visible border-y border-[#E7ECF5] bg-[#f7f9fd] py-14 dark:border-[#1d2b3c] dark:bg-[#08101B]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(116,156,207,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(116,156,207,0.06)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(to_right,rgba(116,156,207,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(116,156,207,0.08)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-b from-[#dfe9f8]/40 via-transparent to-[#f7f9fd] dark:from-[#0d2747]/40 dark:to-[#08101B]" />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-10 xl:px-16">
        <h2 className="text-4xl font-black tracking-tight text-[#0b4aa2] dark:text-[#8ab8ff] sm:text-5xl md:text-[3.25rem]">
          Jamoa
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4f6180] dark:text-[#c5d7f0] sm:text-lg sm:leading-8">
          Jamoamiz 50 dan ortiq mutaxassislarni birlashtirgan va biz ular bilan faxrlanamiz. Jamoamiz a&apos;zolari
          katta tajribaga ega o&apos;qituvchilar, dasturchilar, dizaynerlar va marketologlardir.
        </p>

        <div className="relative mt-10 flex justify-center pb-2">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-[min(100%,920px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.55] dark:opacity-40 sm:h-36"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 43px,
                rgba(11, 74, 162, 0.12) 43px,
                rgba(11, 74, 162, 0.12) 44px
              )`,
            }}
            aria-hidden
          />
          <div className="relative z-[1] flex max-w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto overflow-y-visible py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:gap-2.5 [&::-webkit-scrollbar]:hidden">
            {teamMembers.map((member, index) => {
              const isActive = selectedIndex === index;
              return (
                <button
                  key={`${member.name}-${index}`}
                  type="button"
                  onClick={() => setSelectedIndex((prev) => (prev === index ? null : index))}
                  className={cn(
                    "relative shrink-0 rounded-full border-2 transition-all duration-200",
                    "h-[52px] w-[52px] sm:h-14 sm:w-14 lg:h-[3.75rem] lg:w-[3.75rem]",
                    isActive
                      ? "z-[2] scale-110 border-[#0b4aa2] shadow-[0_0_0_4px_rgba(11,74,162,0.2)] dark:border-[#63a1ff] dark:shadow-[0_0_0_4px_rgba(99,161,255,0.25)]"
                      : "border-[#6f8fb8]/45 hover:scale-105 hover:border-[#0b4aa2]/55 dark:border-[#4a6080]/60 dark:hover:border-[#8bb8ff]/70",
                  )}
                  aria-label={`${member.name}, ${member.role}`}
                  aria-pressed={isActive}
                  aria-expanded={isActive}
                >
                  <img
                    src={member.image}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {overlay}
    </section>
  );
}
