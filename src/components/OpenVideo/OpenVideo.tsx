import { FaPlay } from "react-icons/fa";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "../ui/dialog";
import YouTubePlayerS from "./VideoPLayer";


export default function OpenVideo() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"ghost"} className="gap-2 text-white border">
          <FaPlay /> Video ko'rish
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
