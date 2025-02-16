import { Link } from "react-router-dom";

const TextLogo = ({ textBlack = false, shortLogo=false }) => {
  return (
    <Link to="/" className={`${textBlack ? "text-[151515]" : "text-white"} flex flex-col min-w-fit`}>

      <h2
        className={`${shortLogo ? "text-2xl" : "text-[32px]"} font-black font-Cinzel`}>BISTRO BOSS</h2>

      <p className={`${shortLogo ? "text-lg tracking-[6.6px]" : "text-2xl tracking-[9.12px]"} text-2xl font-bold font-Cinzel tracking-[9.12px]`}>Restaurant</p>
    </Link >
  );
};

export default TextLogo;

// Restaurant
