
import citation from "../../assets/images/hero/citation.svg";
import director from "../../assets/images/hero/director.png";
import logo from "../../assets/images/logo/logo-crup.png";
export default function Quote({title}: {title: string}) {
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(62,74,231,0.87718837535014) 0%, rgba(7,65,150,1) 100%)`,
      }}
      className="relative my-5 flex flex-col gap-6 overflow-hidden rounded-xl border border-solid border-[#095e9e4d]  p-9 xl:my-[3.75rem]"
    >
      <div className="flex flex-col gap-2">
        <img
          alt="Citation"
          loading="lazy"
          width={24}
          height={24}
          decoding="async"
          data-nimg={1}
          className="opacity-50"
          src={citation}
          style={{ color: "transparent" }}
        />
        <h1 className="text-xl text-white">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-4 pt-4">
        <div className="border-opacity/50 flex items-center justify-center rounded-full border border-solid border-white">
          <img
            alt="Avatar"
            loading="lazy"
            width={48}
            height={48}
            decoding="async"
            data-nimg={1}
            className="shrink-0 rounded-full bg-no-repeat object-cover p-[2px]"
            srcSet={director}
            src={director}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-white">Mamatov Avaz Muxiddinovich</h1>
          <p className="text-sm text-[#ffffffd9]">
            Sirdaryo yoshlar texnoparki direktori
          </p>
        </div>
      </div>
      <img
        alt=" Logo"
        loading="lazy"
        width={200}
        height={202}
        decoding="async"
        data-nimg={1}
        className="absolute bottom-0 -right-20 shrink-0 opacity-25 "
        src={logo}
        style={{ color: "transparent" }}
      />
    </div>
  );
}
