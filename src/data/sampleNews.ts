import coverA from "@/assets/images/home/itcourse.jpg";
import coverB from "@/assets/images/projects/work1.png";
import coverC from "@/assets/images/home/consulting.jpg";

/** Ro‘yxat sahifalari uchun umumiy model */
export type PublicNewsItem = {
  id: number;
  title: string;
  description: string;
  datatime: string;
  file: string[];
  /** Haqiqiy yozuvlar bilan aralashmasligi uchun kartada havola yo‘q */
  demo?: boolean;
  demoImageSrc?: string;
};

/**
 * API dan yangilik kelmaganda ko‘rinadigan namuna (dizayn ko‘rinishi uchun).
 */
export const SAMPLE_NEWS: PublicNewsItem[] = [
  {
    id: 91001,
    demo: true,
    demoImageSrc: coverA,
    datatime: "2026-03-22T10:00:00.000Z",
    title: "Inkubatsiya dasturi: tanlov g‘oliblari e’lon qilindi",
    description:
      "<p>Texnopark va hamkor tashkilotlar qoʻllab‑quvvatlashi ostida <strong>15 ta startap</strong> yangi bosqichga oʻtdi.</p>",
    file: [],
  },
  {
    id: 91002,
    demo: true,
    demoImageSrc: coverB,
    datatime: "2026-04-02T14:30:00.000Z",
    title: "FABLAB’da prototyping masterklass",
    description:
      "<p>Ishtirokchi faollarga 3D‑chizma, CNC va prototip sinovlari boʻyicha amaliy mashgʻulotlar oʻtkazildi.</p>",
    file: [],
  },
  {
    id: 91003,
    demo: true,
    demoImageSrc: coverC,
    datatime: "2026-04-15T09:15:00.000Z",
    title: "Xalqaro texnopark bilan hamkorlik memorandumi imzolandi",
    description:
      "<p>Yangi grantlar va texnologik <em>transfer</em> yoʻnalishlarida qoʻshma loyihalar rejalashtirilmoqda.</p>",
    file: [],
  },
];
