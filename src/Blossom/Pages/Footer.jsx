const footerData = {
  links: [
    { name: "فروشگاه", url: "/shop" },
    { name: "درباره ما", url: "/about" },
    { name: "تماس با ما", url: "/contact" },
    { name: "سوالات متداول", url: "/faq" },
  ],
  socials: ["Instagram", "Twitter", "Telegram"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1F3D2B] text-[#FDF7F2] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">گلفروشی آنلاین</h3>
          <p className="text-emerald-200 leading-relaxed">
            تازه‌ترین گل‌ها، برای بهترین لحظه‌های شما. تحویل سریع و تضمین کیفیت.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">دسترسی سریع</h4>
          <ul className="space-y-4">
            {footerData.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="text-emerald-200 hover:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">عضویت در خبرنامه</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="ایمیل شما..."
              className="bg-emerald-900 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <button className="bg-[#E07A8A] px-4 py-2 rounded-lg hover:bg-[#d66b7c] transition">
              عضویت
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-emerald-300 text-sm">
        © تمامی حقوق برای گلفروشی آنلاین محفوظ است.
      </div>
    </footer>
  );
}
