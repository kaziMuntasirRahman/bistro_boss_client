import { RiDeleteBin5Fill } from "react-icons/ri";
import SectionHead from "../../../Components/dashboard/SectionHead";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // // State to store the total price
    // const [totalPrice, setTotalPrice] = useState(0);

    // useEffect(() => {
    //   // Calculate total price whenever cart changes
    //   const price = cart.reduce((sum, item) => sum + item.price, 0);
    //   setTotalPrice(price);
    // }, [cart]);


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
                position: "top-start",
                title: "Deleted!",
                text: "The Items has been removed.",
                icon: "success",
                timer: 1000,
                showCloseButton: false,
                showConfirmButton: false
              });
            } else {
              Swal.fire({
                // position: "top-end",
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
        <title>Dashboard | My Cart</title>
      </Helmet>
      <div className="overflow-x-auto">
        <section className="bg-white p-12">
          <div className="w-full flex justify-between mb-9">
            <div className="text-[#151515] text-[32px] font-bold font-['Cinzel']">Total orders: <strong>{cart.length}</strong></div>
            <div className="text-[#151515] text-[32px] font-['Cinzel']">
              total price: <span className="font-bold">${totalPrice}</span>
            </div>
            <button className="btn h-[55px] px-[17px] py-3.5 bg-[#d1a054] rounded-lg justify-start items-start gap-2.5 inline-flex text-white text-xl font-bold font-['Cinzel'] hover:text-black">Pay</button>
          </div>
          <table className="table">
            {/* table head */}
            <thead>
              <tr className="text-lg text-center text-white font-semibold font-['Inter'] h-[72px] bg-[#d1a054] py-6">
                <th className="rounded-tl-[15px]">#</th>
                <th className="">{"Item Image".toUpperCase()}</th>
                <th className="">{"Item Name".toUpperCase()}</th>
                <th className="">{"Price".toUpperCase()}</th>
                <th className="rounded-tr-[15px]">{"Action".toUpperCase()}</th>
              </tr>
            </thead>

            {/* table body */}
            <tbody>
              {/* item showcase */}
              {
                cart.map((item, index) =>
                  <tr key={index} className={`${index % 2 == 0 ? "bg-yellow-500/15" : "bg-yellow-500/0"} hover:bg-[#d1a054] hover:text-white transition-all duration-300 ease-in-out text-center text-lg`}>
                    <th>{index + 1}</th>
                    <td><img src={item.image} className="size-[75px] object-cover rounded-md mx-auto" alt="" /></td>
                    <td><p className="font-['Inter']">{item.name}</p></td>
                    <td><p className="font-['Inter']">${item.price}</p></td>
                    <td className=" h-full ">
                      <button onClick={() => handleDelete(item._id)} className="flex items-center justify-center h-full w-full">
                        <RiDeleteBin5Fill className="btn border-none text-2xl text-white bg-red-800 hover:text-red-800 size-[50px] p-3 rounded-lg" />
                      </button>
                    </td>
                  </tr>
                )}
              {/* show message if the cart is empty */}
              {
                !cart.length ?
                  <tr className="">
                    <td colSpan={5} className="text-[#151515] text-[32px] font-medium font-['Cinzel'] text-center py-28">Your Cart is Empty.&nbsp;
                      <Link to='/shop' className="btn-link">Add Item Now.</Link>
                    </td>
                  </tr>
                  :
                  <tr className="">
                    <td colSpan={5} className="text-2xl font-medium font-['Cinzel'] text-center pt-14">
                      <Link to='/shop' className="btn-link">Add more item</Link>
                    </td>
                  </tr>
              }
            </tbody>
          </table>
        </section>
      </div>
    </div >
  );
};

export default MyCart;