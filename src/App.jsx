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
    },
    {
      title: "ساخت اولین پروژه رزومه ای با React : قدم به قدم تا موفقیت",
      author: "قدیر یلمه",
    },
    {
      title: "توسعه کامپوننت های اصولی برای React",
      author: "سعیدی راد",
    },
    {
      title: "5 نکته مهم و تجربی برای React",
      author: "عبادی",
    },
    {
      title: "برنامه نویسی در عصر هوش مصنوعی ",
      author: "خندقی",
    },
    {
      title: "پرسونال برندینگ برای برنامه نویسان",
      author: "سعیدی راد",
    },
    {
      title: "ساخت وبلاگ ساده با جاوا اسکریپت",
      author: "سعیدی راد",
    },
    {
      title: "شبکه سازی حرفه ای برای برنامه نویسان",
      author: "عبادی",
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
          <Article title={articles[0].title} author={articles[0].author}></Article>
          <Article title={articles[1].title} author={articles[1].author}></Article>
          <Article title={articles[2].title} author={articles[2].author}></Article>
          <Article title={articles[3].title} author={articles[3].author}></Article>
          <Article title={articles[4].title} author={articles[4].author}></Article>
          <Article title={articles[5].title} author={articles[5].author}></Article>
          <Article title={articles[6].title} author={articles[6].author}></Article>
          <Article title={articles[7].title} author={articles[7].author}></Article>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
