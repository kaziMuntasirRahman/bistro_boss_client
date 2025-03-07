import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCustomer = () => {
  const { user } = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()

  const { data: userInfo = null, isPending: isUserInfoLoading = false } = useQuery({
    queryKey: [user?.email, 'userInfo'],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/${user.email}`)
        console.log(`User is  ${(res.data.role === 'admin') ? 'an Admin' : 'a Customer'}`);
        return res.data;
      } else
        return null;
    }
  })

  return [userInfo, isUserInfoLoading];

};

export default useCustomer;



// chatgpt debugged code

// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

// const useCustomer = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const { data: userInfo = {}, isLoading: isUserInfoLoading = false } = useQuery({
//     queryKey: [user?.email, 'userInfo'],
//     queryFn: async () => {
//       if (user?.email) {
//         const res = await axiosSecure.get(`/users/${user.email}`);
//         console.log(`User is  ${(res.data.role === 'admin') ? 'an Admin' : 'a Customer'}`);
//         return res.data;
//       }
//       return {}; // Return an empty object if user email is not available
//     },
//     enabled: !!user?.email // Prevent query if user email is not available
//   });

//   return [userInfo, isUserInfoLoading];
// };

// export default useCustomer;
