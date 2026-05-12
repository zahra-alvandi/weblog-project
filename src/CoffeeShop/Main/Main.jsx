// import "./App.css";

export default function Main() {
  return (
    <div>
      <svg className="hidden">
        <symbol id="curve">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"
            fill="currentColor"
          />
        </symbol>
        <symbol
          id="chevron-down-mini"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </symbol>
      </svg>
      <main>
        <section className="home relative h-52 md:h-full xs:aspect-[2/1] md:aspect-auto bg-[center_top]">
          <img
            src="/images/headerBgDesktop.webp"
            className="hidden md:block"
            alt=""
          />
          <img
            src="/images/headerBgMobile.webp"
            className="block md:hidden"
            alt=""
          />

          <div className="container absolute top-0 h-full md:min-h-screen flex justify-end items-center">
            <div className="text-white">
              <h2 className="font-MorabbaBold text-2xl md:text-6xl/[62px] mb-0.5 md:mb-2">
                قهوه عربیکا تانزانیا
              </h2>
              <span className="font-MorabbaLight text-xl md:text-5xl/[64px]">
                یک فنجان بالانس!
              </span>
              <span className="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8"></span>
              <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">
                قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
                است که در نواحی مختلف کمربند قهوه کشت میشود.
              </p>
            </div>
            {/* circle */}
          </div>
          <div className="justify-center items-center border border-b-0 border-l-0 border-r-0 rounded-full absolute bottom-0 right-0 left-0 mx-auto translate-y-2/4 hidden md:flex  w-[203px] h-[203px]  border-white/25">
            <div className="flex justify-center items-center border border-b-0 border-l-0 border-r-0 rounded-full  w-[145px] h-[145px] border-white/50">
              <div className="flex justify-center items-center border border-b-0 border-l-0 border-r-0 rounded-full w-[95px] h-[95px] border-white/80"></div>
            </div>
          </div>
          {/* curve */}
          <svg className="absolute bottom-0 right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
            <use href="#curve"></use>
          </svg>
          {/* arrow circle */}
          <div className="items-center justify-center absolute bottom-0 right-0 left-0 mx-auto translate-y-2/4 hidden md:flex w-[30px] h-[30px] rounded-full border-2 border-orange-300">
            <svg className="w-5 h-5 text-zinc-700 dark:text-white">
              <use href="#chevron-down-mini"></use>
            </svg>
          </div>
        </section>
         {/* Products header */}
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
          <section className="pt-8 md:pt-24 lg:pt-48">
            <div className="container">
              {/* section head */}
              <div className="flex justify-between items-end mb-5 md:mb-12">
                <div>
                  <h3 className="section-title font-MorabbaLight">
                    جدیدترین محصولات
                  </h3>
                  <span className="section-subtitle">
                    فرآوری شده از دانه قهوه
                  </span>
                </div>
                <a href="#" className="section-link">
                  <span className="hidden md:inline-block">
                    مشاهده همه محصولات
                  </span>
                  <span className="inline-block md:hidden">مشاهده همه</span>
                  <svg className="w-5 h-5">
                    <use href="#chevron-left-mini"></use>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
