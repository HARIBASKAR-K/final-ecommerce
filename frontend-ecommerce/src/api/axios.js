import axios from "axios";

const API = axios.create({
  baseURL: "https://final-ecommerce-m1h5.onrender.com/api",
  withCredentials: true
});

export default API;