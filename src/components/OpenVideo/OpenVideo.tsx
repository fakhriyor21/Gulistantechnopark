import { FaPlay } from "react-icons/fa";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "../ui/dialog";
import YouTubePlayerS from "./VideoPLayer";

type OpenVideoProps = {
  triggerClassName?: string;
};

export default function OpenVideo({ triggerClassName }: OpenVideoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className={cn(
            "gap-2 border border-white/40 bg-white/10 text-white shadow-sm backdrop-blur-sm hover:bg-white/20 hover:text-white",
            triggerClassName,
          )}
        >
          <FaPlay className="text-sm" /> Video ko'rish
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-screen-lg flex items-center justify-center bg-opacity-100 bg-black/50 backdrop-blur-sm border-none">
        <DialogHeader>
          <DialogDescription>
            <div className="">
            <YouTubePlayerS videoId="-I8bzlX8_IM"/>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
