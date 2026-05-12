export default function Cards({ title, img }) {
  return (
    // <div>
    //   <div className="flex flex-col py-5 px-2.5 items-center border border-gray-500 rounded-xl w-64 h-96 hover:scale-105 transition hover:shadow-indigo-500">
    //     <img
    //       src={img}
    //       className="rounded-xl object-cover overflow-hidden w-fit"
    //       alt=""
    //     />
    //     <div className="border-t border-gray-500 my-3 py-3">
    //       <h3 className="font-bold text-md">{title}</h3>
    //       <p className="text-sm">Lorem ipsum dolor sit amet.</p>
    //     </div>
    //   </div>
    // </div>

    <div className="mt-16">
      <div className="relative border border-red-100 shadow-xl w-60 h-72 my-10 rounded-xl hover:translate-4 transition-all">
        <div className="relative">
          <img
            src={img}
            className="absolute top-[-75px] left-[39px] w-40 h-40 object-cover border rounded-full shadow-xl"
            alt=""
          />
        </div>
        <div className="absolute top-32 left-5 px-2 py-3 border border-orange-300 rounded-md text-black/80">
          <h4 className="font-bold text-md">{title}</h4>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="absolute top-60 rounded-md left-[68px] shadow-md bg-gradient-to-r from-orange-200 to-orange-300">
          <button className="text-sm text-gray-800 cursor-pointer flex items-center transition-all px-3 py-1.5">
            Show sketch
          </button>
        </div>
      </div>
    </div>
  );
}
