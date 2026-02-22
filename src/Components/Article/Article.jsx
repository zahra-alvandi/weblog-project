import React from "react";

export default function Article({ title, author, img, price }) {
  return (
    <div>
      {/* <div className="my-5">
        <h1 className="text-3xl font-bold">مقالات اخیر</h1>
      </div> */}
      <div>
        <article>
          <header>
            <img
              src={img}
              className="object-cover w-full h-full rounded-2xl"
              alt=""
            />
          </header>
          <main className="border-b border-gray-300">
            <h4 className="my-5 text-md font-bold">{title}</h4>
            <p className="my-4 text-sm text-gray-500 text-justify">
              در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده
              اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت
              کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه،
              همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم!
            </p>
          </main>
          <footer className="flex justify-between mt-2.5">
            <div className="flex items-center gap-1">
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
              <span className="text-[12px] text-gray-500">نویسنده : </span>
              <span className="text-[12px]">{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <i>
                {/* calander */}
                {/* <svg
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
                </svg> */}

                {/* price */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </i>
              {/* <span className="text-[12px]">28 اسفند 1404</span> */}
              <span className="text-[12px]">
                {price ? `${price.toLocaleString()} نومان` : "رایگان"}
              </span>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
