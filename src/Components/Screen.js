import React from "react";
import { Container } from "react-bootstrap";
import Nav from "./ui/Nav";
import NavDesktop from "./ui/NavDesktop"
import Header from "./Community of Love/Header/Header";
import About from "./Community of Love/About/About";
import OutreachPartOne from "./Community of Love/Outreach/OutreachPartOne";
import MissionStatement from "./Community of Love/Mission Statement/QuickLinks";
import CourseSection from "./Community of Love/Courses/CourseSection";
import ComingSoon from "./Community of Love/ComingSoon/ComingSoon";
import Testimony from "./Community of Love/Testimonials/Testimony";
import Cafe from "./Community of Love/Cafe/Cafe";
import Contact from "./Community of Love/Contact/Contact";
import useMediaQuery from "./UseMediaQuery";


const Screen = () => {
const matchesLg = useMediaQuery("(min-width:765px)");

  return (
    <>
      <Container className="p-0">
       { !matchesLg && <Nav />}
       { matchesLg && <NavDesktop />}
        <Header />
        <div style={{ marginTop: "-5rem" }}>
          <About />
          <div style={{ marginTop: "-5rem" }}>
            <OutreachPartOne />
            <MissionStatement />
            <Testimony />
            <ComingSoon />
            <CourseSection/>
            <Cafe/>
            <Contact/>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Screen;
