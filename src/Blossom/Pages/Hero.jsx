import React from "react";

export default function Hero() {
  return (
    <div>
      <img
        src="/bloomyImages/desktopBg.png"
        className="w-full h-[699px] object-cover relative hidden md:block"
        alt=""
      />
      <img
        src="/bloomyImages/herosection-Mobile.png"
        className="w-full h-80 object-cover relative block md:hidden rotate-y-180"
        alt=""
      />
      <section className="w-full py-16 lg:py-24 absolute top-10 md:top-1/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10  md:items-center sm:justify-start">
          {/* TEXT */}
          <div className="text-center lg:text-right">
            <p className="text-pink-500 font-DanaDemiBold text-sm mb-3">
              گل‌فروشی آنلاین با طراحی خاص
            </p>

            <h1 className="text-md md:text-5xl font-MorabbaBold text-gray-800 leading-tight">
              گل‌هایی برای
              <span className="text-pink-500"> لحظه‌های خاص </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-8 max-w-xl mx-auto lg:mx-0 text-sm">
              دسته‌گل‌های تازه و طراحی‌شده با سلیقه، همراه با ارسال سریع برای
              لحظه‌هایی که ارزش خاص بودن دارند.
            </p>

            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <button className="bg-pink-500 hover:bg-pink-600 hover:cursor-pointer text-white text-sm md:text-md px-2 py-2 md:px-7 md:py-3 rounded-md md:rounded-xl transition shadow-md">
                سفارش گل
              </button>

              <button className="border border-gray-300 hover:border-pink-400 hover:text-pink-500 hover:cursor-pointer text-sm md:text-md px-2 py-2 md:px-7 md:py-3 rounded-md md:rounded-xl transition">
                مشاهده دسته‌گل‌ها
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
            {/* 
          <img
            src="/bloomyImages/heroSection"
            alt="دسته گل"
            className="relative w-[320px] md:w-[420px] object-contain drop-shadow-xl"
          /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
