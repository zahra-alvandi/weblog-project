export default function ProductsCategory({ img, text }) {
  return (
    <div>
      <div className="products-category mb-10 md:mb-20">
        <div className="container">
          <div className="w-25 md:w-50 text-center">
            <a href="#">
              <img src={img} alt="" />
            </a>
            <span className="inline-block mt-1.5 md:mt-2.5 font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white ">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
