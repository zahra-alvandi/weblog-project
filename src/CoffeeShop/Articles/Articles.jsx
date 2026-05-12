export default function Articles({text, img, day, month, year, hoverLogo}) {
  return (
    <div>
      <svg className="hidden">
        <symbol
          id="chevron-left-mini"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </symbol>
      </svg>
      <div className="container px-4">
        <div className="mb-12 flex justify-between font-Dana">
          <div>
            <h3 className="text-5xl font-MorabbaLight text-white">مطالب خواندنی</h3>
          </div>
          <div className="text-xl font-Dana pr-3 pl-2 text-orange-300 flex items-center">
            <span>مشاهده همه مطالب</span>
            <svg className="w-5 h-5">
              <use href="#chevron-left-mini"></use>
            </svg>
          </div>
        </div>

        {/* <div className="group flex gap-x-2.5 sm:block p2.5
         md:pb-2 bg-white shadow-normal dark:bg-zinc-700 rounded-2xl">
            <div className="relative w-[130px] h-[130px] shrink-0 sm:w-auto sm:h-auto sm:mb-4 rounded-2xl rounded-bl-4xl overflow-w-hidden">
                <img src={img} className="h-full sm:h-auto object-cover" alt="" />
                <div className="absolute inset-0 w-full h-full hidden invisible opacity-0 group-hover:opacity-100 group-hover:visible md:flex md:items-center md:justify-center bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75">
                    <img src={hoverLogo} className="text-amber-900 w-[138px] h-[54px]" alt="" />
                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                <a href="#" className="text-sm/7 line-clamp-2 max-w-[193px] ml-1.5 sm:ml-0 mt-2.5 sm:mt-0 md:text-lg text-zinc-700 dark:text-white">{text}</a>
                <div className="hidden sm:flex gap-5">
                    <span className="hidden lg:block w-px h-[61px] bg-gray-100 dark:bg-white/10"></span>
                    <div className="flex flex-col text-sm ml-[12px] -mt-1 text-left lg:ml-[18px] text-teal-600 dark:text-emerald-500">
                        <span className="font-DanaDemiBold md:text-xl lg:text-2xl">{day}</span>
                        <span>{month}</span>
                        <span>{year}</span>
                    </div>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
}
