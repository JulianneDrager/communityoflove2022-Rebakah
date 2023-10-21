import React from "react";
import { Col, Button, Image, Row } from "react-bootstrap";
import Title from "../../../ggcf-images/desktop-our-story/desktop-our-story.png";
import OurStoryStyle from "./css/OurStoryStyle.module.css";

const StoryContent = () => {
  const btn = OurStoryStyle.btn;
  const divWrapper = OurStoryStyle.divWrapper;
  const pStyle = OurStoryStyle.pStyle;
  const hrStyle = OurStoryStyle.hrStyle;
  const titleStyle = OurStoryStyle.titleStyle;

  return (
    <>
      <Col>
        <div className={divWrapper}>
          <Image src={Title} className={titleStyle} />
          <p className={pStyle}>
            God’s Gospel Cafe Network is a non-profit organization humbly
            providing an atmosphere filled with Christ, love, and compassion.
            With a variety of products and services served to all organizations,
            and communities of every age.
            <hr className={hrStyle} /> We meet the needs of every individual by
            providing spiritual guidance, emotional support, financial
            assistance, volunteering aid, and physical aid. Supplying resources,
            materials, and, refreshments to customers of all ages, with
            exceptional customer service.
          </p>
          <Row>
            <Col>
              <Button className={btn}>CASHAPP: $BLSSHRN</Button>
            </Col>
            <Col>
              <Button className={btn}>ZELLE: 347.461.5185</Button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
};
export default StoryContent;
