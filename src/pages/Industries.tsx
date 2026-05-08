import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageContent } from "@/components/Layout/PageLayout";
import director from "@/assets/images/hero/director.png";
import citation from "@/assets/images/hero/citation.svg";
import logo from "@/assets/images/logo/logo-crup.png";
import serviceData from "@/data/serviceData";
import { useToast } from "@/hooks/use-toast";
import { canUseFirebase, submitContactMessage } from "@/services/firebaseCms";

const TOP_TABS = [
  { label: "Startap", slug: "startaplar-uchun-qollab-quvvatlash" },
  { label: "FABLAB", slug: "fablab-ishlab-chiqarish" },
  { label: "Dasturiy", slug: "dasturiy-taminot" },
  { label: "Agro", slug: "qishloq-xojaligi" },
];

export default function Industries() {
  const { id } = useParams<{ id: string }>();
  const data = serviceData.find((item) => item.id === id);
  const featureChips = data?.section.data.slice(0, 3) ?? [];
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#f4f7fd] dark:bg-[#08101B]">
        <PageContent className="py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-[#172333] dark:bg-[#0d1829]">
            <h1 className="text-2xl font-bold text-[#33445F] dark:text-white">Yo'nalish topilmadi</h1>
            <Link
              to="/services"
              className="mt-4 inline-flex rounded-lg bg-[#0B4397] px-4 py-2 text-sm font-semibold text-white hover:bg-[#09367a]"
            >
              Xizmatlarga qaytish
            </Link>
          </div>
        </PageContent>
      </div>
    );
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
      toast({
        title: "Majburiy maydonlar to'ldirilmadi",
        description: "Iltimos, Ism, Familiya va Telefon raqamni kiriting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      if (!canUseFirebase()) {
        toast({
          title: "Firebase sozlanmagan",
          description: "Iltimos, administrator bilan bog'laning.",
          variant: "destructive",
        });
        return;
      }

      await submitContactMessage({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone: phone.trim(),
        company: company.trim(),
        message: message.trim(),
      });

      toast({
        title: "So'rov yuborildi",
        description: "Xabaringiz admin panelga yuborildi.",
      });
      setShowSuccessOverlay(true);
      setTimeout(() => setShowSuccessOverlay(false), 3000);

      setFirstName("");
      setLastName("");
      setPhone("");
      setCompany("");
      setMessage("");
    } catch (error) {
      console.error("Industries form submit error:", error);
      toast({
        title: "Xatolik yuz berdi",
        description: "So'rov yuborishda xatolik bo'ldi. Qayta urinib ko'ring.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eaf7fd] text-[#33445F] dark:bg-[#08101B] dark:text-white">
      {showSuccessOverlay ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#031227]/55 px-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl border border-emerald-300 bg-white p-8 text-center shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Success</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0f2a4f] sm:text-4xl">Admin panelga yuborildi</h2>
            <p className="mt-3 text-base text-slate-600">
              So'rovingiz muvaffaqiyatli jo'natildi. Administrator tez orada siz bilan bog'lanadi.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccessOverlay(false)}
              className="mt-6 inline-flex rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Yopish
            </button>
          </div>
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 opacity-45" aria-hidden>
        <div className="absolute -left-24 top-[220px] h-[360px] w-[360px] rounded-[80px] border-4 border-[#d8ebf7]" />
        <div className="absolute right-[10%] top-[320px] h-[260px] w-[320px] rounded-[70px] border-4 border-[#d8ebf7]" />
        <div className="absolute left-[28%] top-[560px] h-[280px] w-[360px] rounded-[90px] border-4 border-[#d8ebf7]" />
      </div>
      <PageContent className="relative z-[2] pb-16 pt-8">
        <p className="mb-3 text-xs text-[#7d8ba4]">
          <Link to="/services" className="hover:text-[#0B4397]">Xizmatlar</Link> / <span>{data.title}</span>
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {TOP_TABS.map((tab) => (
            <Link
              key={tab.slug}
              to={`/services/industries/${tab.slug}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                tab.slug === data.id
                  ? "bg-[#0B4397] text-white"
                  : "bg-[#e5edf9] text-[#35598a] hover:bg-[#d8e5f8] dark:bg-[#12223a] dark:text-slate-200"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <section className="relative overflow-hidden rounded-2xl border border-[#d9e7f5] bg-[#083f8f] text-white shadow-xl">
          <img src={data.icon} alt={data.title} className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2f66]/90 to-[#203b6f]/65" />
          <div className="relative z-[2] grid gap-4 p-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-2xl font-bold leading-tight lg:text-[2rem]">{data.name}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90">{data.description}</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-center">
                <p className="text-[10px] uppercase tracking-wider text-white/80">Bo'limlar</p>
                <p className="text-2xl font-bold">{data.section.data.length}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/80">Yo'nalish</p>
              </div>
              <div className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90">
                {data.title}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-[#e0ebf6] bg-white p-5 shadow-sm dark:border-[#1b2e48] dark:bg-[#0d1829]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="inline-flex items-center rounded-full bg-[#edf4fb] px-3 py-1 text-xs text-[#7b8ba5]">
                Strategik imkoniyatlar
              </p>
              <h2 className="mt-3 text-2xl font-bold lg:text-3xl">{data.section.title}</h2>
            </div>
            <button className="rounded-xl bg-[#08a0d4] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0a8bbc]">
              Hamkorlikni boshlash
            </button>
          </div>
        </section>

        <section className="mt-4 grid gap-3 md:grid-cols-3">
          {featureChips.map((chip) => (
            <div key={chip.title} className="rounded-lg border border-[#e3ebf5] bg-[#f4f8fc] px-4 py-2 text-sm font-medium text-[#5f7292]">
              {chip.title}
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold">Xizmat doirasidagi imkoniyatlar</h3>
          <p className="mt-2 text-sm text-[#5d7193] dark:text-slate-300">
            Har bir yo'nalish bo'yicha amaliy yechimlar va mutaxassislar qo'llab-quvvatlovi taqdim etiladi.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.section.data.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#dce9f6] bg-white p-5 shadow-sm dark:border-[#1b2e48] dark:bg-[#0d1829]">
                <div className="mb-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f4ff] text-[#19a5d5]">
                  •
                </div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#5d7193] dark:text-slate-300">{item.description}</p>
                <button className="mt-4 text-sm font-semibold text-[#0ea5d5] hover:text-[#0b84ab]">
                  Batafsil maslahat →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{ background: "linear-gradient(0deg, rgba(62,74,231,0.88) 0%, rgba(7,65,150,1) 100%)" }}
          className="relative my-10 overflow-hidden rounded-xl border border-[#095e9e4d] p-8"
        >
          <img src={citation} alt="" className="mb-3 h-6 w-6 opacity-60" />
          <p className="text-xl text-white">{data.section.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full border border-white/70">
              <img src={director} alt="Direktor" className="h-12 w-12 rounded-full object-cover p-[2px]" />
            </div>
            <div>
              <h3 className="font-medium text-white">Mamatov Avaz Muxiddinovich</h3>
              <p className="text-sm text-white/85">Guliston yoshlar texnoparki direktori</p>
            </div>
          </div>
          <img src={logo} alt="" className="pointer-events-none absolute -bottom-4 -right-10 w-40 opacity-25" />
        </section>

        <section className="relative overflow-hidden rounded-xl border border-[#E7ECF5] bg-[#F4F6F9] p-6 dark:border-[#172333] dark:bg-[#081e3f4d] sm:p-12">
          <div className="flex flex-col gap-2">
            <div className="text-[#EF7F1A]">Ariza formasi</div>
            <div className="h-px w-full bg-gradient-to-r from-[#e4edf8] to-transparent" />
          </div>
          <div className="mt-4 flex w-full flex-col justify-between gap-6 lg:flex-row">
            <h3 className="max-w-xl text-3xl font-bold leading-tight text-[#33445F] dark:text-white">
              Savollaringiz bormi? So'rov qoldiring va administratorimiz tez orada siz bilan bog'lanadi!
            </h3>
            <form className="flex w-full flex-col gap-4" onSubmit={handleFormSubmit}>
              <div className="flex flex-col gap-4 lg:flex-row">
                <input
                  className="w-full rounded-md border border-[#E7ECF5] bg-transparent px-4 py-3 text-sm"
                  placeholder="Familiya"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={loading}
                />
                <input
                  className="w-full rounded-md border border-[#E7ECF5] bg-transparent px-4 py-3 text-sm"
                  placeholder="Ism"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col gap-4">
                <input
                  className="w-full rounded-md border border-[#E7ECF5] bg-transparent px-4 py-3 text-sm"
                  placeholder="Telefon raqam"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                />
                <input
                  className="w-full rounded-md border border-[#E7ECF5] bg-transparent px-4 py-3 text-sm"
                  placeholder="Kompaniya/Tashkilot nomi"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={loading}
                />
                <textarea
                  className="min-h-[126px] w-full rounded-md border border-[#E7ECF5] bg-transparent px-4 py-3 text-sm"
                  placeholder="Savolingizning qisqacha tavsifi"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 rounded-md border border-[#443ee4] bg-[#171779] px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Yuborilmoqda..." : "Ma'lumotlarni yuborish"}
              </button>
            </form>
          </div>
          <img src={logo} alt="" className="pointer-events-none absolute -bottom-6 -left-16 h-[205px] w-[218px] opacity-5 lg:h-[305px] lg:w-[318px]" />
        </section>
      </PageContent>
    </div>
  );
}
