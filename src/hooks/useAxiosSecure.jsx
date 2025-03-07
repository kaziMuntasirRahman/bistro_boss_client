import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000/',
  // headers: { authorization: `bearer ${localStorage.getItem('access-token')}` },
  timeout: 5000
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  //*****/ This request interceptor runs before each request is sent.
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      // console.log('request stopped by interceptor...');
      config.headers.authorization = `bearer ${token}`;
      // config.headers= { authorization: `bearer ${localStorage.getItem('access-token')}` };
      // console.log("config", config)
      return config;
    },
    (error) => {
      // do something with request error
      return Promise.reject(error)
    })

  // //*****/ This response interceptor runs after each response is received from the server.
  // axiosSecure.interceptors.response.use(
  //   (response) => {
  //     return response
  //   },
  //   async (error) => {
  //     const status = error.response.status;
  //     console.log("Error code in the interceptor: ", status);
  //     // intercepts 401 and 403 status
  //     if (status === 401 || status === 403) {
  //       await logOut();
  //       navigate('/login');
  //     }
  //     return Promise.reject(error)
  //   })



  return axiosSecure;
}
export default useAxiosSecure;