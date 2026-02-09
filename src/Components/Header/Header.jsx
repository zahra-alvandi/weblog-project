import React from "react";

export default function Header() {
  return (
    <div>
      <header className="flex justify-around items-center h-20">
        <div className="flex">
          <a href="#" className="text-black px-5">
            خانه
          </a>
          <a href="#" className="text-black px-5">
            کامپوننت ها
          </a>
          <a href="#" className="text-black px-5">
            مقالات
          </a>
          <a href="#" className="text-black px-5">
            درباره ما
          </a>
        </div>
        <div className="flex gap-4">
          <button className="mx-[6] p-1 rounded-sm cursor-pointer transition flex justify-center items-center gap-2 hover:opacity-55 bg-black text-white">
            خرید اشتراک
          </button>
          <button className="mx-[6] cursor-pointer transition flex justify-center items-center gap-2 hover:opacity-[0.85]">
            ورود یا ثبت نام
          </button>
        </div>
      </header>
    </div>
  );
}
