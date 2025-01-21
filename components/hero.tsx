'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { Product } from '../../types/products'
import { client } from '@/sanity/lib/client'
import { allProducts, fourProducts } from '@/sanity/lib/querry'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

export default function Hero(){
    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img
      className="w-1344 h-700 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/images/Hero.png"
    />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
    <h1 className="flex justify-center items-center text-black">First Look</h1>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-black">
        NIKE AIR MAX PULSE
      </h1>
      <p className="mb-8 leading-relaxed text-black">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
      —designed to push you past your limits and help you go to the max.
      </p>
      <div className="flex justify-center items-center space-x-4">
      <button className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-lg">
        Notify me
      </button>
      <button className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-lg">
        Shop Air Max
      </button>
</div>
    </div>
  </div>
</section>
  </div>
)
}


export function Main() {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProduct() {
      const fetchedData: Product[] = await client.fetch(fourProducts)
      setProduct(fetchedData)
    }
    fetchProduct()
  },[])
    return(
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6 text-center'>
        Best of Air Max Shoes
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {product.map(product => (
        <div key={product._id}
        className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>

          <Link href={`/products/${product.slug.current}`}>         
          {product.image && (
            <Image 
            src={urlFor(product.image).url()}
            alt='images'
            width={200}
            height={200}
            className='w-full h-48 object-cover rounded-md'/>
          )}
          {product.price}
          <h1 className='text-lg font-semibold mt-4'>
            {product.productName}
          </h1>
          <p className='text-gray-500 mt-2'>
            ${product.price}
          </p>
          </Link> 
        </div>
      ))}
    </div>
    </div>
  )
}


export  const Main2 = () => {
  return(
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img
      className="h-700 w-1440 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/images/Image (4).png"
    />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        STEP INTO WHAT FEELS GOOD
      </h1>
      <p className="mb-8 leading-relaxed">
      Cause everyone should know the feeling of running in that perfect pair.
      </p>
      <button
        className="h-39 bg-black text-white flex items-center justify-center rounded-full mt-px mr-px mb-px ml-px"
        style={{ width: "152.42px" }}
      >
        Find Your Shoe
      </button>
    </div>
  </div>
</section>
    </div>
  )
};

export const NikeApp = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Gear Up Section */}
<section className="py-8 px-4">
  <h2 className="text-xl font-bold mb-6">Gear Up</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
         name: "Nike Dri-FIT ADV TechKnit Ultra",
        price: "₹ 3 895",
        image: "/images/Image (5).png",
      },
      {
        name: "Nike Dri-FIT Challenger",
        price: "₹ 2 495",
        image: "/images/Image (6).png",
      },
      {
        name: "Nike Dri-FIT ADV Run Division",
        price: "₹ 5 295",
        image: "/images/Image (7).png",
      },
      {
        name: "Nike Fast",
        price: "₹ 3 795",
        image: "/images/Image (8).png", 
      },
    ].map((gear, index) => (
      <div
        key={index}
        className="bg-white rounded-lg p-4 text-center shadow-lg hover:shadow-xl"
      >
        <img
          src={gear.image}
          alt={gear.name}
          className="w-full mb-4"
        />
        <h3 className="text-lg font-bold">{gear.name}</h3>
        <p className="text-gray-600">{gear.price}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

// Dont Miss Section// 
export const DontMiss = () => {
  return(
    <div>
      <section className="text-black body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="w-1344 h-700 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/images/Image (9).png"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-black">
        FLIGHT ESSENTIALS
      </h1>
      <p className="mb-8 leading-relaxed">
      Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <button className="bg-black text-white flex items-center justify-center rounded"
       style={{ width: "40px", height: "40px" }}
      >
      Shop
      </button>

    </div>
  </div>
</section>

    </div>
  )
};

// THE ESSENTIALS SECTION  //

export const Essentials= () => {
  return(
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-between">
            {/* BLOG 1 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
          <img
            className="w-440 h-540 object-cover object-center"
            src="/images/Image (10).png"
            alt="blog"
          />
          </div>
        </div>
      {/* BLOG 2 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
          <img
            className="w-440 h-540 object-cover object-center"
            src="/images/Image (11).png"
            alt="blog"
          />
          </div>
        </div>
      {/* BLOG 3 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
          <img
            className="w-440 h-540 object-cover object-center"
            src="/images/Image (12).png"
            alt="blog"
          />
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>

  )
  }

  // FOOTER SECTION //

export const Footer2 = () => {
  return(
    <div>
      <footer className="text-black bg-white body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
          Icons
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#757575] hover:text-black">Air Force 1</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Huarache</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Air Max 90</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Air Max 95</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
          Shoes
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#757575] hover:text-black">All Shoes</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Custom Shoes</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Jordan Shoes</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Running Shoes</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
          Clothing
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#757575] hover:text-black">All Clothing</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Modest Wear</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Hoodies and Pullovers</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Shirts and Tops</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
         Kids
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#757575] hover:text-black">Infant and Toddler Shoes</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Kids' Shoes</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Kids' Jordan Shoes</a>
          </li>
          <li>
            <a className="text-[#757575] hover:text-black">Kids' BasketBall Shoes</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  </footer>
    </div>

  )
}

