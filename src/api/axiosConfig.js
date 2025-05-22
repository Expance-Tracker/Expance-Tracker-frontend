import axios from "axios";

const instance = axios.create({
  baseURL: "https://expance-tracker-backend-9zu7.onrender.com/",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
