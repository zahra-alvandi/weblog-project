const testimonials = [
  {
    id: 1,
    name: "سارا محمدی",
    role: "مشتری دائمی",
    text: "دسته‌گل واقعاً از چیزی که توی عکس دیدم قشنگ‌تر بود. بسته‌بندی خیلی شیک و ارسال هم سریع انجام شد.",
    rating: 5,
  },
  {
    id: 2,
    name: "مریم حسینی",
    role: "خریدار عید",
    text: "برای مناسبت تولد سفارش دادم و همه‌چیز عالی بود. برخورد تیم خیلی خوب بود و گل‌ها تازه و باکیفیت بودند.",
    rating: 5,
  },
  {
    id: 3,
    name: "ندا رضایی",
    role: "مشتری جدید",
    text: "طراحی سایت خیلی دلنشین بود و انتخاب گل‌ها راحت انجام شد. قطعاً دوباره خرید می‌کنم.",
    rating: 5,
  },
];

const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.144c.969 0 1.371 1.24.588 1.81l-3.354 2.436a1 1 0 00-.364 1.118l1.286 3.954c.3.921-.755 1.688-1.54 1.118l-3.354-2.436a1 1 0 00-1.176 0l-3.354 2.436c-.785.57-1.84-.197-1.54-1.118l1.286-3.954a1 1 0 00-.364-1.118L2.024 9.381c-.783-.57-.38-1.81.588-1.81h4.144a1 1 0 00.95-.69l1.286-3.954z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FDF7F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF3F5] text-[#E07A8A] text-sm font-medium mb-4">
            نظرات مشتریان
          </span>

          <h2 className="text-3xl md:text-4xl font-MorabbaBold text-[#1F3D2B]">
            تجربه خرید مشتریان ما
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            رضایت شما مهم‌ترین بخش کار ماست. این بخشی از تجربه مشتریانی است که
            از ما خرید کرده‌اند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>

              <div className="absolute top-5 right-5 text-5xl text-[#F3DDE1] leading-none select-none">
                “
              </div>

              <p className="text-gray-600 leading-8 relative z-10 mb-6">
                {item.text}
              </p>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-[#1F3D2B] font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
