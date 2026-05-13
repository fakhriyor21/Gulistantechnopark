import { useEffect, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { PageContent, PageHero } from "@/components/Layout/PageLayout";
import { djangoListAboutUsImages } from "@/services/djangoCms";
import { mediaFileUrl } from "@/lib/apiOrigin";
import type { GalleryImage } from "@/types/cms";
import { useLanguage, useMessages } from "@/contexts/LanguageContext";

export default function Gallery() {
  const { language } = useLanguage();
  const m = useMessages();
  const [photos, setPhotos] = useState<{ id: string; data: GalleryImage }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void djangoListAboutUsImages()
      .then((rows) => {
        if (cancelled) return;
        setPhotos(
          rows
            .filter((r): r is typeof r & { img: string } => Boolean(r.img))
            .map((r) => ({
              id: String(r.id),
              data: {
                imageUrl: r.img.startsWith("http") ? r.img : mediaFileUrl(r.img),
                caption: "",
              },
            })),
        );
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [language]);

  return (
    <div className="min-h-screen dark:bg-[#08101B]">
      <PageHero eyebrow={m.gallery.eyebrow} title={m.gallery.title} subtitle={m.gallery.subtitle} />
      <PageContent className="pb-16 pt-6">
        {loading ? (
          <div className="flex justify-center py-20">
            <LiaSpinnerSolid className="size-12 animate-spin text-[#0B4397] dark:text-white" />
          </div>
        ) : photos.length === 0 ? (
          <p className="text-center text-slate-600 dark:text-slate-400">{m.gallery.empty}</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {photos.map(({ id, data }) => (
              <figure
                key={id}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-slate-950"
              >
                <img src={data.imageUrl} alt={data.caption || ""} className="aspect-[4/3] w-full object-cover" />
                {data.caption ? (
                  <figcaption className="p-3 text-center text-sm text-[#33445F] dark:text-white/80">{data.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        )}
      </PageContent>
    </div>
  );
}
