export default function BestSellingProducts({img, price,title}) {
  return (
    <div className="p-2 md:p-5 rounded-2xl bg-white dark:bg-zinc-700 shadow-normal">
      <div className="relative mb-2 md:mb-5">
        <img src={img} className="w-32 mx-auto md:w-auto" alt="" />
      </div>
      <h5 className="font-DanaDemiBold text-sm md:text-xl h-10 md:h-14 text-zinc-500 dark:text-white line-clamp-2">
        {title}
      </h5>
      <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
        <div className="text-teal-600 dark:text-emerald-500">
          <span className="font-DanaDemiBold text-base md:text-xl">
            {price ? `${price.toLocaleString()} تومان` : "فعلا موجود نیست"}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2.5">
        <div className="flex items-center gap-x-2.5 md:gap-x-3">
          <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full text-gray-400 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">
            <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
              <use href="#shopping-cart"></use>
            </svg>
          </span>
          <span className="block rounded-full text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 transition-all cursor-pointer">
            <svg className="w-4 h-4 md:w-6 md:h-6">
              <use href="#arrows-right-left"></use>
            </svg>
          </span>
        </div>
        <div className="flex text-yellow-400">
          <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400">
            <use href="#star"></use>
          </svg>
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#star"></use>
          </svg>
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#star"></use>
          </svg>
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#star"></use>
          </svg>
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#star"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
