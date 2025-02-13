import SectionHeading from "./SectionHeading";

const ChefRecommends = () => {
  return (
    <div className="mx-auto w-[1320px] mb-[130px]">
      <SectionHeading heading="Chef Recommends" title="Should Try" />
      <section className="flex justify-between">
        {
          Array(3).fill().map((index) =>
            <Cart
              key={index}
              img="/assets/home/slide5.jpg"
              head="Caesar Salad"
              details="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
            />
          )
        }
      </section>
    </div>
  );
};

export default ChefRecommends;

const Cart = ({ img, head, details }) => {
  return (
    <div className="flex flex-col items-center bg-[#F3F3F3] ">
      <img className="w-[424px] h-[300px] object-cover" src={img} />
      <h2 className="text-center text-[#151515] text-2xl font-semibold font-['Inter'] mt-8">{head}</h2>
      <p className="w-[345px] text-center text-[#151515] text-base font-normal font-['Inter'] leading-relaxed mt-2">{details}</p>
      <button className="h-16 px-[30px] py-5 bg-[#e8e8e8] rounded-lg border-b-2 border-[#bb8405] justify-start items-start gap-2.5 inline-flex uppercase text-[#bb8405] text-xl font-medium font-['Inter'] mt-6 mb-8 hover:bg-[#1F2937] transition-all ease-in-out duration-300">Add To Cart</button>
    </div>
  )
}
