import React from "react";

export default function Button({primary, label}) {
    console.log(primary)
  return (
    <button className={ primary ? "bg-blue-500 text-white py-2.5 px-5 rounded-md m-2.5 cursor-pointer" : "bg-gray-500 text-black py-2.5 px-5 rounded-md m-2.5 cursor-pointer"}>
       {label ? label : primary ? "primary Button" : "Default Button"}
    </button>
  );
}
