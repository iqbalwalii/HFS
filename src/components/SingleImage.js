import React, { useState, useEffect } from "react";
import single from "../styles/SingleImage.module.css";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";
const SingleImage = ({ productImages }) => {
  const [source, setSource] = useState(productImages[0]);
  useEffect(() => {
    setSource(productImages[0]);
  }, [productImages]);

  return (
    <div>
      <div>
        <ReactImageMagnify
          style={{ zIndex: "1" }}
          {...{
            smallImage: {
              isFluidWidth: false,
              src: source,
              width: 400,
              height: 400,
            },
            largeImage: {
              src: source,
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
                height="100px"
                width="100px"
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
