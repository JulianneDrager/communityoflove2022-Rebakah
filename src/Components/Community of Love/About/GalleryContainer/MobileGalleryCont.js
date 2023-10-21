import React from "react";
import AboutStyle from "../css/AboutStyle.module.css";
import GalleryAbout from "../GalleryAbout";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const title = AboutStyle.title;
  const subTitle = AboutStyle.subTitle;
  const divider = AboutStyle.divider;
  const titleImgWrapper = AboutStyle.titleImgWrapper;

  const matchesLg = useMediaQuery("(max-width: 765px)");

  return (
    <>
      {/* mobile view */}
      {matchesLg && (
        <div className={titleImgWrapper}>
          <p className={title}>Welcome to the Community</p>
          <p className={subTitle}>
            Where <em>you </em>matter
          </p>
          <div className={divider}></div>
          <GalleryAbout />
        </div>
      )}

      {/* desktop view */}
      {!matchesLg && (
        <div className={titleImgWrapper}>
          <GalleryAbout />
        </div>
      )}
    </>
  );
};
export default About;
