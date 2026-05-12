export default function CoffeeIcons({ img, title }) {
  return (
    <div>
      <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center bg-white text-emerald-600 py-1.5 md:pt-5 md:pb-1 rounded-2xl">
        <img
          src={img}
          className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1 md:mb-1.5"
          alt=""
        />
        <span className="text-xs md:text-sm">{title}</span>
      </div>
    </div>
  );
}
