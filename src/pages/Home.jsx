import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/home_banners_3._1_1950x.jpg";
import img2 from "../assets/Silver_kada_270x.avif";
import img3 from "../assets/DH2A2423_720x.jpg";
import img4 from "../assets/festival_collection_3_720x.jpg";
import img5 from "../assets/instagram_231322_ded479a5-25a4-49d2-b73d-5a63db085817_1950x.jpg";
import img6 from "../assets/silver_payal_e631686b-8938-4750-8603-0723dd795cb1_1950x.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Products1 from "../Home/Products1";
import Eveleye from "../Home/Eveleye";
import BabyEvil from "../Home/BabyEvil";
import Dewali from "../Home/Dewali";
import LikedProduct from "../Home/LikedProduct";
import Categories from "../Home/Categories";
import SilverEarings from "../Home/SilverEarings";
import ShopbyCategory from "../Home/ShopbyCategory";
import LatestJawlry from "../Home/LatestJewlry";

const Home = () => {
  const categoriesRow1 = [
    { name: "Silver Rings", image: img2 },
    { name: "Silver Chains", image: img2 },
    { name: "Silver Bangles", image: img2 },
    { name: "Silver Kadas", image: img2 },
    { name: "Silver Bracelets", image: img2 },
    { name: "Dhaga Payals", image: img2 },
    { name: "Silver Anklets", image: img2 },
    { name: "Silver Rings", image: img2 },
    { name: "Silver Chains", image: img2 },
    { name: "Silver Bangles", image: img2 },
    { name: "Silver Kadas", image: img2 },
    { name: "Silver Bracelets", image: img2 },
    { name: "Dhaga Payals", image: img2 },
    { name: "Silver Anklets", image: img2 },
  ];

  const categoriesRow2 = [
    {
      name: "Silver Krishna Bansuri",
      image: img2,
    },
    {
      name: "Silver Designer Toe Rings",
      image: img2,
    },
    { name: "Silver Rose Flowers", image: img2 },
    { name: "Silver Rudraksha", image: img2 },
    {
      name: "Traditional Silver Payal",
      image: img2,
    },
    { name: "Silver Mangalsutra", image: img2 },
    { name: "Silver Nose Pin", image: img2 },
    {
      name: "Silver Krishna Bansuri",
      image: img2,
    },
    {
      name: "Silver Designer Toe Rings",
      image: img2 },
    { name: "Silver Rose Flowers", image: img2 },
    { name: "Silver Rudraksha", image: img2 },
    {
      name: "Traditional Silver Payal",
      image: img2 },
    { name: "Silver Mangalsutra", image: img2 },
    { name: "Silver Nose Pin", image: img2 },
  ];

  // Function to render Row 1
  const renderCategoriesRow1 = () => {
    return categoriesRow1.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="text-center">
          <div className="h-auto w-auto overflow-hidden rounded-full">
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto w-full h-auto rounded-full hover:scale-110 overflow-hidden traansition duration-700"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm font-semibold bg-white p-2">
            {item.name}
          </p>
        </div>
      </SwiperSlide>
    ));
  };

  // Function to render Row 2
  const renderCategoriesRow2 = () => {
    return categoriesRow2.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="text-center">
          <div className="h-auto w-auto overflow-hidden rounded-full">
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto w-full h-auto rounded-full hover:scale-110 overflow-hidden traansition duration-700"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm font-semibold bg-white p-2">
            {item.name}
          </p>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div>

      <Header />
    <div className="bg-[#ecf1f2]">
      <div>
        <div>
          <img src={img1} alt="banner" className="w-full h-auto" />
        </div>
        <div className="w-full mx-auto p-2 md:p-6">
          {/* First Row */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="mb-10"
            breakpoints={{
              100: {
                slidesPerView: 4, 
              },
              768: {
                slidesPerView: 6, 
              },
              1024: {
                slidesPerView: 8,
              },
            }}
          >
            {renderCategoriesRow1()}
          </Swiper>

          {/* Second Row */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              100: {
                slidesPerView: 4, 
              },
              768: {
                slidesPerView: 6, 
              },
              1024: {
                slidesPerView: 8,
              },
            }}
          >
            {renderCategoriesRow2()}
          </Swiper>
        </div>
        <div>
          <img src={img4} alt="banner" className="w-full h-auto" />
        </div>

        <Products1 />
        
        <div>
          <img src={img5} alt="banner" className="w-full h-auto" />
        </div>
        <Eveleye />
        <BabyEvil />
        <Dewali /> 
        <div>
          <img src={img6} alt="banner" className="w-full h-auto" />
        </div>
        <LikedProduct />
        <Categories />
        <SilverEarings />
        <ShopbyCategory />
        <LatestJawlry />
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Home;
