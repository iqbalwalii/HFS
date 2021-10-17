import React from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  ListGroup,
  OverlayTrigger,
  Popover,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Trash, PencilFill, PencilSquare } from "react-bootstrap-icons";
import Image from "next/image";
import blog from "../../styles/Blogger.module.css";
const blogger = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" style={{ background: "#ec7171", color: "#fff" }}>
        Are You sure
      </Popover.Header>
      <Popover.Body>
        All Content for this Post will be deleted <br />
        <i>(This Action cannot be undone)</i>
        <div className={blog.pop}>
          <ButtonGroup aria-label="are you sure">
            <Button variant="danger">Yes</Button>
            <Button variant="success">No</Button>
          </ButtonGroup>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <>
      <Row className={blog.main}>
        <Col XS={12} md={3} className={blog.left}>
          <div className={blog.profile}>
            <Image src="/assets/images/guy.gif" width="90px" height="90px" />
            <h6 className={blog.username}>Iqbalwali</h6>
            <p>Iqbalwali786@gmail.com</p>
          </div>
          <ul>
            <li>
              <Link href="blogger/create">
                <a>Create Post</a>
              </Link>
            </li>
            <li>Logout</li>
          </ul>
        </Col>
        <Col xs={12} md={8} className={blog.right}>
          <div className={blog.posts}>
            <h3 className="text-center">
              <span style={{ color: "#5BD1E6" }}>Iqbalwali's</span> Latest Posts
            </h3>
            <ListGroup>
              <ListGroup.Item className={blog.item}>
                A Thirsty Crow
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <OverlayTrigger
                      trigger="click"
                      placement="left"
                      overlay={popover}
                    >
                      <Trash color="red" />
                    </OverlayTrigger>
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                Monkey and the Cap Seller
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                Rabbit and The Tortoise
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                Rabbit and The Tortoise
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                Rabbit and The Tortoise
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                Rabbit and The Tortoise
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                Rabbit and The Tortoise
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                Marry and the Lamb
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                The Grapes are Sour
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={blog.item}>
                Kurkure and TEDHE MEDHE
                <div className="">
                  <PencilFill style={{ marginRight: "10px" }} />
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover}
                  >
                    <Trash color="red" />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
      <Link href="blogger/create">
        <a>
          <div className={blog.popup}>
            <PencilSquare color="#fff" size={24} />
          </div>
        </a>
      </Link>
    </>
  );
};

export default blogger;
