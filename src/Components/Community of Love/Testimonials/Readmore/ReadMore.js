import React, { useContext, useState } from "react";
import testimonyData from "./TestimonyData";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Accordion, Button } from "react-bootstrap";
import TestimonyCard from "./TestimonyCard";
import { Container } from "react-bootstrap";
import Nav from "../../../ui/Nav";
import ReadMoreStyle from "./css/ReadMoreStyle.module.css";

const ReadMore = () => {
  const mainConStyle = ReadMoreStyle.mainConStyle;
  const headContainer = ReadMoreStyle.headContainer;
  const pStyle = ReadMoreStyle.pStyle;
  const headContainerh1 = ReadMoreStyle.headContainerh1;
  const cardsConStyle = ReadMoreStyle.cardsConStyle;
  const testimonialheader = ReadMoreStyle.testimonialheader;
  const gradientWrapper = ReadMoreStyle.gradientWrapper;
  const secondaryMainContainer = ReadMoreStyle.secondaryMainContainer;
  const btn = ReadMoreStyle.btn;
  const boldText = ReadMoreStyle.boldText;

  // ----------------------------------------------------------------
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <button
        type="button"
        style={{ display: isCurrentEventKey ? "none" : "inline" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  };
  // -----------------------------------------------------------------

  // State to keep track of the start index for slicing the array
  const [startIndex, setStartIndex] = useState(0);

  const cards = testimonyData.map((card) => {
    return <TestimonyCard key={card.id} {...card} />;
  });

  // shows more cards at index of 3 start point from data JSON
  const getNextCards = () => {
    return testimonyData
      .slice(startIndex, startIndex + 3)
      .map((card) => <TestimonyCard key={card.id} {...card} />);
  };

  const handleReadMore = () => {
    // Increase the start index for the next set of cards
    setStartIndex(startIndex + 3);
  };

  return (
    <Container>
      <Nav />
      <div className={mainConStyle}>
        <div className={gradientWrapper}>
          <div className={secondaryMainContainer}>
            <header className={testimonialheader}>
              <img src="" alt="" />
            </header>
            <div className={headContainer}>
              <h1 className={headContainerh1}>
                Taste and See <br />
                <b className={boldText}>The Lord Is Good</b>
              </h1>
              <hr />
              <p className={pStyle}>
                Psalm 22:22 "I will praise you to all my brothers, I will stand
                up before the congregation and testify of the wonderful things
                you have done.
              </p>
            </div>
            <div className={cardsConStyle}>
              {cards[0]}
              {cards[1]}
              {cards[2]}

              <Accordion defaultActiveKey="0" alwaysOpen={false}>
                <ContextAwareToggle eventKey="1">
                  <Button onClick={handleReadMore} className={btn}>
                    Read More
                  </Button>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                  <div className={cardsConStyle}>{getNextCards()}</div>
                </Accordion.Collapse>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReadMore;
