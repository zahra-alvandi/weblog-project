import React from "react";

export default function Article() {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">مقالات اخیر</h1>
      </div>
      <div>
        <article>
          <header>
            <img
              src="/images/public/clay-banks-cReV-cbE2L4-unsplash.jpg"
              alt=""
            />
          </header>
          <main>
            <h4>ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت</h4>
            <p>
              در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده
              اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت
              کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه،
              همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم!
            </p>
          </main>
          <footer>
            <div>
              <span>نویسنده : </span>
              <span>سعیدی راد</span>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
