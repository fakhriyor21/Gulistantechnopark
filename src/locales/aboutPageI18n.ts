import type { AppLocale } from "@/lib/i18n";

export type AboutBlock = { title: string; text: string };
export type AboutFaq = { q: string; a: string };
export type AboutTimeline = { date: string; title: string; text: string };

export type AboutPageStrings = {
  heroH1: string;
  navAria: string;
  navEyebrow: string;
  stubFallback: string;
  statsStudents: string;
  statsDirection: string;
  statsSpecialist: string;
  sectionTitleDefault: string;
  fallbackBody: string;
  tagYouth: string;
  tagMentors: string;
  benefitsTitle: string;
  quoteFallbackHtml: string;
  quoteNameDefault: string;
  quoteRoleDefault: string;
  directorAlt: string;
  videoTitle: string;
  heroPosterAlt: string;
  mosaicAlt: string;
  historyTitle: string;
  faqSectionTitle: string;
  requestTitle: string;
  requestSubtitle: string;
  formPlaceholderName: string;
  formPlaceholderPhone: string;
  formTimePrompt: string;
  formAgree: string;
  formSubmit: string;
  benefits: AboutBlock[];
  timeline: AboutTimeline[];
  faq: AboutFaq[];
};

export const aboutPageI18n: Record<AppLocale, AboutPageStrings> = {
  uz: {
    heroH1: "Texnopark bilan bilim yo'lingizni boshlang",
    navAria: "Texnopark haqida qisqa",
    navEyebrow: "Biz haqimizda",
    stubFallback:
      "Biz o'quvchilar bilan bilim va tajribani baham ko'rishga tayyor professional hamjamiyatmiz. Innovatsion ta'lim, mentorlik va amaliy yondashuv orqali minglab yoshlarning kasbiy rivojlanishiga hissa qo'shamiz.",
    statsStudents: "o'quvchilar",
    statsDirection: "yo'nalish",
    statsSpecialist: "mutaxassis",
    sectionTitleDefault: "Guliston Yoshlar Texnoparki bugun",
    fallbackBody:
      "Innovatsion rivojlanish tizimida yoshlar uchun texnologiya, ta'lim va tadbirkorlikni bir joyda jamlagan hududiy markazmiz. Amaliy o'quv dasturlari, laboratoriyalar va tadbirlar orqali Guliston va atrof-mintaqadagi yoshlar zamonaviy kasb va g'oyalarni rivojlantiradi.",
    tagYouth: "Yoshlar va hamjamiyat",
    tagMentors: "Mentorlar va mutaxassislar",
    benefitsTitle: "Afzalliklarimiz",
    quoteFallbackHtml:
      "“Texnopark bu shunchaki ta'lim markazi emas, bu yangilik yaratuvchi yoshlar uchun imkoniyatlar maydoni. Har bir g'oya qo'llab-quvvatlanadigan va amaliy natijaga aylanadigan kelajakni birgalikda bunyod etamiz.”",
    quoteNameDefault: "Mamatov Avaz Muxiddinovich",
    quoteRoleDefault: "Guliston Yoshlar Texnoparki direktori",
    directorAlt: "Direktor",
    videoTitle: "Texnopark tanishtiruv videosi",
    heroPosterAlt: "Texnopark jamoasi",
    mosaicAlt: "Texnopark",
    historyTitle: "Guliston Yoshlar Texnoparki tarixi",
    faqSectionTitle: "Savollaringiz bormi?",
    requestTitle: "So'rov qoldiring",
    requestSubtitle: "Ma'lumotlarni yuboring va biz siz bilan yaqin vaqtda bog'lanamiz.",
    formPlaceholderName: "Ismingiz",
    formPlaceholderPhone: "Telefon raqami",
    formTimePrompt: "Qulay vaqtni tanlang",
    formAgree: "Ma'lumotlarim qayta ishlanishiga roziman",
    formSubmit: "Ma'lumotlarni yuborish",
    benefits: [
      {
        title: "O'zbek tilidagi darslar",
        text: "Kurslar o'zbek tilida ham mavjud, barcha materiallar har bir o'quvchi uchun tushunarli shaklda.",
      },
      {
        title: "Katta jamoa",
        text: "50 000 dan ortiq o'quvchilar va mutaxassislar hamjamiyati doimiy qo'llab-quvvatlashga tayyor.",
      },
      {
        title: "Amaliy yondashuv",
        text: "Nazariy bilimlar va amaliy topshiriqlar uyg'unligi olingan ko'nikmalarni amalda qo'llash imkonini beradi.",
      },
    ],
    timeline: [
      { date: "2021-yil, iyul", title: "Start", text: "Texnopark o'z faoliyatini boshladi va ilk talabalarni qabul qildi." },
      { date: "2021-yil, sentyabr", title: "O'sish", text: "Birinchi amaliy kurslar ishga tushirildi va dastur kengaytirildi." },
      { date: "2022-yil, mart", title: "Yangi loyihalar", text: "Yosh dasturchilar uchun akselerator va mentorlik dasturlari yo'lga qo'yildi." },
      { date: "2023-yil, sentyabr", title: "Yanada ko'p bilimlar", text: "Yo'nalishlar soni keskin oshirildi, jamoa va hamkorlar tarmog'i kengaydi." },
    ],
    faq: [
      {
        q: "Texnoparkda o'quv dasturlari qanday tashkil etilgan?",
        a: "Guliston Yoshlar Texnoparkida dasturlar odatda bir necha oydan boshlab uzunroq muddatgacha davom etadi va amaliy topshiriqlar, loyihalar hamda mentorlik bilan boyitilgan o'quv rejasiga asoslanadi.",
      },
      {
        q: "Darslar qanday shaklda o'tkaziladi?",
        a: "Auditoriyada va onlayn formatda mashg'ulotlar, video materiallar, testlar hamda mentor bilan muntazam muloqot tashkil etiladi — tanlangan yo'nalishga qarab.",
      },
      {
        q: "O'qitishdan keyin ishga chiqishga yordam berasizmi?",
        a: "Amaliy bilim va kasbiy ko'nikmalar beriladi; ishga joylashish esa sizning faolligingiz, portfoliongiz va bozor talablariga ham bog'liq.",
      },
      {
        q: "To'lovni bo'lib-bo'lib to'lash mumkinmi?",
        a: "Ha, ayrim dasturlar bo'yicha to'lovni bo'lib to'lash imkoniyati mavjud — batafsil ma'lumotni markazda aniqlashingiz mumkin.",
      },
    ],
  },
  en: {
    heroH1: "Start your learning journey with the technopark",
    navAria: "About the technopark",
    navEyebrow: "About us",
    stubFallback:
      "We are a professional community ready to share knowledge and experience with learners. Through innovative education, mentoring and a hands-on approach, we contribute to the career growth of thousands of young people.",
    statsStudents: "learners",
    statsDirection: "tracks",
    statsSpecialist: "experts",
    sectionTitleDefault: "Guliston Youth Technopark today",
    fallbackBody:
      "We are a regional hub that brings together technology, education and entrepreneurship for young people in an innovation ecosystem. Through practical programmes, labs and events, young people in Guliston and the region develop modern skills and ideas.",
    tagYouth: "Youth and community",
    tagMentors: "Mentors and experts",
    benefitsTitle: "Our strengths",
    quoteFallbackHtml:
      "“The technopark is not just a training centre; it is a space of opportunity for young innovators. Every idea is supported and turned into practical results — we build the future together.”",
    quoteNameDefault: "Avaz Mamatov",
    quoteRoleDefault: "Director, Guliston Youth Technopark",
    directorAlt: "Director",
    videoTitle: "Technopark introduction video",
    heroPosterAlt: "Technopark team",
    mosaicAlt: "Technopark",
    historyTitle: "History of Guliston Youth Technopark",
    faqSectionTitle: "Have questions?",
    requestTitle: "Send a request",
    requestSubtitle: "Submit your details and we will contact you shortly.",
    formPlaceholderName: "Your name",
    formPlaceholderPhone: "Phone number",
    formTimePrompt: "Choose a convenient time",
    formAgree: "I agree to the processing of my data",
    formSubmit: "Submit",
    benefits: [
      {
        title: "Classes in Uzbek",
        text: "Courses are also available in Uzbek; all materials are presented in a clear way for every learner.",
      },
      {
        title: "Large community",
        text: "A community of more than 50,000 learners and professionals ready to support you.",
      },
      {
        title: "Hands-on approach",
        text: "Theory and practical tasks together help you apply skills in real life.",
      },
    ],
    timeline: [
      { date: "July 2021", title: "Start", text: "The technopark launched and welcomed its first learners." },
      { date: "September 2021", title: "Growth", text: "The first practical courses started and the programme expanded." },
      { date: "March 2022", title: "New projects", text: "Accelerator and mentoring programmes for young developers began." },
      { date: "September 2023", title: "More knowledge", text: "The number of tracks grew sharply; the team and partner network expanded." },
    ],
    faq: [
      {
        q: "How are study programmes organised?",
        a: "Programmes usually run from several months to longer periods and are based on a curriculum enriched with practical tasks, projects and mentoring.",
      },
      {
        q: "What format are classes in?",
        a: "On-site and online sessions, video materials, tests and regular contact with a mentor — depending on the track you choose.",
      },
      {
        q: "Do you help with employment after training?",
        a: "We provide practical skills and professional competences; employment also depends on your activity, portfolio and market demand.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes, for some programmes instalment plans are available — ask the centre for details.",
      },
    ],
  },
  ru: {
    heroH1: "Начните свой путь к знаниям с технопарком",
    navAria: "Кратко о технопарке",
    navEyebrow: "О нас",
    stubFallback:
      "Мы — профессиональное сообщество, готовое делиться знаниями и опытом с учащимися. Через инновационное образование, менторство и практический подход мы помогаем тысячам молодых людей развивать карьеру.",
    statsStudents: "обучающихся",
    statsDirection: "направлений",
    statsSpecialist: "экспертов",
    sectionTitleDefault: "Молодёжный технопарк Гулистана сегодня",
    fallbackBody:
      "Мы — региональный центр, объединяющий технологии, образование и предпринимательство для молодёжи. Через практические программы, лаборатории и мероприятия молодёжь Гулистана и региона развивает современные навыки и идеи.",
    tagYouth: "Молодёжь и сообщество",
    tagMentors: "Менторы и эксперты",
    benefitsTitle: "Наши преимущества",
    quoteFallbackHtml:
      "«Технопарк — это не просто учебный центр, это площадка возможностей для молодых новаторов. Каждая идея поддерживается и превращается в практический результат — мы строим будущее вместе.»",
    quoteNameDefault: "Аваз Маматов",
    quoteRoleDefault: "Директор молодёжного технопарка Гулистана",
    directorAlt: "Директор",
    videoTitle: "Видео о технопарке",
    heroPosterAlt: "Команда технопарка",
    mosaicAlt: "Технопарк",
    historyTitle: "История молодёжного технопарка Гулистана",
    faqSectionTitle: "Есть вопросы?",
    requestTitle: "Оставить заявку",
    requestSubtitle: "Отправьте данные — мы свяжемся с вами в ближайшее время.",
    formPlaceholderName: "Ваше имя",
    formPlaceholderPhone: "Телефон",
    formTimePrompt: "Выберите удобное время",
    formAgree: "Я согласен на обработку моих данных",
    formSubmit: "Отправить",
    benefits: [
      {
        title: "Занятия на узбекском",
        text: "Курсы доступны и на узбекском языке; материалы подаются понятно для каждого.",
      },
      {
        title: "Большое сообщество",
        text: "Сообщество из более чем 50 000 учащихся и специалистов, готовых поддержать.",
      },
      {
        title: "Практический подход",
        text: "Теория и практические задания помогают применять навыки в жизни.",
      },
    ],
    timeline: [
      { date: "июль 2021", title: "Старт", text: "Технопарк начал работу и принял первых учащихся." },
      { date: "сентябрь 2021", title: "Рост", text: "Запущены первые практические курсы, программа расширилась." },
      { date: "март 2022", title: "Новые проекты", text: "Запущены акселератор и программы менторства для молодых разработчиков." },
      { date: "сентябрь 2023", title: "Больше знаний", text: "Резко выросло число направлений; расширились команда и сеть партнёров." },
    ],
    faq: [
      {
        q: "Как организованы учебные программы?",
        a: "Программы длятся от нескольких месяцев и дольше и включают практические задания, проекты и менторство.",
      },
      {
        q: "В каком формате проходят занятия?",
        a: "Очно и онлайн, видеоматериалы, тесты и регулярная связь с ментором — в зависимости от направления.",
      },
      {
        q: "Помогаете ли с трудоустройством после обучения?",
        a: "Даём практические навыки; трудоустройство также зависит от вашей активности, портфолио и рынка.",
      },
      {
        q: "Можно ли оплачивать в рассрочку?",
        a: "Да, по некоторым программам возможна рассрочка — уточняйте в центре.",
      },
    ],
  },
};

export function localeDateOptions(lang: AppLocale): Intl.DateTimeFormatOptions {
  return { year: "numeric", month: "long", day: "numeric" };
}

export function localeTag(lang: AppLocale): string {
  if (lang === "ru") return "ru-RU";
  if (lang === "en") return "en-US";
  return "uz-UZ";
}
