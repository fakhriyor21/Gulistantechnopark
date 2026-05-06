import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../../hooks/use-toast";
import { deleteNews, type News } from "@/services/newsService";

interface NewsCardProps {
  news: News;
  onDelete?: (id: string) => void;
}

export default function NewsCard({ news, onDelete }: NewsCardProps) {
  const [deleting, setDeleting] = useState(false);
  const { toast } = useToast();

  const handleDelete = async () => {
    if (!news.id) return;
    setDeleting(true);

    try {
      await deleteNews(news.id);
      toast({
        title: "Yangilik o‘chirildi",
        description: "Yangilik muvaffaqiyatli o‘chirildi.",
      });
      if (onDelete) {
        onDelete(news.id);
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Xatolik",
        description: "Yangilikni o‘chirishning iloji bo‘lmadi.",
        variant: "destructive",
      });
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            {new Date(news.datatime).toLocaleString()}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            {news.title}
          </h2>
        </div>
        <Button
          variant="destructive"
          className="whitespace-nowrap"
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting ? "O‘chirilyapti..." : "O‘chirish"}
        </Button>
      </div>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {news.description}
      </p>
    </div>
  );
}
