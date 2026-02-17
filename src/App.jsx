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

        <Article></Article>

        <Footer></Footer>
      </div>
    </div>
  );
}
