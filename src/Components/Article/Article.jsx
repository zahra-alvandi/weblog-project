import React from "react";

export default function Article() {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-xl font-bold">مقالات اخیر</h1>
      </div>
      <div>
        <article>
          <header>
            <img
              src="/images/public/snowy.jpg"
              alt=""
            />
          </header>
          <main>
            <h4 className="my-5">ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت</h4>
            <p className="my-4">
              در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده
              اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت
              کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه،
              همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم!
            </p>
          </main>
          <footer>
            <div className="flex">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
              </i>
              <span>نویسنده : </span>
              <span>محمدامین سعیدی راد</span>
            </div>
            <div className="flex">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </i>
              <span>28 اسفند 1404</span>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
