import React from "react";
import { Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import SlideFiveStyle from "../css/SlideFive.module.css";
import CourseStyle from "../../Courses/css/Course.module.css";

const SlideTwo = () => {
  const galleryCardGive = SlideFiveStyle.galleryCardGive;
  const FamilyTitle = SlideFiveStyle.FamilyTitle;
  const imgSharonBack = SlideFiveStyle.imgSharonBack;
  const titleContainer = SlideFiveStyle.titleContainer;
  const titleWrapper = SlideFiveStyle.titleWrapper;
  const cardGradient = SlideFiveStyle.cardGradient;
  const subTitle = SlideFiveStyle.subTitle;
  const btn = CourseStyle.btn;

  return (
    <div className={cardGradient}>
      <div className={imgSharonBack}>
        <div className={galleryCardGive}>
          <span className={subTitle}>Be a Blessing</span>
          <h6 className={FamilyTitle}>Today</h6>
          <div className={titleContainer}>
            <div className={titleWrapper}>
              <hr style={{ margin: ".5rem" }} />
            </div>
            <p>
              OUR MOTTO:
              <div>"NOBODY LEFT BEHIND"</div>
              <hr style={{ margin: ".5rem" }} />
              <div>OUR MISSION</div> To Encourage, Inspire, and Motivate
              communities from Seniors to the babies with leadership and
              empowerment skills.  Our company believes that everyone has a
              purpose and will be committed to help people to embrace their
              purpose through support and empowerment.
            </p>
          </div>
          {/* <Button className={btn} href="/tmp/communityoflove2022.com/#give">
            SUPPORT TODAY
          </Button> */}
        </div>
      </div>
    </div>
  );
};
export default SlideTwo;
