import React from "react";
import { Container } from "react-bootstrap";
import Nav from "./ui/Nav";
import NavDesktop from "./ui/NavDesktop"
import Header from "./Header/Header";
import About from "./About/About";
import OutreachPartOne from "./Outreach/OutreachPartOne";
import QuickLinks from "./QuickLinks/QuickLinks";
import CourseSection from "./Courses/CourseSection";
import ComingSoon from "./ComingSoon/ComingSoon";
import Testimony from "./Testimonials/Testimony";
import Cafe from "./Cafe/Cafe";
import Contact from "./Contact/Contact";
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
            <QuickLinks />
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
