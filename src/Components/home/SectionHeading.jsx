const SectionHeading = ({title, heading}) => {
  return (
    <section className="w-full flex flex-col items-center mb-12">
      <div className="text-center italic text-[#d99904] text-xl mb-4 font-['Inter']">---{title}---</div>
      <div className="text-center text-[#151515] text-[40px]  font-['Inter'] uppercase border-[#e8e8e8] border-y-[4px] pt-5 pb-6 px-16">{heading}</div>
    </section>
  );
};

export default SectionHeading;