import Axios from "axios";

export default Axios.create({
  baseURL: "http://hfskicks.com",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
