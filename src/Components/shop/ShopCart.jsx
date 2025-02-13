const Cart = ({ img, name, recipe, price }) => {
  return (
    <div className="w-[424px] bg-[#f3f3f3] flex flex-col" >
      <div className="w-full h-[300px] overflow-hidden relative">
        <img src={img} className="w-full h-full hover:scale-125 transition-all ease-in-out duration-150" />
        <div className="py-[11px] px-[22px] bg-gray-900 absolute top-5 right-5">
          <h3 className="text-white font-semibold font-['Inter']">${price}</h3>
        </div>
      </div>
      <section className="mt-8 px-10 w-full flex flex-col items-center gap-2">
        <h2 className="text-center text-[#151515] text-2xl font-semibold font-['Inter']">{name}</h2>
        <p className=" text-neutral-500 text-base font-normal font-['Inter'] leading-relaxed">{recipe}</p>
        <button className="mx-auto h-16 px-[30px] py-5 bg-[#e8e8e8] rounded-lg border-b-2 border-[#bb8405] justify-start items-start gap-2.5 inline-flex uppercase text-[#bb8405] text-xl font-medium font-['Inter'] mb-8 hover:bg-[#1F2937] transition-all ease-in-out duration-200 mt-4">Add To Cart</button>
      </section>

    </div>
  )
}

export default Cart;