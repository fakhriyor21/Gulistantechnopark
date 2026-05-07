import { useRef, type MouseEvent, type ReactNode, useState } from "react";
import logo from "../assets/images/logo/logo-crup.png";
import { PageContent, PageHero } from "../components/Layout/PageLayout";
import { cn } from "../lib/utils";
import { addContactMessage } from "@/lib/adminStorage";

const MAX_TILT = 7;

interface ContactTiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function ContactTiltCard({ className, children, ...props }: ContactTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * MAX_TILT;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * MAX_TILT;
    el.style.transform = `perspective(1200px) rotateX(${Math.max(-MAX_TILT, Math.min(MAX_TILT, -y))}deg) rotateY(${Math.max(-MAX_TILT, Math.min(MAX_TILT, x))}deg)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={cardRef}
      className={cn("transform-gpu transition-transform duration-300", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  // Form state'larini qo'shamiz
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    phone: "",
    company_name: "",
    message: "",
    agreement: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Input o'zgarishini boshqarish
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Checkbox o'zgarishini boshqarish
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreement: e.target.checked }));
  };

  // Form yuborish
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validatsiya
    if (!formData.agreement) {
      setSubmitStatus({ type: 'error', message: "Iltimos, ma'lumotlarni qayta ishlashga rozilik bering!" });
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    if (!formData.first_name || !formData.last_name || !formData.phone) {
      setSubmitStatus({ type: 'error', message: "Iltimos, barcha majburiy maydonlarni to'ldiring!" });
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      addContactMessage({
        id: Date.now(),
        firstName: formData.first_name,
        lastName: formData.last_name,
        phone: formData.phone,
        company: formData.company_name || "",
        message: formData.message || "",
        createdAt: new Date().toISOString(),
        read: false,
      });

      // Muvaffaqiyatli yuborildi
      setSubmitStatus({ type: 'success', message: "So'rovingiz muvaffaqiyatli yuborildi! Administrator tez orada siz bilan bog'lanadi." });
      
      // Formani tozalash
      setFormData({
        last_name: "",
        first_name: "",
        phone: "",
        company_name: "",
        message: "",
        agreement: false
      });

      // 5 soniyadan keyin status xabarini tozalash
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Xatolik:", error);
      setSubmitStatus({ type: 'error', message: "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring!" });
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-x-hidden bg-fixed text-slate-800",
        "[background-image:radial-gradient(ellipse_110%_75%_at_50%_-15%,rgba(86,139,216,0.2)_0%,transparent_58%),linear-gradient(180deg,#e8f0fb_0%,#f7f9fc_48%,#ffffff_100%)]",
        "dark:text-[#e8edf5] dark:[background-image:radial-gradient(ellipse_110%_75%_at_50%_-15%,#142136_0%,transparent_58%),linear-gradient(180deg,#0a0f1f_0%,#03050b_100%)]",
      )}
    >
      {/* ... background elementlar o'zgarishsiz ... */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden [transform-style:preserve-3d]" aria-hidden>
        <div className="industry-3d-grid opacity-70 dark:opacity-60" />
        <div className="industry-3d-radial-grid opacity-60 dark:opacity-50" />
        <div className="industry-3d-grid-vlines" />
        <span className="industry-3d-orb left-[8%] top-[16%] h-40 w-40 bg-[#6aa8ff]/35 [transform:translateZ(42px)] dark:bg-sky-400/20" />
        <span className="industry-3d-orb right-[10%] top-[30%] h-28 w-28 bg-indigo-400/30 [transform:translateZ(26px)] dark:bg-violet-400/20" />
        <span className="industry-3d-ring left-[4%] top-[50%] h-72 w-72 opacity-45 [transform:translateZ(-18px)]" />
        <span className="industry-3d-ring right-[6%] top-[8%] h-56 w-56 opacity-35 [transform:translateZ(12px)]" />
        <span className="industry-3d-glow -left-24 top-[20%] h-64 w-64 bg-[#62a9ff]/35 dark:bg-sky-500/20" />
        <span className="industry-3d-glow -right-20 bottom-[12%] h-72 w-72 bg-[#8b8dff]/30 dark:bg-indigo-500/20" />
      </div>
      
      <PageHero
        eyebrow="Aloqa"
        title="Kontaktlar"
        subtitle="Telefon, e-mail va manzil — savollar bo‘lsa, murojaat qiling."
      />
      <div style={{ perspective: "1200px" }}>
        <PageContent className="relative z-[1] overflow-x-hidden pb-16 pt-4">
        <div className="flex flex-col gap-6 pb-12 pt-2 [transform-style:preserve-3d]">
          {/* ... ContactTiltCard kartochkalari o'zgarishsiz ... */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* ... telefon, email, manzil, ish vaqti kartochkalari ... */}
          </div>
          
          {/* ... Google Maps kartasi ... */}
          
          <div className="my-5 xl:my-[3.75rem]">
            <ContactTiltCard className="relative items-start gap-4 overflow-hidden p-5 sm:p-12">
              <div className="flex flex-col gap-2 [transform:translateZ(18px)]">
                <div className="text-[#EF7F1A]">Ariza formasi</div>
                <div className="h-px w-full bg-secondary-line-gradient transition-colors" />
              </div>
              
              <div className="flex w-full flex-col justify-between gap-4 [transform:translateZ(20px)] lg:flex-row">
                <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-[1.75rem] [transform:translateZ(26px)]">
                  Savollaringiz bormi? So'rov qoldiring va administratorimiz
                  tez orada siz bilan bog'lanadi!
                </h1>
                
                {/* FORM - O'ZGARTIRILGAN QISM */}
                <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
                  {/* Status xabari */}
                  {submitStatus && (
                    <div className={`p-3 rounded-md text-sm ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-700 border border-green-300' 
                        : 'bg-red-100 text-red-700 border border-red-300'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="space-y-2 w-full">
                      <span className="flex items-center">
                        <input
                          className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                          placeholder="Familiya *"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          required
                        />
                      </span>
                    </div>
                    <div className="space-y-2 w-full">
                      <span className="flex items-center">
                        <input
                          className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                          placeholder="Ism *"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                        />
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="space-y-2 w-full">
                      <span className="flex items-center">
                        <input
                          className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                          placeholder="Telefon raqam *"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </span>
                    </div>
                    <div className="space-y-2 w-full">
                      <span className="flex items-center">
                        <input
                          className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                          placeholder="Kompaniya/Tashkilot nomi"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                        />
                      </span>
                    </div>
                    <div className="space-y-2 w-full">
                      <textarea
                        className="flex w-full h-[7.875rem] rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Savolingizning qisqacha tavsifi"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <label className="flex w-fit cursor-pointer select-none items-center gap-2 text-sm leading-[0.875rem] text-[#33445F] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={formData.agreement}
                      data-state={formData.agreement ? "checked" : "unchecked"}
                      onClick={() => setFormData(prev => ({ ...prev, agreement: !prev.agreement }))}
                      className={`peer h-4 w-4 shrink-0 rounded-sm border border-[#095E9E] dark:text-white shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${formData.agreement ? 'bg-[#095E9E]' : 'bg-transparent'}`}
                    >
                      {formData.agreement && <span className="text-white text-xs block text-center">✓</span>}
                    </button>
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleCheckboxChange}
                      aria-hidden="true"
                      style={{
                        transform: "translateX(-100%)",
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0,
                        width: 16,
                        height: 16,
                      }}
                    />
                    <span>Men ma'lumotlarni qayta ishlashga roziman *</span>
                  </label>
                  
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md border border-solid border-[#443ee4] bg-[#171779] font-semibold text-white px-4 py-3 text-sm mt-5"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Yuborilmoqda..." : "Ma'lumotlarni yuborish"}
                  </button>
                </form>
              </div>
              
              <img
                alt="Logo"
                loading="lazy"
                width={1}
                height={1}
                decoding="async"
                data-nimg={1}
                className="pointer-events-none absolute -left-28 bottom-0 h-[205px] w-[218px] shrink-0 select-none opacity-5 lg:h-[305px] lg:w-[318px]"
                src={logo}
                style={{ color: "transparent" }}
              />
            </ContactTiltCard>
          </div>
        </div>
      </PageContent>
      </div>
    </div>
  );
}

