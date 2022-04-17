import React, { useState } from "react";
import single from "../styles/SingleImage.module.css";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";
const SingleImage = ({ productImages }) => {
  console.log(productImages, "productimged");
  const [source, setSource] = useState(productImages[0]);

  return (
    <div>
      <div>
        <ReactImageMagnify
          style={{ zIndex: "1" }}
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: source,
            },
            largeImage: {
              src: source,
              // src: `/assets/images/shoes/${source}`,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
      <div className={single.side}>
        {productImages.map((imgUrl, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setSource(imgUrl);
              }}
            >
              <Image
                src={imgUrl}
                height="150px"
                width="150px"
                id={idx}
                alt="product image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleImage;
