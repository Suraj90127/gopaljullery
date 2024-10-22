import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img5 from "../assets/DIWALI10_2100x.jpg";
import img1 from '../assets/64_18ee44ad-edbd-4c66-b2ba-8e7924e1fb56_540x.jpg';
import img2 from '../assets/62_b5b0d395-5596-45f1-a426-c31f97dde259_360x.jpg'; 

const products = [
  {
    id: 1,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img1,
    hoverImage: img2, // New image to show on hover
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 2,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 3,
    name: "Beautiful Gold Pink Gem Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 4,
    name: "Beautiful Gold White Gem Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 5,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img1,
    hoverImage: img2, // New image to show on hover
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 6,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 7,
    name: "Beautiful Gold Pink Gem Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 8,
    name: "Beautiful Gold White Gem Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 9,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img1,
    hoverImage: img2, // New image to show on hover
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 10,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 11,
    name: "Beautiful Gold Pink Gem Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 12,
    name: "Beautiful Gold White Gem Nosepin",
    image: img1,
    hoverImage: img2,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },

];

const OfferPromotion = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
  return (
    <div>
     <Header />
     <div className='bg-[#ecf1f2]'>
     <div>
          <img src={img5} alt="banner" className="w-full h-auto" />
        </div>
        <div className="w-full mx-auto px-4 py-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden transition duration-500" 
            onMouseEnter={() => setHoveredProduct(product.id)} 
            onMouseLeave={() => setHoveredProduct(null)} 
          >
            <div className="relative ">
              <div className="absolute top-2 left-2 bg-[#1c3058] text-white px-2 py-1 text-xs font-semibold ">
                -16%
              </div>
              <img
                src={hoveredProduct === product.id ? product.hoverImage : product.image} 
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-auto "
              />
            </div>

            <div className="pt-3">
              <button className="bg-primary-gradient text-[10px] md:text-base font-[500] text-white w-full py-2 rounded-md hover:bg-blue-600">
                ADD TO CART
              </button>
              <h3 className="mb-2 text-sm md:text-base text-text">{product.name}</h3>
              <div className="flex justify-left items-center space-x-2 text-sm md:text-base">
                <span className="text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
                <span className="text-red-500 font-[500]">₹{product.discountedPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-8'>
        <button className='text-blacktext border border-text py-2 px-6 hover:text-white hover:bg-blacktext transition-all'>View More</button>
      </div>
    </div>

     </div>
     <Footer />
      
    </div>
  )
}

export default OfferPromotion
