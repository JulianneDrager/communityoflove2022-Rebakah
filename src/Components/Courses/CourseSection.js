import React from "react";
import Gallery from "./Gallery";
import CourseStyle from "./Course.module.css";
import DividerLeft from "../Divider/DividerLeft";
import CoursesFlat from "./CoursesFlat";
import { useMediaQuery } from "@mui/material";


const OutreachGallery = () => {
  const h1Style = CourseStyle.h1Style;
  const matchsLg = useMediaQuery("(min-width:765px)")
  return (
    <>
        <div id="courses">
          <h1 className={h1Style}>Foreign Language Online Courses</h1>
        </div>
        { !matchsLg && <div style={{display:"block"}}><Gallery /></div>}
        { matchsLg && <CoursesFlat/>}

        <DividerLeft/>
    </>
  );
};
export default OutreachGallery;
