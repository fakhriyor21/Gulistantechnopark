import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  djangoGetAboutUs,
  djangoListAboutCompany,
  djangoListHistory,
  djangoListFaqsPublic,
  djangoGetQuoteLatest,
  djangoListTeam,
  stripHtml,
  type DjangoAboutUs,
  type DjangoAboutCompany,
  type DjangoHistoryRow,
  type DjangoFaqRow,
  type DjangoQuoteRow,
} from "@/services/djangoCms";
import type { TeamMemberData } from "@/components/Team/Team";
import groupimage from "../assets/images/home/imagegroup.png";
import director from "../assets/images/hero/director.png";
import logo from "../assets/images/logo/logo-crup.png";
import citation from "../assets/images/hero/citation.svg";
import scroll1 from "../assets/images/about-scroll/scroll-1.png";
import scroll2 from "../assets/images/about-scroll/scroll-2.png";
import scroll3 from "../assets/images/about-scroll/scroll-3.png";
import scroll4 from "../assets/images/about-scroll/scroll-4.png";
import scroll5 from "../assets/images/about-scroll/scroll-5.png";
import scroll6 from "../assets/images/about-scroll/scroll-6.png";
import Team from "../components/Team/Team";
import OpenVideo from "../components/OpenVideo/OpenVideo";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaLayerGroup,
  FaUsers,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutPageI18n, localeDateOptions, localeTag } from "@/locales/aboutPageI18n";

/** OpenVideo dialog bilan bir xil YouTube roliki */
const ABOUT_HERO_VIDEO_ID = "-I8bzlX8_IM";

function AboutHeroMedia({
  posterSrc,
  posterAlt,
  videoTitle,
}: {
  posterSrc: string;
  posterAlt: string;
  videoTitle: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setShowVideo(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <>
      <img
        src={posterSrc}
        alt={showVideo ? "" : posterAlt}
        aria-hidden={showVideo}
        className="absolute inset-0 h-full w-full object-cover object-center [transform:translateZ(0)]"
      />
      {showVideo ? (
        <iframe
          title={videoTitle}
          className="pointer-events-none absolute left-1/2 top-1/2 z-[1] border-0 [transform:translate(-50%,-50%)]"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100%",
            minWidth: "177.77vh",
          }}
          src={`https://www.youtube.com/embed/${encodeURIComponent(ABOUT_HERO_VIDEO_ID)}?autoplay=1&mute=1&loop=1&playlist=${encodeURIComponent(ABOUT_HERO_VIDEO_ID)}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      ) : null}
    </>
  );
}

const scrollImages = [scroll1, scroll2, scroll3, scroll4, scroll5, scroll6];
/** 3 ta bir xil ketma-ketlik — scroll transform bitta tsikl = scrollWidth / 3 */
const scrollImagesLooped = [...scrollImages, ...scrollImages, ...scrollImages];
/** Ketma-ket kengliklar (bir tsikl 4 ta plitka) — kengroq */
const rowOneSizes = [{ w: "42vw" }, { w: "44vw" }, { w: "40vw" }, { w: "38vw" }];
/** 2-qator — yana kengroq plitkalar, boshqacha ritm */
const rowTwoSizes = [{ w: "40vw" }, { w: "48vw" }, { w: "44vw" }, { w: "36vw" }];
/** 2-qator rasmlari tartibi (1-qatordan farq qiladi) */
const rowTwoImages = [scroll4, scroll1, scroll6, scroll2, scroll5, scroll3];
const rowTwoImagesLooped = [...rowTwoImages, ...rowTwoImages, ...rowTwoImages];
/** Har qator: uzunroq va katta ekranda yuqori px limit */
const mosaicRowClass =
  "relative shrink-0 h-[min(64vh,720px)] overflow-hidden sm:h-[min(70vh,800px)] lg:h-[min(76vh,900px)] xl:h-[min(82vh,1020px)]";

export default function About() {
  const { language } = useLanguage();
  const a = aboutPageI18n[language];
  const [djangoBundle, setDjangoBundle] = useState<{
    aboutUs: DjangoAboutUs | null;
    company: DjangoAboutCompany | null;
    history: DjangoHistoryRow[];
    faqs: DjangoFaqRow[];
    quote: DjangoQuoteRow | null;
    team: TeamMemberData[];
    ready: boolean;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const [aboutUs, companyList, history, faqs, quote, team] = await Promise.all([
          djangoGetAboutUs(),
          djangoListAboutCompany(),
          djangoListHistory(),
          djangoListFaqsPublic(),
          djangoGetQuoteLatest(),
          djangoListTeam(),
        ]);
        if (cancelled) return;
        setDjangoBundle({
          aboutUs,
          company: companyList[0] ?? null,
          history,
          faqs,
          quote,
          team: team.map((t) => ({
            name: t.full_name,
            role: t.position,
            image: t.img || director,
            socials: [],
          })),
          ready: true,
        });
      } catch {
        if (cancelled) return;
        setDjangoBundle({
          aboutUs: null,
          company: null,
          history: [],
          faqs: [],
          quote: null,
          team: [],
          ready: true,
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [language]);

  const marqueeRef = useRef<HTMLElement | null>(null);
  const row1TrackRef = useRef<HTMLDivElement | null>(null);
  const row2TrackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [row1CycleWidth, setRow1CycleWidth] = useState(0);
  const [row2CycleWidth, setRow2CycleWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (row1TrackRef.current) {
        setRow1CycleWidth(row1TrackRef.current.scrollWidth / 3);
      }
      if (row2TrackRef.current) {
        setRow2CycleWidth(row2TrackRef.current.scrollWidth / 3);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (row1TrackRef.current) ro.observe(row1TrackRef.current);
    if (row2TrackRef.current) ro.observe(row2TrackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!marqueeRef.current) return;
      const rect = marqueeRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport;
      const end = -rect.height;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollProgress(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const django = djangoBundle?.ready ? djangoBundle : null;
  const locTag = localeTag(language);
  const locOpts = localeDateOptions(language);
  const timelineToShow =
    django && django.history.length > 0
      ? django.history.map((h) => ({
          date: new Date(h.created_at).toLocaleDateString(locTag, locOpts),
          title: h.title,
          text: stripHtml(h.body_small),
        }))
      : a.timeline;
  const faqToShow =
    django && django.faqs.length > 0 ? django.faqs.map((f) => ({ q: f.question, a: f.answer })) : a.faq;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f9fd] dark:bg-[#08101B]">
      <section className="relative left-1/2 right-1/2 -mt-[5.5rem] w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[#061018] pt-[5.5rem] sm:-mt-24 sm:pt-24">
        <div className="relative mx-auto min-h-[min(78vh,760px)] w-full max-w-[1920px] overflow-hidden rounded-b-[1.35rem] shadow-[0_28px_90px_-28px_rgba(11,74,162,0.45)] sm:min-h-[min(84vh,840px)] sm:rounded-b-[clamp(1.35rem,3vw,2.5rem)]">
          <AboutHeroMedia posterSrc={groupimage} posterAlt={a.heroPosterAlt} videoTitle={a.videoTitle} />
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,transparent_20%,rgba(6,16,24,0.5)_100%)] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_18%,transparent_25%,rgba(0,0,0,0.55)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#040a10]/90 via-[#061018]/25 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-black/65 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-black/40 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[2] rounded-b-[1.35rem] ring-1 ring-inset ring-white/[0.07] sm:rounded-b-[clamp(1.35rem,3vw,2.5rem)]"
            aria-hidden
          />

          <div className="relative z-[3] flex min-h-[min(70vh,640px)] w-full flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[min(76vh,720px)] sm:px-6 sm:pb-14 sm:pt-28 lg:px-12 xl:px-16">
            <div className="mx-auto w-full max-w-[1180px] text-center lg:text-left">
              <h1 className="text-2xl font-bold leading-tight text-white [text-shadow:0_2px_36px_rgba(0,0,0,0.55),0_1px_3px_rgba(0,0,0,0.95)] sm:text-3xl sm:leading-tight lg:max-w-3xl lg:text-[2.35rem] lg:leading-[1.1] xl:text-[2.65rem]">
                {a.heroH1}
              </h1>
            </div>
          </div>
        </div>

        <nav
          className="relative z-[4] -mt-6 px-4 pb-2 sm:-mt-8 sm:px-6 lg:px-10 xl:px-16"
          aria-label={a.navAria}
        >
          <div className="mx-auto max-w-[1160px] overflow-hidden rounded-2xl border border-[#dbe7fb]/90 bg-gradient-to-br from-white via-[#f7faff] to-[#eef4ff] shadow-[0_22px_60px_-18px_rgba(11,74,162,0.22),0_0_0_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-xl dark:border-[#1e3048] dark:from-[#0d1522] dark:via-[#0a121c] dark:to-[#070f18] dark:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] sm:rounded-3xl">
            <div
              className="h-1 w-full bg-gradient-to-r from-[#0b4397]/0 via-[#0b4397]/70 to-[#2563eb]/0 dark:from-[#3b82f6]/0 dark:via-[#60a5fa]/50 dark:to-[#3b82f6]/0"
              aria-hidden
            />
            <div className="flex flex-col gap-6 p-5 sm:p-7 lg:flex-row lg:items-stretch lg:justify-between lg:gap-8 lg:p-8">
              <div className="flex min-w-0 flex-1 flex-col gap-4 lg:max-w-[54%]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#0b4397] to-[#1d6fd4] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-md shadow-[#0b4397]/25">
                    {a.navEyebrow}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-[#3d4f66] dark:text-white/80">
                  {django?.company?.text
                    ? stripHtml(django.company.text).slice(0, 420)
                    : a.stubFallback}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4 lg:shrink-0">
                <div className="grid flex-1 grid-cols-3 gap-2 sm:min-w-0 sm:flex-1 sm:gap-3 lg:max-w-md">
                  <div className="group flex flex-col items-center rounded-2xl border border-[#dbe7fb] bg-white/90 px-2 py-3 text-center shadow-sm transition hover:border-[#0b4397]/35 hover:shadow-md dark:border-[#243a55] dark:bg-[#0f1a2c]/90 dark:hover:border-[#3d5a80] sm:px-4 sm:py-4">
                    <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b4397]/15 to-[#2563eb]/10 text-[#0b4aa2] dark:from-[#3b82f6]/20 dark:to-[#1d4ed8]/15 dark:text-[#93c5fd]">
                      <FaUsers className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-lg font-extrabold tabular-nums text-[#0b4aa2] dark:text-[#8ab8ff] sm:text-xl">
                      {django?.aboutUs != null
                        ? django.aboutUs.students.toLocaleString(locTag)
                        : "+50,000"}
                    </span>
                    <span className="mt-0.5 text-[11px] font-medium text-[#5f708b] dark:text-white/65">{a.statsStudents}</span>
                  </div>
                  <div className="group flex flex-col items-center rounded-2xl border border-[#dbe7fb] bg-white/90 px-2 py-3 text-center shadow-sm transition hover:border-[#0b4397]/35 hover:shadow-md dark:border-[#243a55] dark:bg-[#0f1a2c]/90 dark:hover:border-[#3d5a80] sm:px-4 sm:py-4">
                    <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b4397]/15 to-[#2563eb]/10 text-[#0b4aa2] dark:from-[#3b82f6]/20 dark:to-[#1d4ed8]/15 dark:text-[#93c5fd]">
                      <FaLayerGroup className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-lg font-extrabold tabular-nums text-[#0b4aa2] dark:text-[#8ab8ff] sm:text-xl">
                      {django?.aboutUs != null ? django.aboutUs.direction : "20+"}
                    </span>
                    <span className="mt-0.5 text-[11px] font-medium text-[#5f708b] dark:text-white/65">{a.statsDirection}</span>
                  </div>
                  <div className="group flex flex-col items-center rounded-2xl border border-[#dbe7fb] bg-white/90 px-2 py-3 text-center shadow-sm transition hover:border-[#0b4397]/35 hover:shadow-md dark:border-[#243a55] dark:bg-[#0f1a2c]/90 dark:hover:border-[#3d5a80] sm:px-4 sm:py-4">
                    <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b4397]/15 to-[#2563eb]/10 text-[#0b4aa2] dark:from-[#3b82f6]/20 dark:to-[#1d4ed8]/15 dark:text-[#93c5fd]">
                      <FaChalkboardTeacher className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-lg font-extrabold tabular-nums text-[#0b4aa2] dark:text-[#8ab8ff] sm:text-xl">
                      {django?.aboutUs != null ? django.aboutUs.specialist : "50+"}
                    </span>
                    <span className="mt-0.5 text-[11px] font-medium text-[#5f708b] dark:text-white/65">{a.statsSpecialist}</span>
                  </div>
                </div>

                <div className="flex justify-center sm:justify-end lg:items-center">
                  <OpenVideo triggerClassName="h-11 gap-2 rounded-xl border-0 bg-gradient-to-r from-[#0b4397] to-[#1d6fd4] px-6 text-sm font-semibold text-white shadow-lg shadow-[#0b4397]/35 hover:from-[#093680] hover:to-[#185cbd] hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <main className="mx-auto w-full max-w-[1180px] px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E7ECF5] bg-white p-8 shadow-sm dark:border-[#1f2f44] dark:bg-[#0d1829]">
            <h2 className="text-2xl font-bold text-[#2a3d5f] dark:text-white lg:text-3xl">
              {django?.company?.title ?? a.sectionTitleDefault}
            </h2>
            {django?.company?.text ? (
              <div
                className="prose prose-sm mt-4 max-w-none text-[#60708b] dark:prose-invert dark:text-white/70"
                dangerouslySetInnerHTML={{ __html: django.company.text }}
              />
            ) : (
              <p className="mt-4 leading-relaxed text-[#60708b] dark:text-white/70">{a.fallbackBody}</p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#4e6382] dark:text-white/70">
              <span className="inline-flex items-center gap-2">
                <FaUsers /> {a.tagYouth}
              </span>
              <span className="inline-flex items-center gap-2">
                <FaChalkboardTeacher /> {a.tagMentors}
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E7ECF5] bg-white p-8 shadow-sm dark:border-[#1f2f44] dark:bg-[#0d1829]">
            <h3 className="text-xl font-bold text-[#2a3d5f] dark:text-white lg:text-3xl">{a.benefitsTitle}</h3>
            <div className="mt-6 space-y-4">
              {a.benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#edf2fb] bg-[#f9fbff] p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#253a57] dark:bg-[#0f1d31]"
                >
                  <h4 className="font-semibold text-[#2e4161] dark:text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-[#637590] dark:text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10">
          <Team members={django && django.team.length > 0 ? django.team : undefined} />
        </div>

        <section
          ref={marqueeRef}
          className="relative left-1/2 right-1/2 mt-8 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-[#E7ECF5] bg-[#f7f9fd] dark:border-[#1d2b3c] dark:bg-[#08101B]"
        >
          <div className="about-mosaic about-mosaic--hero relative isolate w-full overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-white/6 dark:bg-black/18"
              aria-hidden
            />
            <div className={`relative z-[2] marquee-row marquee-row--hero ${mosaicRowClass}`}>
              <div
                ref={row1TrackRef}
                className="marquee-track marquee-track--mosaic marquee-track--mosaic-gap relative z-0 h-full min-h-full"
                style={{
                  /* 1-qator onga: (p-1)*W — scroll 0→1 da -W→0, uzluksiz loop */
                  transform: `translateX(${row1CycleWidth ? (scrollProgress - 1) * row1CycleWidth : 0}px)`,
                }}
              >
                {scrollImagesLooped.map((image, idx) => (
                  <div
                    key={`r1-${idx}`}
                    className="marquee-item marquee-item--mosaic h-full min-h-0 self-stretch"
                    style={{
                      width: rowOneSizes[idx % rowOneSizes.length].w,
                    }}
                  >
                    <img
                      src={image}
                      alt={a.mosaicAlt}
                      className="block h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative z-[2] marquee-row marquee-row--hero ${mosaicRowClass}`}>
              <div
                ref={row2TrackRef}
                className="marquee-track marquee-track--mosaic marquee-track--mosaic-gap relative z-0 h-full min-h-full"
                style={{
                  /* 2-qator chapga (-p·W); 1-qator bilan qarama-qarshi */
                  transform: `translateX(${row2CycleWidth ? -scrollProgress * row2CycleWidth : 0}px)`,
                }}
              >
                {rowTwoImagesLooped.map((image, idx) => (
                  <div
                    key={`r2-${idx}`}
                    className="marquee-item marquee-item--mosaic h-full min-h-0 self-stretch"
                    style={{
                      width: rowTwoSizes[idx % rowTwoSizes.length].w,
                    }}
                  >
                    <img
                      src={image}
                      alt={a.mosaicAlt}
                      className="block h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute top-1/2 left-0 right-0 z-20 flex -translate-y-1/2 justify-center px-4 sm:px-8">
              <div
                className="pointer-events-auto flex aspect-[16/10] w-[min(94vw,440px)] flex-col overflow-hidden rounded-2xl bg-black/45 shadow-[0_32px_100px_-24px_rgba(0,0,0,0.65)] ring-1 ring-inset ring-white/10 backdrop-blur-2xl backdrop-saturate-150 sm:w-[min(90vw,480px)] md:w-[min(86vw,520px)] lg:w-[min(82vw,560px)]"
                style={{
                  transform: `translateY(${(scrollProgress - 0.5) * 10}px)`,
                }}
              >
                <div className="flex min-h-0 flex-1 flex-col px-3 pb-3 pt-4 sm:px-4 sm:pb-3.5 sm:pt-4 md:px-5 md:pb-4">
                  <div className="flex min-h-0 flex-1 flex-col items-center justify-center text-center">
                    <img
                      src={citation}
                      alt=""
                      className="mb-2 h-5 w-5 opacity-80 sm:mb-2.5 sm:h-6 sm:w-6"
                    />
                    <p
                      className="text-balance text-sm font-medium leading-snug text-white sm:text-base md:text-lg md:leading-snug lg:text-xl lg:leading-snug"
                      dangerouslySetInnerHTML={{
                        __html:
                          django?.quote?.body?.trim() || a.quoteFallbackHtml,
                      }}
                    />
                  </div>
                  <div className="mt-3 flex shrink-0 items-end justify-between gap-2.5 sm:mt-3.5">
                    <div className="flex min-w-0 items-center gap-2.5 text-left">
                      <img
                        src={django?.quote?.img || director}
                        alt={a.directorAlt}
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white/20 object-cover sm:h-12 sm:w-12"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white sm:text-sm">
                          {django?.quote?.full_name ?? a.quoteNameDefault}
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/70 sm:text-xs">
                          {django?.quote?.position ?? a.quoteRoleDefault}
                        </p>
                      </div>
                    </div>
                    <img
                      alt=""
                      src={logo}
                      className="h-11 w-auto max-w-[100px] shrink-0 opacity-90 brightness-0 invert sm:h-12 sm:max-w-[120px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-[#E7ECF5] bg-white p-8 shadow-sm dark:border-[#1f2f44] dark:bg-[#0d1829]">
          <h3 className="text-2xl font-bold text-[#2a3d5f] dark:text-white lg:text-3xl">
            {a.historyTitle}
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {timelineToShow.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className="relative rounded-2xl border border-[#e9effb] bg-[#f8fbff] p-5 pl-12 dark:border-[#243954] dark:bg-[#0f1c30]"
              >
                <span className="absolute top-6 left-5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#dce9ff] text-[#0b4aa2] dark:bg-[#1c3250] dark:text-[#8ab8ff]">
                  <FaCalendarAlt className="text-xs" />
                </span>
                <p className="text-sm font-semibold text-[#0b4aa2] dark:text-[#8ab8ff]">{item.date}</p>
                <h4 className="mt-2 text-lg font-bold text-[#2e4161] dark:text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#637590] dark:text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E7ECF5] bg-white p-8 shadow-sm dark:border-[#1f2f44] dark:bg-[#0d1829]">
            <h3 className="text-2xl font-bold text-[#2a3d5f] dark:text-white">{a.faqSectionTitle}</h3>
            <div className="mt-5 space-y-3">
              {faqToShow.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-[#e8eef9] bg-[#f9fbff] p-4 open:shadow-sm dark:border-[#243954] dark:bg-[#0f1d31]"
                >
                  <summary className="cursor-pointer list-none font-medium text-[#304361] dark:text-white">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-[#637590] dark:text-white/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E7ECF5] bg-white p-8 shadow-sm dark:border-[#1f2f44] dark:bg-[#0d1829]">
            <h3 className="text-2xl font-bold text-[#2a3d5f] dark:text-white">{a.requestTitle}</h3>
            <p className="mt-2 text-sm text-[#637590] dark:text-white/70">{a.requestSubtitle}</p>
            <form className="mt-6 space-y-3">
              <input
                className="w-full rounded-xl border border-[#dbe5f6] bg-[#f9fbff] px-4 py-3 text-sm text-[#2f4363] outline-none transition focus:border-[#0b4aa2] dark:border-[#2a3f5b] dark:bg-[#0f1d31] dark:text-white"
                placeholder={a.formPlaceholderName}
              />
              <input
                className="w-full rounded-xl border border-[#dbe5f6] bg-[#f9fbff] px-4 py-3 text-sm text-[#2f4363] outline-none transition focus:border-[#0b4aa2] dark:border-[#2a3f5b] dark:bg-[#0f1d31] dark:text-white"
                placeholder={a.formPlaceholderPhone}
              />
              <select className="w-full rounded-xl border border-[#dbe5f6] bg-[#f9fbff] px-4 py-3 text-sm text-[#2f4363] outline-none transition focus:border-[#0b4aa2] dark:border-[#2a3f5b] dark:bg-[#0f1d31] dark:text-white">
                <option>{a.formTimePrompt}</option>
                <option>8:00 - 10:00</option>
                <option>10:00 - 12:00</option>
                <option>14:00 - 16:00</option>
              </select>
              <label className="flex items-center gap-2 text-sm text-[#5f708b] dark:text-white/70">
                <input type="checkbox" />
                {a.formAgree}
              </label>
              <button type="button" className="w-full rounded-xl bg-[#0b4aa2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a3f8b]">
                {a.formSubmit}
              </button>
            </form>
          </div>
        </section>

        
      </main>
    </div>
  );
}
