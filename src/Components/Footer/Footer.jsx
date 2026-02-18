import React from "react";

export default function Footer() {
  return (
    <div className="h-10 flex flex-col justify-center items-center w-full">
      <div className="max-w-[760px] text-center">
        <h5 className="text-4xl font-bold my-5">پروژه رزومه‌ای می‌خواهید؟ با سبزلرن حرفه‌ای بسازید!</h5>
        <p className="text-md my-5 text-gray-500">
          سبزلرن همراه شماست تا با آموزش‌های کاربردی و پروژه‌های جذاب
          برنامه‌نویسی، رزومه‌ای قدرتمند بسازید. از یادگیری تا اجرای پروژه‌های
          واقعی، ما کنارتون هستیم تا مهارت‌هاتون رو به سطح بعدی ببرید!
        </p>
        <div className="flex items-center justify-center gap-4 my-5">
          <button className="flex items-center gap-1 bg-black text-white py-[6px] px-4 text-sm rounded-md hover:opacity-75 transition cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                clipRule="evenodd"
              />
            </svg>

            <span>شروع یادگیری</span>
          </button>
          <button className="border border-gray-200 py-[6px] px-4 text-sm rounded-md cursor-pointer">
            <span>مشاهده پروژه ها</span>
          </button>
        </div>
      </div>
    </div>
  );
}
