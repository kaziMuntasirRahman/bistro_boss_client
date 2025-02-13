const Banner = () => {
  return (
    <div className="w-[1320px] h-[572px] relative mx-auto border my-14 bg-[url(/assets/home/chef-service.jpg)] bg-fixed">
      {/* <img className="w-full h-full" src="/assets/home/chef-service.jpg" /> */}
      <div className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-[167px] py-[96px]">
        <div className=" text-[#151515] text-[45px] text-center font-['Cinzel'] mb-3">Bistro Boss</div>
        <p className="w-[762px] text-center text-[#151515] text-base font-normal font-['Inter'] leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
    </div>
  );
};

export default Banner;