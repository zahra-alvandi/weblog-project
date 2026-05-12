export default function ArticlesProducts({
  img,
  text,
  day,
  month,
  year,
  hoverLogo,
}) {
  return (
    <div>
      <div className="group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white shadow-normal dark:bg-zinc-700 rounded-2xl">
        <div className="relative w-[130px] h-[130px] shrink-0 sm:w-auto sm:h-auto sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden">
          <img
            src={img}
            className="h-full sm:h-auto object-cover"
            alt="blog 1"
          />
          <div className="absolute inset-0 w-full h-full hidden invisible opacity-0 group-hover:opacity-100 group-hover:visible md:flex md:items-center md:justify-center bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75">
            <img
              src={hoverLogo}
              className="text-amber-900 w-[138px] h-[54px]"
              alt="logo type"
            />
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-start justify-between">
          <a
            href="#"
            className="text-sm/7 line-clamp-2 max-w-[193px] ml-1.5 sm:ml-0 mt-2.5 sm:mt-0 md:text-lg text-zinc-700 dark:text-white"
          >
            {text}
          </a>

          <div className="hidden sm:flex gap-5">
            <span className="hidden lg:block w-px h-[61px] bg-gray-100 dark:bg-white/10"></span>
            <div className="flex flex-col text-sm ml-[12px] -mt-1 text-left lg:ml-[18px] text-teal-600 dark:text-emerlad-500">
              <span className="font-DanaDemiBold md:text-xl lg:text-2xl">
                {day}
              </span>
              <span>{month}</span>
              <span>{year}</span>
            </div>
          </div>
          <div className="flex items-end justify-between sm:hidden border-t w-full border-t-gray-100 dark:border-t-white/10 pt-[18px] pb-1.5">
            <span className="text-teal-600 dark:text-emerald-500 text-xs">
              21 مرداد 1402
            </span>
            <a
              href="#"
              className="flex items-center gap-x-1 text-sm h-5 rounded-md ml-1.5 pr-2.5 pl-2 text-orange-300 bg-orange-200/20"
            >
              مطالعه
              <svg className="w-3.5 h-3.5">
                <use href="#arrow-left"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
