
import logo from "../../assets/images/logo/logo-crup.png";
export default function Contact() {
  return (
    <div className="my-5 xl:my-[3.75rem]">
      <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-xl border border-solid border-[#E7ECF5] bg-[#F4F6F9] p-5 dark:border-[#172333] dark:bg-[#081e3f4d] sm:p-12">
        <div className="flex flex-col gap-2">
          <div className="text-[#EF7F1A]">Ariza formasi</div>
          <div className="h-px w-full bg-secondary-line-gradient transition-colors" />
        </div>
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <h1 className="text-xl font-bold text-[#33445F] dark:text-white lg:text-[1.75rem]">
            Savollaringiz bormi? So'rov qoldiring va administratorimiz tez orada
            siz bilan bog'lanadi!
          </h1>
          <form className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="space-y-2 w-full">
                <span className="flex items-center">
                  <input
                    className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                    placeholder="Familiya"
                    name="last_name"
                    id=":r1c:-form-item"
                    aria-describedby=":r1c:-form-item-description"
                    aria-invalid="false"
                    defaultValue=""
                  />
                </span>
              </div>
              <div className="space-y-2 w-full">
                <span className="flex items-center">
                  <input
                    className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                    placeholder="Ism"
                    name="first_name"
                    id=":r1d:-form-item"
                    aria-describedby=":r1d:-form-item-description"
                    aria-invalid="false"
                    defaultValue=""
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-2 w-full">
                <span className="flex items-center">
                  <input
                    className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                    placeholder="Telefon raqam"
                    name="phone"
                    id=":r1e:-form-item"
                    aria-describedby=":r1e:-form-item-description"
                    aria-invalid="false"
                    defaultValue=""
                  />
                </span>
              </div>
              <div className="space-y-2 w-full">
                <span className="flex items-center">
                  <input
                    className="flex w-full rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative"
                    placeholder="Kompaniya/Tashkilot nomi"
                    name="company_name"
                    id=":r1f:-form-item"
                    aria-describedby=":r1f:-form-item-description"
                    aria-invalid="false"
                    defaultValue=""
                  />
                </span>
              </div>
              <div className="space-y-2 w-full">
                <textarea
                  className="flex w-full h-[7.875rem] rounded-md dark:bg-[#081426] border border-solid border-[#E7ECF5] dark:border-[#16283E] dark:placeholder:text-[#84888D] placeholder:text-sm bg-transparent px-4 py-[0.813rem] text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Savolingizning qisqacha tavsifi"
                  name="message"
                  id=":r1g:-form-item"
                  aria-describedby=":r1g:-form-item-description"
                  aria-invalid="false"
                  defaultValue={""}
                />
              </div>
            </div>
            <label className="flex w-fit cursor-pointer select-none items-center gap-2 text-sm leading-[0.875rem] text-[#33445F] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
              <button
                type="button"
                role="checkbox"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                className="peer h-4 w-4 shrink-0 rounded-sm border border-[#095E9E] dark:text-white shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#095E9E] data-[state=checked]:text-primary-foreground"
              />
              <input
                type="checkbox"
                aria-hidden="true"
                tabIndex={-1}
                defaultValue="on"
                style={{
                  transform: "translateX(-100%)",
                  position: "absolute",
                  pointerEvents: "none",
                  opacity: 0,
                  margin: 0,
                  width: 16,
                  height: 16,
                }}
              />
              <span>Men ma'lumotlarni qayta ishlashga roziman</span>
            </label>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md border border-solid border-[#443ee4] bg-[#171779] font-semibold text-white px-4 py-3 text-sm mt-5"
              type="submit"
            >
              Ma'lumotlarni yuborish
            </button>
          </form>
        </div>
        <img
          alt=" Logo"
          loading="lazy"
          width={1}
          height={1}
          decoding="async"
          data-nimg={1}
          className="pointer-events-none absolute -left-28 bottom-0 h-[205px] w-[218px] shrink-0 select-none opacity-5 lg:h-[305px] lg:w-[318px]"
          src={logo}
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
}
