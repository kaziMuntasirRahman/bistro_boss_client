import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true)
  const axiosPublic = useAxiosPublic()
  // console.log(menu)

  // useEffect(() => {
  //   axiosPublic.get('/menu')
  //     .then(res => res.data)
  //     .then(data => setMenu(data))
  //     .catch(err => console.log(err))
  //     .finally(setLoading(false))
  // }, []);

  const {data: menu=[], isLoading: isMenuLoading, refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async ()=>{
      const res = await axiosPublic.get('/menu')
      return res.data;
    }
  })

  return [menu, isMenuLoading, refetch]
};

export default useMenu;