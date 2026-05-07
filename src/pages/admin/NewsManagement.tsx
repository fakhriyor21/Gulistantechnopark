import { useMemo, useState } from "react";
import NavbarAdmin from "../../components/Admin/Partials/Nabar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { deleteAdminNews, getAdminNews, upsertAdminNews } from "@/lib/adminStorage";
import type { AdminNewsItem } from "@/types/admin";

export default function NewsManagement() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const { toast } = useToast();

  const news = useMemo(() => getAdminNews(), [refreshKey]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      toast({
        title: "To'ldirish majburiy",
        description: "Sarlavha va tavsif maydonlarini kiriting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const item: AdminNewsItem = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim() || "https://via.placeholder.com/600x400?text=News",
      createdAt: new Date().toISOString(),
    };
    upsertAdminNews(item);
    setTitle("");
    setDescription("");
    setImageUrl("");
    setRefreshKey((prev) => prev + 1);
    setLoading(false);
    toast({ title: "Yangilik saqlandi", description: "Public news sahifada avtomatik ko'rinadi." });
  };

  const handleDelete = (id: string) => {
    deleteAdminNews(id);
    setRefreshKey((prev) => prev + 1);
    toast({ title: "Yangilik o'chirildi" });
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16 dark:bg-[#08101B]">
      <NavbarAdmin />
      <div className="mx-auto w-full max-w-screen-2xl px-4 pb-10 pt-24 sm:px-6 lg:px-10">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">News Management</h1>
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="title">Sarlavha</Label>
                <Input id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Rasm URL (ixtiyoriy)</Label>
                <Input
                  id="imageUrl"
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://..."
                  value={imageUrl}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Tavsif</Label>
                <textarea
                  className="min-h-40 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-[#081426] dark:text-white"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <Button disabled={loading} type="submit" className="w-full">
                {loading ? "Saqlanmoqda..." : "Yangilik qo'shish"}
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            {news.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Hozircha yangilik yo'q.
              </div>
            ) : (
              news.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                    <Button onClick={() => handleDelete(item.id)} size="sm" variant="destructive">
                      O'chirish
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {new Date(item.createdAt).toLocaleString("uz-UZ")}
                  </p>
                  <p className="mt-3 whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
