import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://mong-nodejs-app-demo.herokuapp.com/",
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
