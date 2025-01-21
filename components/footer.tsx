import Image from "next/image";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
    return(
        <div>
            <footer className="text-white body-font bg-black w-1440 h-331">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">
          FIND A STORE
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white mt-4">BECOME A MEMBER</a>
          </li>
          <li>
            <a className="text-white">SIGN UP FOR EMAIL</a>
          </li>
          <li>
            <a className="text-white">Send Us Feedback</a>
          </li>
          <li>
            <a className="text-white">STUDENT DISCOUNTS</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          GET HELP
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-sm">Order Status</a>
          </li>
          <li>
            <a className="text-white">Delivery</a>
          </li>
          <li>
            <a className="text-white">Returns</a>
          </li>
          <li>
            <a className="text-white">Payment Option</a>
          </li>
          <li>
            <a className="text-white">Contact Us On Nike.com Inquiries</a>
          </li>
          <li>
            <a className="text-white">Contact Us On All Other Inquiries</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          ABOUT NIKE
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-sm">News</a>
          </li>
          <li>
            <a className="text-white">Careers</a>
          </li>
          <li>
            <a className="text-white">Investors</a>
          </li>
          <li>
            <a className="text-white">Sustainability</a>
          </li>
        </nav>
      </div>
      <div className="flex justify-between gap-9 ml-1029px">
      <CiTwitter className="text-white" />
      <FaFacebookF className="text-white" />
      <TfiYoutube className="text-white" />
      <ImInstagram className="text-white" />

      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      
      </div>
    </div>
  </div>
  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-center">
      <p className="text-gray-500 text-sm text-center justify-center">
        © 2023 Nike, Inc. All Rights Reserved
      </p>
    </div>
  </div>
</footer>

        </div>
    )
}

export default Footer;