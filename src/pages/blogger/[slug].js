import React, { useEffect, useState } from "react";
import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
import { createBlog, fileUpload } from "../../services/blogService";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { getBlog } from "../../services/blogService";
import { useRouter } from "next/router";
const Create = ({ userData }) => {
  let initialState = {
    title: "",
    description: [],
    author: "",
    images: [],
  };
  const router = useRouter();
  const [state, setState] = useState(initialState);
  const { register, handleSubmit, errors } = useForm(initialState);
  const slug = router.query.slug;
  useEffect(() => {
    if (router.isReady) {
      getBlog(slug).then((res) => {
        setState(res.post);
        console.log("halay", res);
      });
    }
  }, [slug]);
  console.log(userData);
  const onSubmit = (data) => {
    const file = data.images[0][0];
    data.images[0] = file;
    data.author = userData.name;
    console.log(data);
    fileUpload(id, data, userData.token).then((res) => {
      router.push("/blogger");
    });
  };

  return (
    <Container>
      <h3 className="text-center">UPDATE YOUR BLOG POST</h3>
      <Form name="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="text" className="mb-3">
          <Form.Control
            type="text"
            placeholder={state ? state?.title : "title"}
            {...register("title")}
            name="title"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            type="file"
            placeholder="image"
            name="image"
            {...register("images[0]")}
          />
        </Form.Group>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Your content (* required)"
          className="mt-2"
        >
          <Form.Control
            as="textarea"
            placeholder={state ? state?.description[0] : "description"}
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
            placeholder={state ? state?.description[1] : "description"}
            {...register("description[1]")}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Paragraph 3 (Optional)"
        >
          <Form.Control
            as="textarea"
            placeholder={state ? state?.description[2] : "description"}
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
