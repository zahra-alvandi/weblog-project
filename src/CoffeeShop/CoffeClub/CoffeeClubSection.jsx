export default function CoffeeClubSection() {
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
      <div>
        <span className="flex flex-col md:mb-1 font-DanaDemiBold text-2xl md:text-3xl">
          542
        </span>
        <span className="flex flex-col text-xs md:text-sm">امتیاز شما</span>
        <a
          href="#"
          className="flex items-center mr-[-6px] mt-1 md:mt-2 justify-center w-[90px] h-[26px] md:w-[110px] md:h-8 text-xs md:text-sm rounded-full bg-gradient-to-r from-orange-200 to-orange-300"
        >
          دریافت جایزه
          <svg className="w-5 h-5 md:w-6 md:h-6">
            <use href="#chevron-left-mini"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}
