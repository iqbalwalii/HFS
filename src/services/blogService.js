import Axios from "../utils/axios";

export async function getBlogs() {
  const { data } = await Axios.get("/api/admin/blog-posts");
  return data;
}
export async function getBlog(slug) {
  const { data } = await Axios.get(`/api/admin/blog-posts/${slug}`);
  return data;
}
export async function createBlog(input, token) {
  console.log(input);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data } = await Axios.post("/api/admin/blog-posts", input, config);
  return data;
}
export async function fileUpload(id, input, token) {
  let form = new FormData();
  form.set("images", input.images[0]);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data } = await Axios.put(`/api/admin/blog-posts/${id}`, form, config);
  return data;
}

export async function deleteBlog(id, token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data } = await Axios.delete(`/api/admin/blog-posts/${id}`, config);
  return data;
}
