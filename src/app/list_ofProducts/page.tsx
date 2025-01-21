// // 'use client'

// // import Image from "next/image"
// // import { client } from "@/sanity/lib/client"
// // import { urlFor } from "@/sanity/lib/image"
// // import { allProducts } from "@/sanity/lib/querry"
// // import Link from "next/link"
// // import { useState, useEffect } from "react"
// // import { Product } from "../../../types/products"


// // export default function Main() {

// //   const [product, setProduct] = useState<Product[]>([])

// //   useEffect(() => {
// //     async function fetchProduct() {
// //       const fetchedData: Product[] = await client.fetch(allProducts)
// //       setProduct(fetchedData)
// //     }
// //     fetchProduct()
// //   },[])
// //     return(
// //     <div className='max-w-6xl mx-auto px-4 py-8'>
// //       <h1 className='text-2xl font-bold mb-6 text-center'>
// //         All From Nike
// //       </h1>
// //       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
// //       {product.map(product => (
// //         <div key={product._id}
// //         className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>

// //           <Link href={`/products/${product.slug.current}`}>         
// //           {product.image && (
// //             <Image 
// //             src={urlFor(product.image).url()}
// //             alt='images'
// //             width={200}
// //             height={200}
// //             className='w-full h-48 object-cover rounded-md'/>
// //           )}
// //           {product.price}
// //           <h1 className='text-lg font-semibold mt-4'>
// //             {product.productName}
// //           </h1>
// //           <p className='text-gray-500 mt-2'>
// //             ${product.price}
// //           </p>
// //           </Link> 
// //         </div>
// //       ))}
// //     </div>
// //     </div>
// //   )
// // }



// 'use client'

// import Image from "next/image"
// import { client } from "@/sanity/lib/client"
// import { urlFor } from "@/sanity/lib/image"
// import { allProducts } from "@/sanity/lib/querry"
// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { Product } from "../../../types/products"

// export default function products() {
//   const [product, setProduct] = useState<Product[]>([])
//   const [cart, setCart] = useState<Product[]>([]) // State to manage the cart

//   useEffect(() => {
//     async function fetchProduct() {
//       const fetchedData: Product[] = await client.fetch(allProducts)
//       setProduct(fetchedData)
//     }
//     fetchProduct()
//   }, [])

//   const addToCart = (product: Product) => {
//     setCart(prevCart => [...prevCart, product])
//     alert(`${product.productName} has been added to the cart.`)
//   }

//   return (
//     <div className='max-w-6xl mx-auto px-4 py-8'>
//       <h1 className='text-2xl font-bold mb-6 text-center'>
//         All From Nike
//       </h1>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//         {product.map(product => (
//           <div key={product._id}
//             className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
//             <Link href={`/products/${product.slug.current}`}>
//               {product.image && (
//                 <Image 
//                   src={urlFor(product.image).url()}
//                   alt='images'
//                   width={200}
//                   height={200}
//                   className='w-full h-48 object-cover rounded-md' />
//               )}
//               <h1 className='text-lg font-semibold mt-4'>
//                 {product.productName}
//               </h1>
//               <p className='text-gray-500 mt-2'>
//                 ${product.price}
//               </p>
//             </Link>
//             <button 
//               onClick={() => addToCart(product)}
//               className='mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className='mt-8'>
//         <h2 className='text-xl font-bold'>Cart</h2>
//         <ul className='mt-4'>
//           {cart.map((item, index) => (
//             <li key={index} className='py-2 border-b'>
//               {item.productName} - ${item.price}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }



// app/products/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { allProducts } from '@/sanity/lib/querry';
import Image from 'next/image';
import { useCart } from "@/app/CONTEXT/cartContext";
import Link from 'next/link';
import { Product } from '../../../types/products';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">All From Nike</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <Link href={`/products/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h1 className="text-lg font-semibold mt-4">{product.productName}</h1>
              <p className="text-gray-500 mt-2">${product.price}</p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
