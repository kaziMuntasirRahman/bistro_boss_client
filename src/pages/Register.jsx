import { Link, useNavigate } from "react-router-dom";
import Input from "../Components/authentication/Input";
import SubmitButton from "../Components/authentication/SubmitButton";
import SocialLogin from "../Components/authentication/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import '../styles/pan_loader.css'
import Swal from "sweetalert2";


const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, loading, createUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    try {
      const result = await createUser(name, email, password)
      if (result.user) {
        setTimeout(() => navigate('/'), (200))
        // navigate('/');
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
      console.log(err.message);
    }
  }

  return (
    <div className="bg-[url(/assets/others/authentication.png)] w-full h-auto pt-40 pb-14">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center w-[1200px] h-[700px] mx-auto shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] pl-[100px] py-[50px] relative">
        {/* pan loading spinner */}
        {
          loading &&
          <div className="absolute w-full h-full top-0 left-0 bg-slate-800/50 flex items-center justify-center">
            <span className="loader" />
          </div>
        }
        <img className="" src="/assets/others/authentication2.png" />
        {/* registration form */}
        <form onSubmit={handleRegister} className="flex flex-col items-center">
          <div className="text-center text-[#151515] text-3xl font-bold font-['Inter']">Register</div>
          <Input
            label="Name"
            placeholder="Type here"
            type="text"
            onChangeMethod={setName}
          />
          <Input
            label="Email"
            placeholder="Type here"
            type="email"
            onChangeMethod={setEmail}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            onChangeMethod={setPassword}
          />
          <SubmitButton name="Sign Up" />
          <Link to='/login' className="text-[#d1a054] text-lg font-medium font-['Inter'] text-center">Already Registered?&nbsp;
            <span className=" font-bold">Sign In Now.</span>
          </Link>
          <p className="text-[#444444] text-lg font-medium font-['Inter'] mt-6 mb-4">Or sign up with</p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Register;