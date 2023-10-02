import React from "react";
import { Container } from "react-bootstrap";
import Nav from "./ui/Nav";
import Header from "./Header/Header";
import About from "./About/About";
import OutreachPartOne from "./Outreach/OutreachPartOne";
import QuickLinks from "./QuickLinks/QuickLinks";
import CourseSection from "./Courses/CourseSection";
import ComingSoon from "./ComingSoon/ComingSoon";
import Testimony from "./Testimonials/Testimony";
import Cafe from "./Cafe/Cafe";
import Contact from "./Contact/Contact";


const Screen = () => {
  // const location = useLocation();

  // let showContactText;
  // if (location.pathname === "/conference") {
  // // if (location.pathname === "/tmp/jermainekee.com/conference") {
  //   showContactText = true;
  // } else {
  //   showContactText = false;
  // }

  return (
    <>
      <Container className="p-0">
        <Nav />
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
