import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-cover bg-center  footer-section">
        <div className="container-fluid py-10 w-[90%] mx-auto flex sm:flex-col md:flex-row justify-between">
          <div className="box ">
            <h2 className="uppercase font-bold mb-5"> Quick Links </h2>
            <ul className="space-y-3 text-text">
              <li>
                <a href="https://khushbujewellers.com/pages/brand-story-khushbu-jewellers">
                  Brand Story
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/blogs/news">Blogs</a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/pages/about-us">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/pages/privacy-policy">
                  Pravicy Policy
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/pages/customer-reviews">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/pages/shipping-return-and-refund-policy">
                  Reaturn and Refund
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/pages/terms-of-condition">
                  Terms of Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2 className="uppercase font-bold mb-5"> Info </h2>
            <ul className="space-y-3 text-text">
              <li>
                <a href="https://khushbujewellers.com/">Home</a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/collections">
                  Shop By Category
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/collections/new-arrivals?sort_by=created-descending">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/collections/all">
                  Latest Collections
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/collections/offers-promotions-1">
                  Offers & Promotions
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/collections/best-sellers-new">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="https://khushbujewellers.com/collections/evil-eye">
                  Evil Eye
                </a>
              </li>
            </ul>
          </div>
          <div className="box ">
            <h2 className="uppercase font-bold mb-5"> Get In Touch </h2>
            <ul className="space-y-3 text-text">
              <p>
                <li>
                  <BsBriefcaseFill className="inline-block" /> Moti Mahal Tower
                  ( Domino’s Building)
                </li>
                <li>
                  <span>
                    &nbsp; &nbsp;&nbsp; 4th Floor, 10th B Rd, Sardarpura,
                  </span>
                </li>
                <li>
                  <span>&nbsp; &nbsp; &nbsp;Jodhpur, Rajasthan 342003</span>
                </li>
              </p>
              <li>
                <p>
                  <BsEnvelope className="inline-block" />{" "}
                  <a href="khushbujewellersofficial@gmail.com">
                    khushbujewellersofficial@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <IoIosCall className="inline-block" />
                  +91 88299 51030 (10 AM to 8 PM)
                </p>
              </li>
            </ul>
            <ul className="flex gap-3 mt-3">
              <li className="inline-block">
                <FaFacebookF />
              </li>
              <li className="inline-block">
                <IoLogoPinterest />
              </li>
              <li className="inline-block">
                <FaInstagram />
              </li>
              <li className="inline-block">
                <FaYoutube />
              </li>
              <li className="inline-block">
                <FaSnapchat />
              </li>
            </ul>
          </div>
        </div>

        <div className="jas-col-md-4 jas-col-sm-12 jas-col-xs-12">
          <div className="container-fluid w-[90%] mx-auto flex justify-between">
            <div className="w-full">
              <h2 className="uppercase font-bold mb-5">Newsletter</h2>
              <p>
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
              <div className="flex mt-10 w-full">
                <div className="border-2  relative border-slate-300 md:w-[35%] sm:w-full rounded-full overflow-hidden">
                  <input
                    type="email"
                    name="contact"
                    placeholder="Your email address"
                    required
                    className="p-3 border-none focus:outline-none"
                  ></input>
                  <button
                    className="absolute right-2 bg-black text-white py-1 px-3 text-center rounded-full mt-2 cursor-pointer hover:bg-slate-700"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 py-10 w-[90%] mx-auto justify-between">
          <h2 className="font-bold flex">Related Searches</h2>
          <div className="mt-5">
            <span className="mt-5 text-text font-bold block">
              <a href="">Gifts For Women</a>
            </span>
            <span>
              <a
                href="https://khushbujewellers.com/search?q=Rings+For+Women&amp;type=product"
                className="text-base font-serif"
              >
                Rings For Women
              </a>{" "}
              |
              <a
                href="https://khushbujewellers.com/search?q=925+Silver+Ring+For+Women&amp;type=product"
                className="text-black"
              >
                925 Silver Ring For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Gold+Ring+For+Women&amp;type=product">
                Gold Ring For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Oxidised+Ring+For+Women&amp;type=product">
                Oxidised Ring For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Rose+Gold+Ring+For+Women&amp;type=product">
                Rose Gold Ring For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Earrings+For+Women&amp;type=product">
                Earrings For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Bracelet+For+Women&amp;type=product">
                Bracelet For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Bangles+For+Women&amp;type=product">
                Bangles For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Pendants+For+Women&amp;type=product">
                Pendants For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Necklaces+For+Women&amp;type=product">
                Necklaces For Women
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Toe+Ring&amp;type=product">
                Toe Ring
              </a>
            </span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href=" /gifts-for-him">Gifts For Men</a>
            </span>
            <span>
              <a href="https://khushbujewellers.com/search?q=Rings+For+Men&amp;type=product">
                Rings For Men
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Bracelet+For+Men&amp;type=product">
                Bracelet For Men
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Mens+Chain&amp;type=products">
                Mens Chain
              </a>
            </span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Mangalsutra">
                Mangalsutra
              </a>
            </span>
            <span>
              <a href="https://khushbujewellers.com/search?q=Mangalsutra+Bracelet&amp;type=product">
                Mangalsutra Bracelet
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Modern%20Mangalsutra">
                Modern Mangalsutra
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Daily%20Mangalsutra">
                Daily Use Mangalsutra
              </a>
            </span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href="https://khushbujewellers.com/search?q=Pendants&amp;type=product">
                Pendants
              </a>
            </span>
            <span>
              <a href="https://khushbujewellers.com/search?q=Evil+Eye+Pendants&amp;type=product">
                Evil Eye Pendants
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Butterfly%20Pendants">
                Butterfly Pendants
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Heart+Pendants&amp;type=product">
                Heart Pendants
              </a>
            </span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href="https://khushbujewellers.com/search?q=Nose+Pins&amp;type=product">
                Nose Pins
              </a>
            </span>
            <span></span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href="https://khushbujewellers.com/search?q=Bangles&amp;type=product">
                Bangles
              </a>
            </span>
            <span>
              <a href="https://khushbujewellers.com/search?q=Bridal+Bangles&amp;type=product">
                Bridal Bangles
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Traditional+Bangles&amp;type=product">
                Traditional Bangles
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Bracelets&amp;type=product">
                Bracelets
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Kids+Bracelets&amp;type=product">
                Kids Bracelets
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Pearl+Bracelets&amp;type=product">
                Pearl Bracelets
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Evil+Eye+Bracelets&amp;type=product">
                Evil Eye Bracelets
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Tennis+Bracelets&amp;type=product">
                Tennis Bracelets
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Chain%20Bracelets">
                Chain Bracelets
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Name%20Bracelets">
                Name Bracelets
              </a>
            </span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href="https://khushbujewellers.com/collections/silver-necklace-designs">
                Necklace
              </a>
            </span>
            <span>
              <a href="https://khushbujewellers.com/collections/silver-necklace-designs">
                Silver Necklace
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Butterfly+Necklace&amp;type=product">
                Butterfly Necklace
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Emerald+Necklace&amp;type=product">
                Emerald Necklace
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/collections/silver-chain-designs">
                Chains
              </a>
            </span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href="https://khushbujewellers.com/collections/silver-ring-designs">
                Rings
              </a>
            </span>
            <span>
              |
              <a href="https://khushbujewellers.com/search?q=Solitaire+Rings&amp;type=product">
                Solitaire Rings
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Stone+Rings&amp;type=product">
                Stone Rings
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Engagement+Ring&amp;type=product">
                Engagement Ring
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Couple%20Ring">
                Couple Ring
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Wedding+Ring&amp;type=product">
                Wedding Ring
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Vanki+Ring&amp;type=product">
                Vanki Ring
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Name+Ring&amp;type=product">
                Name Ring
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Promise%20Rings">
                Promise Rings
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Silver%20Ring%20For%20Mens">
                Silver Ring For Mens
              </a>
            </span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href="https://khushbujewellers.com/collections/earrings">
                Earrings
              </a>
            </span>
            <span>
              <a href="https://khushbujewellers.com/search?q=Kids+Earrings&amp;type=product">
                Kids Earrings
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Jhumka+Earrings&amp;type=product">
                Jhumka Earrings
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?q=Stud+Earrings&amp;type=product">
                Stud Earrings
              </a>{" "}
              |
            </span>
          </div>
          <div>
            <span className="mt-5 text-text font-bold block">
              <a href=" /pooja-essentials">Other</a>
            </span>
            <span>
              <a
                href="https://khushbujewellers.com/collections/silver-idols-murti"
                className=""
              >
                Silver Murti
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/collections/silver-god-photo-frames">
                Silver Frames
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/collections/silver-rudraksha-chain-designs">
                Silver Rudraksha
              </a>{" "}
              |
              <a href="https://khushbujewellers.com/search?type=product&amp;q=Kids%20Collection">
                Kids Collection
              </a>
            </span>
          </div>
        </div>
      </footer>
      <div className="flex justify-center bg-primary sm:text-[12px] md:text-lg text-white py-2.5">
        <span>
          <MdOutlineCopyright className="inline-block" /> Copyright 2024{" "}
          <span>khushbu Jewellers</span> all rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
