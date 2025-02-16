import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../Components/authentication/Input";
import SubmitButton from "../Components/authentication/SubmitButton";
import SocialLogin from "../Components/authentication/SocialLogin";
import { AuthContext } from "../providers/AuthProvider";
// captcha
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import '../styles/pan_loader.css'
import Swal from "sweetalert2";


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const { loading, logIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const originalLocation = useLocation().state?.from || "/";

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, [])

  const handleLogIn = async (e) => {
    e.preventDefault();
    // captcha validation
    if (validateCaptcha(captcha)) {
      console.log("Captcha Matched...");
    } else {
      console.log("* Captcha doesn't match...");
      if (captcha.length > 0) {
        setCaptchaError("* wrong captcha, try again")
      } else {
        setCaptchaError("* please solve the captcha to continue.")
      }
      return;
    }
    // login in process
    try {
      const result = await logIn(email, password)
      if (result.user) {
        setTimeout(() => navigate(originalLocation), (200))
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You've successfully Logged In.",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: 'Please try again later.',
          timer: 2000,
          draggable: true
        });
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="bg-[url(/assets/others/authentication.png)] w-full h-auto pt-40 pb-14">
      <div className="flex flex-col md:flex-row justify-between items-center w-[1200px] h-[700px] mx-auto shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] pr-20 pl-10 py-[50px] relative">
        <img className="" src="/assets/others/authentication2.png" />
        {/* loading spinner */}
        {
          loading &&
          <div className="absolute w-full h-full top-0 left-0 bg-slate-800/50 flex items-center justify-center">
            <span className="loader" />
          </div>
        }
        {/* form start */}
        <form onSubmit={handleLogIn} className="flex flex-col items-center">
          <h1 className="text-center text-[#151515] text-3xl font-bold font-['Inter']">Login</h1>
          {/* email input */}
          <Input
            label="Email"
            placeholder="Type here"
            onChangeMethod={setEmail}
            type="email"
          />
          {/* password input */}
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            onChangeMethod={setPassword}
          />
          {/* show captcha */}
          <div className="mr-auto mb-4">
            <LoadCanvasTemplate />
            {/* <LoadCanvasTemplateNoReload /> */}
          </div>
          {/* captcha input */}
          <Input
            placeholder="Enter captcha"
            type="text"
            onChangeMethod={setCaptcha}
            onKeyDownMethod={() => setCaptchaError("")}
            required={false}
          />
          <p className="text-[#ff0000] font-['Inter'] -mt-2 mb-4 ml-2 w-full text-left">{captchaError}</p>

          <SubmitButton name="Sign In" />
          <Link to='/register' className="text-[#d1a054] text-lg font-medium font-['Inter'] text-center">New here?&nbsp;
            <span className=" font-bold">Create a New Account</span>
          </Link>
          <p className="text-[#444444] text-lg font-medium font-['Inter'] mt-6 mb-4">Or sign in with</p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;