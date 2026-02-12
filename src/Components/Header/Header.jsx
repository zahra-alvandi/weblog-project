import React from "react";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center h-20 mx-60">
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
          <button className="py-1 px-1.5 rounded-md text-[13px] cursor-pointer transition flex justify-center items-center gap-2 hover:opacity-55 bg-black text-white">
            خرید اشتراک
          </button>
          <button className="py-1 px-1.5 rounded-md text-[13px] cursor-pointer transition flex justify-center items-center gap-2 hover:opacity-[0.85] border border-gray-500">
            ورود یا ثبت نام
          </button>
        </div>
      </header>
    </div>
  );
}
