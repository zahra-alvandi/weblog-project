import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center h-20 ">
        <div className="flex">
          <a href="#" className="text-black px-3">
            خانه
          </a>
          <a href="#" className="text-black px-3">
            کامپوننت ها
          </a>
          <a href="#" className="text-black px-3">
            مقالات
          </a>
          <a href="#" className="text-black px-3">
            درباره ما
          </a>
        </div>
        <div className="flex gap-2">
          <button className="bg-black text-white py-[6px] px-4 text-sm rounded-md hover:opacity-75 transition cursor-pointer">
            خرید اشتراک
          </button>
          <button className="border border-gray-200 py-[6px] px-4 text-sm rounded-md cursor-pointer">
            ورود یا ثبت نام
          </button>
        </div>
      </header>

      <main>
        <section className=" mt-20 flex justify-between items-center">
          <div>
            <div className="text-container ">
              <h1 className="text-5xl font-bold">
                سبزبلاگ؛ مرجع آموزش و پروژه های برنامه نویسی
              </h1>
              <p className="text-md text-gray-500">
                سبزبلاگ فضایی برای یادگیری برنامه نویسی و به اشتراک گذاری دانش
                است. اینجا مقالات آموزشی، نکات کاربردی و پروژه های روزمه ای
                برنامه نویسی با زبانی ساده و حرفه ای ارائه میشود. هدف ما کمک به
                شماست تا مهارت هاتون رو تقویت کنید و رزومه ای قوی با پروژه های
                جذاب بسازید!
              </p>
            </div>
            <div className="mt-10 flex gap-2">
              <button className="bg-black text-white py-[6px] px-4 text-sm rounded-md hover:opacity-75 transition cursor-pointer">
                خواندن مقالات
              </button>
              <button className="border border-gray-200 py-[6px] px-4 text-sm rounded-md cursor-pointer">
                تهیه اشتراک
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center image-hero-width">
            <img src="/images/hero-illustrator.png" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}
