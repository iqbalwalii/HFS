import Axios from "axios";

export default Axios.create({
  baseURL: "https://www.hfskicks.com",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
