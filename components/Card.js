import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container, Button, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Keyboard,
  Mousewheel,
  Pagination,
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel]);

export default function App() {
  return (
    <Container style={{ marginBottom: "3rem" }}>
      <Swiper
        navigation={true}
        pagination={false}
        mousewheel={true}
        spaceBetween={30}
        keyboard={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          390: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        style={{ width: "100%", margin: "2rem 0" }}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
      <Row>
        <Col
          xs={{ span: 2, offset: 8 }}
          md={{ span: 4, offset: 4 }}
          className="d-flex justify-content-center"
        >
          <Button variant="dark">More</Button>
        </Col>
      </Row>
    </Container>
  );
}
