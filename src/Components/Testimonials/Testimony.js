import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import quote from "../../images/mobile-testimony/quote.png";
import TestimonyStyle from "./TestimonayStyle.module.css";
import DividerTestimony from "../Divider/DividerTestimony";
import GalleryTestimony from "./GalleryTestimony";

const Testimony = () => {
  const rowStyle = TestimonyStyle.rowStyle;
  const h1Title = TestimonyStyle.h1Title;
  const quoteStyle = TestimonyStyle.quoteStyle;
  const dividerDisplay = TestimonyStyle.dividerDisplay;

  return (
    <>
      <div className={dividerDisplay}><DividerTestimony /></div>
      <Row className={rowStyle}>
        <Col md={12}>
          <h1 className={h1Title}>Testimonies</h1>
          <Image className={quoteStyle} src={quote} alt="quote" />
         <GalleryTestimony/>
        </Col>
      </Row>
    </>
  );
};
export default Testimony;
