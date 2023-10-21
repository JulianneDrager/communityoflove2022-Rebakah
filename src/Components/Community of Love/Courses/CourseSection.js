import React from "react";
import Gallery from "./Gallery";
import CourseStyle from "./css/Course.module.css";
import DividerLeft from "../Divider/DividerLeft";
import CoursesFlat from "./CoursesFlat";
import { useMediaQuery } from "@mui/material";


const OutreachGallery = () => {
  const h1Style = CourseStyle.h1Style;
  const matchesLg = useMediaQuery("(min-width:765px)")
  return (
    <>
        <div id="courses">
          <h1 className={h1Style}>Foreign Language Online Courses</h1>
        </div>
        {/* mobile view */}
        { !matchesLg && <div style={{display:"block"}}><Gallery /></div>}
        {/* desktop view - shows image not slide show */}
        { matchesLg && <CoursesFlat/>}

        <DividerLeft/>
    </>
  );
};
export default OutreachGallery;
