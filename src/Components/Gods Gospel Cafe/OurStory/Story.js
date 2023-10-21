import React from "react";
import { Image } from "react-bootstrap";
import OurStoryStyle from "./css/OurStoryStyle.module.css";
import Divider from "../Divider/Divider";
import OurStoryImage from "../../../ggcf-images/desktop-our-story/desktop-cross-and-hands-our-story.jpg";
import OurStory768 from "../../../ggcf-images/mobile-our-story/mobile-cross-and-hands-our-story-768.jpg"
import StoryContent from "./StoryContentMobile";
import StoryVideo from "./StoryVideo.js";
import StoryDesktop from "./StoryDesktop";
import WhatWeDo from "../What We Do/WhatWeDo";
import { useMediaQuery } from "@mui/material";

const Story = () => {
  const ourStoryContent = OurStoryStyle.ourStoryContent;
  const matchedMaxWidth765 = useMediaQuery("(min-width: 765px)");
  const matchedMaxWidth1022 = useMediaQuery("(min-width: 1022px)");

  return (
    <>
      <Divider />
      {/* mobile view */}
      {!matchedMaxWidth1022 && (
        <>
          <div id="our-story">
         { !matchedMaxWidth765 && <Image src={OurStoryImage} style={{width:"100%", height:"100"}} />}
           { matchedMaxWidth765 && <Image src={OurStory768} style={{width:"100%", height:"100"}} />}
          </div>
          <div className={ourStoryContent}>
            <StoryContent />
            <StoryVideo />
          </div>
        </>
      )}
      {/* desktop view */}
      {matchedMaxWidth1022 && <StoryDesktop />}
      {matchedMaxWidth1022 && <WhatWeDo />}
    </>
  );
};
export default Story;
