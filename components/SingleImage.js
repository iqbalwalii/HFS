import React, { useState } from "react";
import single from "../styles/SingleImage.module.css";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";
const SingleImage = () => {
  const [source, setSource] = useState("jordan.png");
  const values = {
    first: "jordan2.jpg",
    second: "3.jpg",
    third: "4.jpg",
    fourth: "5.jpg",
    fifth: "6.jpg",
  };
  const onClickHandler = (e) => {
    setSource(values[e.target.id]);
  };
  return (
    <div>
      <div>
        {/* <Image
          src={`/assets/images/shoes/${source}`}
          width="350px"
          height="350px"
        /> */}
        <ReactImageMagnify
          style={{ zIndex: "1" }}
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: `/assets/images/shoes/${source}`,
            },
            largeImage: {
              src: `/assets/images/shoes/${source}`,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
      {/* lllllllllllllll */}
      {/* lllllllllllllll */}
      {/* lllllllllllllll */}
      {/* lllllllllllllll */}
      <div className={single.side}>
        <div onClick={onClickHandler}>
          <Image
            src={`/assets/images/shoes/${values.first}`}
            height="150px"
            width="150px"
            id="first"
          />
        </div>
        <div onClick={onClickHandler}>
          <Image
            src={`/assets/images/shoes/${values.second}`}
            height="150px"
            width="150px"
            id="second"
          />
        </div>
        <div onClick={onClickHandler}>
          <Image
            src={`/assets/images/shoes/${values.third}`}
            height="150px"
            width="150px"
            id="third"
          />
        </div>
        <div onClick={onClickHandler}>
          <Image
            src={`/assets/images/shoes/${values.fourth}`}
            height="150px"
            width="150px"
            id="fourth"
          />
        </div>
        <div onClick={onClickHandler}>
          <Image
            src={`/assets/images/shoes/${values.fifth}`}
            height="150px"
            width="150px"
            id="fifth"
          />
        </div>
      </div>
      {/* lll */}
      {/* lll */}
      {/* lll */}
      {/* lll */}
    </div>
  );
};

export default SingleImage;
