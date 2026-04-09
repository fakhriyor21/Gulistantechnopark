import { deleteNews } from "../../server/Admin/Server";
import { Button } from "../ui/button";
import { mediaFileUrl } from "@/lib/apiOrigin";
import newsPlaceholder from "@/assets/images/home/itcourse.jpg";

interface News {
  id: number;
  title: string;
  description: string;
  datatime: string;
  file: string[];
}
export default function NewsCard({ news }: { news: News }) {
  const handleDelete = async () => {
    await deleteNews(news.id);
  };
  return (
    <div>
      <div className="flex flex-col justify-between gap-4 rounded-xl border border-solid border-[#ffffff1a] bg-[#F4F6F9] py-5 backdrop-blur-[0.625rem] dark:bg-[#081E3F4D]">
        <div className="flex min-h-32 flex-col gap-3 px-5">
          <div className="flex items-center justify-between">
            <p className="text-xs leading-[1.2rem] text-[#9CA1A9]">
              01.10.2024
            </p>
            <Button variant={"destructive"} onClick={handleDelete}>
              O'chirish
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="line-clamp-2 break-words text-lg font-bold leading-[1.6rem] text-[#33445F] dark:text-white">
              {news.title}
            </h1>
            <p className="line-clamp-2 break-words leading-[1.4rem] text-[#8F98A7] dark:text-[#9CA1A9]">
              {news.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative h-52">
            <img
              src={
                news.file?.[0]
                  ? mediaFileUrl(news.file[0])
                  : newsPlaceholder
              }
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = newsPlaceholder;
              }}
              className="size-full shrink-0 bg-no-repeat object-cover"
              alt="news"
            />
          </div>
          <div className="flex justify-between px-5 text-xs font-medium leading-[1.2rem] text-[#33445F] dark:text-white">
            <p>
              <span className="font-semibold text-[#EF7F1A]">24</span>{" "}
              ko'rishlar
            </p>
            <p>
              <span className="font-semibold text-[#EF7F1A]">0</span> marta
              ulashildi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
