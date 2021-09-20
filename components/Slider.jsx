import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider from "../styles/Slider.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 25000000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{ height: "100vh" }}
      >
        <SwiperSlide>
          <div className="HeroCard"></div>
        </SwiperSlide>
        <SwiperSlide>
          <video
            loop=""
            autoplay=""
            muted=""
            playsinline=""
            data-desktop="https://player.vimeo.com/external/599825504.hd.mp4?s=05452c22a91f4dcf424d174eb3da187d9e8a3029&amp;profile_id=175"
            data-mobile="https://player.vimeo.com/external/600203431.sd.mp4?s=8616b1b45700c4e64edb079df3e6ba3aff427658&amp;profile_id=165"
            id="video2"
            class="vanilla-lazyload loaded"
            data-was-processed="true"
            src="https://player.vimeo.com/external/599825504.hd.mp4?s=05452c22a91f4dcf424d174eb3da187d9e8a3029&amp;profile_id=175"
          ></video>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
