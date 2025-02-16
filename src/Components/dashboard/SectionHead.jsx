const SectionHead = ({ title, heading }) => {
  return (
    <div className="flex flex-col items-center mb-16">
      <h3 className="text-center text-[#d99904] text-xl font-normal font-['Inter'] mb-4">---{title}---</h3>
      <div className="w-[424px] h-1 bg-[#e8e8e8]" />
      <div className="text-center text-[#151515] text-[40px] font-normal font-['Inter'] mt-5 mb-6 uppercase">{heading}</div>
      <div className="w-[424px] h-1 bg-[#e8e8e8]" />
    </div>
  );
};

export default SectionHead;