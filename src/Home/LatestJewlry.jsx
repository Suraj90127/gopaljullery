import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img2 from "../assets/silver_payal_e631686b-8938-4750-8603-0723dd795cb1_1950x.jpg";

const LatestJawlry = () => {

    const categoriesRow1 = [
        { title: "Silver Rings sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Chains  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Bangles  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Kadas  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Bracelets  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Dhaga Payals  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Anklets  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Rings  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Chains  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Bangles  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Kadas  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Bracelets  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Dhaga Payals  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
        { title: "Silver Anklets  sas down dew asd", image: img2, dis1: "Silver Rings sas down dew asd", dis2: "Silver Rings sas down dew asd", },
      ];
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-2 md:p-6">
    <h1 className="text-3xl font-semibold text-center mb-8">Explore the Latest in Jewelry Trends</h1>
    {/* First Row */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="mb-10"
      breakpoints={{
        100: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 3, 
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
    {categoriesRow1.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="text-left">
          <div className="h-auto w-auto overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto w-full h-auto hover:scale-110 overflow-hidden traansition duration-700"
            />
          </div>
          <p className="mt-2 text-sm md:text-base font-semibold  p-2">
            {item.title}
          </p>
          <p className=" text-sm md:text-base text-gray-500 ">
            {item.dis1}
          </p>
          <p className=" text-sm md:text-base text-gray-500">
            {item.dis2}
          </p>
        </div>
      </SwiperSlide>
    ))  };
  
    </Swiper>

  </div>
  )
}

export default LatestJawlry
