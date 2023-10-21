import React from "react";
import { Row, Image } from "react-bootstrap";
import BoardStyle from "./css/BoardDirectorStyle.module.css";
import BoardData from "./BoardData";
import BoardCard from "./BoardCard";
import BoardTitle from "../../../ggcf-images/mobile-board/mobile-title-board.png";
import BoardTitleDesktop from "../../../ggcf-images/desktop-board/desktop-board-title.png";
import { useMediaQuery } from "@mui/material";

const BoardDirector = () => {
  const ourStoryContent = BoardStyle.ourStoryContent;
  const rowBoardStyle = BoardStyle.rowBoardStyle;
  const rowWrapper = BoardStyle.rowWrapper;
  const mainWrapper = BoardStyle.mainWrapper;
  const boardTitleStyle = BoardStyle.boardTitleStyle;
  const goldBar = BoardStyle.goldBar;
  const matches595MinWidth = useMediaQuery("(min-width: 595px)");
  const matchedLg = useMediaQuery("(min-width: 765px)");

  const cards = BoardData.map((card) => {
    return <BoardCard key={card.id} {...card} />;
  });

  return (
    <>
      <div className={goldBar}></div>
      <div className={mainWrapper}>
        <div className={rowWrapper}>
          {/* for mobile view up to 595px to show title on 2 lines */}
          {matches595MinWidth && (
            <Image src={BoardTitleDesktop} className={boardTitleStyle} />
          )}

          {/* for desktop view from 595px and higher to show title on 1 line*/}
          {!matches595MinWidth && (
            <Image src={BoardTitle} className={boardTitleStyle} />
          )}

          {/* for mobile view to stack cards */}
          {!matchedLg && (
            <>
              <Row id="board" className={rowBoardStyle}>
                {cards}
              </Row>
            </>
          )}

          {/* for desktop view to show cards via css grid*/}
          {matchedLg && (
            <Row id="board" className={rowBoardStyle}>
              {cards[4]}
              {cards[0]}
              {cards[2]}
              {cards[5]}
              {cards[1]}
              {cards[3]}
            </Row>
          )}
          <Row className={ourStoryContent}></Row>
        </div>
      </div>
    </>
  );
};
export default BoardDirector;
