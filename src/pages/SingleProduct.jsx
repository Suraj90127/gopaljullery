
import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img1 from '../assets/2_1_37b39028-381b-45d0-bbd6-d24974d87c36_360x.webp'
import img2 from '../assets/40_dc33d755-95dd-40e1-a2df-f0d85ffd82e7_360x.webp'
import img3 from '../assets/64_18ee44ad-edbd-4c66-b2ba-8e7924e1fb56_540x.jpg'
import img4 from '../assets/6_2_1d1356a2-1a41-489b-9a12-f7a75b49ed63_360x.webp'
import img5 from '../assets/heart.webp'
import img6 from '../assets/BEST_PRICE_77387d23-0de0-41ab-a13a-55839ab902cd.webp'
import img7 from '../assets/MAKE_IN_INDIA_PNG.webp'
import img8 from '../assets/OVER_5000_a7b0a80d-8bb4-40c7-a42b-eedec08b5a23.webp'
import img9 from '../assets/AUTHENTICATION_CERTIFICATE.webp'
import img12 from '../assets/silver_bangles_9463590d-39f9-467b-95a5-99a4a8003f7b_360x.jpg'
import { BiHeart } from 'react-icons/bi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import MayLike from '../components/MayLike';
import RecentView from '../components/RecentView';

const products = [
  {
    id: 1,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img12,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 2,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img12,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 3,
    name: "Beautiful Gold Pink Gem Nosepin",
    image: img12,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 4,
    name: "Beautiful Gold White Gem Nosepin",
    image: img12,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 5,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img12,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 6,
    name: "Beautiful Blue Gem Gold Nosepin",
    image: img12,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },
  {
    id: 7,
    name: "Beautiful Gold Pink Gem Nosepin",
    image: img12,
    originalPrice: 393.27,
    discountedPrice: 327.17,
  },
  {
    id: 8,
    name: "Beautiful Gold White Gem Nosepin",
    image: img12,
    originalPrice: 591.56,
    discountedPrice: 492.41,
  },

];

export default function Component() {
  
  const [mainImage, setMainImage] = useState(img1);
  const [magnifyStyle, setMagnifyStyle] = useState({});
  const imageRef = useRef(null);
  const [isOpen, setIsOpen] = useState(null);

  // Function to toggle the accordion state
  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };
  

  const thumbnails = [
    img1,
    img2,
    img3,
    img4,
  ];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMagnifyStyle({
      display: 'block',
      backgroundImage: `url(${mainImage})`,
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setMagnifyStyle({ display: 'none' });
  };

  useEffect(() => {
    const img = new Image();
    img.src = mainImage;
    img.onload = () => {
      if (imageRef.current) {
        imageRef.current.src = mainImage;
      }
    };
  }, [mainImage]);

  return (
    <div className='bg-[#ecf1f2]'>
      <Header />
      <div className="flex flex-col md:flex-row p-4 max-w-6xl mx-auto">
        <div className="md:w-1/9 flex flex-row md:flex-col mb-4 md:mb-0 md:mr-4">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover mb-2 mr-2 md:mr-0 cursor-pointer border border-gray-300"
              onClick={() => setMainImage(src.replace('100', '500'))}
            />
          ))}
        </div>
        <div className="md:w-5/12 relative">
          <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
            <img
              ref={imageRef}
              src={mainImage}
              alt="Main product image"
              className="absolute top-0 left-0 w-full h-full object-cover"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
            <div
              className="absolute top-0 left-0 w-full h-full bg-no-repeat pointer-events-none"
              style={{
                ...magnifyStyle,
                backgroundSize: '200%',
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div className="md:w-[50%] md:pl-8 mt-4 md:mt-0">
          <h1 className="text-base  mb-2">
            Shree Written Silver Kada Payal with Ghungroo
          </h1>
          
        <div  className='flex justify-between'>
        <div>
          <div className="mb-4">
            <span className="text-red-600 text-2xl font-bold">Rs.44,547.18</span>
            <span className="text-gray-500 line-through ml-2">Rs.57,011.34</span>
            <span className="bg-[#1c3058] text-white px-2 py-1 text-sm ml-2">-23%</span>
          </div>
          </div>
          <div className="text-[#56b4c4] mb-4">In Stock</div>
          </div>
          <div className="flex items-center mb-4">
            <img src={img5} alt="Gift icon" className="w-6 h-6 mr-2" />
            <span>Add gift wrap to your Order</span>
          </div>
          <button className="bg-[#1c3058] text-white px-4 py-2 mb-4">Add gift wrap</button>
          <div className="flex items-center mb-4 md:w-[60%]">
            <input type="number" defaultValue={1} min={1} className="border p-2 w-16 mr-2 focus:border-[1px] border-gray-400 bg-transparent" />
            <button className="bg-[#1c3058] text-white px-4 py-2 flex-grow">ADD TO CART</button>
            <button className="border border-gray-400 p-3 ml-2 hover:bg-[#1c3058] text-white transition duration-700">
              <BiHeart className='text-gray-400  ' />
            </button>
          </div>
          <button className="bg-[#1c3058] text-white px-4 py-2 mb-4 md:w-[60%]">BUY IT NOW</button>
          <marquee direction="left">
          <div className="flex justify-between mb-4">
            {[img6, img7, img8, img9].map((text, index) => (
              <div key={index} className="flex flex-col gap-2 items-center text-center">
                <img src={text} alt="img" className="w-full h-10 mb-1" />
              </div>
            ))}
          </div>
          </marquee>
          <div className="mb-4">
            <h2 className="text-base font-[400] mb-2">SPECIAL OFFERS</h2>
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: 'DIWALI10', discount: '10% off on orders above Rs. 1999' },
                { code: 'FLAT10', discount: '10% OFF on orders above Rs. 2999' },
                { code: 'GLOW10', discount: '10% OFF on orders above Rs. 3999' },
              ].map((offer, index) => (
                <div key={index} className="border border-gray-400 bg-gradient-to-l from-blue-100 to-blue-100 rounded-lg p-2 text-center">
                  <div className="font-bold">{offer.code}</div>
                  <div className="text-sm">{offer.discount}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">*Coupon can be applied at checkout</div>
        </div>
      </div>
      {/*  */}
      <div className="p-4 w-full md:w-[90%] lg:w-[80%] mx-auto">
      {/* Section 1: Description */}
      <div className="border-b border-gray-200 mb-2">
        <div
          className="flex justify-between items-center cursor-pointer p-2 bg-white hover:bg-gray-100"
          onClick={() => toggleAccordion(1)}
        >
          <h2 className="text-lg font-semibold">Description</h2>
          <div className='bg-black text-white h-10 w-10 flex justify-center items-center'>
          {isOpen === 1 ? <FaMinus /> : <FaPlus />}
          </div>
        </div>
        <div
          className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
            isOpen === 1 ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <div className="p-4 bg-white">
            <p>
              Expertly crafted, our Silver kada Payal features a stunning center
              heart design accented with delicate Ghungroo bells. Made from
              high-quality materials, this traditional Indian ankle bracelet
              adds a touch of elegance and charm to any outfit.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Silver</li>
              <li>Comes with authenticity certificate</li>
              <li>Content - Kada Payal</li>
              <li>Net Qty - 1 Pair</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Shipping Information */}
      <div className="border-b border-gray-200 mb-2">
        <div
          className="flex justify-between items-center cursor-pointer p-2 bg-white hover:bg-gray-100"
          onClick={() => toggleAccordion(2)}
        >
          <h2 className="text-lg font-semibold">Shipping Information</h2>
          <div className='bg-black text-white h-10 w-10 flex justify-center items-center'>
          {isOpen === 2 ? <FaMinus /> : <FaPlus />}
          </div>
        </div>
        <div
          className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
            isOpen === 2 ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <div className="p-4 bg-white">
            <p>Shipping information will be added here.</p>
          </div>
        </div>
      </div>

      {/* Section 3: Customer Reviews */}
      <div className="border-b border-gray-200 mb-2">
        <div
          className="flex justify-between items-center cursor-pointer p-2 bg-white "
          onClick={() => toggleAccordion(3)}
        >
          <h2 className="text-lg font-semibold">Customer Reviews</h2>
          <div className='bg-black text-white h-10 w-10 flex justify-center items-center'>
          {isOpen === 3 ? <FaMinus /> : <FaPlus />}
          </div>
        </div>
        <div
          className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
            isOpen === 3 ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <div className="p-4 bg-white">
            <p>Customer reviews will be shown here.</p>
          </div>
        </div>
      </div>
    </div>

      {/*  */}
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-center mb-8">Shop By Category</h1>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="" 
        >
          <div className="relative rounded-full  overflow-hidden">
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
  <MayLike />
  <RecentView />
      <Footer />
    </div>
  );
}
