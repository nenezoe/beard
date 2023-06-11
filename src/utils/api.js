import axios from "axios";

export default axios.create({
  baseURL: "https://breadmen-api.onrender.com/api",
  // baseURL: "https://beardmen-store-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
