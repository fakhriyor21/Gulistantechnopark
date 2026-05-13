import { useRef, type MouseEvent, type ReactNode, useState } from "react";
import logo from "../assets/images/logo/logo-crup.png";
import { PageContent, PageHero } from "../components/Layout/PageLayout";
import { cn } from "../lib/utils";
import { djangoSubmitInquiry, phoneDigitsForDjango } from "@/services/djangoCms";
import { useMessages } from "@/contexts/LanguageContext";

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
  const m = useMessages();
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
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

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
      setSubmitStatus({ type: 'error', message: m.contact.agreementErr });
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    if (!formData.first_name || !formData.last_name || !formData.phone) {
      setSubmitStatus({ type: 'error', message: m.contact.requiredErr });
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const phone = phoneDigitsForDjango(formData.phone);
      if (phone.length !== 9) {
        setSubmitStatus({
          type: "error",
          message: m.contact.phoneErr,
        });
        setTimeout(() => setSubmitStatus(null), 5000);
        setIsSubmitting(false);
        return;
      }
      await djangoSubmitInquiry({
        name: `${formData.first_name} ${formData.last_name}`.trim(),
        phone,
        company_name: (formData.company_name.trim() || m.industries.companyNone).slice(0, 100),
        body_small: (formData.message.trim() || "—").slice(0, 200),
      });

      // Muvaffaqiyatli yuborildi
      setSubmitStatus({ type: 'success', message: m.contact.sent });
      setShowSuccessOverlay(true);
      setTimeout(() => setShowSuccessOverlay(false), 3000);
      
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
      setSubmitStatus({ type: 'error', message: m.contact.error });
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
      {showSuccessOverlay ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#031227]/55 px-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl border border-emerald-300 bg-white p-8 text-center shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">{m.contact.successOverlay}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0f2a4f] sm:text-4xl">{m.contact.successHeading}</h2>
            <p className="mt-3 text-base text-slate-600">{m.contact.successBody}</p>
            <button
              type="button"
              onClick={() => setShowSuccessOverlay(false)}
              className="mt-6 inline-flex rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              {m.contact.close}
            </button>
          </div>
        </div>
      ) : null}

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
        eyebrow={m.contact.pageEyebrow}
        title={m.contact.pageTitle}
        subtitle={m.contact.pageSubtitle}
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
                <div className="text-[#EF7F1A]">{m.contact.formEyebrow}</div>
                <div className="h-px w-full bg-secondary-line-gradient transition-colors" />
              </div>
              
              <div className="flex w-full flex-col justify-between gap-4 [transform:translateZ(20px)] lg:flex-row">
                <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-[1.75rem] [transform:translateZ(26px)]">
                  {m.contact.formHeading}
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
                          placeholder={`${m.contact.lastNamePh} *`}
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
                          placeholder={`${m.contact.firstNamePh} *`}
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
                          placeholder={`${m.contact.phonePh} *`}
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
                          placeholder={m.contact.companyPh}
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                        />
                      </span>
                    </div>
                    <div className="space-y-2 w-full">
                      <textarea
                        className="flex w-full h-[7.875rem] rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder={m.contact.messagePh}
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
                    <span>{m.contact.formAgree} *</span>
                  </label>
                  
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md border border-solid border-[#443ee4] bg-[#171779] font-semibold text-white px-4 py-3 text-sm mt-5"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? m.common.submitting : m.contact.submit}
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

