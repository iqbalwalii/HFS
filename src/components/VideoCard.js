import React from "react";
import ReactPlayer from "react-player";
import video from "../styles/Video.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const VideoCard = () => {
	const router = useRouter();
	return (
		<div className={video.cardMain}>
			<div className={video.details}>
				<h4>NIKE STORE</h4>
				<p>Browse the Latest Sneakers.</p>
				<Button
					variant="dark"
					onClick={(e) => {
						router.push({
							pathname: "/shop",
							query: { brand: "nike" },
						});
					}}
				>
					SHOP NOW
				</Button>
			</div>
			<ReactPlayer
				url="/assets/videos/gay.mp4"
				config={{
					file: { attributes: { controlsList: "nodownload" } },
				}}
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
