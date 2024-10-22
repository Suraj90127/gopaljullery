import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img1 from "../assets/home_banners_3._1_1950x.jpg";
import img2 from '../assets/silver_bangles_9463590d-39f9-467b-95a5-99a4a8003f7b_360x.jpg';

const products = [
  {
    id: 1,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img2,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 2,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 3,
    name: "Beautiful Gold Pink Gem Nosepin",
    image: img2,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 4,
    name: "Beautiful Gold White Gem Nosepin",
    image: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 5,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img2,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 6,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 7,
    name: "Beautiful Gold Pink Gem Nosepin",
    image: img2,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 8,
    name: "Beautiful Gold White Gem Nosepin",
    image: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },

];

const Collections = () => {
  return (
    <div>
    <Header />
    <div className="bg-[#ecf1f2]">
    <div>
          <img src={img1} alt="banner" className="w-full h-auto" />
        </div>

        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto px-4 py-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="" 
        >
          <div className="relative  overflow-hidden">
            <img
              src={product.image} 
              alt={product.name}
              width={300}
              height={300}
              className="w-full  transition duration-500 h-auto hover:scale-110"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm font-semibold bg-white p-2">
            {product.name}
          </p>
        </div>
      ))}
    </div>
  </div>

    </div>
      <Footer />
    </div>
  )
}

export default Collections
