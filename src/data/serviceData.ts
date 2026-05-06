interface section {
  title: string;
  description: string;
}

interface sectionData {
  title: string;
  description: string;
  data: section[];
}
interface ServiceData {
  name: string;
  description: string;
  icon: string;
  id: string;
  title: string;
  section: sectionData;
}
import dasturiy from "../assets/services/dasturiy.jpg";
import innovation from "../assets/services/innovation.png";
import laser from "../assets/images/home/5.jpeg";
import qishloq from "../assets/services/agritech.jpg";
import xalqaro from "../assets/services/xalqaro.jpg"
const serviceData: ServiceData[] = [
  {
    name: "Bizning dasturiy yechimlarimiz - kelajakning kaliti!",
    description:
      "Biz, har bir mijozning o'ziga xos ehtiyojlarini tushunib, ularga individual yechimlar ishlab chiqishga intilamiz.  Har bir loyiha uchun yangi va innovatsion yechimlar ishlab chiqamiz. Biz dasturiy ta'minot sohasidagi eng so'nggi tendentsiyalarni kuzatib boramiz va ularni mijozlarimizning ehtiyojlariga moslashtiramiz. Bizning yechimlarimiz sizning biznes jarayonlaringizni yanada samarali va tezkor qilishga yordam beradi. Biz vaqt va resurslarni tejash uchun optimallashtirilgan dasturiy ta'minotni taqdim etamiz, bu esa sizga raqobatda oldinga chiqish imkonini beradi.",
    icon: dasturiy,
    title:
      "Kelajakka qadam tashlashga yordam beradigan dasturiy ta'minot yaratamiz.",
    id: "dasturiy-taminot",
    section: {
      title: "Yangi imkoniyatlar, yangicha yondashuv!",
      description:
        "Bizning dasturiy yechimlar - siz uchun ishonchli qo'llab-quvvatlov. Maxsus dasturlar bilan biz sizning ish jarayonlaringizni yaxshilaymiz, Biznesingizni onlayn maydonda muvaffaqiyatga erishishga yordam beramiz.",
      data: [
        {
          title: "Maxsus Dasturiy Ta'minot",
          description:
            "Sizning g'oyalaringiz, bizning ilovalarimiz! Biz mobil ilovalarni yaratishda tajribamiz bilan sizning foydalanuvchilaringizga qulay va samarali dasturlar taqdim etamiz. Sizning brendingizni ko'tarishga yordam beradigan intuitiv va estetik dizayn.",
        },
        {
          title: "Mobil Ilovalar",
          description:
            "Sizning g'oyalaringiz, bizning ilovalarimiz! Biz mobil ilovalarni yaratishda tajribamiz bilan sizning foydalanuvchilaringizga qulay va samarali dasturlar taqdim etamiz. Sizning brendingizni ko'tarishga yordam beradigan intuitiv va estetik dizayn.",
        },
        {
          title: "Veb-ilovalar",
          description:
            "Internetda muvaffaqiyatga erishing! Veb-ilovalarimiz yordamida sizning biznesingizni onlayn maydonda kengaytiramiz. Foydalanuvchilarga qulay interfeys va yuqori tezlikdagi ishlash bilan ular sizning xizmatlaringizni osonlik bilan ko'rishlari va foydalanishlari mumkin.",
        },
        {
          title: "Dasturiy Ta'minotni Qo'llab-Quvvatlash",
          description:
            "Doimiy yordam va qo'llab-quvvatlash! Bizning dasturiy ta'minotimizni ishlab chiqibgina qolmay, uni qo'llab-quvvatlaymiz ham. Biz sizning ehtiyojlaringizga tez va samarali javob beramiz, bu sizning faoliyatingizda uzluksizlikni ta'minlaydi.",
        },
        {
          title: "Texnologik Konsalting",
          description:
            "Sizga mos yechimlarni toping! Texnologik konsultatsiya xizmatlarimiz bilan siz o'z biznesingiz uchun eng yaxshi dasturiy yechimlarni topishingiz mumkin. Biz sizning maqsadlaringizga erishishga yordam beramiz va muammolarni hal etamiz.",
        },
        {
          title: " O'qitish va Treninglar",
          description:
            "Sizning jamoangizni rivojlantirish! Dasturiy ta'minotimizdan to'liq foydalana olish uchun, biz foydalanuvchilar uchun treninglar va o'qitish dasturlarini taklif etamiz. Bu sizning jamoangizning samaradorligini oshirishga yordam beradi.",
        },
      ],
    },
  },
  {
    name: "G'oyangizni amalga oshirishda biz bilan birga kuchli qadamlar qo'ying!",
    description:
      "Biz innovatsion g‘oyalar va startaplarni rivojlantirishga yo‘naltirilgan qo‘llab-quvvatlash va inkubatsiya xizmatlarini taklif etamiz. Bizning xizmatlarimiz quyidagi yo'nalishlarni o'z ichiga oladi: ",
    icon: innovation,
    id: "startaplar-uchun-qollab-quvvatlash",
    title: "Startaplar Uchun Qo‘llab-Quvvatlash va Inkubatsiya Xizmatlari",
    section: {
      title: "Yangi imkoniyatlar, yangicha yondashuv!",
      description:
        "Bizning kompaniyamiz, startaplarni muvaffaqiyatli rivojlantirishga yordam berishga qaratilgan qo‘llab-quvvatlash va inkubatsiya xizmatlarini taklif etadi. Bizning maqsadimiz — yangi g‘oyalar va innovatsion tashabbuslarni amalga oshirish, ular uchun kuchli asos yaratish va bozorni zabt etishga yordam berishdir.",
      data: [
        {
          title: "Biznes Reja Yozish",
          description:
            "Startapning muvaffaqiyati uchun zarur bo'lgan aniq va samarali biznes rejalarini ishlab chiqishga yordam beramiz.",
        },
        {
          title: "Mentorlik",
          description:
            "Tajribali mutaxassislar va korxonalar bilan bog‘lanish, startapni rivojlantirishda yordam berish uchun mentorlar taqdim etamiz.",
        },
        {
          title: "Moliyaviy Qo‘llab-quvvatlash",
          description:
            " Startapning rivojlanishi uchun zarur bo‘lgan moliyaviy manbalarni izlash va investitsiyalarni jalb qilishda yordam beramiz.",
        },
        {
          title: "Tajriba Almashish",
          description:
            "Startaplar o'rtasida tajriba almashish va hamkorlikni rivojlantirish uchun platforma yaratamiz.",
        },
        {
          title: "Ta'lim va Treninglar",
          description:
            "Startap egalariga va jamoalariga biznes, marketing, moliya va boshqa muhim sohalarda treninglar o'tkazamiz.",
        },
        {
          title: "Dasturiy Ta'minot va Texnologik Yechimlar",
          description:
            "Startaplar uchun zarur bo'lgan dasturiy ta'minot yechimlarini ishlab chiqish va taqdim etamiz.",
        },
      ],
    },
  },
  {
    name: "Yuqori Sifatli Ishlab Chiqarish va Kreativlikni Birlashtirib, Muvaffaqiyatli Loyiha Yaratamiz!",
    description:
      "Laser texnologiyalari — zamonaviy ishlab chiqarishda keng qo‘llaniladigan, yuqori aniqlik va samaradorlikka ega bo‘lgan innovatsion usuldir. FABLAB markazida mavjud lazer uskunalari turli sohalarda foydalanish imkoniyatlarini taqdim etadi, shu jumladan, prototip ishlab chiqish, mahsulotni shikastlamasdan kesish, engraving (o‘ymachilik) va boshqalar.",
    icon: laser,
    id: "fablab-ishlab-chiqarish",
    title: "Fablab - ishlab chiqarish",
    section: {
      title: "Texnologiya va Kreativlikni Birlashtiramiz",
      description:
        "Bizning maqsadimiz — ishlab chiqarish jarayonlarini optimallashtirish va yangi mahsulotlarni yaratish orqali bizneslarni rivojlantirishdir. FABLAB, har qanday hajmdagi loyiha va g‘oyalarni amalga oshirish uchun qulay va xavfsiz muhit taqdim etadi.",
      data: [
        {
          title: "Texnologik Asbob-uskunalar",
          description:
            "FABLAB, zamonaviy va yuqori sifatli ishlab chiqarish asbob-uskunalari bilan jihozlangan. Bizda 3D printerlar, lazer kesish mashinalari, CNC uskunalari va boshqa ko‘plab texnologiyalar mavjud.",
        },
        {
          title: "Mutaxassislar Jamoasi",
          description:
            "Bizning mutaxassislarimiz texnologiya va ishlab chiqarish sohasida chuqur bilim va tajribaga ega. Ular sizning loyihalaringizni amalga oshirishda yordam berish uchun doimo tayyor.",
        },
        {
          title: "Innovatsion Yechimlar",
          description:
            "Har bir loyiha uchun innovatsion yondashuvlarni qo‘llab-quvvatlaymiz. FABLAB, startaplar va korxonalar uchun yangi mahsulotlarni yaratish va prototiplarni ishlab chiqishga yordam beradi.",
        },
        {
          title: "Ta'lim va Trening",
          description:
            "Biz, o‘quv dasturlari va seminarlar o‘tkazib, mijozlarimizga zamonaviy texnologiyalarni o‘rganish imkoniyatini taqdim etamiz. Bu, yangi ko‘nikmalarni o‘zlashtirish va ishlab chiqarish jarayonlarida yanada samarali ishlashga yordam beradi.",
        },
        {
          title: "Hamkorlik va Tarmoq",
          description:
            "FABLAB, turli sohalardagi mutaxassislar va tadbirkorlar bilan hamkorlikni rag'batlantiradi. Bu, sizga o‘zingizning g‘oyalaringizni yanada rivojlantirish va yangi imkoniyatlarni kashf etish uchun yordam beradi.",
        },
        {
          title: "Laser texnologiyalari ",
          description:
            "Lazer kesish texnologiyasi, materiallarni aniq va to‘g‘ri kesishda foydalaniladi. Bu jarayon yuqori tezlikda amalga oshiriladi va ko‘plab materiallarni (plyonka, yog‘och, metal, plastik va boshqa) kesish uchun qulaydir. ",
        },
      ],
    },
  },
  {
    name: "Ekologik Toza Ishlab Chiqarish Va Innovatsiyalar Bilan Qishloq Xo‘jaligini Rivojlantirish!",
    description:
      "Qishloq xo‘jaligi sohasida innovatsiyalarni joriy qilish va ishlab chiqarish jarayonlarini optimallashtirish, natijada, iqtisodiy samaradorlikni oshiradi va qishloq xo‘jaligini yanada barqaror rivojlantiradi. ",
    icon: qishloq,
    id: "qishloq-xojaligi",
    title: "Qishloq Xo‘jaligi",
    section: {
      title: "Innovatsiyalar Bilan Qishloq Xo‘jaligini Rivojlantiramiz!",
      description:
        "Biz, qishloq xo‘jaligida ekologik barqarorlikni ta'minlashga katta ahamiyat beramiz. Innovatsion texnologiyalarni qo‘llash orqali, ishlab chiqarishni ekologik toza va barqaror usulda amalga oshirishga intilamiz.",
      data: [
        {
          title: "Agrotexnologiyalar",
          description:
            "Biz, qishloq xo‘jaligida zamonaviy agrotexnologiyalarni qo‘llab-quvvatlaymiz, bu esa ekinlarni parvarishlash va hosilni oshirish jarayonlarini avtomatlashtirish imkonini beradi.",
        },
        {
          title: "Sensorlar va IoT",
          description:
            "Yer va ekinlarning holatini monitoring qilish uchun sensorlar va Internet of Things (IoT) texnologiyalarini joriy etamiz. Bu, real vaqt rejimida ma'lumotlar to‘plash va tahlil qilish imkonini beradi.",
        },
        {
          title: "Robototexnika",
          description:
            " Ishlab chiqarish jarayonlarini optimallashtirish uchun robototexnika yechimlaridan foydalanamiz. Bu, ishchilarni yuklashni kamaytirish va ishlash samaradorligini oshirishga yordam beradi.",
        },
        {
          title: "Ma'lumotlar Tahlili",
          description:
            "Ekologik va iqtisodiy parametrlarni tahlil qilish, shuningdek, hosilni oshirishga yo'naltirilgan strategiyalarni ishlab chiqish.  Ma'lumotlar tahlili yordamida qishloq xo‘jaligida kelgusi tendentsiyalarni va o‘zgarishlarni oldindan ko‘ra olish.",
        },
        {
          title: "Tadqiqot va Ishlab Chiqish",
          description:
            "Yangi texnologiyalarni ishlab chiqish va joriy qilish orqali qishloq xo‘jaligi sohasidagi innovatsion g‘oyalarni rivojlantirish.",
        },
        {
          title: "Avtomatlashtirish",
          description:
            " Ishlab chiqarish jarayonlarini avtomatlashtirish orqali ish vaqtini va xarajatlarni kamaytirish. Avtomatlashtirish jarayonlarida inson omilini kamaytirib, xatolarni minimallashtirish imkoniyatini beradi.",
        },
      ],
    },
  },
  {
    name: "Xalqaro aloqalar - sizning biznesingizning yangi ufqlari!",
    description: "Bizning xalqaro aloqalar tarmog‘imiz orqali siz innovatsion kompaniyalar bilan hamkorlik qilish imkoniyatiga ega bo‘lasiz. Bu esa sizning texnologiyangizni rivojlantirishga va yangi bozorlarni kashf etishga yordam beradi.",
    icon: xalqaro,
    id: "xalqaro-aloqalar",
    title: "Xalqaro aloqalar",
    section: {
        title: "Xalqaro aloqalar - sizning biznesingizning yangi ufqlari!",
        description: "Bizning xalqaro aloqalar tarmog‘imiz orqali siz innovatsion kompaniyalar bilan hamkorlik qilish imkoniyatiga ega bo‘lasiz. Bu esa sizning texnologiyangizni rivojlantirishga va yangi bozorlarni kashf etishga yordam beradi.",
        data: [
            {
                title: "Texnologik Rivojlanish",
                description:
                    "Xalqaro aloqalar orqali olingan texnologik yangiliklar va tadqiqotlar sizning kompaniyangizni raqobatbardosh qilishda muhim rol o‘ynaydi.",
            },
            {
                title: "Resurslar va Tajriba",
                description:
                    "Biz bilan ishlash orqali siz xalqaro tajribaga ega bo‘lgan mutaxassislardan foydalanishingiz mumkin, bu sizga yangi g‘oyalar va yondashuvlarni o‘rganishga imkon beradi.",
            },
            {
                title: "Moliya Va Investitsiyalar",
                description:
                    "Xalqaro aloqalar orqali siz moliyaviy manbalarni jalb qilish va yangi investitsiyalarni kiritish imkoniyatini oshirishingiz mumkin.",
            },

        ],
    }
  }
];

export default serviceData;
