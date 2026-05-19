export default function CTASection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto bg-[#3F6F52] rounded-3xl overflow-hidden relative">
        {/* تصویر تزئینی در پس‌زمینه (در صورت نیاز) */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div>

        <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
          <div className="text-white max-w-xl">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
              هنوز برای انتخاب گل مناسب شک داری؟
            </h2>
            <p className="text-emerald-100 text-md lg:text-lg leading-relaxed">
              مشاوران ما آماده‌اند تا بهترین و تازه‌ترین گل‌ها را برای لحظه‌های
              خاصت به تو پیشنهاد بدهند. همین حالا تماس بگیر!
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="tel:+989120000000"
              className="bg-white text-[#3F6F52] px-6 py-2 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-md hover:bg-emerald-50 transition transform hover:scale-105 shadow-lg"
            >
              تماس با مشاور
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
