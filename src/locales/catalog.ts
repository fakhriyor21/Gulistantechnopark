import type { AppLocale } from "@/lib/i18n";

export type ServiceCard = { title: string; description: string; to: string };

export type SiteMessages = {
  nav: {
    home: string;
    about: string;
    services: string;
    innox: string;
    news: string;
    contact: string;
    innoId: string;
    innoAlert: string;
    newBadge: string;
    logoAlt: string;
    ddSpotlight: string;
    ddSpotlightBody: string;
    ddServicesPage: string;
    ddPathsTitle: string;
    ddViewAll: string;
    serviceCards: ServiceCard[];
  };
  footer: {
    tagline: string;
    blurb: string;
    colAbout: string;
    colServices: string;
    colContact: string;
    linkAbout: string;
    linkServices: string;
    linkProjects: string;
    linkContact: string;
    svcAgri: string;
    svcIntl: string;
    svcConsult: string;
    svcWeb: string;
    address: string;
    rights: string;
    developer: string;
  };
  mobile: {
    home: string;
    about: string;
    innox: string;
    services: string;
    news: string;
    contact: string;
    startup: string;
    fablab: string;
    software: string;
    agro: string;
  };
  home: {
    heroLine1: string;
    heroLine2: string;
    heroSub: string;
    readMore: string;
  };
  common: {
    watchVideo: string;
    searchTitle: string;
    searchDesc: string;
    searchPlaceholder: string;
    notFound: string;
    loading: string;
    submitting: string;
    noData: string;
    close: string;
    socials: string;
    socialMissing: string;
  };
  news: {
    pageEyebrow: string;
    pageTitle: string;
    pageSubtitle: string;
    empty: string;
    readMore: string;
    tag: string;
    homeEyebrow: string;
    homeTitle: string;
    homeEmpty: string;
    homeViewAll: string;
    homeSoon: string;
    related: string;
    back: string;
    notFoundTitle: string;
    notFoundBack: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    empty: string;
  };
  contact: {
    pageEyebrow: string;
    pageTitle: string;
    pageSubtitle: string;
    formEyebrow: string;
    formHeading: string;
    successOverlay: string;
    successHeading: string;
    successBody: string;
    close: string;
    sent: string;
    error: string;
    phoneErr: string;
    agreementErr: string;
    requiredErr: string;
    widgetEyebrow: string;
    widgetHeading: string;
    fill: string;
    phone: string;
    sentToast: string;
    errToast: string;
    lastNamePh: string;
    firstNamePh: string;
    phonePh: string;
    companyPh: string;
    messagePh: string;
    submit: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    empty: string;
  };
  industries: {
    notFoundTitle: string;
    backServices: string;
    phoneErr: string;
    phoneToastTitle: string;
    required: string;
    requiredDetail: string;
    sentTitle: string;
    sentDesc: string;
    successTitle: string;
    successBody: string;
    successEyebrow: string;
    close: string;
    err: string;
    errorTitle: string;
    detailCta: string;
    companyNone: string;
    breadcrumbServices: string;
    statDepartments: string;
    statDirection: string;
    strategicEyebrow: string;
    partnershipCta: string;
    featuresHeading: string;
    featuresIntro: string;
    formEyebrow: string;
    formHeading: string;
    phLastName: string;
    phFirstName: string;
    phPhone: string;
    phCompany: string;
    phMessage: string;
    submitBtn: string;
    directorName: string;
    directorRole: string;
    bodyLinePrefix: string;
  };
  serviceBlock: {
    eyebrow: string;
    title: string;
    subtitle: string;
    empty: string;
    viewAll: string;
    viewAllLong: string;
  };
  aboutHome: {
    sectionTitle: string;
    apiHint: string;
    emptyTitle: string;
    emptyHint: string;
    cardSelected: string;
    cardView: string;
  };
  pageSupport: {
    eyebrow: string;
    title: string;
    subtitle: string;
    empty: string;
    apiNote: string;
    summaryTitle: string;
  };
  team: {
    title: string;
    body: string;
    socials: string;
    close: string;
    noLink: string;
  };
  admin: {
    title: string;
    body: string;
    cta: string;
    back: string;
  };
  projects: {
    heroTitle: string;
    heroSubtitle: string;
    workflowTitle: string;
    workflowDesc: string;
  };
};

const UZ: SiteMessages = {
  nav: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    services: "Xizmatlar",
    innox: "INNOX",
    news: "Yangiliklar",
    contact: "Kontaktlar",
    innoId: "INNO ID",
    innoAlert: "Innoid bo'limi ishlab chiqish jarayonida tez orada ishga tushiriladi!",
    newBadge: "New",
    logoAlt: "Technopark logotipi",
    ddSpotlight: "Techno Spotlight",
    ddSpotlightBody: "Innovatsion xizmatlar bilan loyihangizni keyingi bosqichga olib chiqing.",
    ddServicesPage: "Xizmatlar sahifasi",
    ddPathsTitle: "Xizmat yo'nalishlari",
    ddViewAll: "Barchasini ko'rish",
    serviceCards: [
      { title: "Startaplar", description: "Inkubatsiya, mentorlik va investor aloqalari", to: "/services" },
      { title: "FABLAB", description: "Prototiplash va zamonaviy ishlab chiqarish uskunalari", to: "/services" },
      { title: "Qishloq xo'jaligi", description: "Agrotexnologiyalar va avtomatlashtirish yechimlari", to: "/services" },
      { title: "Xalqaro aloqalar", description: "Hamkorlik, grantlar va bozorga chiqish imkoniyatlari", to: "/services" },
      { title: "Dasturiy ta'minot", description: "Veb, mobil va integratsion platformalar", to: "/services" },
    ],
  },
  footer: {
    tagline: "Innovatsion texnopark yoshlar uchun imkoniyatlar maskani",
    blurb:
      "Ilg‘or g‘oyalar va zamonaviy yechimlar Guliston yoshlar texnoparkidan boshlanadi! Yoshlar bilan kelajakka ishonchli qadamlar!",
    colAbout: "Biz haqimizda",
    colServices: "Xizmatlar",
    colContact: "Aloqa",
    linkAbout: "Biz haqimizda",
    linkServices: "Xizmatlar",
    linkProjects: "Loyihalar",
    linkContact: "Kontaktlar",
    svcAgri: "Qishloq xo'jaligi",
    svcIntl: "Xalqaro aloqalar",
    svcConsult: "IT Konsalting",
    svcWeb: "Veb Dasturlash",
    address: "Guliston shahar, Guliston ko‘chasi, 2-uy",
    rights: "Barcha huquqlar himoyalangan",
    developer: "Ishlab chiquvchi: Sadullayev Faxiyor",
  },
  mobile: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    innox: "InnoX",
    services: "Xizmatlar",
    news: "Yangiliklar",
    contact: "Kontaktlar",
    startup: "Startap",
    fablab: "FABLAB",
    software: "Dasturiy",
    agro: "Agro",
  },
  home: {
    heroLine1: "INNOVATSION RIVOJLANISH AGENTLIGI HUZURIDAGI",
    heroLine2: "GULISTON YOSHLAR TEXNOPARKI",
    heroSub:
      "Guliston Yoshlar Texnoparki — ilg‘or texnologiyalar, yaratgan g‘oyalar va ertangi kunni shakllantiruvchi avlodning markazi!",
    readMore: "Batafsil",
  },
  common: {
    watchVideo: "Video ko'rish",
    searchTitle: "Sayt bo'yicha ma'lumotlarni qidirish",
    searchDesc: "Ma'lumotlarni kiriting.",
    searchPlaceholder: "Ma'lumotlar uchun kiriting",
    notFound:
      "Kechirasiz, biz Siz qidirayotgan sahifani topa olmadik. Bosh sahifamizga qaytib, navigatsiya yoki qidiruvdan foydalaning.",
    loading: "Yuklanmoqda…",
    submitting: "Yuborilmoqda…",
    noData: "Ma'lumot topilmadi",
    close: "Yopish",
    socials: "Ijtimoiy tarmoqlar",
    socialMissing: "havola qo'shilmagan",
  },
  news: {
    pageEyebrow: "Yangiliklar",
    pageTitle: "So‘nggi e’lonlar va voqealar",
    pageSubtitle: "Texnopark hayoti, tadbirlar va startaplar haqida yangilanishlar.",
    empty: "Ma'lumot topilmadi — Django admin panelda yangilik qo'shing.",
    readMore: "Batafsil o‘qish",
    tag: "Texnopark yangiliklari",
    homeEyebrow: "Eng so'nggi yangiliklardan xabardor bo'ling",
    homeTitle: "Yangiliklar va maqolalar",
    homeEmpty: "Ma'lumot topilmadi — Django admin panelda yangilik qo'shing.",
    homeViewAll: "Hammasini ko'rish",
    homeSoon: "Tez orada yangilik qo'shiladi",
    related: "O‘xshash yangiliklar",
    back: "← Orqaga",
    notFoundTitle: "Ma'lumot topilmadi",
    notFoundBack: "Yangiliklar ro'yxatiga qaytish",
  },
  gallery: {
    eyebrow: "Galereya",
    title: "Foto lavhalar",
    subtitle: "Texnopark hayotidan kadrlar.",
    empty: "Hozircha rasmlar yo‘q. Django admin panelda «Biz haqimizda rasmlar» bo‘limidan qo‘shing.",
  },
  contact: {
    pageEyebrow: "Aloqa",
    pageTitle: "Kontaktlar",
    pageSubtitle: "Telefon, e-mail va manzil — savollar bo‘lsa, murojaat qiling.",
    formEyebrow: "Ariza formasi",
    formHeading:
      "Savollaringiz bormi? So'rov qoldiring va administratorimiz tez orada siz bilan bog'lanadi!",
    successOverlay: "Success",
    successHeading: "So'rov qabul qilindi",
    successBody: "So'rovingiz muvaffaqiyatli jo'natildi. Administrator tez orada siz bilan bog'lanadi.",
    close: "Yopish",
    sent: "So'rovingiz muvaffaqiyatli yuborildi! Administrator tez orada siz bilan bog'lanadi.",
    error: "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring!",
    phoneErr: "Telefon: faqat 9 raqam (masalan 901234567 yoki +998901234567).",
    agreementErr: "Iltimos, ma'lumotlarni qayta ishlashga rozilik bering!",
    requiredErr: "Iltimos, barcha majburiy maydonlarni to'ldiring!",
    widgetEyebrow: "Ariza formasi",
    widgetHeading:
      "Savollaringiz bormi? So'rov qoldiring va administratorimiz tez orada siz bilan bog'lanadi!",
    fill: "To'ldiring",
    phone: "Telefon",
    sentToast: "Xabar yuborildi",
    errToast: "Xatolik yuz berdi",
    lastNamePh: "Familiya",
    firstNamePh: "Ism",
    phonePh: "Telefon raqam",
    companyPh: "Kompaniya (ixtiyoriy)",
    messagePh: "Xabar",
    submit: "Yuborish",
  },
  servicesPage: {
    eyebrow: "Xizmatlar",
    title: "Yo'nalishlar va imkoniyatlar",
    subtitle: "Ro'yxat Django API dan keladi. Kartani tanlab batafsil sahifaga o'ting.",
    empty: "Hozircha Django orqali xizmatlar ro'yxati bo'sh.",
  },
  industries: {
    notFoundTitle: "Yo'nalish topilmadi",
    backServices: "Xizmatlarga qaytish",
    phoneErr: "9 raqamli raqam kiriting (masalan 901234567).",
    phoneToastTitle: "Telefon",
    required: "Majburiy maydonlar to'ldirilmadi",
    requiredDetail: "Iltimos, ism, familiya va telefon raqamini kiriting.",
    sentTitle: "So'rov yuborildi",
    sentDesc: "Arizangiz qabul qilindi. Administrator tez orada bog'lanadi.",
    successTitle: "Ariza qabul qilindi",
    successBody: "So'rovingiz muvaffaqiyatli jo'natildi. Administrator tez orada siz bilan bog'lanadi.",
    successEyebrow: "Muvaffaqiyat",
    close: "Yopish",
    err: "So'rov yuborishda xatolik bo'ldi. Qayta urinib ko'ring.",
    errorTitle: "Xatolik yuz berdi",
    detailCta: "Batafsil maslahat →",
    companyNone: "Ko'rsatilmagan",
    breadcrumbServices: "Xizmatlar",
    statDepartments: "Bo'limlar",
    statDirection: "Yo'nalish",
    strategicEyebrow: "Strategik imkoniyatlar",
    partnershipCta: "Hamkorlikni boshlash",
    featuresHeading: "Xizmat doirasidagi imkoniyatlar",
    featuresIntro:
      "Har bir yo'nalish bo'yicha amaliy yechimlar va mutaxassislar qo'llab-quvvatlovi taqdim etiladi.",
    formEyebrow: "Ariza formasi",
    formHeading:
      "Savollaringiz bormi? So'rov qoldiring va administratorimiz tez orada siz bilan bog'lanadi!",
    phLastName: "Familiya",
    phFirstName: "Ism",
    phPhone: "Telefon raqam",
    phCompany: "Kompaniya / tashkilot nomi",
    phMessage: "Savolingizning qisqacha tavsifi",
    submitBtn: "Ma'lumotlarni yuborish",
    directorName: "Mamatov Avaz Muxiddinovich",
    directorRole: "Guliston yoshlar texnoparki direktori",
    bodyLinePrefix: "Yo'nalish:",
  },
  serviceBlock: {
    eyebrow: "Texnopark xizmatlari",
    title: "Yoshlar texnoparkida tashkil etilgan asosiy xizmatlar",
    subtitle: "Ro'yxat Django API dan yuklanadi. Kartochkadan batafsil sahifaga o'ting.",
    empty: "Ma'lumot topilmadi",
    viewAll: "Barcha xizmatlarni ko'rish",
    viewAllLong: "Barcha xizmatlarni ko‘rish",
  },
  aboutHome: {
    sectionTitle: "Kompaniyamiz haqida",
    apiHint: "Ma'lumotlar Django API orqali yuklanadi.",
    emptyTitle: "Ma'lumot topilmadi",
    emptyHint: "Django admin panelda «Kompaniya haqida» yozuvlarini qo'shing va sahifani yangilang.",
    cardSelected: "Tanlangan",
    cardView: "Ko'rish",
  },
  pageSupport: {
    eyebrow: "GULISTON YOSHLAR TEXNOPARKIDAGI QULAYLIKLAR",
    title: "Texnoparkdagi qulayliklar va imkoniyatlar",
    subtitle: "Ma'lumotlar Django API (Kompaniya haqida / Biz haqimizda) dan yuklanadi.",
    empty: "Ma'lumot topilmadi",
    apiNote: "",
    summaryTitle: "Texnopark — barcha imkoniyatlar bir muhitda",
  },
  team: {
    title: "Jamoa",
    body: "Jamoamiz 50 dan ortiq mutaxassislarni birlashtirgan va biz ular bilan faxrlanamiz. Jamoamiz a'zolari katta tajribaga ega o'qituvchilar, dasturchilar, dizaynerlar va marketologlardir.",
    socials: "Ijtimoiy tarmoqlar",
    close: "Yopish",
    noLink: "havola qo'shilmagan",
  },
  admin: {
    title: "Boshqaruv paneli",
    body: "Sayt kontenti endi Django orqali boshqariladi. Yangiliklar, xizmatlar, jamoa, galereya va boshqa barcha ma'lumotlarni Django admin panelidan tahrirlang.",
    cta: "Django admin ochish",
    back: "Saytga qaytish",
  },
  projects: {
    heroTitle: "Biz har bir loyihaga alohida mehr beramiz",
    heroSubtitle:
      "Biz jamiyatga innovatsion startup loyihalarni va hayotni yangi imkoniyatlar bilan to‘ldirishga yordam beradigan noyob innovatsion yechimlarni yaratamiz.",
    workflowTitle: "Workflow",
    workflowDesc:
      "Xodimlarning ish vaqtini qayd etish va ularni boshqarish tizimi inson resurslarini boshqarishni avtomatlashtirish hisobiga xodimlarga sarflanadigan xarajatlarni kamaytiradi va vaqtni tejaydi.",
  },
};

const EN: SiteMessages = {
  nav: {
    home: "Home",
    about: "About us",
    services: "Services",
    innox: "INNOX",
    news: "News",
    contact: "Contacts",
    innoId: "INNO ID",
    innoAlert: "The Inno ID section is under development and will be available soon!",
    newBadge: "New",
    logoAlt: "Technopark logo",
    ddSpotlight: "Techno Spotlight",
    ddSpotlightBody: "Take your project to the next level with innovative services.",
    ddServicesPage: "Services page",
    ddPathsTitle: "Service areas",
    ddViewAll: "View all",
    serviceCards: [
      { title: "Startups", description: "Incubation, mentoring and investor relations", to: "/services" },
      { title: "FABLAB", description: "Prototyping and modern manufacturing equipment", to: "/services" },
      { title: "Agriculture", description: "Agrotech and automation solutions", to: "/services" },
      { title: "International", description: "Partnerships, grants and market access", to: "/services" },
      { title: "Software", description: "Web, mobile and integration platforms", to: "/services" },
    ],
  },
  footer: {
    tagline: "Innovation technopark — opportunities for young people",
    blurb:
      "Advanced ideas and modern solutions start at Guliston Youth Technopark! Confident steps to the future with young people.",
    colAbout: "About us",
    colServices: "Services",
    colContact: "Contact",
    linkAbout: "About us",
    linkServices: "Services",
    linkProjects: "Projects",
    linkContact: "Contacts",
    svcAgri: "Agriculture",
    svcIntl: "International relations",
    svcConsult: "IT consulting",
    svcWeb: "Web development",
    address: "Guliston city, Guliston street, building 2",
    rights: "All rights reserved",
    developer: "Developer: Sadullayev Faxiyor",
  },
  mobile: {
    home: "Home",
    about: "About",
    innox: "InnoX",
    services: "Services",
    news: "News",
    contact: "Contacts",
    startup: "Startup",
    fablab: "FABLAB",
    software: "Software",
    agro: "Agro",
  },
  home: {
    heroLine1: "UNDER THE AGENCY FOR INNOVATIVE DEVELOPMENT",
    heroLine2: "GULISTON YOUTH TECHNOPARK",
    heroSub:
      "Guliston Youth Technopark is a hub for advanced technologies, ideas and the generation shaping tomorrow!",
    readMore: "Learn more",
  },
  common: {
    watchVideo: "Watch video",
    searchTitle: "Search the website",
    searchDesc: "Enter your query.",
    searchPlaceholder: "Type to search",
    notFound:
      "Sorry, we could not find the page you are looking for. Return to the home page or use navigation.",
    loading: "Loading…",
    submitting: "Sending…",
    noData: "No data available",
    close: "Close",
    socials: "Social networks",
    socialMissing: "link not added",
  },
  news: {
    pageEyebrow: "News",
    pageTitle: "Latest announcements and events",
    pageSubtitle: "Updates on technopark life, events and startups.",
    empty: "No data — add news in the Django admin.",
    readMore: "Read more",
    tag: "Technopark news",
    homeEyebrow: "Stay up to date",
    homeTitle: "News and articles",
    homeEmpty: "No data — add news in the Django admin.",
    homeViewAll: "View all",
    homeSoon: "More news coming soon",
    related: "Related news",
    back: "← Back",
    notFoundTitle: "Article not found",
    notFoundBack: "Back to news list",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Photo gallery",
    subtitle: "Moments from technopark life.",
    empty: "No photos yet. Add them in Django admin under “About us images”.",
  },
  contact: {
    pageEyebrow: "Contact",
    pageTitle: "Contacts",
    pageSubtitle: "Phone, email and address — get in touch if you have questions.",
    formEyebrow: "Application form",
    formHeading: "Have questions? Leave a request and our administrator will contact you soon.",
    successOverlay: "Success",
    successHeading: "Request received",
    successBody: "Your request has been sent. An administrator will contact you shortly.",
    close: "Close",
    sent: "Your request has been sent successfully!",
    error: "Something went wrong. Please try again.",
    phoneErr: "Phone: enter 9 digits (e.g. 901234567 or +998901234567).",
    agreementErr: "Please agree to the processing of personal data.",
    requiredErr: "Please fill in all required fields.",
    widgetEyebrow: "Application form",
    widgetHeading: "Have questions? Leave a request and we will contact you soon.",
    fill: "Fill in the form",
    phone: "Phone",
    sentToast: "Message sent",
    errToast: "An error occurred",
    lastNamePh: "Last name",
    firstNamePh: "First name",
    phonePh: "Phone number",
    companyPh: "Company (optional)",
    messagePh: "Message",
    submit: "Submit",
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Directions and opportunities",
    subtitle: "The list comes from the Django API. Open a card for details.",
    empty: "The service list from Django is currently empty.",
  },
  industries: {
    notFoundTitle: "Direction not found",
    backServices: "Back to services",
    phoneErr: "Enter a 9-digit number (e.g. 901234567).",
    phoneToastTitle: "Phone",
    required: "Required fields are missing",
    requiredDetail: "Please enter your first name, last name and phone number.",
    sentTitle: "Request sent",
    sentDesc: "Your application was received. An administrator will contact you soon.",
    successTitle: "Application received",
    successBody: "Your request was sent successfully. An administrator will contact you shortly.",
    successEyebrow: "Success",
    close: "Close",
    err: "Could not send the request. Please try again.",
    errorTitle: "Something went wrong",
    detailCta: "Learn more →",
    companyNone: "Not specified",
    breadcrumbServices: "Services",
    statDepartments: "Sections",
    statDirection: "Track",
    strategicEyebrow: "Strategic opportunities",
    partnershipCta: "Start a partnership",
    featuresHeading: "Opportunities within the service",
    featuresIntro: "Practical solutions and expert support are offered for each direction.",
    formEyebrow: "Application form",
    formHeading: "Have questions? Leave a request and our administrator will contact you soon.",
    phLastName: "Last name",
    phFirstName: "First name",
    phPhone: "Phone number",
    phCompany: "Company / organization name",
    phMessage: "Brief description of your question",
    submitBtn: "Submit",
    directorName: "Avaz Mamatov",
    directorRole: "Director, Guliston Youth Technopark",
    bodyLinePrefix: "Service:",
  },
  serviceBlock: {
    eyebrow: "Technopark services",
    title: "Main services at the youth technopark",
    subtitle: "Loaded from the Django API. Open a card for the detail page.",
    empty: "No data available",
    viewAll: "View all services",
    viewAllLong: "View all services",
  },
  aboutHome: {
    sectionTitle: "About our company",
    apiHint: "Content is loaded from the Django API.",
    emptyTitle: "No data available",
    emptyHint: "Add “About company” entries in Django admin and refresh the page.",
    cardSelected: "Selected",
    cardView: "View",
  },
  pageSupport: {
    eyebrow: "CONVENIENCES AT GULISTON YOUTH TECHNOPARK",
    title: "Conveniences and opportunities",
    subtitle: "Data is loaded from the Django API (About company / About us).",
    empty: "No data available",
    apiNote: "",
    summaryTitle: "Technopark — all opportunities in one place",
  },
  team: {
    title: "Team",
    body: "Our team brings together more than 50 experts and we are proud of them — teachers, developers, designers and marketers with strong experience.",
    socials: "Social networks",
    close: "Close",
    noLink: "link not added",
  },
  admin: {
    title: "Admin panel",
    body: "Site content is now managed in Django. Edit news, services, team, gallery and more in Django admin.",
    cta: "Open Django admin",
    back: "Back to site",
  },
  projects: {
    heroTitle: "We put our heart into every project",
    heroSubtitle:
      "We create unique innovative solutions that help bring startup projects to society and fill life with new opportunities.",
    workflowTitle: "Workflow",
    workflowDesc:
      "A time-tracking and staff management system reduces HR overhead and saves time through automation.",
  },
};

const RU: SiteMessages = {
  nav: {
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    innox: "INNOX",
    news: "Новости",
    contact: "Контакты",
    innoId: "INNO ID",
    innoAlert: "Раздел Inno ID в разработке и скоро будет доступен!",
    newBadge: "New",
    logoAlt: "Логотип технопарка",
    ddSpotlight: "Techno Spotlight",
    ddSpotlightBody: "Выведите проект на новый уровень с инновационными сервисами.",
    ddServicesPage: "Страница услуг",
    ddPathsTitle: "Направления услуг",
    ddViewAll: "Смотреть все",
    serviceCards: [
      { title: "Стартапы", description: "Инкубация, менторство и связи с инвесторами", to: "/services" },
      { title: "FABLAB", description: "Прототипирование и современное оборудование", to: "/services" },
      { title: "Сельское хозяйство", description: "Агротехнологии и решения автоматизации", to: "/services" },
      { title: "Международные связи", description: "Партнёрства, гранты и выход на рынки", to: "/services" },
      { title: "ПО", description: "Веб, мобильные и интеграционные платформы", to: "/services" },
    ],
  },
  footer: {
    tagline: "Инновационный технопарк — возможности для молодёжи",
    blurb:
      "Передовые идеи и современные решения начинаются в молодёжном технопарке Гулистана! Уверенные шаги в будущее вместе с молодёжью.",
    colAbout: "О нас",
    colServices: "Услуги",
    colContact: "Контакты",
    linkAbout: "О нас",
    linkServices: "Услуги",
    linkProjects: "Проекты",
    linkContact: "Контакты",
    svcAgri: "Сельское хозяйство",
    svcIntl: "Международные связи",
    svcConsult: "IT-консалтинг",
    svcWeb: "Веб-разработка",
    address: "г. Гулистан, ул. Гулистан, дом 2",
    rights: "Все права защищены",
    developer: "Разработчик: Садуллаев Фахийор",
  },
  mobile: {
    home: "Главная",
    about: "О нас",
    innox: "InnoX",
    services: "Услуги",
    news: "Новости",
    contact: "Контакты",
    startup: "Стартап",
    fablab: "FABLAB",
    software: "Разработка",
    agro: "Агро",
  },
  home: {
    heroLine1: "ПРИ АГЕНТСТВЕ ИННОВАЦИОННОГО РАЗВИТИЯ",
    heroLine2: "МОЛОДЁЖНЫЙ ТЕХНОПАРК ГУЛИСТАНА",
    heroSub:
      "Молодёжный технопарк Гулистана — центр передовых технологий, идей и поколения, формирующего завтра!",
    readMore: "Подробнее",
  },
  common: {
    watchVideo: "Смотреть видео",
    searchTitle: "Поиск по сайту",
    searchDesc: "Введите запрос.",
    searchPlaceholder: "Введите для поиска",
    notFound:
      "К сожалению, страница не найдена. Вернитесь на главную или воспользуйтесь навигацией.",
    loading: "Загрузка…",
    submitting: "Отправка…",
    noData: "Нет данных",
    close: "Закрыть",
    socials: "Соцсети",
    socialMissing: "ссылка не добавлена",
  },
  news: {
    pageEyebrow: "Новости",
    pageTitle: "Последние объявления и события",
    pageSubtitle: "Обновления о жизни технопарка, мероприятиях и стартапах.",
    empty: "Нет данных — добавьте новости в Django admin.",
    readMore: "Читать далее",
    tag: "Новости технопарка",
    homeEyebrow: "Будьте в курсе",
    homeTitle: "Новости и статьи",
    homeEmpty: "Нет данных — добавьте новости в Django admin.",
    homeViewAll: "Смотреть все",
    homeSoon: "Скоро появятся новости",
    related: "Похожие новости",
    back: "← Назад",
    notFoundTitle: "Материал не найден",
    notFoundBack: "К списку новостей",
  },
  gallery: {
    eyebrow: "Галерея",
    title: "Фотогалерея",
    subtitle: "Кадры из жизни технопарка.",
    empty: "Пока нет фото. Добавьте их в Django admin в разделе изображений «О нас».",
  },
  contact: {
    pageEyebrow: "Контакты",
    pageTitle: "Контакты",
    pageSubtitle: "Телефон, e-mail и адрес — напишите, если есть вопросы.",
    formEyebrow: "Форма заявки",
    formHeading: "Есть вопросы? Оставьте заявку — администратор скоро свяжется с вами.",
    successOverlay: "Успешно",
    successHeading: "Заявка принята",
    successBody: "Заявка отправлена. Администратор свяжется с вами в ближайшее время.",
    close: "Закрыть",
    sent: "Заявка успешно отправлена!",
    error: "Произошла ошибка. Попробуйте снова.",
    phoneErr: "Телефон: введите 9 цифр (например 901234567 или +998901234567).",
    agreementErr: "Пожалуйста, согласитесь на обработку персональных данных.",
    requiredErr: "Заполните все обязательные поля.",
    widgetEyebrow: "Форма заявки",
    widgetHeading: "Есть вопросы? Оставьте заявку — мы свяжемся с вами.",
    fill: "Заполните поля",
    phone: "Телефон",
    sentToast: "Сообщение отправлено",
    errToast: "Произошла ошибка",
    lastNamePh: "Фамилия",
    firstNamePh: "Имя",
    phonePh: "Телефон",
    companyPh: "Компания (необязательно)",
    messagePh: "Сообщение",
    submit: "Отправить",
  },
  servicesPage: {
    eyebrow: "Услуги",
    title: "Направления и возможности",
    subtitle: "Список приходит из Django API. Откройте карточку для подробностей.",
    empty: "Список услуг из Django пока пуст.",
  },
  industries: {
    notFoundTitle: "Направление не найдено",
    backServices: "К списку услуг",
    phoneErr: "Введите 9 цифр (например 901234567).",
    phoneToastTitle: "Телефон",
    required: "Не заполнены обязательные поля",
    requiredDetail: "Укажите имя, фамилию и номер телефона.",
    sentTitle: "Заявка отправлена",
    sentDesc: "Заявка принята. Администратор скоро свяжется с вами.",
    successTitle: "Заявка принята",
    successBody: "Запрос успешно отправлен. Администратор свяжется с вами в ближайшее время.",
    successEyebrow: "Успешно",
    close: "Закрыть",
    err: "Не удалось отправить заявку. Попробуйте снова.",
    errorTitle: "Произошла ошибка",
    detailCta: "Подробнее →",
    companyNone: "Не указано",
    breadcrumbServices: "Услуги",
    statDepartments: "Разделы",
    statDirection: "Направление",
    strategicEyebrow: "Стратегические возможности",
    partnershipCta: "Начать сотрудничество",
    featuresHeading: "Возможности в рамках услуги",
    featuresIntro: "По каждому направлению — практические решения и поддержка экспертов.",
    formEyebrow: "Форма заявки",
    formHeading: "Есть вопросы? Оставьте заявку — администратор скоро свяжется с вами.",
    phLastName: "Фамилия",
    phFirstName: "Имя",
    phPhone: "Телефон",
    phCompany: "Название компании / организации",
    phMessage: "Кратко опишите ваш вопрос",
    submitBtn: "Отправить",
    directorName: "Аваз Маматов",
    directorRole: "Директор молодёжного технопарка Гулистана",
    bodyLinePrefix: "Направление:",
  },
  serviceBlock: {
    eyebrow: "Услуги технопарка",
    title: "Основные услуги молодёжного технопарка",
    subtitle: "Загружается из Django API. Перейдите по карточке на подробную страницу.",
    empty: "Нет данных",
    viewAll: "Все услуги",
    viewAllLong: "Все услуги",
  },
  aboutHome: {
    sectionTitle: "О нашей компании",
    apiHint: "Контент загружается из Django API.",
    emptyTitle: "Нет данных",
    emptyHint: "Добавьте записи «О компании» в Django admin и обновите страницу.",
    cardSelected: "Выбрано",
    cardView: "Смотреть",
  },
  pageSupport: {
    eyebrow: "УДОБСТВА В МОЛОДЁЖНОМ ТЕХНОПАРКЕ ГУЛИСТАНА",
    title: "Удобства и возможности",
    subtitle: "Данные загружаются из Django API (О компании / О нас).",
    empty: "Нет данных",
    apiNote: "",
    summaryTitle: "Технопарк — все возможности в одном месте",
  },
  team: {
    title: "Команда",
    body: "В нашей команде более 50 специалистов — преподаватели, разработчики, дизайнеры и маркетологи с большим опытом.",
    socials: "Соцсети",
    close: "Закрыть",
    noLink: "ссылка не добавлена",
  },
  admin: {
    title: "Панель управления",
    body: "Контент сайта теперь ведётся в Django. Редактируйте новости, услуги, команду, галерею и др. в Django admin.",
    cta: "Открыть Django admin",
    back: "На сайт",
  },
  projects: {
    heroTitle: "Мы вкладываем душу в каждый проект",
    heroSubtitle:
      "Мы создаём уникальные инновационные решения, помогающие внедрять стартапы в жизнь общества и наполнять её новыми возможностями.",
    workflowTitle: "Workflow",
    workflowDesc:
      "Система учёта рабочего времени и управления персоналом снижает затраты на HR и экономит время за счёт автоматизации.",
  },
};

export const catalog: Record<AppLocale, SiteMessages> = {
  uz: UZ,
  en: EN,
  ru: RU,
};
