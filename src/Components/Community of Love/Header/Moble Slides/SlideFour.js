import React from "react";
import { Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import SlideFourStyle from "../css/SlideFour.module.css";
import CourseStyle from "../../Courses/css/Course.module.css"

const SlideTwo = () => {
  const galleryCardCourse = SlideFourStyle.galleryCardCourse;
  const FamilyTitle = SlideFourStyle.FamilyTitle;
  const imgSharonBack = SlideFourStyle.imgSharonBack;
  const titleContainer = SlideFourStyle.titleContainer;
  const titleWrapper = SlideFourStyle.titleWrapper;
  const subTitle = SlideFourStyle.subTitle;
  const btn = CourseStyle.btn;
  const btnColor = CourseStyle.btnColor;

  return (

      <div className={imgSharonBack}>
        <div className={galleryCardCourse}>
          <span className={subTitle}>Foreign Language</span>
          <h6 className={FamilyTitle}>Online COurses</h6>
          <div className={titleContainer}>
            <div className={titleWrapper}>
              {/* <p className={subTitle}>
                The Branch Of Zion What Feeds The Community
              </p> */}
              <hr style={{ margin: "1rem" }} />
            </div>
            {/* <p className={subTitle}>Built on the foundation of Matthew 5:13</p> */}
            <p>
              As you broaden your minds and travel, it is helpful to work with
              an interpersonal language coach to help you understand the basics
              of the language(s) of interest. Perhaps you work in a school and
              want to be able to interact with students and parents. There are
              so many reasons why learning another language is profitable.
            </p>
          </div>
          <Button className={btn} href="/1">
            12 - 1PM COURSE
          </Button>
          <hr style={{ margin: "5px 0 4px 0" }} />
          <Button className={[btn, btnColor]} href="/1">
            7 - 8PM COURSE
          </Button>
        </div>
      </div>
  );
};
export default SlideTwo;
