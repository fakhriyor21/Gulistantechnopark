import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/Admin/Partials/Nabar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { addNews } from "@/services/newsService";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast({
        title: "To‘ldiring",
        description: "Iltimos yangilik sarlavhasi va tavsifini kiriting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await addNews({
        title: title.trim(),
        description: description.trim(),
        datatime: new Date().toISOString(),
        file: [],
      });

      toast({
        title: "Yangilik qo‘shildi",
        description: "Yangilik muvaffaqiyatli saqlandi.",
      });
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      toast({
        title: "Xatolik yuz berdi",
        description: "Yangilikni saqlashda xatolik yuz berdi.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark:bg-[#08101B] min-h-screen pb-10">
      <NavbarAdmin />
      <div className="pt-24 px-5 lg:px-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">
          <h1 className="mb-6 text-center text-3xl font-semibold text-slate-900 dark:text-white">
            Yangilik qo'shish
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Sarlavha</Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Yangilik sarlavhasini kiriting"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Tavsif</Label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Yangilik matnini kiriting"
                className="min-h-[180px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-[#081426] dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-500/20"
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Saqlanmoqda..." : "Yangilikni saqlash"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
