import React from "react";
import { Row, Image } from "react-bootstrap";
import OurStoryStyle from "./css/OurStoryStyle.module.css";
import WhatWeDoTitleImage from "../../../ggcf-images/mobile-our-story/mobile-what-we-do-about.png";

const StoryVideo = () => {
  const imgSize = OurStoryStyle.imgSize;

  const videoSrc =
    "https://video.wixstatic.com/video/827100_1c21f9cd949d4d009420750031b6492a/480p/mp4/file.mp4";

  return (
    <>
      <Row style={{ padding: "0", margin: "0" }}>
        <div style={{textAlign:"center"}}>
        <Image src={WhatWeDoTitleImage} className={imgSize} />
        </div>
        <div >
          <video
            width="100%"
            height="auto"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
            style={{ margin: "0 0 1rem 0" }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Row>
    </>
  );
};
export default StoryVideo;
