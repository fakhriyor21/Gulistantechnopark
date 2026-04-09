import { NewsForm } from "../../components/Admin/News/NewsForm";
import NavbarAdmin from "../../components/Admin/Partials/Nabar";

export default function AddNews() {
  return (
    <div className="dark:bg-[#08101B] h-screen">
      <NavbarAdmin />
      <h1 className="pt-24 text-center font-semibold text-3xl">
        Yangilik qo'shish
      </h1>
      <div className="px-5 py-8  flex justify-center">
        <NewsForm />
      </div>
    </div>
  );
}
