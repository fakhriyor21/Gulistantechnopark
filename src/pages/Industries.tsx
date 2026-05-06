import { useRef, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import serviceData from "../data/serviceData";
import { FaCheckCircle } from "react-icons/fa";
import NotFound from "./NotFound";
import Contact from "../components/Contact/Contact";
import Quote from "../components/Quote/Quote";
import { PageContent } from "../components/Layout/PageLayout";
import { RiSparklingFill } from "react-icons/ri";
import { FiArrowRight, FiTarget } from "react-icons/fi";

type IndustryTheme = {
  pageBgLight: string;
  pageBgDark: string;
  accent: string;
  accentSoft: string;
  accentDark: string;
  gridLight: string;
  gridDark: string;
  ringLight: string;
  ringDark: string;
  glowA: string;
  glowB: string;
  glowC: string;
  orbA: string;
  orbB: string;
  orbC: string;
  orbD: string;
  scene: "startup" | "fablab" | "agro" | "global" | "software";
  mark: string;
  submark: string;
};

const INDUSTRY_THEME: Record<string, IndustryTheme> = {
  "startaplar-uchun-qollab-quvvatlash": {
    pageBgLight: "linear-gradient(180deg,#dce7ff 0%,#edf3ff 38%,#f7faff 100%)",
    pageBgDark: "linear-gradient(180deg,#060a1b 0%,#0b1430 48%,#081126 100%)",
    accent: "#4f63ff",
    accentSoft: "#edf0ff",
    accentDark: "#93a6ff",
    gridLight: "rgba(74,90,225,0.62)",
    gridDark: "rgba(137,162,255,0.32)",
    ringLight: "rgba(72,88,213,0.74)",
    ringDark: "rgba(147,171,255,0.33)",
    glowA: "#7788ff99",
    glowB: "#7658ff96",
    glowC: "#74afff8c",
    orbA: "radial-gradient(circle_at_30%_30%,#cad2ff_0%,#6275ff_72%)",
    orbB: "radial-gradient(circle_at_30%_30%,#d7f1ff_0%,#5f7dff_72%)",
    orbC: "radial-gradient(circle_at_30%_30%,#b7cbff_0%,#4f58d1_72%)",
    orbD: "radial-gradient(circle_at_30%_30%,#e1ebff_0%,#6e8bff_72%)",
    scene: "startup",
    mark: "STARTUP",
    submark: "INNOVATION LAB",
  },
  "fablab-ishlab-chiqarish": {
    pageBgLight: "linear-gradient(180deg,#d5f7ff 0%,#ebfaff 38%,#f7fdff 100%)",
    pageBgDark: "linear-gradient(180deg,#04131a 0%,#08222e 48%,#071a25 100%)",
    accent: "#0a94b8",
    accentSoft: "#e7f7fb",
    accentDark: "#73dbf6",
    gridLight: "rgba(12,138,176,0.6)",
    gridDark: "rgba(71,216,255,0.3)",
    ringLight: "rgba(10,129,165,0.72)",
    ringDark: "rgba(106,232,255,0.34)",
    glowA: "#46cce88f",
    glowB: "#5aa8ff91",
    glowC: "#7be6ff89",
    orbA: "radial-gradient(circle_at_30%_30%,#b9f2ff_0%,#2ca9d4_72%)",
    orbB: "radial-gradient(circle_at_30%_30%,#d4f8ff_0%,#2a93c0_72%)",
    orbC: "radial-gradient(circle_at_30%_30%,#ace8ff_0%,#3279c1_72%)",
    orbD: "radial-gradient(circle_at_30%_30%,#d8f9ff_0%,#3da3cf_72%)",
    scene: "fablab",
    mark: "FABLAB",
    submark: "PROTOTYPE ZONE",
  },
  "qishloq-xojaligi": {
    pageBgLight: "linear-gradient(180deg,#dff6df 0%,#eff9ef 38%,#f8fcf8 100%)",
    pageBgDark: "linear-gradient(180deg,#071509 0%,#0f2614 48%,#0c1d11 100%)",
    accent: "#3f9c4f",
    accentSoft: "#ebf7ee",
    accentDark: "#85e39a",
    gridLight: "rgba(45,136,58,0.58)",
    gridDark: "rgba(125,229,148,0.29)",
    ringLight: "rgba(47,129,63,0.74)",
    ringDark: "rgba(129,234,154,0.32)",
    glowA: "#6fd87993",
    glowB: "#57bc9b8f",
    glowC: "#89e4b08a",
    orbA: "radial-gradient(circle_at_30%_30%,#d8f4da_0%,#57af69_72%)",
    orbB: "radial-gradient(circle_at_30%_30%,#ecffef_0%,#4d9864_72%)",
    orbC: "radial-gradient(circle_at_30%_30%,#c9efcc_0%,#3b8a56_72%)",
    orbD: "radial-gradient(circle_at_30%_30%,#def8e0_0%,#4faa74_72%)",
    scene: "agro",
    mark: "AGRO",
    submark: "GREEN TECH",
  },
  "xalqaro-aloqalar": {
    pageBgLight: "linear-gradient(180deg,#dcebff 0%,#edf5ff 38%,#f7faff 100%)",
    pageBgDark: "linear-gradient(180deg,#071126 0%,#0b1f3f 48%,#081631 100%)",
    accent: "#2e78db",
    accentSoft: "#e8f1ff",
    accentDark: "#8ec7ff",
    gridLight: "rgba(38,106,190,0.6)",
    gridDark: "rgba(99,180,255,0.3)",
    ringLight: "rgba(43,102,176,0.74)",
    ringDark: "rgba(115,196,255,0.34)",
    glowA: "#69a4ff96",
    glowB: "#588fff93",
    glowC: "#7ecfff8a",
    orbA: "radial-gradient(circle_at_30%_30%,#cfe3ff_0%,#4e83df_72%)",
    orbB: "radial-gradient(circle_at_30%_30%,#dff5ff_0%,#4f79d5_72%)",
    orbC: "radial-gradient(circle_at_30%_30%,#c7d9ff_0%,#395aba_72%)",
    orbD: "radial-gradient(circle_at_30%_30%,#e1ecff_0%,#4a7ad6_72%)",
    scene: "global",
    mark: "GLOBAL",
    submark: "INTERNATIONAL LINK",
  },
  "dasturiy-taminot": {
    pageBgLight: "linear-gradient(180deg,#dde7ff 0%,#eef3ff 38%,#f7f9ff 100%)",
    pageBgDark: "linear-gradient(180deg,#070d20 0%,#111a35 48%,#0a1330 100%)",
    accent: "#365de6",
    accentSoft: "#ebefff",
    accentDark: "#93b2ff",
    gridLight: "rgba(48,83,201,0.62)",
    gridDark: "rgba(119,157,255,0.33)",
    ringLight: "rgba(49,81,191,0.76)",
    ringDark: "rgba(135,172,255,0.34)",
    glowA: "#6887ff98",
    glowB: "#616ff08f",
    glowC: "#76bcff8c",
    orbA: "radial-gradient(circle_at_30%_30%,#d6e0ff_0%,#4f6fe0_72%)",
    orbB: "radial-gradient(circle_at_30%_30%,#e4f2ff_0%,#5877e2_72%)",
    orbC: "radial-gradient(circle_at_30%_30%,#c6d1ff_0%,#4258bd_72%)",
    orbD: "radial-gradient(circle_at_30%_30%,#dfe9ff_0%,#5077df_72%)",
    scene: "software",
    mark: "CODE",
    submark: "SOFTWARE SYSTEMS",
  },
};

function SceneByIndustry({ theme }: { theme: IndustryTheme }) {
  if (theme.scene === "software") {
    return (
      <>
        <span className="industry-3d-code-panel left-[4%] top-[14%]" />
        <span className="industry-3d-code-panel right-[6%] top-[12%] [animation-delay:0.9s]" />
        <span className="industry-3d-bracket left-[18%] top-[34%]">&lt;/&gt;</span>
        <span className="industry-3d-bracket right-[15%] top-[44%]">{`{ }`}</span>
      </>
    );
  }
  if (theme.scene === "fablab") {
    return (
      <>
        <span className="industry-3d-hex left-[8%] top-[20%]" />
        <span className="industry-3d-hex right-[12%] top-[52%] [animation-delay:1.2s]" />
        <span className="industry-3d-gear left-[38%] top-[70%]" />
      </>
    );
  }
  if (theme.scene === "agro") {
    return (
      <>
        <span className="industry-3d-leaf left-[8%] top-[24%]" />
        <span className="industry-3d-leaf right-[8%] top-[40%] [animation-delay:1s]" />
        <span className="industry-3d-hill left-[24%] bottom-[4%]" />
      </>
    );
  }
  if (theme.scene === "global") {
    return (
      <>
        <span className="industry-3d-globe left-[6%] top-[18%]" />
        <span className="industry-3d-globe right-[8%] top-[52%] [animation-delay:1.3s]" />
        <span className="industry-3d-orbit-line left-[34%] top-[70%]" />
      </>
    );
  }
  return (
    <>
      <span className="industry-3d-rocket left-[6%] top-[18%]" />
      <span className="industry-3d-rocket right-[10%] top-[56%] [animation-delay:1.4s]" />
      <span className="industry-3d-launch-line left-[38%] top-[72%]" />
    </>
  );
}

export default function Industries() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const industries = serviceData.find((item) => item.id === id);
  if (industries === undefined) {
    return <NotFound />;
  }

  const sectionCount = industries.section.data.length;
  const shortHighlights = industries.section.data.slice(0, 3).map((item) => item.title);
  const theme = INDUSTRY_THEME[industries.id] ?? INDUSTRY_THEME["dasturiy-taminot"];
  const themeVars = {
    "--industry-page-bg-light": theme.pageBgLight,
    "--industry-page-bg-dark": theme.pageBgDark,
    "--industry-grid-light": theme.gridLight,
    "--industry-grid-dark": theme.gridDark,
    "--industry-ring-light": theme.ringLight,
    "--industry-ring-dark": theme.ringDark,
    "--industry-ring-glow-light": theme.ringLight,
    "--industry-ring-glow2-light": theme.gridLight,
    "--industry-ring-glow-dark": theme.ringDark,
    "--industry-ring-glow2-dark": theme.gridDark,
    "--industry-accent": theme.accent,
    "--industry-accent-soft": theme.accentSoft,
    "--industry-accent-dark": theme.accentDark,
  } as CSSProperties;
  const onPointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sceneRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--industry-tilt-x", (x * 3.2).toFixed(2));
    el.style.setProperty("--industry-tilt-y", (-y * 2.6).toFixed(2));
  };

  const onPointerLeave = () => {
    const el = sceneRef.current;
    if (!el) return;
    el.style.setProperty("--industry-tilt-x", "0");
    el.style.setProperty("--industry-tilt-y", "0");
  };

  return (
    <div className="industry-3d-scene relative min-h-screen overflow-hidden" style={themeVars}>
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20 blur-sm">
        <span className="industry-3d-grid" />
        <span className="industry-3d-radial-grid" />
        <span className="industry-3d-grid-vlines" />
        <span className="industry-3d-glow left-[8%] top-[16%] h-[220px] w-[220px]" style={{ backgroundColor: theme.glowA }} />
        <span
          className="industry-3d-glow right-[10%] top-[32%] h-[260px] w-[260px] [animation-delay:1.1s]"
          style={{ backgroundColor: theme.glowB }}
        />
        <span
          className="industry-3d-glow left-[32%] bottom-[8%] h-[300px] w-[300px] [animation-delay:2s]"
          style={{ backgroundColor: theme.glowC }}
        />

        <span className="industry-3d-ring left-[-110px] top-[120px] h-[320px] w-[320px]" />
        <span className="industry-3d-ring right-[-130px] top-[38%] h-[360px] w-[360px]" />
        <span className="industry-3d-ring bottom-[-150px] left-[30%] h-[420px] w-[420px]" />
        <span className="industry-3d-wireframe left-[4%] top-[24%]" />
        <span className="industry-3d-wireframe right-[6%] top-[56%] [animation-delay:1.8s]" />
        <span className="industry-3d-wireframe left-[40%] top-[74%] [animation-delay:0.9s]" />
        <span className="industry-3d-wireframe industry-3d-wireframe-strong left-[72%] top-[18%] [animation-delay:0.4s]" />
        <span className="industry-3d-wireframe industry-3d-wireframe-strong left-[16%] top-[62%] [animation-delay:2.4s]" />
        <SceneByIndustry theme={theme} />
        <span className="industry-3d-theme-mark">{theme.mark}</span>
        <span className="industry-3d-theme-submark">{theme.submark}</span>
        <span className="industry-3d-theme-band">{theme.mark} · {theme.submark} · {theme.mark}</span>

        <span className="industry-3d-orb left-[8%] top-[20%] h-24 w-24" style={{ backgroundImage: theme.orbA }} />
        <span className="industry-3d-orb right-[14%] top-[16%] h-20 w-20 [animation-delay:1.2s]" style={{ backgroundImage: theme.orbB }} />
        <span className="industry-3d-orb right-[20%] bottom-[22%] h-16 w-16 [animation-delay:2.2s]" style={{ backgroundImage: theme.orbC }} />
        <span className="industry-3d-orb left-[22%] bottom-[14%] h-28 w-28 [animation-delay:0.6s]" style={{ backgroundImage: theme.orbD }} />
      </div>

      <div
        ref={sceneRef}
        className="industry-3d-world relative z-10"
        style={{ "--industry-tilt-x": 0, "--industry-tilt-y": 0 } as CSSProperties}
        onMouseMove={onPointerMove}
        onMouseLeave={onPointerLeave}
      >
      <div className="px-4 pt-20 sm:px-6 lg:px-10">
        <div className="industry-3d-plane mx-auto max-w-5xl" style={{ "--industry-z": "25px" } as CSSProperties}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--industry-accent)]/35 bg-[var(--industry-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--industry-accent)] dark:border-[var(--industry-accent-dark)]/40 dark:bg-white/10 dark:text-[var(--industry-accent-dark)]">
            <RiSparklingFill className="text-sm" />
            Xizmat yo'nalishi
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-[#617592] dark:text-slate-300">
            <Link to="/services" className="hover:text-[var(--industry-accent)] dark:hover:text-[var(--industry-accent-dark)]">
              Xizmatlar
            </Link>
            <span>/</span>
            <span className="font-medium text-[#1f3559] dark:text-white">{industries.title}</span>
          </div>
        </div>

        <div
          className="industry-3d-plane industry-3d-glass relative mx-auto my-3 max-w-3xl overflow-hidden rounded-2xl lg:my-5"
          style={{ "--industry-z": "70px" } as CSSProperties}
        >
          <img
            alt={industries.title}
            src={industries.icon}
            className="absolute left-0 top-0 size-full rounded-2xl object-cover opacity-65"
          />
          <div className="absolute left-0 top-0 size-full rounded-2xl bg-[linear-gradient(110deg,rgba(5,26,58,0.9)_5%,rgba(10,53,115,0.75)_45%,rgba(0,0,0,0.6)_100%)]" />
          <div className="relative grid gap-3 px-4 py-5 lg:grid-cols-[1fr_auto] lg:items-end lg:px-5 lg:py-5">
            <div className="industry-3d-depth max-w-lg">
              <h1 className="text-lg font-bold leading-snug text-white md:text-xl lg:text-[1.45rem] drop-shadow-[0_10px_18px_rgba(0,0,0,0.3)]">
                {industries.name}
              </h1>
              <p className="mt-1.5 max-w-lg text-xs leading-relaxed text-slate-100/90 md:text-[13px]">
                {industries.description}
              </p>
            </div>

            <div className="industry-3d-depth-sm grid max-w-[min(100%,17rem)] shrink-0 grid-cols-2 gap-2 text-white lg:max-w-[18rem]">
              <div className="industry-3d-glass rounded-xl border border-white/25 bg-white/10 p-2.5 text-center backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.12em] text-sky-100/80">Bo'limlar</p>
                <p className="mt-0.5 text-lg font-bold">{sectionCount}</p>
              </div>
              <div className="industry-3d-glass rounded-xl border border-white/25 bg-white/10 p-2.5 text-center backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.12em] text-sky-100/80">Yo'nalish</p>
                <p className="mt-0.5 text-[11px] font-semibold leading-snug">{industries.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ "--industry-z": "45px" } as React.CSSProperties}>
        <PageContent className="industry-3d-plane pt-2">
        <div className="industry-3d-glass grid gap-5 rounded-2xl border border-slate-200/70 bg-white/80 p-5 pb-8 md:grid-cols-[1fr_auto] md:items-center dark:border-slate-700 dark:bg-[#0d1829]/75">
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d2def0] bg-[#f3f7fd] px-3 py-1 text-xs font-semibold text-[#33588f] dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <FiTarget />
              Strategik imkoniyatlar
            </div>
            <h2 className="text-xl font-bold text-[#33445F] dark:text-white md:text-2xl">
              {industries.section.title}
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--industry-accent)] bg-[var(--industry-accent)] px-5 text-sm font-semibold text-white transition hover:brightness-95 dark:text-[#030712]"
          >
            Hamkorlikni boshlash
            <FiArrowRight />
          </Link>
        </div>

        <div className="mt-6 grid gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-[#0d1829]/90 md:grid-cols-3">
          {shortHighlights.map((title) => (
            <div
              key={title}
              className="industry-3d-card rounded-xl bg-[var(--industry-accent-soft)] px-3 py-3 text-sm font-medium text-[#2e4b76] dark:bg-white/5 dark:text-slate-200"
            >
              {title}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pb-2 pt-8">
          <h2 className="text-xl font-bold text-[#33445F] dark:text-white md:text-2xl">
            Xizmat doirasidagi imkoniyatlar
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#64748b] dark:text-white/80 md:text-[0.9375rem]">
            Har bir yo'nalish bo'yicha amaliy yechimlar va mutaxassislar qo'llab-quvvatlovi taqdim etiladi.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 pt-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.section.data.map((item, index) => (
            <div
              className="industry-3d-card group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_14px_30px_-18px_rgba(28,60,113,0.45)] transition-all hover:border-[#a7c1e8] dark:border-white/10 dark:bg-[#0d1829]/90 dark:hover:border-sky-500/35"
              key={index}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--industry-accent-soft)] text-[var(--industry-accent)] dark:bg-[var(--industry-accent-dark)]/20 dark:text-[var(--industry-accent-dark)]">
                <FaCheckCircle className="text-lg" />
              </div>
              <div className="mt-4 text-lg font-bold text-[#354866] dark:text-white">
                {item.title}
              </div>
              <div className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b] dark:text-white/80">
                {item.description}
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--industry-accent)] transition group-hover:gap-2 dark:text-[var(--industry-accent-dark)]"
              >
                Batafsil maslahat
                <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </PageContent>

      <div className="industry-3d-plane relative px-4 pb-10 pt-10 lg:px-10 lg:pt-16" style={{ "--industry-z": "32px" } as CSSProperties}>
        <div className="mx-auto max-w-6xl">
          <Quote title={industries.section.description} />
        </div>
      </div>
      <div className="industry-3d-plane relative px-4 pb-16 lg:px-10" style={{ "--industry-z": "24px" } as CSSProperties}>
        <div className="mx-auto max-w-6xl">
          <Contact />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

