import { useState } from "react";
import { useToast } from "../../hooks/use-toast";
import logo from "../../assets/images/logo/logo-crup.png";
import { addContactMessage } from "@/lib/adminStorage";
import type { ContactMessageItem } from "@/types/admin";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !phone.trim() || !message.trim()) {
      toast({
        title: "To'ldiring",
        description: "Iltimos barcha majburiy maydonlarni to'ldiring.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const newMessage: ContactMessageItem = {
        id: Date.now(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone: phone.trim(),
        company: company.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
        read: false,
      };
      addContactMessage(newMessage);

      toast({
        title: "Xabar yuborildi",
        description: "Sizning xabringiz muvaffaqiyatli qabul qilindi.",
      });

      setFirstName("");
      setLastName("");
      setPhone("");
      setCompany("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Xatolik yuz berdi",
        description: "Xabar yuborishda xatolik yuz berdi.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-5 xl:my-[3.75rem]">
      <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-xl border border-solid border-[#E7ECF5] bg-[#F4F6F9] p-5 dark:border-[#172333] dark:bg-[#081e3f4d] sm:p-12">
        <div className="flex flex-col gap-2">
          <div className="text-[#EF7F1A]">Ariza formasi</div>
          <div className="h-px w-full bg-secondary-line-gradient transition-colors" />
        </div>
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-[1.75rem]">
            Savollaringiz bormi? So'rov qoldiring va administratorimiz tez orada
            siz bilan bog'lanadi!
          </h1>
          <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="space-y-2 w-full">
                <span className="flex items-center">
                  <input
                    className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                    placeholder="Familiya"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={loading}
                  />
                </span>
              </div>
              <div className="space-y-2 w-full">
                <span className="flex items-center">
                  <input
                    className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                    placeholder="Ism"
                    name="first_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={loading}
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-2 w-full">
                <span className="flex items-center">
                  <input
                    className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                    placeholder="Telefon raqam"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={loading}
                  />
                </span>
              </div>
              <div className="space-y-2 w-full">
                <span className="flex items-center">
                  <input
                    className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                    placeholder="Kompaniya/Tashkilot nomi"
                    name="company_name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    disabled={loading}
                  />
                </span>
              </div>
              <div className="space-y-2 w-full">
                <textarea
                  className="flex w-full h-[7.875rem] rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Savolingizning qisqacha tavsifi"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md border border-solid border-[#443ee4] bg-[#171779] font-semibold text-white px-4 py-3 text-sm mt-5"
              type="submit"
              disabled={loading}
            >
              {loading ? "Yuborilmoqda..." : "Ma'lumotlarni yuborish"}
            </button>
          </form>
        </div>
        <img
          alt=" Logo"
          loading="lazy"
          width={1}
          height={1}
          decoding="async"
          data-nimg={1}
          className="pointer-events-none absolute -left-28 bottom-0 h-[205px] w-[218px] shrink-0 select-none opacity-5 lg:h-[305px] lg:w-[318px]"
          src={logo}
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
}
