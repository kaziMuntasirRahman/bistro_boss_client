import { HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <img src="/assets/404.gif" className="mx-auto" />
      <Link className="w-[220px] h-14 bg-gradient-to-r from-[#835d23] to-[#b58130] flex items-center justify-center gap-2" >
        <p className="text-white text-xl font-bold font-['Inter']">Back To Home</p>
        <HiMiniHome className="text-2xl text-white" />
      </Link>
    </div>
  );
};

export default ErrorPage;