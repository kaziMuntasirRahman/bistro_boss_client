import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000/',
  // headers: { authorization: `bearer ${localStorage.getItem('access-token')}` },
  timeout: 5000
})

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem('access-token');
    // console.log('request stopped by interceptor...');
    config.headers.authorization = `bearer ${token}`;
    // config.headers= { authorization: `bearer ${localStorage.getItem('access-token')}` };
    console.log("config", config)
    return config;
  }, (error) => {
    // do something with request error
    return Promise.reject(error)
  })

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use((response) => {
    return response
  }, (error) => {
    return Promise.reject(error)
  })



  return axiosSecure;
}
export default useAxiosSecure;