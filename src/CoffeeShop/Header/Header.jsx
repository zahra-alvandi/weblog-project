import "../Input.css";
export default function Header() {
  // const navOpenBtn = () => {
  //   const navOpenBtn = document.querySelector(".nav-icon");
  //   const nav = document.querySelector(".nav");
  //   const overlay = document.querySelector(".overlay");

  //   navOpenBtn.addEventListener("click", function () {
  //     nav.classList.remove("-right-64");
  //     nav.classList.add("right-0");
  //     overlay.classList.add("overlay--visible");
  //     overlay.addEventListener("click", closeNav);
  //   });
  // };
  return (
    <div>
      <svg className="hidden">
        <symbol
          id="shopping-cart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </symbol>

        <symbol
          id="sun"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </symbol>

        <symbol
          id="arrow-left-onrectangle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </symbol>

        <symbol
          id="moon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </symbol>
        <symbol
          id="bars-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </symbol>
        <symbol
          id="x-mark-mini"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </symbol>
      </svg>
      <header className="fixed top-9 right-0 left-0 z-50 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 mx-auto rounded-3xl bg-black/50 backdrop-blur-[6px]">
        <div className="flex items-center justify-between w-full">
          <nav className="flex items-center gap-x-6 lg:gap-x-9 h-14">
            <div className="shrink-0">
              <img src="/images/app-logo.png" alt="" />
            </div>
            <ul class="flex gap-x-5 lg:gap-x-9 h-full text-xl text-gray-300 tracking-tightest">
              <li class="text-orange-200 items-leading">
                <a href="#">صفحه اصلی</a>
              </li>
              {/* has menu */}
              <li class="relative items-leading group">
                <a
                  href="#"
                  class="group-hover:text-orange-300 transition-colors"
                >
                  فروشگاه
                </a>
                {/* sub menu */}
                <div class="absolute w-52 p-6 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible dark:bg-zinc-700 rounded-2xl border-t-[3px] border-t-orange-300 text-zinc-700 dark:text-white text-base transition-all space-y-4 tracking-normal shadow-normal top-full">
                  <a class="block items-hover" href="#">
                    قهوه ویژه
                  </a>
                  <a class="block items-hover" href="#">
                    ویژه در سطح جهانی
                  </a>
                  <a class="block items-hover" href="#">
                    قهوه درجه یک
                  </a>
                  <a class="block items-hover" href="#">
                    ترکیبات تجاری
                  </a>
                  <a class="block items-hover" href="#">
                    کپسول قهوه
                  </a>
                  <a class="block items-hover" href="#">
                    قهوه زینو برزیلی
                  </a>
                </div>
              </li>
              <li class="items-leading">
                <a href="#" class="hover:text-orange-300">
                  دیکشنری
                </a>
              </li>
              <li class="items-leading">
                <a href="#" class="hover:text-orange-300">
                  بلاگ
                </a>
              </li>
              <li class="items-leading">
                <a href="#" class="hover:text-orange-300">
                  درباره ما
                </a>
              </li>
              <li class="items-leading">
                <a href="#" class="hover:text-orange-300">
                  تماس با ما
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-10 text-xl text-orange-200">
            <div className="flex gap-x-4 lg:gap-x-5 items-center">
              {/* cart */}
              <div className="flex items-center relative gap-x-4 group">
                {/* cart icon hover */}
                <div className="py-3 cursor-pointer">
                  <svg className="w-8 h-8">
                    <use href="#shopping-cart"></use>
                  </svg>
                </div>

                {/* cart box */}

                {/* <div></div> */}

                <div className="toggle-theme cursor-pointer">
                  <svg className="inline-block moon-icon dark:hidden w-8 h-8">
                    <use href="#moon"></use>
                  </svg>
                  <svg className="dark:inline-block sun-icon hidden w-8 h-8">
                    <use href="#sun"></use>
                  </svg>
                </div>
              </div>
            </div>
            {/* divide border */}
            <span className="block w-px h-14 bg-white/50"></span>
            <a
              href="#"
              className="flex items-center gap-x-2.5 tracking-tighter"
            >
              <svg className="w-8 h-8">
                <use href="#arrow-left-onrectangle"></use>
              </svg>
              <span>ورود | ثبت‌نام</span>
            </a>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div className="flex md:hidden items-center justify-between h-16 bg-white dark:bg-zinc-700 px-4">
        {/* nav icon */}
        <div className="nav-icon">
          <svg className="w-6 h-6 text-zinc-700 dark:text-white">
            <use href="#bars-3"></use>
          </svg>
        </div>
        {/* nav */}
        <div className="nav fixed top-0 -right-64 w-64 pt-3 px-4 bg-white dark:bg-zinc-700 z-20 overflow-y-auto transition-all">
          {/* nav header */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b-gray-100 dark:border-b-white/10">
            <div className="flex items-center gap-x-1.5">
              <img
                src="/images/svgs/logo.svg"
                className="w-[41px] h-10"
                alt=""
              />
              <img
                src="/images/svgs/logo-type.svg"
                className="w-[100px] h-10 text-orange-300"
                alt=""
              />
            </div>
            {/* nav header close  icon */}
            <div className="nav-close-btn text-zinc-700 dark:text-white">
              <svg className="w-5 h-5">
                <use href="#x-mark-mini"></use>
              </svg>
            </div>
          </div>
          {/*nav menu  */}
        </div>

        {/* logo type */}
        <div className="w-[100px] h-10 text-zinc-600 dark:text-white">
          <img
            src="/images/svgs/logo-type.svg"
            className="text-orange-300"
            alt=""
          />
        </div>

        {/* cart icon */}
        <div>
          <svg className="w-6 h-6 text-zinc-600 dark:text-white">
            <use href="#shopping-cart"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
