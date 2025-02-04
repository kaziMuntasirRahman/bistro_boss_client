import SectionHeading from "./SectionHeading";

const MenuBanner = () => {
  return (
<div className="w-full h-[848px] bg-[url(assets/home/featured.jpg)] bg-cover bg-center bg-black/50 bg-blend-overlay py-[130px] text-white mb-[130px]">
<SectionHeading heading="From Our Menu" title="Check it out" theme="dark" />
      <div className="w-[1320px] mx-auto flex items-center gap-16">
        <img src="assets/home/featured.jpg" className="w-[648px]" />
        <section className="flex flex-col items-start">
          <h4 className="text-2xl font-normal font-['Inter'] leading-9">March 20, 2025</h4>
          <h2 className="text-2xl uppercase font-normal font-['Inter'] leading-9">Where Can I Get Some?</h2>
          <p className="text-white text-xl font-normal font-['Inter'] leading-[30px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, non laborum iure nam distinctio quasi quia veniam animi accusamus optio facere, nesciunt ipsum repellendus, corporis libero delectus fugit atque vero? Beatae blanditiis optio soluta cumque!</p>
          <button className="h-16 px-[30px] py-5  rounded-lg border-b-2 border-white justify-start items-start gap-2.5 inline-flex uppercase text-white text-xl font-medium font-['Inter'] mt-6 mb-8 hover:bg-white hover:text-black hover:border-black transition-all ease-in-out duration-300">Read More</button>
        </section>
      </div>
    </div>
  );
};

export default MenuBanner;