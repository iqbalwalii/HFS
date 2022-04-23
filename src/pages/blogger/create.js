import React from "react";
import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
import { createBlog, fileUpload } from "../../services/blogService";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Axios from "../../utils/axios";
const Create = ({ userData }) => {
  const [url, setUrl] = React.useState("");
  let initialState = {
    title: "",
    description: [],
    author: "",
    images: [url],
  };
  console.log(initialState);
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm(initialState);
  const onSubmit = (data) => {
    data.images = [url];
    data.author = userData.name;
    createBlog(data, userData.token).then((res) => {
      console.log(res);
      router.push("/blogger");
    });
  };
  async function onUploadHandler(e) {
    console.log("called upload handler", e.target.id ? e.target.id : e.target);
    const file = e.target.files[0];
    let bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      const { data } = await Axios.post("/api/admin/upload", bodyFormData, {
        "Content-Type": "multipart/form-data",
      }).then((res) => {
        setUrl(res.data.result.secure_url);
        console.log(data.result.secure_url);
      });
    } catch (error) {
      console.log("error upload", error);
      // dispatch({ type: 'UPLOAD_FAILED', payload: error.message });

      // enqueueSnackbar(error.message, { variant: 'error' });
    }
  }
  return (
    <Container>
      <h3 className="text-center">CREATE YOUR BLOG POST</h3>
      <Form name="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="text" className="mb-3">
          <Form.Control
            type="text"
            placeholder="title"
            {...register("title")}
            name="title"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            type="file"
            placeholder="image"
            name="image"
            onChange={onUploadHandler}
          />
        </Form.Group>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Your content (* required)"
          className="mt-2"
        >
          <Form.Control
            as="textarea"
            placeholder="Your content (*required)"
            style={{ height: "300px", marginBottom: "1rem" }}
            {...register("description[0]")}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Paragraph 2 (Optional)"
        >
          <Form.Control
            as="textarea"
            placeholder="Your content (*Optional)"
            {...register("description[1]")}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Paragraph 3 (Optional)"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ marginBottom: "1rem" }}
            {...register("description[2]")}
          />
        </FloatingLabel>
        <div className="d-grid mt-2 mb-3">
          <Button variant="dark" type="submit">
            POST
          </Button>
        </div>
      </Form>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  userData: state.userData,
});
export default connect(mapStateToProps)(Create);
