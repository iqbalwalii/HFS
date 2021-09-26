import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { EnvelopeFill, PersonFill } from "react-bootstrap-icons";
const contact = () => {
  return (
    <Container className="my-4">
      <form action="">
        <Row>
          <Col sm={10} md={{ span: 8, offset: 4 }}>
            <h3 className="text-center">CONTACT US</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={{ span: 8, offset: 4 }}>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon1">
                <PersonFill />
              </InputGroup.Text>
              <FormControl
                placeholder="name"
                aria-label="name"
                aria-describedby="basic-addon1"
                requried="requried"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={{ span: 8, offset: 4 }}>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon1">
                <EnvelopeFill />
              </InputGroup.Text>
              <FormControl
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                requried="requried"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={{ span: 8, offset: 4 }}>
            <InputGroup className="mb-4">
              <InputGroup.Text>Your Message</InputGroup.Text>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={{ span: 8, offset: 4 }}>
            <div className="d-grid gap-2 mb-5">
              <Button variant="dark" size="lg">
                SUBMIT
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default contact;
