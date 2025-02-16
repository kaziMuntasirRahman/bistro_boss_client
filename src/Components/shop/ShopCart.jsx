import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const Cart = ({ item }) => {
  const { image, name, recipe, price } = item;
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useCart()

  const handleAddToCart = () => {
    // check if user is logged in or not
    if (!user?.email) {
      Swal.fire({
        title: "Add to Cart",
        text: "You need to be logged in to add items to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location.pathname } })
        } else {
          return;
        }
      });
    }
    // add the cart to the database if the user is logged in
    else {
      const cartInfo = { menuId: item._id, userEmail: user.email };
      axiosSecure.post('/carts', { ...cartInfo })
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: item.name + " has been added to the cart.",
              showConfirmButton: false,
              timer: 1500
            });
            // refetch the cartInfo. it will update cart count in the navbar
            refetch();
          }
        })
    }
  }

  return (
    <div className="w-[424px] h-[544px] bg-[#f3f3f3] flex flex-col" >

      <div className="w-full h-[300px] overflow-hidden relative">
        <img src={image} className="w-full h-full hover:scale-125 transition-all ease-in-out duration-150" />
        <div className="py-[11px] px-[22px] bg-gray-900 absolute top-5 right-5">
          <h3 className="text-white font-semibold font-['Inter']">${price}</h3>
          {/* <h3 className="text-white font-['Inter']">&#2547;{price}</h3> */}
        </div>
      </div>
      <section className="mt-8 px-10 w-full flex flex-col items-center gap-2">
        <h2 className="text-center text-[#151515] text-2xl font-semibold font-['Inter']">{name}</h2>
        <p className=" text-neutral-500 text-base font-normal font-['Inter'] leading-relaxed">{recipe.length > 70 ? `${recipe.slice(0, 70)}...` : recipe}</p>
        <button
          onClick={handleAddToCart}
          className="mx-auto h-16 px-[30px] py-5 bg-[#e8e8e8] rounded-lg border-b-2 border-[#bb8405] justify-start items-start gap-2.5 inline-flex uppercase text-[#bb8405] text-xl font-medium font-['Inter'] mb-8 hover:bg-[#1F2937] transition-all ease-in-out duration-200 mt-4">
          Add To Cart
        </button>
        {/* <button
          onClick={handleAddToCart}
          className="mx-auto h-16 px-[30px] py-5 bg-[#e8e8e8] rounded-lg border-b-2 border-[#bb8405] justify-start items-start gap-2.5 inline-flex uppercase text-[#bb8405] text-xl font-medium font-['Inter'] mb-8 hover:bg-[#1F2937] transition-all ease-in-out duration-200 mt-4">
          {item.category}
        </button> */}
      </section>

    </div>
  )
}

export default Cart;