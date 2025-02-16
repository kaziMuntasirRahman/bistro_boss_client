import { RiDeleteBin5Fill } from "react-icons/ri";
import SectionHead from "../../../Components/dashboard/SectionHead";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            refetch();
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Item can't be removed right now.",
                footer: 'Please try again later.'
              });
            }
          }
          )
      }
    });
  }

  return (
    <div>
      <SectionHead title="My Cart" heading="Wanna Add More?" />
      <Helmet>
        <title>Dashboard  | My Cart</title>
      </Helmet>
      <div className="overflow-x-auto">
        <section className="bg-white p-12">
          <div className="w-full flex justify-between mb-9">
            <div className="text-[#151515] text-[32px] font-bold font-['Cinzel']">Total orders: <strong>{cart.length}</strong></div>
            <div className="text-[#151515] text-[32px] font-bold font-['Cinzel']">total price: <strong>${totalPrice}</strong></div>
            <button className="btn h-[55px] px-[17px] py-3.5 bg-[#d1a054] rounded-lg justify-start items-start gap-2.5 inline-flex text-white text-xl font-bold font-['Cinzel'] hover:text-black">Pay</button>
          </div>
          <table className="table">
            {/* table head */}
            <thead>
              <tr className="text-lg text-center text-white font-semibold font-['Inter'] h-[72px] bg-[#d1a054] rounded-full py-6">
                <th>#</th>
                <th className="">{"Item Image".toUpperCase()}</th>
                <th className="">{"Item Name".toUpperCase()}</th>
                <th className="">{"Price".toUpperCase()}</th>
                <th className="">{"Action".toUpperCase()}</th>
              </tr>
            </thead>

            {/* table body */}
            <tbody>
              {
                cart.map((item, index) =>
                  <tr key={index} className={`${index % 2 == 0 ? "bg-yellow-50" : "bg-red-50/0"} hover:bg-yellow-100 transition-all duration-300 ease-in-out text-center text-lg`}>
                    <th>{index + 1}</th>
                    <td><img src={item.image} className="size-[75px] object-cover rounded-sm mx-auto" alt="" /></td>
                    <td><p className="text-neutral-500 font-['Inter']">{item.name}</p></td>
                    <td><p className="text-neutral-500 font-['Inter']">${item.price}</p></td>
                    <td className=" h-full ">
                      <button onClick={() => handleDelete(item._id)} className="flex items-center justify-center h-full w-full">
                        <RiDeleteBin5Fill className="btn border-none text-2xl text-white bg-red-800 hover:text-red-800 size-[50px] p-3 rounded-lg" />
                      </button>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </section>
      </div>
    </div >
  );
};

export default MyCart;