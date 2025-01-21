import Link from "next/link";

const Detail = () => {
    return(
        <div>
            <section className="text-black bg-white font-normal overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/images/Rectangle (1).png"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 font-extrabold">
        <h2 className="text-sm title-font text-black tracking-widest">
        Nike Air Force 1 
        PLT.AF.ORM
        </h2>
        <p className="leading-relaxed mt-5 font-normal">
        Turn style on its head with this crafted take on the Air Jordan 1 Mid. 
        Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.
        Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged 
        midsole aesthetic give this release an artisan finish.
        </p>
        <p className="mt-6">
        ₹ 8 695.00
        </p>
          <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded">
            <Link href="/cart">Add To Cart</Link>
          </button>
        </div>
        </div>
  </div>
</section>

        </div>
    )
}

export default Detail;