import React from "react";
import { Button } from "react-bootstrap";
import One from "../../../../images/mobile-courses/swahili-icon.png";
import CourseStyle from "../css/Course.module.css";

const Swahili = () => {
  const galleryCard = CourseStyle.galleryCard;
  const gallerySlideTitle = CourseStyle.gallerySlideTitle;
  const galleryParagraph = CourseStyle.galleryParagraph;
  const divWrapper = CourseStyle.divWrapper;
  const imgSize = CourseStyle.imgSize;
  const btn = CourseStyle.btn;
  const btnPadding = CourseStyle.btnPadding;
  return (
    <>
      <div className={divWrapper}>
        <h6 className={gallerySlideTitle}>SWAHILI</h6>
        <img className={imgSize} src={One} alt="" />
        <div className={galleryCard}>
          {/* <div className={skyLineBlue}></div> */}
          <p className={galleryParagraph}>
            Receive a lifetime learning/reference guide emailed to you and a
            certificate of completion at the end of the 6-week course.
          </p>
          <Button
            className={[btn, btnPadding]}
            href="/3"
          >
            COMING SOON
          </Button>
          {/* <hr style={{margin:"2px 0 0 0"}}/>
          <Button className={btn} href="/1">
            7-8PM COURSE
          </Button> */}
        </div>
      </div>
    </>
  );
};
export default Swahili;
