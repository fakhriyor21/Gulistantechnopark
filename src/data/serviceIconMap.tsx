import type { ComponentType } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices, MdDeveloperMode, MdWeb } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";

export type ServiceIconId =
  | "startaplar"
  | "fablab"
  | "qishloq"
  | "xalqaro"
  | "dasturiy"
  | "mobil"
  | "konsalting"
  | "veb"
  | "default";

const map: Record<ServiceIconId, ComponentType<{ className?: string }>> = {
  startaplar: BsFillRocketTakeoffFill,
  fablab: MdOutlineMiscellaneousServices,
  qishloq: PiPlantFill,
  xalqaro: RiGlobalFill,
  dasturiy: FaComputer,
  mobil: MdDeveloperMode,
  konsalting: FaPeopleArrows,
  veb: MdWeb,
  default: MdOutlineMiscellaneousServices,
};

export function getServiceIcon(iconId: string): ComponentType<{ className?: string }> {
  return map[iconId as ServiceIconId] ?? map.default;
}

export const SERVICE_ICON_OPTIONS: { id: ServiceIconId; label: string }[] = [
  { id: "startaplar", label: "Startaplar" },
  { id: "fablab", label: "FABLAB" },
  { id: "qishloq", label: "Qishloq xo‘jaligi" },
  { id: "xalqaro", label: "Xalqaro aloqalar" },
  { id: "dasturiy", label: "Dasturiy ta’minot" },
  { id: "mobil", label: "Mobil ilovalar" },
  { id: "konsalting", label: "IT konsalting" },
  { id: "veb", label: "Veb dasturlash" },
  { id: "default", label: "Umumiy" },
];
