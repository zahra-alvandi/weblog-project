export default function AboutPreview() {
  return (
    <section className="py-20 bg-[#FDF7F2]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/bloomyImages/aboutusPic.png"
            alt="گل‌ها و استودیو ما"
            className="w-full max-w-md rounded-3xl shadow-md object-cover"
          />
        </div>

        <div className="text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D2B]">
            درباره ما
          </h2>

          <p className="text-gray-600 leading-8 mt-4">
            ما با عشق و دقت، زیباترین و تازه‌ترین گل‌ها را برای لحظه‌های خاص
            زندگی شما انتخاب می‌کنیم. هدف ما این است که تجربه‌ای متفاوت و احساسی
            از هدیه‌دادن را برای شما خلق کنیم.
          </p>

          <a
            href="/about"
            className="inline-block mt-8 bg-[#3F6F52] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#325942] transition transform hover:scale-105 shadow-md"
          >
            بیشتر بدانید
          </a>
        </div>
      </div>
    </section>
  );
}
