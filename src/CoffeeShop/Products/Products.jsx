export default function Products({ img, price }) {
  return (
    <div>
      <svg className="hidden">
        <symbol
          id="shopping-cart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </symbol>
        <symbol id="arrows-right-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            class="size-5">
            <path fill-rule="evenodd"
                d="M13.2 2.24a.75.75 0 0 0 .04 1.06l2.1 1.95H6.75a.75.75 0 0 0 0 1.5h8.59l-2.1 1.95a.75.75 0 1 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 0 0-1.06.04Zm-6.4 8a.75.75 0 0 0-1.06-.04l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 1 0 1.02-1.1l-2.1-1.95h8.59a.75.75 0 0 0 0-1.5H4.66l2.1-1.95a.75.75 0 0 0 .04-1.06Z"
                clip-rule="evenodd" />
        </symbol>
        <symbol id="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clip-rule="evenodd" />
        </symbol>
      </svg>
      <div>
        {/* product card */}
        <div className="p-2 md:p-5 rounded-2xl bg-white dark:bg-zinc-700 shadow-normal">
          <div className="relative mb-2 md:mb-5">
            <img
              src={img}
              className="w-32 mx-auto md:w-auto"
              loading="lazy"
              alt=""
            />
          </div>
          <h5 className="font-DanaDemiBold text-sm md:text-xl text-zinc-500 dark:text-white line-clamp-2">
            قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
          </h5>
          <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
            <div className="text-teal-600 dark:text-emerald-500">
              <span className="font-DanaDemiBold text-base md:text-xl">
                {price ? `${price.toLocaleString()} تومان` : "فعلا موجود نیست"}
              </span>
              <span className="text-xs md:text-sm tracking-tighter">
                {/* {price ? `${price.toLocaleString()} نومان` : "رایگان"} */}
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
      </div>
    </div>
  );
}
