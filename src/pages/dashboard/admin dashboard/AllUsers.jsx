import { RiAdminFill, RiDeleteBin5Fill } from "react-icons/ri";
import SectionHead from "../../../Components/dashboard/SectionHead";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AllUsers = () => {
  const { user } = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      // const res = await axiosSecure.get('/users', {
      //   headers: { authorization: `bearer ${localStorage.getItem('access-token')}` }
      // })
      const res = await axiosSecure.get('/users')
      return res.data;
    }
  })

  // console.log(users);

  const handleDelete = (user) => {
    const { email, _id } = user;
    Swal.fire({
      title: "Are you sure?",
      text: email + " will be removed",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${_id}`)
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
        <title>Dashboard | All Users</title>
      </Helmet>
      <SectionHead title="How Many??" heading="Manage All Users" />
      <div className="overflow-x-auto">
        <section className="bg-white p-12">
          <div className="w-full flex justify-between mb-9">
            <div className="text-[#151515] text-[32px] font-bold font-['Cinzel']">Total Users: <strong>{users.length}</strong></div>
            <button className="btn h-[55px] px-[17px] py-3.5 bg-[#d1a054] rounded-lg justify-start items-start gap-2.5 inline-flex text-white text-xl font-bold font-['Cinzel'] hover:text-black">Pay</button>
          </div>
          <table className="table">
            {/* table head */}
            <thead>
              <tr className="text-lg text-center text-white font-semibold font-['Inter'] h-[72px] bg-[#d1a054] py-6">
                <th className="rounded-tl-[15px]">#</th>
                <th className="">{"Name".toUpperCase()}</th>
                <th className="">{"Email".toUpperCase()}</th>
                <th className="">{"Role".toUpperCase()}</th>
                <th className="rounded-tr-[15px]">{"Action".toUpperCase()}</th>
              </tr>
            </thead>

            {/* table body */}
            <tbody>
              {/* item showcase */}
              {
                users.map((User, index) =>
                  <tr key={index} className={`${User.email === user.email? 'bg-cyan-200' : index % 2 == 0 ? "bg-yellow-200/30" : "bg-yellow-200/0"} hover:bg-yellow-200 transition-all duration-300 ease-in-out text-center text-lg`}>
                    <th>{index + 1}</th>
                    <td><p className="text-neutral-500 font-['Inter']">{User.name}</p></td>
                    <td><p className="text-neutral-500 font-['Inter']">{User.email}</p></td>
                    <td className="text-3xl flex items-center justify-center my-2">
                      {
                        User.role === 'admin' ?
                          <button className="tooltip tooltip-left" data-tip="Admin">
                            < RiAdminFill />
                          </button>
                          :
                          <button className="tooltip tooltip-left" data-tip="User">
                            <FaUsers />
                          </button>
                      }
                    </td>
                    <td>
                      <button onClick={() => handleDelete(User)} className="flex items-center justify-center h-full w-full">
                        <RiDeleteBin5Fill className="btn border-none text-2xl text-white bg-red-800 hover:text-red-800 size-[50px] p-3 rounded-lg" />
                      </button>
                    </td>
                  </tr>
                )}
              {/* show message if the cart is empty */}
              {
                !users.length &&
                <tr className="">
                  <td colSpan={5} className="text-[#151515] text-[32px] font-medium font-['Cinzel'] text-center py-28">No User is Present
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

export default AllUsers;