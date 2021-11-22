import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import account from "../styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";
const Profile = () => {
  return (
    <Container>
      <Row>
        <h2 className="text-center">MY ACCOUNT</h2>
      </Row>
      <Row className="my-3">
        <Col sm={10} md={3}>
          <div className={account.left}>
            <div className={account.details}>
              <Image
                src="/assets/images/male.svg"
                width="50px"
                height="50px"
                alt="profile picture"
              />
              <h4 className="m-0 text-center">IQBAL WALI</h4>
              <p className="text-center">iqbalwali420@gmail.com</p>
              <div className="d-flex justify-content-center">
                <Link href="/user/update">
                  <a>
                    <Button variant="dark">Edit</Button>
                  </a>
                </Link>
              </div>
            </div>
            <h6 className="mt-5">YOUR ADDRESS</h6>
            <ul className={account.orders}>
              <li>NEW COLONY</li>
              <li>RATHPORA</li>
              <li>SRINAGAR</li>
              <li>JAMMU AND KASHMIR</li>
              <li>190002</li>
            </ul>
          </div>
        </Col>
        <Col sm={10} md={{ span: 6, offset: 2 }}>
          <div className={account.right}>
            <h5 className="mt-5">YOUR ORDERS</h5>
            <ol className={account.orders}>
              <li>Nike Kwazi M20 pro</li>
              <li>23 Kwazi M20 pro</li>
              <li>12 Kwazi M20 pro</li>
              <li>Nike Kwazi M20 pro</li>
            </ol>
            <div className="d-flex justify-content-center">
              <Link href="/user/orders">
                <a>
                  <Button variant="dark">My Orders</Button>
                </a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
