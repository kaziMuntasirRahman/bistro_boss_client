import SimpleParallax from "simple-parallax-js";
import MenuTemplate from "../shared/MenuTemplate";

const SectionTemplate = ({ bannerImg, bannerHead, bannerSubHead, menu, sectionHead, sectionSubHead }) => {

  return (
    <div className="w-full">
      <Banner
        img={bannerImg}
        heading={bannerHead}
        subHeading={bannerSubHead}
      />
      <div className="w-[1320px] mx-auto flex flex-col items-center my-32">
        {/* <SectionHeading
          heading={sectionHead}
          title={sectionSubHead}
        /> */}
        <MenuTemplate menus={menu} />
        <button className="h-16 px-[30px] py-5  rounded-lg border-b-2 border-[#1F2937] justify-start items-start gap-2.5 inline-flex uppercase text-[#1F2937] text-xl font-medium font-['Inter'] mt-6 mb-8 hover:bg-[#1F2937] hover:text-white hover:border-slate-400 transition-all ease-in-out duration-300">View Full Menu</button>
      </div>
    </div>
  );
};
export default SectionTemplate;


const Banner = ({ img = "/assets/home/chef-service.jpg", heading, subHeading }) => {
  return (
    <div className="w-full h-[700px] relative flex items-center justify-center overflow-hidden">
      <SimpleParallax
        orientation="down"
        scale="2"
      >
        <img src={img} alt="banner background" className="absolute inset-0 w-full h-full object-cover" />
      </SimpleParallax>

      <div className="w-[1320px] h-[450px] bg-[#151515]/60 flex flex-col gap-1 justify-center items-center z-10">
        <h1 className="text-center text-white text-[45px] font-semibold font-['Cinzel'] uppercase">
          {heading}
        </h1>
        <p className="text-center text-white text-base font-semibold font-['Inter'] leading-relaxed">
          {subHeading}
        </p>
      </div>
    </div>
  );
};
