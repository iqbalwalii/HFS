import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Cards from "../styles/Card.module.css";

// import Swiper core and required modules
import SwiperCore, { navigation, Keyboard, Mousewheel } from "swiper";

// install Swiper modules
SwiperCore.use([navigation, Keyboard, Mousewheel]);

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        mousewheel={true}
        spaceBetween={30}
        keyboard={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        style={{ width: "100%", margin: "2rem 0" }}
      >
        <SwiperSlide>
          <div className={Cards.main}>
            <div className={Cards.backdrop}></div>
            <Image
              src="/assets/images/shoes/jordan.png"
              width="200px"
              height="120px"
              className={Cards.productImg}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem quia quidem error! Culpa laboriosam
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Cards.main}>
            <div className={Cards.backdrop}></div>
            <Image
              src="/assets/images/shoes/jordan.png"
              width="200px"
              height="120px"
              className={Cards.productImg}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem quia quidem error! Culpa laboriosam
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Cards.main}>
            <div className={Cards.backdrop}></div>
            <Image
              src="/assets/images/shoes/jordan.png"
              width="200px"
              height="120px"
              className={Cards.productImg}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem quia quidem error! Culpa laboriosam
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Cards.main}>
            <div className={Cards.backdrop}></div>
            <Image
              src="/assets/images/shoes/jordan.png"
              width="200px"
              height="120px"
              className={Cards.productImg}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem quia quidem error! Culpa laboriosam
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Cards.main}>
            <div className={Cards.backdrop}></div>
            <Image
              src="/assets/images/shoes/jordan.png"
              width="200px"
              height="120px"
              className={Cards.productImg}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem quia quidem error! Culpa laboriosam
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Cards.main}>
            <div className={Cards.backdrop}></div>
            <Image
              src="/assets/images/shoes/jordan.png"
              width="200px"
              height="120px"
              className={Cards.productImg}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem quia quidem error! Culpa laboriosam
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Cards.main}>
            <div className={Cards.backdrop}></div>
            <Image
              src="/assets/images/shoes/jordan.png"
              width="200px"
              height="120px"
              className={Cards.productImg}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem quia quidem error! Culpa laboriosam
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Cards.main}>
            <div className={Cards.backdrop}></div>
            <Image
              src="/assets/images/shoes/jordan.png"
              width="200px"
              height="120px"
              className={Cards.productImg}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              autem quia quidem error! Culpa laboriosam
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
