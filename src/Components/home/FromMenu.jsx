import { useEffect, useState } from "react";
import MenuTemplate from "../shared/MenuTemplate";
import SectionHeading from "./SectionHeading";

const FromMenu = () => {

  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch('data/menu.json')
      .then(res => res.json())
      .then(data => {
        const popularMenu = data.filter(recipe => recipe.category === "popular")
        setMenu(popularMenu)
      })
  }, [])


  return (
    <div className="w-[1320px] mx-auto flex flex-col items-center">
      <SectionHeading heading="From Our Menu" title="Check it out" />
      <MenuTemplate menus={menu} />
      <button className="h-16 px-[30px] py-5  rounded-lg border-b-2 border-[#1F2937] justify-start items-start gap-2.5 inline-flex uppercase text-[#1F2937] text-xl font-medium font-['Inter'] mt-6 mb-8 hover:bg-[#1F2937] hover:text-white hover:border-slate-400 transition-all ease-in-out duration-300">View Full Menu</button>
    </div>
  );
};

export default FromMenu;