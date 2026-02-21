import React from "react";
import Header from "./Components/Header/Header";
import Article from "./Components/Article/Article";
import Footer from "./Components/Footer/Footer";
import "./App.css";

export default function App() {
  const articles = [
    {
      title: "ساخت اولین پروژه رزومه ای با پایتون: قدم به قدم تا موفقیت",
      author: "سعیدی راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      title: "ساخت اولین پروژه رزومه ای با React : قدم به قدم تا موفقیت",
      author: "قدیر یلمه",
      img: "/images/snowy.jpg",
    },
    {
      title: "توسعه کامپوننت های اصولی برای React",
      author: "سعیدی راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      title: "5 نکته مهم و تجربی برای React",
      author: "عبادی",
      img: "/images/snowy.jpg",
    },
    {
      title: "برنامه نویسی در عصر هوش مصنوعی ",
      author: "خندقی",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      title: "پرسونال برندینگ برای برنامه نویسان",
      author: "سعیدی راد",
      img: "/images/snowy.jpg",
    },
    {
      title: "ساخت وبلاگ ساده با جاوا اسکریپت",
      author: "سعیدی راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      title: "شبکه سازی حرفه ای برای برنامه نویسان",
      author: "عبادی",
      img: "/images/snowy.jpg",
    },
  ];
  return (
    <div>
      <div className="flex flex-col m-4">
        <Header></Header>

        <div className="my-5 mx-60">
          <h1 className="text-3xl font-bold">مقالات اخیر</h1>
        </div>
        <div className="container mx-auto grid grid-cols-4 items-center justify-center gap-8 mt-10 mb-52">
          <Article {...articles[0]}></Article>
          <Article {...articles[1]}></Article>
          <Article {...articles[2]}></Article>
          <Article {...articles[3]}></Article>
          <Article {...articles[4]}></Article>
          <Article {...articles[5]}></Article>
          <Article {...articles[6]}></Article>
          <Article {...articles[7]}></Article>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
