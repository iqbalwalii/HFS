import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider from "../styles/Slider.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Mousewheel, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Mousewheel, Pagination]);

export default function App() {
  const address =
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80";
  return (
    <>
      <Swiper
        autoHeight={true}
        direction={"vertical"}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 25000000,
          disableOnInteraction: false,
        }}
        className={slider.main}
      >
        <SwiperSlide>
          <div
            className={slider.HeroCard}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            }}
          >
            <div className={slider.info}>
              <h1>NEW ARRIVALS</h1>
              <button className={slider.btnCard}>SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={slider.HeroCard}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1533681018184-68bd1d883b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80)",
            }}
          >
            <div className={slider.info}>
              <h1>NIKE STORE</h1>
              <button className={slider.btnCard}>SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={slider.HeroCard}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600185365778-7875a359b924?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80)",
            }}
          >
            <div className={slider.info}>
              <h1>TRENDING</h1>
              <button className={slider.btnCard}>SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={slider.HeroCard}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1556048219-bb6978360b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)",
            }}
          >
            <div className={slider.info}>
              <h1>CLEARANCE SALE</h1>
              <button className={slider.btnCard}>SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
