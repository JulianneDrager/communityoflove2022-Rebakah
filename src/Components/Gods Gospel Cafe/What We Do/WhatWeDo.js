import React from "react";
import { Col, Image } from "react-bootstrap";
import WhatWeDoStyle from "./css/WhatWeDoStyle.module.css";
import WhatWeDoTitleImage from "../../../ggcf-images/mobile-our-story/mobile-what-we-do-about.png";

const WhatWeDo = () => {
  const rowBackground = WhatWeDoStyle.rowBackground;
  const imgSize = WhatWeDoStyle.imgSize;
  const videoSrc =
    "https://video.wixstatic.com/video/827100_1c21f9cd949d4d009420750031b6492a/480p/mp4/file.mp4";

  return (
    <>
      <div style={{margin:"2rem 0 0 0"}}>
        <Col className={rowBackground}>
          <div style={{ textAlign: "center" }}>
            <Image src={WhatWeDoTitleImage} className={imgSize} />
          </div>
          <div style={{ padding: " 0 0 5rem 0" }}>
            <video
              width="75%"
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
        </Col>
      </div>
    </>
  );
};
export default WhatWeDo;
