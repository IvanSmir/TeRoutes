import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://reqres.in/api/"
})

export default axiosInstance;