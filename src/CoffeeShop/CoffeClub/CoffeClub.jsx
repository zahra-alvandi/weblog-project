export default function CoffeClub() {
  return (
    <div className="flex items-center md:shrink-0 gap-x-3 lg:gap-x-4 xl:gap-x-6">
      <div className="flex items-center md:shrink-0 gap-x-3 lg:gap-x-4 xl:gap-x-6">
        <img
          src="/images/club/diamond.png"
          className="w-[87px] lg:w-[100px] xl:w-[110px] "
          alt=""
        />
        <div>
          <h4 className="font-MorabbaBold text-2xl md:text-5xl mb-2">
            کافی کلاب
          </h4>
          <p className="font-MorabbaLight text-lg md:text-2xl">
            میدونستی میتونی با امتیاز هات قهوه بگیری؟
          </p>
        </div>
      </div>
    </div>
  );
}
