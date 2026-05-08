import { useEffect, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { PageContent, PageHero } from "@/components/Layout/PageLayout";
import { canUseFirebase, watchGallery } from "@/services/firebaseCms";
import type { GalleryImage } from "@/types/cms";

export default function Gallery() {
  const [photos, setPhotos] = useState<{ id: string; data: GalleryImage }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canUseFirebase()) {
      setPhotos([]);
      setLoading(false);
      return;
    }
    const unsub = watchGallery(
      (rows) => {
        setPhotos(rows as { id: string; data: GalleryImage }[]);
        setLoading(false);
      },
      () => setLoading(false),
    );
    return unsub;
  }, []);

  return (
    <div className="min-h-screen dark:bg-[#08101B]">
      <PageHero eyebrow="Galereya" title="Foto lavhalar" subtitle="Texnopark hayotidan kadrlar." />
      <PageContent className="pb-16 pt-6">
        {loading ? (
          <div className="flex justify-center py-20">
            <LiaSpinnerSolid className="size-12 animate-spin text-[#0B4397] dark:text-white" />
          </div>
        ) : photos.length === 0 ? (
          <p className="text-center text-slate-600 dark:text-slate-400">
            Hozircha rasmlar yo‘q. Admin galereyadan qo‘shishingiz mumkin.
          </p>
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
