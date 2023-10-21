import React from "react";
import One from "../../../../images/mobile-courses/spanish-icon.png";
import { Button } from "react-bootstrap";
import CourseStyle from "../css/Course.module.css";

const Spanish = () => {
  const galleryCard = CourseStyle.galleryCard;
  const gallerySlideTitle = CourseStyle.gallerySlideTitle;
  const galleryParagraph = CourseStyle.galleryParagraph;
  const divWrapper = CourseStyle.divWrapper;
  const imgSize = CourseStyle.imgSize;
  const btn = CourseStyle.btn;
  return (
    <>
    <div className={divWrapper}>
      <h6 className={gallerySlideTitle}>SPANISH</h6>
      <img className={imgSize} src={One} alt="" />
      <div className={galleryCard}>
        {/* <div className={skyLineBlue}></div> */}
        <p className={galleryParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <Button className={btn} href="/1">
        BUY COURSE
        </Button>
      </div>
      </div>
    </>
  );
};
export default Spanish;
