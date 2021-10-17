import React from "react";
import ReactPlayer from "react-player";
import video from "../styles/Video.module.css";
import { Button } from "react-bootstrap";

const VideoCard = () => {
  return (
    <div className={video.cardMain}>
      <div className={video.details}>
        <h4>NIKE STORE</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Button variant="dark">SHOP NOW</Button>
      </div>
      <ReactPlayer
        url="/assets/videos/guy.mp4"
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
        onContextMenu={(e) => e.preventDefault()}
        width="100vw"
        height="100%"
        loop={true}
        playing={true}
        autoReady={true}
        muted={true}
        controls={false}
      />
    </div>
  );
};

export default VideoCard;
