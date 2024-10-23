import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img2 from "../assets/02-09-2024_Bracelete_02_270x.avif";
import img1 from "../assets/1_home_370x.webp";

const ShopbyCategory = () => {

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
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-2 md:p-6">
    <h1 className="text-2xl font-semibold text-center mb-8">Shop By Category</h1>
    {/* First Row */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="mb-10"
      breakpoints={{
        100: {
          slidesPerView: 2, 
        },
        768: {
          slidesPerView: 3, 
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
    {categoriesRow1.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="text-center">
          <div className="h-auto w-auto overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto w-full h-auto hover:scale-110 overflow-hidden traansition duration-700"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm font-semibold bg-white p-2">
            {item.name}
          </p>
        </div>
      </SwiperSlide>
    ))  };
  
    </Swiper>

  </div>
  )
}

export default ShopbyCategory
