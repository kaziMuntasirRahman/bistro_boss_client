const PageCover = ({ img, head, subHead }) => {
  return (
    <div className={`w-full h-[800px] flex items-center justify-center bg-fixed`} style={{ backgroundImage: `url(${img})` }}>
      <div className="w-[1320px] h-[450px] bg-[#151515]/60 flex flex-col gap-1 justify-center items-center">
        <h1 className="text-white text-[88px] font-bold font-['Cinzel'] uppercase">{head}</h1>
        <p className="text-center text-white text-2xl font-semibold font-['Cinzel']">{subHead}</p>
      </div>
    </div>
  );
};

export default PageCover;