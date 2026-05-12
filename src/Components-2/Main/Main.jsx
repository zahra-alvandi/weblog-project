export default function Main() {
  return (
    <div className="w-[800px] mx-auto">
      <svg className="hidden">
        <symbol
          id="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            clip-rule="evenodd"
          />
        </symbol>
      </svg>
      <div>
        <div className="flex items-center gap-4 mt-14">
          <div>
            <img
              src="/images/profilePic.jpg"
              className="w-48 h-48 rounded-full"
              alt=""
            />
          </div>
          <div className="border border-red-700 w-96 h-48 mx-auto px-1.5 pt-3 rounded-md">
            <h4 className="font-bold">
              Name: <span className="text-sm font-light">Rozhin Zarei</span>
            </h4>
            <h4 className="font-bold">
              Univercity:{" "}
              <span className="text-sm font-light">Dr.Shariaty</span>
            </h4>
            <h4 className="font-bold">
              Email:{" "}
              <span className="text-sm font-light">rozhin@gmail.com</span>
            </h4>
          </div>
        </div>

        <div className="my-14">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ipsa suscipit delectus voluptatum cupiditate unde esse
            necessitatibus harum adipisci labore est accusantium, accusamus amet
            eos magnam dolore ad fugiat corrupti.
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-4">
              <div className="flex items-center gap-1.5 border border-red-700 w-48 rounded-md justify-between py-2 px-1.5">
                <p>Marvelous</p>
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-5 h-5 text-gray-300">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between gap-1.5 border border-red-700 w-48 rounded-md py-2 px-1.5">
                <p>Corel</p>
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between gap-1.5 border border-red-700 w-48 rounded-md py-2 px-1.5">
                <p>Corel</p>
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between gap-1.5 border border-red-700 w-48 rounded-md py-2 px-1.5">
                <p>Corel</p>
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-amber-300">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-5 h-5 text-gray-300">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-5 h-5 text-gray-300">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          {/* <div className="flex flex-col py-5 px-2.5 items-center border border-gray-500 rounded-xl w-52">
            <img src="/images/snowy.jpg" className="rounded-full overflow-hidden w-32 h-32" alt="" />
            <div className="border-t border-gray-500 my-3 py-3">
              <h3 className="font-bold text-md">Satin</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
