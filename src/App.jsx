import React from "react";
import Header from "./Components/Header/Header";
import Article from "./Components/Article/Article";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Button from "./Components/Button/Button";

export default function App() {
  const articles = [
    {
      title: "ساخت اولین پروژه رزومه ای با پایتون: قدم به قدم تا موفقیت",
      author: "سعیدی راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
      price: 0,
    },
    {
      title: "ساخت اولین پروژه رزومه ای با React : قدم به قدم تا موفقیت",
      author: "قدیر یلمه",
      img: "/images/snowy.jpg",
      price: 0,
    },
    {
      title: "توسعه کامپوننت های اصولی برای React",
      author: "سعیدی راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
      price: 12_000,
    },
    {
      title: "5 نکته مهم و تجربی برای React",
      author: "عبادی",
      img: "/images/snowy.jpg",
      price: 25_000
    },
    {
      title: "برنامه نویسی در عصر هوش مصنوعی ",
      author: "خندقی",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
      price: 32_000
    },
    {
      title: "پرسونال برندینگ برای برنامه نویسان",
      author: "سعیدی راد",
      img: "/images/snowy.jpg",
      price: 0,
    },
    {
      title: "ساخت وبلاگ ساده با جاوا اسکریپت",
      author: "سعیدی راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
      price: 0,
    },
    {
      title: "شبکه سازی حرفه ای برای برنامه نویسان",
      author: "عبادی",
      img: "/images/snowy.jpg",
      price: 18_000
    },
  ];

  const hasPlan = true;
  // const hasPlan = false; درصورتی که کاربر مثلا اشتراک نداشت اینجوری میشه

  // return (
  //   <div>
  //     <div className="flex flex-col m-4">
  //       <Header hasPlan={hasPlan}></Header>

  //       <div className="my-5 mx-60">
  //         <h1 className="text-3xl font-bold">مقالات اخیر</h1>
  //       </div>
  //       <div className="container mx-auto grid grid-cols-4 items-center justify-center gap-8 mt-10 mb-52">
  //         <Article {...articles[0]}></Article>
  //         <Article {...articles[1]}></Article>
  //         <Article {...articles[2]}></Article>
  //         <Article {...articles[3]}></Article>
  //         <Article {...articles[4]}></Article>
  //         <Article {...articles[5]}></Article>
  //         <Article {...articles[6]}></Article>
  //         <Article {...articles[7]}></Article>
  //       </div>

  //       <Footer></Footer>
  //     </div>
  //   </div>
  // );
    return(
      <div>
      <Button primary label='login'></Button>
      <Button label='cancel'></Button>
      <Button></Button>
    </div>
    )
}
