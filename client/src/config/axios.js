import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:2020/",
    headers: {
      'Content-Type': 'application/json',
    },
  }); 

  
export default Axios;