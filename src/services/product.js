import axios from "../utils/axios";

export async function getProducts() {
  const { data } = await axios.get("/api/products");
  console.log(data);
  return data;
}
