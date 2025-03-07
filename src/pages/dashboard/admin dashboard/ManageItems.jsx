import { Helmet } from "react-helmet-async";
import SectionHead from "../../../Components/dashboard/SectionHead";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegEdit, FaUsers } from "react-icons/fa";
import { RiAdminFill, RiDeleteBin5Fill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure()
  const [menu, isMenuLoading, refetch] = useMenu()


  const handleDelete = (item) => {
    const { name, _id } = item;
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: name + " will be removed",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${_id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                title: "Deleted!",
                text: "The user has been removed.",
                icon: "success",
                timer: 1000,
                showCloseButton: false,
                showConfirmButton: false
              });
              refetch();
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
      <Helmet>
        <title>Dashboard | Manage Items</title>
      </Helmet>
      <SectionHead title="Hurry Up!!" heading="Manage All Items" />
      <div className="overflow-x-auto">
        <section className="bg-white p-12">
          <div className="text-[#151515] text-[32px] font-bold font-['Cinzel'] mb-9">Total Item: <strong>{menu.length}</strong></div>
          <table className="table">
            {/* table head */}
            <thead>
              <tr className="text-lg text-center text-white font-semibold font-['Inter'] h-[72px] bg-[#d1a054] py-6">
                <th className="rounded-tl-[15px]">#</th>
                <th className="">{"Item Image".toUpperCase()}</th>
                <th className="">{"Item Name".toUpperCase()}</th>
                <th className="">{"Price".toUpperCase()}</th>
                <th colSpan={2} className="rounded-tr-[15px] text-center">{"Actions".toUpperCase()}</th>
              </tr>
            </thead>

            {/* table body */}
            <tbody>
              {/* item showcase */}
              {
                menu.map((item, index) =>
                  <tr key={index} className={`${index % 2 == 0 ? "bg-yellow-200/30" : "bg-yellow-200/0"} hover:bg-[#d1a054] hover:text-white transition-colors duration-300 ease-in-out text-center text-lg`}>
                    <th>{index + 1}</th>
                    {/* <td><p className="font-['Inter']">item image</p></td> */}
                    <td><img src={item.image} className="size-[75px] object-cover mx-auto" /></td>
                    <td><p className="font-['Inter']">{item.name}</p></td>
                    <td><p className="font-['Inter']">${item.price}</p></td>
                    <td className="text-3xl flex items-center justify-center my-2">
                      <button className="bg-[#d1a054] p-2 text-white rounded-sm tooltip tooltip-left" data-tip="update">
                        <FaRegEdit />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item)} className="flex items-center justify-center h-full w-full tooltip tooltip-left" data-tip="delete">
                        <RiDeleteBin5Fill className="btn border-none text-2xl text-white bg-red-800 hover:text-red-800 size-[50px] p-3 rounded-lg" />
                      </button>
                    </td>
                  </tr>
                )}
              {/* show message if the cart is empty */}
              {
                !menu.length ?
                  <tr className="">
                    <td colSpan={5} className="text-[#151515] text-[32px] font-medium font-['Cinzel'] text-center py-28">No Recipe is Available.&nbsp;
                      <Link to='/dashboard/admin/add-items' className="btn-link">Add Recipe Now.</Link>
                    </td>
                  </tr>
                  :
                  <tr className="">
                    <td colSpan={5} className="text-2xl font-medium font-['Cinzel'] text-center pt-14">
                      <Link to='/dashboard/admin/add-items' className="btn-link">Add more Recipe.</Link>
                    </td>
                  </tr>
              }
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default ManageItems;