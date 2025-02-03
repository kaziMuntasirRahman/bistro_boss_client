const SectionHeading = ({title, heading}) => {
  return (
    <section className="w-full flex flex-col items-center mb-12">
      <div className="text-center italic text-[#d99904] text-xl mb-4 font-['Inter']">---{title}---</div>
      <div className="w-[424px] h-1 bg-[#e8e8e8]" />
      <div className="text-center text-[#151515] text-[40px] my-5 font-['Inter'] uppercase">{heading}</div>
      <div className="w-[424px] h-1 bg-[#e8e8e8] my-1" />
    </section>
  );
};

export default SectionHeading;