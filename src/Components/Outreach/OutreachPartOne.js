import React from "react";
import OutreachStyle from "./OutreachStyle.module.css";
import { Card, Row, Col, Image } from "react-bootstrap";
import TextImg1 from "../../images/mobile-outreach/acts-scripture-mobile.jpg";
import TextImg1Desktop from "../../images/desktop-outreach/acts-scripture.jpg";
import Image1 from "../../images/mobile-outreach/img-1.jpg";
import TextImg2 from "../../images/mobile-outreach/joshua-scripture-mobile.jpg";
import TextImg2Desktop from "../../images/desktop-outreach/joshua-scripture.jpg";
import Image2 from "../../images/mobile-outreach/img-2.jpg"
import TriangleLeft from "../Divider/TriangleLeft"
import TriangleRight from "../Divider/TriangleRight";
import { useMediaQuery } from "@mui/material";

const PasterSection = () => {
  const TextImg1Style = OutreachStyle.TextImg1Style;
  const Image1Style = OutreachStyle.Image1Style;
  const TextImg2Style = OutreachStyle.TextImg1Style;
  const Image2Style = OutreachStyle.Image2Style;
  const rowWrapper = OutreachStyle.rowWrapper;
  const cardWrapper = OutreachStyle.cardWrapper;
  const divWrapper = OutreachStyle.divWrapper;
  const divWrapper2 = OutreachStyle.divWrapper2;
  const matchesLg = useMediaQuery("(max-width: 765px)");



  return (
    <>
      <div id="outreach">
        <Card className={cardWrapper} >
          <Row className={rowWrapper} md={12}>
            <div className={divWrapper}>
            <Col xs={12} md={6}>
              {matchesLg &&
              <Image className={TextImg1Style} src={TextImg1} alt="acts-scripture"/> 
              }
              {!matchesLg && 
              <Image className={TextImg1Style} src={TextImg1Desktop} alt="acts-scripture"/>
              }
            </Col>
            <TriangleLeft />
            <Col xs={12}  md={6}>
              <Image className={Image1Style} src={Image1} alt="img-1"/>
            </Col>
            </div>
          </Row>
          <Row className={rowWrapper}>
          <div  className={divWrapper2}>
            <Col xs={12}  md={6}>
              { matchesLg &&
              <Image className={TextImg2Style} src={TextImg2} alt="joshua scripture"/>
              }
              {!matchesLg &&
              <Image className={TextImg2Style} src={TextImg2Desktop} alt="joshua scripture"/>
              }
            </Col>
            <TriangleRight/>
            <Col xs={12}  md={6}>
              <Image className={Image2Style} src={Image2} alt="img-2"/>
            </Col>
            </div>
          </Row>
        </Card>
      </div>
    </>
  );
};
export default PasterSection;
