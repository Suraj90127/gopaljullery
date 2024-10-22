import React from 'react'
import img1 from '../assets/1_home_370x.webp';

const products = [
  {
    id: 1,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img1,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 2,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img1,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 3,
    name: "Beautiful Gold Pink Gem Nosepin",
    image: img1,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 4,
    name: "Beautiful Gold White Gem Nosepin",
    image: img1,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },

];

const Categories = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto px-4 py-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 ">
      {products.map((product) => (
        <div
          key={product.id}
          className=" overflow-hidden" 
        >
          <div className="relative ">
            <img
              src={product.image} 
              alt={product.name}
              width={300}
              height={300}
              className="w-full  transition duration-500 h-auto hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Categories
