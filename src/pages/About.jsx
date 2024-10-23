import React from "react";
import img1 from "../assets/default_1512x.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-[#ecf1f2]">
      <Header />
      <div>
        <img src={img1} alt="banner" className="w-full h-auto" />
      </div>

      <div className="w-full md:-[90%] lg:w-[80%] mx-auto p-2 md:p-6 text-left mt-10 mb-10">
        <p className="text-base md:text-xl font-[500] mb-4"><span className="text-4xl font-semibold text-gray-400">"</span>
        KhushbuJewellers, The Fine Jewellery store is the fastest growing jewellery brand with unique designs and ultimate purity. Company based in Jodhpur, Rajasthan established in 2018 with it's vision of most satisfied customers services and most trusted jewellery brand in all over India and across the continent. We started with retail store in Jodhpur and grown across India via e-commerce. On 30 June 2020 we start selling our precious jewellery through Instagram . With delivery service all across the globe, we deliver more than 3000 parcels in a month and have 50000+ satisfied customers. We had our first Instagram account named piyushh_sonii, having 100k family and continue growing. We acquire 2 more pages in 2021 having 300k family. Now we have a wide range of exquisite designs and precious metals to choose from, ensuring that every customer finds their perfect piece of jewellery.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
