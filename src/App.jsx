import React from "react";
// import Header from "./Components/Header/Header";
// import Article from "./Components/Article/Article";
// import Footer from "./Components/Footer/Footer";
import "./App.css";
// import Button from "./Components/Button/Button";
// import Main from "./Components-2/Main/Main";
// import SideMenu from "./Components-2/SideMenu/SideMenu";
// import Cards from "./Components-2/Cards/Cards";
// import Header from "./CoffeeShop/Header/Header";
// import Main from "./CoffeeShop/Main/Main";
// import "./CoffeeShop/Input.css";
// import Products from "./CoffeeShop/Products/Products";
// import Banner from "./CoffeeShop/Banner/Banner";
// import ProductsCategory from "./CoffeeShop/ProductsCategory/ProductsCategory";
// import BestSellingHeader from "./CoffeeShop/BestSelling/BestSellingHeader";
// import BestSellingProducts from "./CoffeeShop/BestSellingProducts/BestSellingProducts";
// import CoffeClub from "./CoffeeShop/CoffeClub/CoffeClub";
// import CoffeeClubSection from "./CoffeeShop/CoffeClub/CoffeeClubSection";
// import CoffeeIcons from "./CoffeeShop/CoffeClub/CoffeeIcons";
// import Articles from "./CoffeeShop/Articles/Articles";
// import ArticlesProducts from "./CoffeeShop/Articles/ArticlesProducts";
// import ContactUs from "./CoffeeShop/ContactUs/ContactUs";
// import Services from "./CoffeeShop/Services/Services";
// import Footer from "./CoffeeShop/Footer/Footer";

// ! Blossom project imports
import Hero from "./Blossom/Pages/Hero";
import Navbar from "./Blossom/Components/Navbar";
import FeaturedSection from "./Blossom/Pages/FeaturedSection";
import Testimonials from "./Blossom/Pages/Testimonials";

export default function App() {
  // * Blossom Project
  return (
    <div>
      <Navbar></Navbar>
      <div>
      <Hero className="min-h-screen bg-[#FFF8F3]"></Hero>
      <FeaturedSection></FeaturedSection>
      <Testimonials></Testimonials>
      </div>
    </div>
  );

  // const articles = [
  //   {
  //     id: 1,
  //     title: "ساخت اولین پروژه رزومه ای با پایتون: قدم به قدم تا موفقیت",
  //     author: "سعیدی راد",
  //     img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
  //     price: 0,
  //   },
  //   {
  //     id: 2,
  //     title: "ساخت اولین پروژه رزومه ای با React : قدم به قدم تا موفقیت",
  //     author: "",
  //     img: "/images/snowy.jpg",
  //     price: 0,
  //   },
  //   {
  //     id: 3,
  //     title: "توسعه کامپوننت های اصولی برای React",
  //     author: "",
  //     img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
  //     price: 12_000,
  //   },
  //   {
  //     id: 4,
  //     title: "5 نکته مهم و تجربی برای React",
  //     author: "عبادی",
  //     img: "/images/snowy.jpg",
  //     price: 25_000,
  //   },
  //   {
  //     id: 5,
  //     title: "برنامه نویسی در عصر هوش مصنوعی ",
  //     author: "خندقی",
  //     img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
  //     price: 32_000,
  //   },
  //   {
  //     id: 6,
  //     title: "پرسونال برندینگ برای برنامه نویسان",
  //     author: "سعیدی راد",
  //     img: "/images/snowy.jpg",
  //     price: 0,
  //   },
  //   {
  //     id: 7,
  //     title: "ساخت وبلاگ ساده با جاوا اسکریپت",
  //     author: "سعیدی راد",
  //     img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
  //     price: 0,
  //   },
  //   {
  //     id: 8,
  //     title: "شبکه سازی حرفه ای برای برنامه نویسان",
  //     author: "",
  //     img: "/images/snowy.jpg",
  //     price: 18_000,
  //   },
  // ];

  // const hasPlan = true;
  // const hasPlan = false; درصورتی که کاربر مثلا اشتراک نداشت اینجوری میشه

  // return (
  //   <div>
  //     <div className="flex flex-col m-4">
  //       <Header hasPlan={hasPlan}></Header>

  //       <div className="my-5 mx-60">
  //         <h1 className="text-3xl font-bold">مقالات اخیر</h1>
  //       </div>
  //       <div className="container mx-auto grid grid-cols-4 items-center justify-center gap-8 mt-10 mb-52">
  //         {/* {articles.filter(article => article.price === 0).map((article) => (
  //           <Article key={article.id} {...article}></Article>
  //         ))} */}
  //         {articles.map((article) => (
  //           <Article key={article.id} {...article}></Article>
  //         ))}
  //       </div>

  //       <Footer></Footer>
  //     </div>
  //   </div>
  // );
  // return (
  //   <div>
  //     <Button primary label="login"></Button>
  //     <Button label="cancel"></Button>
  //     <Button></Button>
  //   </div>
  // );

  // * cdn

  // const cards = [
  //   {
  //     id: 1,
  //     title: "Velvet",
  //     explain: "Lorem ipsum dolor sit amet.",
  //     img: "/images/velvet.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Leather",
  //     explain: "Lorem ipsum dolor sit amet.",
  //     img: "/images/leather.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Mohair",
  //     explain: "Lorem ipsum dolor sit amet.",
  //     img: "/images/mohair (1).jpg",
  //   },
  // ];
  // return (
  //   <div className="flex mx-auto">
  //     <div>
  //       <SideMenu></SideMenu>
  //     </div>
  //     <div className="mx-auto">
  //       <Main className="mb-10"></Main>
  //       <div className="flex items-center justify-between">
  //         <h1 className="my-10 text-2xl font-bold">Portfolio</h1>
  //         <button className="px-3 py-2.5 rounded-md text-sm bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white cursor-pointer transition">
  //           Show more
  //         </button>
  //       </div>
  //       <div className="grid grid-cols-3">
  //         {cards.map((cards) => (
  //           <Cards key={cards.id} {...cards}></Cards>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  // * coffe shop
  // const products = [
  //   { id: 1, img: "/images/products/p1.png", price: "175,000" },
  //   { id: 2, img: "/images/products/p2.png", price: 0 },
  //   { id: 3, img: "/images/products/p3.png", price: "154,000" },
  //   { id: 4, img: "/images/products/p4.png", price: "175,000" },
  //   { id: 5, img: "/images/products/p1.png", price: "154,000" },
  //   { id: 6, img: "/images/products/p2.png", price: 0 },
  //   { id: 7, img: "/images/products/p4.png", price: "175,000" },
  //   { id: 8, img: "/images/products/p3.png", price: "175,000" },
  // ];

  // const productsCategory = [
  //   { id: 1, img: "/images/categories/category1.png", text: "قهوه دمی اسپرسو" },
  //   {
  //     id: 2,
  //     img: "/images/categories/category2.png",
  //     text: "لوازم جانبی و تجهیزات",
  //   },
  //   { id: 3, img: "/images/categories/category3.png", text: "اسپرسو ساز" },
  //   { id: 4, img: "/images/categories/category4.png", text: "پک تستر قهوه" },
  //   { id: 5, img: "/images/categories/category5.png", text: "قهوه ترک" },
  // ];

  // const benmanoCoffee = [
  //   {
  //     id: 1,
  //     title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  //     img: "/images/products/p5.png",
  //     price: "154,000",
  //   },
  //   {
  //     id: 2,
  //     title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  //     img: "/images/products/p6.png",
  //     price: 0,
  //   },
  //   {
  //     id: 3,
  //     title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  //     img: "/images/products/p7.png",
  //     price: "175,000",
  //   },
  //   {
  //     id: 4,
  //     title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  //     img: "/images/products/p8.png",
  //     price: "175,000",
  //   },
  // ];

  // const coffeeIcons = [
  //   { id: 1, img: "/images/club/Discovery.svg", title: "چرخ پخت" },
  //   { id: 2, img: "/images/club/Activity.svg", title: "ماموریت ها" },
  //   { id: 3, img: "/images/club/Ticket Star.svg", title: "جایزه ها" },
  // ];

  // const articles = [
  //   {
  //     id: 1,
  //     img: "/images/blogs/blog-1.png",
  //     text: "طرز تهیه قهوه دمی با دستگاه اروپس",
  //     day: "21",
  //     month: "مرداد",
  //     year: "1402",
  //     hoverLogo: "/images/svgs/logo-type.svg",
  //   },
  //   {
  //     id: 2,
  //     img: "/images/blogs/blog-2.png",
  //     text: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
  //     day: "21",
  //     month: "مرداد",
  //     year: "1402",
  //     hoverLogo: "/images/svgs/logo-type.svg",
  //   },
  //   {
  //     id: 3,
  //     img: "/images/blogs/blog-3.png",
  //     text: "طرز تهیه یک فنجان کافه زینو برزیلی",
  //     day: "21",
  //     month: "مرداد",
  //     year: "1402",
  //     hoverLogo: "/images/svgs/logo-type.svg",
  //   },
  //   {
  //     id: 4,
  //     img: "/images/blogs/blog-4.png",
  //     text: "طرز تهیه قهوه دالگونا مناسب روزهای کرونایی",
  //     day: "21",
  //     month: "مرداد",
  //     year: "1402",
  //     hoverLogo: "/images/svgs/logo-type.svg",
  //   },
  // ];

  // const service = [
  //   {
  //     id: 1,
  //     img: "images/svgs/services/support.svg",
  //     imgDark: "images/svgs/services/support-dark.svg",
  //     titleText: "پشتیبانی شبانه روزی",
  //     spanText: "7روز هفته ، 24ساعته",
  //   },
  //   {
  //     id: 2,
  //     img: "images/svgs/services/express-delivery.svg",
  //     imgDark: "images/svgs/services/express-delivery-dark.svg",
  //     titleText: "امکان تحویل اکسپرس",
  //     spanText: "ارسال بسته با سرعت باد",
  //   },
  //   {
  //     id: 3,
  //     img: "images/svgs/services/pitcher.svg",
  //     imgDark: "images/svgs/services/pitcher-dark.svg",
  //     titleText: "رست تخصصی",
  //     spanText: "تازه برشته شده و با کیفیت",
  //   },
  //   {
  //     id: 4,
  //     img: "images/svgs/services/coffee.svg",
  //     imgDark: "images/svgs/services/coffee-dark.svg",
  //     titleText: "اکسسوری قهوه",
  //     spanText: "وسایل و ادوات دم آوری",
  //   },
  // ];

  // return (
  //   <div>
  //     <Header></Header>
  //     <Main></Main>
  //     <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
  //       {products.map((products) => (
  //         <Products key={products.id} {...products}></Products>
  //       ))}
  //     </div>
  //     <Banner></Banner>
  //     <div className="flex items-center justify-center gap-y-6 gap-x-[29px] md:gap-[65px] flex-wrap">
  //       {productsCategory.map((categories) => (
  //         <ProductsCategory
  //           key={categories.id}
  //           {...categories}
  //         ></ProductsCategory>
  //       ))}
  //     </div>
  //     <div className="container mb-8 md:mb-20">
  //       <BestSellingHeader></BestSellingHeader>
  //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
  //         {benmanoCoffee.map((items) => (
  //           <BestSellingProducts
  //             key={items.id}
  //             {...items}
  //           ></BestSellingProducts>
  //         ))}
  //       </div>
  //     </div>
  //     <div className="coffee-club mb-8 md:mb-20">
  //       <div className="container">
  //         <div className="flex items-center lg:gap-x-4 xl:gap-x-24 gap-y-9 flex-wrap lg:flex-nowrap lg:h-36 rounded-2xl py-8 lg:py-0 px-3 lg:px-5 xl:px-11 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
  //           <CoffeClub></CoffeClub>
  //           <div className="flex justify-between w-full">
  //             <div className="flex gap-x-2 lg:gap-x-3 xl:gap-x-5">
  //               {coffeeIcons.map((icons) => (
  //                 <CoffeeIcons key={icons.id} {...icons}></CoffeeIcons>
  //               ))}
  //               <CoffeeClubSection></CoffeeClubSection>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="container mb-8 md:mb-28">
  //       <Articles></Articles>
  //       <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
  //         {articles.map((art) => (
  //           <ArticlesProducts key={art.id} {...art}></ArticlesProducts>
  //         ))}
  //       </div>
  //     </div>

  //     <ContactUs></ContactUs>

  //     <div className="services mb-12 md:mb-36">
  //       <div className="container">
  //         <div className="flex items-center justify-between gap-y-11 flex-wrap dark:text-white">
  //           {service.map((serv) => (
  //             <Services key={serv.id} {...serv}></Services>
  //           ))}
  //         </div>
  //       </div>
  //     </div>

  //       <Footer></Footer>

  //   </div>
  // );
}
