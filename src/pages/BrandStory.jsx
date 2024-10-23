import React from 'react'
import img1 from "../assets/slider_2.webp";
import Header from '../components/Header';
import Footer from '../components/Footer';

const BrandStory = () => {
  return (
    <div className='bg-[#ecf1f2]'>
    <Header />
     <div>
          <img src={img1} alt="banner" className="w-full h-auto" />
        </div>

        <div className="w-full md:-[90%] lg:w-[80%] mx-auto p-2 md:p-6 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 underline">Brand Story</h2>
      <p className="text-base md:text-2xl font-semibold mb-4">
        Established in 2018 in Jodhpur, Rajasthan, "Khushbu Jewellers" has emerged as a distinguished name known for its unique designs and uncompromising commitment to quality. Our mission is to
        satisfy discerning customers across India and international markets with meticulously crafted silver jewellery of exceptional beauty.
      </p>
      <p className="text-base md:text-2xl font-semibold mb-4">
        Delivering over 10,000 parcels monthly, we prioritize prompt and satisfactory customer service. Our official website, khushbujewellers.com, facilitates seamless online shopping experiences,
        featuring a comprehensive collection of certified jewellery encompassing traditional and contemporary designs in gold, silver, and precious stones. We assure the authenticity and superior
        craftsmanship of every piece, reflecting our unwavering commitment to excellence.
      </p>
      <p className="text-base md:text-2xl font-semibold mb-4">
        At "Khushbu Jewellers," we are dedicated to upholding our legacy of craftsmanship and customer satisfaction, continually setting benchmarks in the jewellery industry through innovation and
        timeless elegance.
      </p>
    </div>

    <Footer />
      
    </div>
  )
}

export default BrandStory
