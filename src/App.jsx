import React from "react";
import Header from "./Components/Header/Header";
import Article from "./Components/Article/Article";
import Footer from "./Components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="flex flex-col m-4">
        <Header></Header>

        <div className="my-5 mx-60">
          <h1 className="text-3xl font-bold">مقالات اخیر</h1>
        </div>
        <div className="container mx-auto grid grid-cols-4 items-center justify-center gap-8 mt-10 mb-52">
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
