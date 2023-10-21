import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import OurStoryStyle from "./css/OurStoryStyle.module.css";
import StoryContentDesktop from "./StoryContentDesktop";
import HandsImage from "../../../ggcf-images/desktop-our-story/desktop-hands-our-story.png";

const StoryDesktop = () => {
  const rowBackground = OurStoryStyle.rowBackground;
  const handsImgStyle = OurStoryStyle.handsImgStyle;
  const handsImgCol = OurStoryStyle.handsImgCol;

  return (
    <>
      <Row id="our-story" className={rowBackground}>
        <Row>
          <Col></Col>
          <Col className={handsImgCol}>
            <Image src={HandsImage} className={handsImgStyle} />
          </Col>
        </Row>
        <Col md={1}></Col>
        <Col md={1}></Col>
        <Col>
          <StoryContentDesktop />
        </Col>
      </Row>
    </>
  );
};
export default StoryDesktop;
