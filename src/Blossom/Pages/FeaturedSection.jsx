export default function FeaturedSection() {
  const products = [
    {
      id: 1,
      name: "Blush Romance",
      price: "4,900,000",
      image: "/bloomyImages/flower1.png",
    },
    {
      id: 2,
      name: "White Serenity",
      price: "5,900,000",
      image: "/bloomyImages/flower2.png",
    },
    {
      id: 3,
      name: "Sunset Bloom",
      price: "4,500,000",
      image: "/bloomyImages/flower3.png",
    },
    {
      id: 4,
      name: "Pink Whisper",
      price: "5,200,000",
      image: "/bloomyImages/flower4.png",
    },
  ];

  return (
    <section className="bg-[#FFF8F3] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-MorabbaLight py-2 text-[#2E2E2E]">
              پرفروش ترین های ما
            </h2>
            <p className="mt-3 text-[#6B7280] text-[15px]">
              دسته گل‌های دستچین شده که مشتریان ما بیشتر دوست دارند.
            </p>
          </div>

          <a
            href="#shop"
            className="hidden md:inline-flex text-[#E96A8D] font-MorabbaLight text-xl hover:underline"
          >
            مشاهده همه
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm 
              hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover 
                  group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-end">
                <h3 className="text-[16px] font-semibold text-[#2E2E2E]">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <button
                    className="text-[13px] px-4 py-2 rounded-full
                    bg-[#FCE7EC] text-[#E96A8D]
                    hover:bg-[#E96A8D] hover:text-white
                    transition"
                  >
                    افزودن به سبد خرید
                  </button>
                  <span className="text-[#E96A8D] font-semibold">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center md:hidden">
          <a href="#shop" className="inline-flex text-[#E96A8D] font-medium">
            مشاهده همه محصولات
          </a>
        </div>
      </div>
    </section>
  );
}
