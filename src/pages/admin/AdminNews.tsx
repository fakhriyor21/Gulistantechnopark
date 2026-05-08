import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { LiaSpinnerSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  createNews,
  deleteNews,
  canUseFirebase,
  updateNews,
  uploadNewsMedia,
} from "@/services/firebaseCms";
import type { NewsArticle } from "@/types/cms";
import { timestampToIsoString } from "@/lib/firestoreDates";
import { db } from "@/firebase/config";

function looksLikeVideo(url: string) {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
}

export default function AdminNews() {
  const [rows, setRows] = useState<{ id: string; data: NewsArticle }[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [mediaType, setMediaType] = useState<"image" | "video">("image");
  const [active, setActive] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [uploadFailed, setUploadFailed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);
    if (!canUseFirebase()) {
      setRows([]);
      setLoading(false);
      return;
    }

    const unsub = onSnapshot(
      collection(db(), "news"),
      (snapshot) => {
        const items = snapshot.docs
          .map((doc) => ({ id: doc.id, data: doc.data() as NewsArticle }))
          .sort((a, b) => {
            const av = (a.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
            const bv = (b.data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? 0;
            return bv - av;
          });
        setRows(items);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        toast({ title: "Yangiliklarni yuklashda xatolik", variant: "destructive" });
        setLoading(false);
      },
    );

    return () => unsub();
  }, [toast]);

  const stats = useMemo(() => {
    const total = rows.length;
    const activeCount = rows.filter((r) => r.data.active !== false).length;
    return { total, activeCount, inactiveCount: total - activeCount };
  }, [rows]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    setMediaType("image");
    setActive(true);
    setEditId(null);
    setSelectedFileName("");
    setUploadFailed(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[AdminNews] submit started", {
      title,
      descriptionLength: description.length,
      hasImageUrl: Boolean(imageUrl.trim()),
      mediaType,
      active,
      editId,
    });

    if (!title.trim() || !description.trim()) {
      console.log("[AdminNews] validation failed: title/description required");
      toast({ title: "Sarlavha va matn majburiy", variant: "destructive" });
      return;
    }

    if (selectedFileName && !imageUrl) {
      toast({
        title: "Rasm yuklanmagan",
        description: "Avval rasmni muvaffaqiyatli yuklang, keyin Qo‘shish ni bosing.",
        variant: "destructive",
      });
      return;
    }

    if (uploadFailed) {
      toast({
        title: "Upload xatosi bor",
        description: "Rasmni qayta tanlab yuklang yoki faylni almashtiring.",
        variant: "destructive",
      });
      return;
    }

    const finalImageUrl = imageUrl.trim() || "";
    const finalMediaType = mediaType === "video" || looksLikeVideo(finalImageUrl) ? "video" : "image";
    setSaving(true);
    try {
      if (editId) {
        console.log("[AdminNews] updateNews call", { editId, finalImageUrl, finalMediaType });
        await updateNews(editId, {
          title: title.trim(),
          description: description.trim(),
          imageUrl: finalImageUrl,
          mediaType: finalMediaType,
          active,
        });
        console.log("[AdminNews] updateNews success", { editId });
        toast({ title: "Yangilik yangilandi" });
      } else {
        console.log("[AdminNews] createNews call", { finalImageUrl, finalMediaType });
        await createNews({
          title: title.trim(),
          description: description.trim(),
          imageUrl: finalImageUrl,
          mediaType: finalMediaType,
          active,
        });
        console.log("[AdminNews] createNews success");
        toast({ title: "Yangilik qo‘shildi" });
      }
      resetForm();
    } catch (e) {
      console.error("[AdminNews] submit error", e);
      toast({ title: "Saqlashda xatolik", description: "Maydonlar va Firebase ruxsatlarini tekshiring.", variant: "destructive" });
    } finally {
      setSaving(false);
      console.log("[AdminNews] submit finished");
    }
  };

  const remove = async (id: string) => {
    if (!confirm("O‘chirilsinmi?")) return;
    try {
      await deleteNews(id);
      toast({ title: "O‘chirildi" });
      if (editId === id) resetForm();
    } catch {
      toast({ title: "O‘chirishda xatolik", variant: "destructive" });
    }
  };

  const toggleActive = async (id: string, nextActive: boolean) => {
    try {
      await updateNews(id, { active: nextActive });
      toast({ title: nextActive ? "Faol qilindi" : "Nofaol qilindi" });
    } catch {
      toast({ title: "Holatni yangilashda xatolik", variant: "destructive" });
    }
  };

  const startEdit = (id: string, data: NewsArticle) => {
    setEditId(id);
    setTitle(data.title);
    setDescription(data.description);
    setImageUrl(data.imageUrl || "");
    setMediaType(data.mediaType === "video" || looksLikeVideo(data.imageUrl || "") ? "video" : "image");
    setActive(data.active !== false);
  };

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f || (!f.type.startsWith("image/") && !f.type.startsWith("video/"))) {
      toast({ title: "Faqat rasm yoki video tanlang", variant: "destructive" });
      return;
    }
    setSelectedFileName(f.name);
    setUploadFailed(false);
    setUploading(true);
    setUploadProgress(0);
    try {
      console.log("[AdminNews] uploadNewsMedia call", { name: f.name, type: f.type, size: f.size });
      const uploaded = await uploadNewsMedia(f, (p) => setUploadProgress(p));
      setImageUrl(uploaded.url);
      setMediaType(uploaded.mediaType);
      setUploadFailed(false);
      console.log("[AdminNews] uploadNewsMedia success", uploaded);
      toast({ title: uploaded.mediaType === "video" ? "Video yuklandi" : "Rasm yuklandi" });
    } catch (err) {
      console.error("[AdminNews] uploadNewsMedia error (bypass to text-only allowed)", err);
      // Foydalanuvchi fayl tanlagan bo'lsa, upload xatoni aniq belgilab qo'yamiz.
      setImageUrl("");
      setMediaType("image");
      setUploadFailed(true);
      const message = err instanceof Error ? err.message : String(err);
      toast({
        title: "Rasm yuklanmadi",
        description: message.slice(0, 220),
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      setUploadProgress(0);
      e.target.value = "";
    }
  };

  return (
    <div className="grid gap-8 xl:grid-cols-2">
      <div>
        <h1 className="text-2xl font-bold text-[#33445F] dark:text-white">Yangiliklar</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {editId ? "Tahrirlash rejimi: rasm/video yuklab saqlang." : "Yangi yangilik uchun faqat fayl yuklang (rasm/video)."}
        </p>
        <form
          className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-[#172333] dark:bg-[#0d1829]"
          onSubmit={(e) => void handleSubmit(e)}
        >
          <div className="space-y-2">
            <Label>Sarlavha</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Yoki fayl yuklash (rasm/video)</Label>
            <Input type="file" accept="image/*,video/*" disabled={uploading || saving} onChange={(e) => void onFile(e)} />
            {selectedFileName ? (
              <p className="text-xs text-slate-500">
                Tanlangan fayl: {selectedFileName}
                {uploadFailed ? " (yuklanmadi)" : imageUrl ? " (yuklandi)" : ""}
              </p>
            ) : null}
          </div>
          {uploading && uploadProgress > 0 ? (
            <div className="space-y-1">
              <p className="text-xs text-slate-500">Yuklanmoqda: {uploadProgress}%</p>
              <div className="h-2 w-full rounded bg-slate-200">
                <div className="h-2 rounded bg-[#0B4397] transition-all" style={{ width: `${uploadProgress}%` }} />
              </div>
            </div>
          ) : null}
          <p className="text-xs text-slate-500">Rasm ixtiyoriy: faqat sarlavha va matn bilan ham saqlanadi.</p>
          {imageUrl ? (
            mediaType === "video" || looksLikeVideo(imageUrl) ? (
              <video
                src={imageUrl}
                controls
                className="max-h-56 w-full rounded-lg border bg-black object-contain"
              />
            ) : (
              <img src={imageUrl} alt="" className="max-h-56 w-full rounded-lg border object-cover" />
            )
          ) : null}
          <div className="space-y-2">
            <Label>Matn (HTML mumkin)</Label>
            <textarea
              className="min-h-[180px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-[#283651] dark:bg-[#081426] dark:text-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <label className="flex items-center gap-2 text-sm font-medium dark:text-white">
            <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
            Faol holatda chiqarish (saytda ko‘rinsin)
          </label>
          <div className="flex flex-wrap gap-2">
            <Button
              className="bg-[#0B4397]"
              type="submit"
              disabled={uploading || saving || !title.trim() || !description.trim()}
            >
              {uploading ? "Fayl yuklanmoqda..." : saving ? "Saqlanmoqda..." : editId ? "Saqlash" : "Qo‘shish"}
            </Button>
            {editId ? (
              <Button type="button" variant="outline" disabled={uploading || saving} onClick={() => resetForm()}>
                Bekor qilish
              </Button>
            ) : null}
          </div>
        </form>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs sm:text-sm">
          <div className="rounded-xl border bg-white p-3 dark:border-[#172333] dark:bg-[#0d1829]">Jami: {stats.total}</div>
          <div className="rounded-xl border bg-white p-3 dark:border-[#172333] dark:bg-[#0d1829]">Faol: {stats.activeCount}</div>
          <div className="rounded-xl border bg-white p-3 dark:border-[#172333] dark:bg-[#0d1829]">Nofaol: {stats.inactiveCount}</div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-[#33445F] dark:text-white">Ro‘yxat</h2>
        <div className="mt-4 space-y-3">
          {loading ? (
            <div className="flex items-center gap-2 text-slate-500">
              <LiaSpinnerSolid className="size-5 animate-spin" />
              Yuklanmoqda...
            </div>
          ) : null}
          {rows.map(({ id, data }) => (
            <div
              key={id}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-[#172333] dark:bg-[#0d1829] sm:flex-row"
            >
              {(data.mediaType === "video" || looksLikeVideo(data.imageUrl)) ? (
                <video
                  src={data.imageUrl}
                  className="h-28 w-full rounded-lg bg-black object-cover sm:h-24 sm:w-36"
                  muted
                  controls
                />
              ) : (
                <img
                  src={data.imageUrl}
                  alt=""
                  className="h-28 w-full rounded-lg object-cover sm:h-24 sm:w-36"
                />
              )}
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[#33445F] dark:text-white">{data.title}</p>
                <p className={`mt-1 inline-block rounded px-2 py-0.5 text-[11px] ${data.active !== false ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-700"}`}>
                  {data.active !== false ? "Faol" : "Nofaol"}
                </p>
                <p className="mt-1 line-clamp-2 text-xs text-slate-500">
                  {timestampToIsoString(data.createdAt)
                    ? new Date(timestampToIsoString(data.createdAt)).toLocaleString("uz-UZ")
                    : ""}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => void toggleActive(id, data.active === false)}
                  >
                    {data.active !== false ? "Nofaol qilish" : "Faol qilish"}
                  </Button>
                  <Button size="sm" variant="secondary" onClick={() => startEdit(id, data)}>
                    Tahrirlash
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => void remove(id)}>
                    O‘chirish
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
