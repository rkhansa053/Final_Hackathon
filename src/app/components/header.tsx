'use client'

import React, { useState } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";


const UpperHeader = () => {
    return (
        <div>
            <div className="h-[36px] w-full bg-white text-black px-4">
                {/* /* logo section */}
                <div className="flex items-center ">
                    <Image className="mt-3"
                       src="/images/Frame (1).png"
                       alt="logo"
                       layout="fixed"
                       height={18}
                       width={19.2}/>
                </div>
                <ul className="hidden md:flex justify-end items-center gap-6">
                    <li><Link href = "/.">Find a Store</Link></li>
                    <li><Link href="/help">Help</Link></li>
                    <li><Link href="/join-us">Join Us</Link></li>
                    <li><Link href="/login">Sign Up</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default UpperHeader;

export const Header= () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    return(
        <div>
            <header className=" text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    {/* LOGO */}
    <div className="flex items-center mr-auto">
        <Image
           src="/images/Frame (2).png"
           alt="logo2"
           height={78.47}
           width={78.47}/>
        </div>    

        {/* HAMBURGER ICON */}

        <div className="md:hidden flex items-center">
            {menuOpen ? (
                <FiMenu className = "text-2xl cursor-pointer" onClick={toggleMenu}/>
            ) : (
                <FiMenu className = "text-2xl cursor-pointer" onClick={toggleMenu}/>
            )};
        </div>

        {/* NavBar */}
    <nav 
        className= {`${
        menuOpen ? "block" : "hidden"}
        md:flex md:ml-auto md:mr-auto flex-col md:flex-row items-center text-base justify-center text-black bg-white absolute md:static top-[60px] left-0 w-full md:w-auto z-50 shadow-md md:shadow-none`}>

      <Link href="/list_ofProducts" className="py-2 md:py-0 px-4 md:mr-5 text-black">New & Featured</Link>
      <Link href="/men" className="py-2 md:py-0 px-4 md:mr-5 text-black">Men</Link>
      <Link href="/women" className="py-2 md:py-0 px-4 md:mr-5 text-black">Women</Link>
      <Link href="/kids" className="py-2 md:py-0 px-4 md:mr-5 text-black">Kids</Link>
      <Link href="/sale" className="py-2 md:py-0 px-4 md:mr-5 text-black">Sales</Link>
      <Link href="/snkrs" className="py-2 md:py-0 px-4 md:mr-5 text-black">SNKRS</Link>
    </nav>

    <div className="flex items-center space-x-4"> 
    <input  type="text" placeholder="Search" className="w-[200px] p-2 border rounded-md">
    </input>
    <IoSearch className="text-black text-xl" />
    <Link href="wishList"><CiHeart className="text-black text-xl" /></Link>
    <Link href="addtocart"><LiaShoppingBagSolid className="text-black text-xl"/></Link>
    </div>
  </div>

  {/* FOR MOBILE */}

  {menuOpen && (
    <div className="flex flex-col items-center mt-4 space-y-4 md:hidden">
        <input
         type="text"
         placeholder="Search"
         className="w-[90%] p-2 border rounded-md"
     />
     <div className="flex space-x-4">
        <IoSearch className="text-black text-xl" />
        <CiHeart className="text-black text-xl" />
        <LiaShoppingBagSolid className="text-black text-xl"/>
     </div>
    </div>
  )}
</header>
</div>
    )
}



