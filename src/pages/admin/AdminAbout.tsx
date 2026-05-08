import { useEffect, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useToast } from "@/hooks/use-toast";
import { ensureAboutCmsDoc, saveAboutCms, watchAboutCms } from "@/services/firebaseCms";

export default function AdminAbout() {
  const [enabled, setEnabled] = useState(false);
  const [eyebrow, setEyebrow] = useState("Biz haqimizda");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [bodyHtml, setBodyHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    void ensureAboutCmsDoc();
    const unsub = watchAboutCms((d) => {
      if (d) {
        setEnabled(Boolean(d.enabled));
        setEyebrow(d.eyebrow || "");
        setTitle(d.title || "");
        setSubtitle(d.subtitle || "");
        setBodyHtml(d.bodyHtml || "");
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const save = async () => {
    setBusy(true);
    try {
      await saveAboutCms({
        enabled,
        eyebrow: eyebrow.trim(),
        title: title.trim(),
        subtitle: subtitle.trim(),
        bodyHtml,
      });
      toast({ title: "Saqlandi" });
    } catch (e) {
      console.error(e);
      toast({ title: "Xatolik", variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-[#33445F] dark:text-white">Biz haqimizda (CMS)</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Aktiv bo‘lsa, saytda avvalgi «Biz haqimizda» sahifasi o‘rniga quyidagi kontent ko‘rinadi.
      </p>
      <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-[#172333] dark:bg-[#0d1829]">
        {loading ? (
          <div className="flex items-center gap-2 text-slate-500">
            <LiaSpinnerSolid className="size-5 animate-spin" />
            Yuklanmoqda...
          </div>
        ) : null}
        <label className="flex items-center gap-2 text-sm font-medium dark:text-white">
          <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
          CMS sahifani yoqish
        </label>
        <div className="space-y-2">
          <Label>Yuqori yozuv (eyebrow)</Label>
          <Input value={eyebrow} onChange={(e) => setEyebrow(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Sarlavha</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Podzagolovok</Label>
          <Input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        </div>
        <div className="space-y-2 [&_.ql-toolbar]:rounded-t-xl [&_.ql-toolbar]:border-slate-200 dark:[&_.ql-toolbar]:border-[#283651] [&_.ql-container]:min-h-[220px] [&_.ql-container]:rounded-b-xl [&_.ql-editor]:dark:text-white">
          <Label>Asosiy matn</Label>
          <ReactQuill theme="snow" value={bodyHtml} onChange={setBodyHtml} />
        </div>
        <Button className="bg-[#0B4397]" disabled={busy} onClick={() => void save()}>
          Saqlash
        </Button>
      </div>
    </div>
  );
}
