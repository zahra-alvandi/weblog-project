export default function Banner() {
  return (
    <div>
      <div className="categoray-banner mt-8 mb-10 md:my-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
            <a
              href="#"
              className="category-banner__item1 flex flex-col justify-center pr-7 md:pr-12 bg-zinc-700 rounded-2xl h-[142px] md:h-[248px]"
            >
              <h5 className="font-DanaDemiBold text-2xl/6 md:text-4xl/6 leading-6 mb-4 md:mb-7">انواع قهوه</h5>
              <span className="md:text-xl/6">ترکیبی و تک خاستگاه</span>
            </a>
            <a
              href="#"
              className="category-banner__item2 flex flex-col justify-center pr-7 md:pr-12 bg-zinc-700 rounded-2xl h-[142px] md:h-[248px]"
            >
              <h5 className="font-DanaDemiBold text-2xl/6 md:text-4xl/6 leading-6 mb-4 md:mb-7">پودر های فوری</h5>
              <span className="md:text-xl/6">نسکافه، هات چاکلت، ماسالا</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
