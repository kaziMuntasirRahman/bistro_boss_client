const MenuTemplate = ({ menus }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {
        menus.map((menu) =>
          <div className="flex" key={menu._id}>
            <img src={menu.image} className="w-[118px] h-[104px] bg-[#d9d9d9] mr-8 rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]" />
            <div>
              {/* <h1 className="text-[#151515] text-xl font-normal font-['Cinzel']">{menu.category} ------------------</h1> */}
              <h1 className="text-[#151515] text-xl font-normal font-['Cinzel']">{menu.name} ------------------</h1>
              <p className="w-[443px] text-neutral-500 text-base font-normal font-['Inter'] leading-relaxed">{menu.recipe}</p>
            </div>
            <h2 className="text-[#bb8405] text-xl font-normal font-['Inter'] leading-relaxed">${menu.price}</h2>
          </div>
        )}
    </div>

  );
};

export default MenuTemplate;