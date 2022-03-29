import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container, Button, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
// import data from "../utils/data";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Keyboard,
  Mousewheel,
  Pagination,
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel]);

export default function Card(props) {
  console.log("Props", props);
  const { products } = props;
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
        {products?.map((prod) => (
          <SwiperSlide key={prod.id}>
            <ProductCard product={prod} key={prod.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export async function getServerSideProps() {
  const { data } = await Axios.get("/api/products");

  if (data && data.status == 200) {
    return {
      props: {
        products: data.products,
      },
    };
  }
}
