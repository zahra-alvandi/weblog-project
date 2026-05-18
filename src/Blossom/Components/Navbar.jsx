import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const navLinks = [
    { href: "#home", label: "خانه" },
    { href: "#shop", label: "دسته گل‌ها" },
    { href: "#about", label: "درباره ما" },
    { href: "#contact", label: "تماس" },
  ];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-9 right-0 left-0 z-50 hidden md:flex w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 mx-auto bg-[#fff8f3]/50 rounded-3xl backdrop-blur-[6px] lg:container">
        {/* FIX: container with full width */}
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex items-center justify-between gap-7">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <img
                src="/bloomyImages/logo.png"
                className="w-10 h-10 md:w-20 md:h-20"
                alt=""
              />
              <span className="text-[18px] font-MorabbaBold tracking-tight text-[#2E2E2E]">
                بلومی
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-md text-gray-800/80 hover:text-pink-700 transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-5">
            {/* Search */}
            <label className="relative">
              <input
                type="search"
                placeholder="جستجوی دسته گل..."
                className="w-[220px] rounded-full bg-white/80 border border-black/10 px-9 py-2 text-[14px] outline-none focus:ring-2 focus:ring-[#E96A8D]/40"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                🔍
              </span>
            </label>

            {/* Cart */}
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-black/10 hover:bg-white hover:cursor-pointer transition">
              🛒
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-[#E96A8D] text-white text-[11px] leading-5 text-center">
                2
              </span>
            </button>

            {/* CTA */}
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-[#E96A8D] px-5 py-2.5 text-white text-[14px] font-DanaDemiBold shadow-sm hover:opacity-95 transition"
            >
              ثبت سفارش
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="flex items-center justify-between py-2 container md:hidden">
        <div className="flex items-center gap-2">
          <img src="/bloomyImages/logo.png" className="w-9 h-9" alt="" />
          <h3 className="font-Morabba">بلومی</h3>
        </div>
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center 
  rounded-full bg-white/80
  text-[#2E2E2E] hover:bg-[#FCE7EC] transition"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile overlay + panel */}
        {open && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* panel */}
            <div
              ref={panelRef}
              className="absolute right-0 top-0 h-full w-[86%] max-w-[360px]
      bg-[#FFF8F3] shadow-2xl p-6
      flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              {/* header */}
              <div className="flex items-center justify-between">
                <a
                  href="#home"
                  className="flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FCE7EC]">
                    <img src="/bloomyImages/logo.png" alt="" />
                  </span>

                  <span className="text-[18px] font-semibold text-[#2E2E2E]">
                    بلومی
                  </span>
                </a>

                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center 
          rounded-full bg-white/80 border border-black/10
          hover:bg-[#FCE7EC] transition"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Search */}
              <div className="mt-6">
                <label className="relative block">
                  <span className="sr-only">جستجو</span>

                  <input
                    type="search"
                    placeholder="جستجوی دسته گل ..."
                    className="w-full rounded-2xl bg-white/80 border border-black/10
            pl-4 pr-10 py-3 text-[14px]
            outline-none focus:ring-2 focus:ring-[#E96A8D]/40"
                  />

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]">
                    <SearchIcon />
                  </span>
                </label>
              </div>

              {/* Links */}
              <nav className="mt-7 flex flex-col gap-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3
            text-[15px] font-medium text-[#2E2E2E]
            hover:bg-white/70 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              {/* Actions */}
              <div className="mt-7 flex items-center gap-3">
                <button
                  type="button"
                  className="relative inline-flex h-11 w-11 items-center justify-center
          rounded-xl bg-white/80 border border-black/10"
                  aria-label="Cart"
                >
                  <CartIcon />

                  <span
                    className="absolute -top-1 -right-1 h-5 min-w-5 px-1
          rounded-full bg-[#E96A8D] text-white text-[11px] leading-5 text-center"
                  >
                    2
                  </span>
                </button>

                <a
                  href="#shop"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center
          rounded-xl bg-[#E96A8D] px-5 py-3
          text-white text-[14px] font-semibold
          shadow-sm hover:opacity-95 transition"
                >
                  ثبت سفارش
                </a>
              </div>

              <p className="mt-6 text-[12px] text-[#6B7280]">
                دسته گل‌های تازه • تحویل در همان روز
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function SearchIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 6h15l-2 8H7L6 6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L5 3H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
