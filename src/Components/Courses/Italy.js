import React from "react";
import One from "../../images/mobile-courses/italy-icon.png";
import { Button } from "react-bootstrap";
import CourseStyle from "./Course.module.css";

const Italy = () => {
  const galleryCard = CourseStyle.galleryCard;
  const gallerySlideTitle = CourseStyle.gallerySlideTitle;
  const galleryParagraph = CourseStyle.galleryParagraph;
  const divWrapper = CourseStyle.divWrapper;
  const imgSize = CourseStyle.imgSize;
  const btn = CourseStyle.btn;
  return (
    <>
      <div className={divWrapper}>
        <h6 className={gallerySlideTitle}>ITALIAN</h6>
        <img className={imgSize} src={One} alt="" />
        <div className={galleryCard}>
          {/* <div className={skyLineBlue}></div> */}
          <p className={galleryParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <Button className={btn} href="/3">
            BUY COURSE
          </Button>
        </div>
      </div>
    </>
  );
};
export default Italy;
