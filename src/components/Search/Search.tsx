
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader} from "../ui/drawer"
import { Button } from "../ui/button"
import { IoSearch } from "react-icons/io5";
import { Input } from "../ui/input";
import { useMessages } from "@/contexts/LanguageContext";

export function Search() {
  const m = useMessages();
  return (
    <Drawer >
      <DrawerTrigger asChild>
        <Button variant="outline" className="text-2xl text-blue-500 dark:text-white hover:text-blue-500"><IoSearch/></Button>
      </DrawerTrigger>
      <DrawerContent className="bg-blue-950 bg-opacity-50 ">
        <div className="mx-auto  w-[90%] m-auto ">
          <DrawerHeader>
            <DrawerTitle className="text-white ">{m.common.searchTitle}</DrawerTitle>
            <DrawerDescription  className="text-gray-200">{m.common.searchDesc}</DrawerDescription>
          </DrawerHeader>
            <div className="mt-3 h-[120px] w-full">
                <Input placeholder={m.common.searchPlaceholder} className="border-y-blue-500   " type="search"  />
            </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
