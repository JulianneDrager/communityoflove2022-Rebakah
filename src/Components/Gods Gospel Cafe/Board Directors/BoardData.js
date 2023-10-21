import goldDivider from "../../../ggcf-images/mobile-board/mobile-gold-divider-board.png";
import whiteDivider from "../../../ggcf-images/mobile-board/mobile-white-divider-board.png";
import cardStyle from "./css/card.module.css"

const pStyle = cardStyle.pStyle
const biancaStyle = cardStyle.biancaStyle
const boardCardData = [
  {
    id: 1,
    title: (
      <>
        <p className={pStyle}>PRESIDENT</p>
      </>
    ),
    name: (
      <>
        <p className={biancaStyle}>Bianca Faith Johnson J.D</p>
        <img
          style={{ width: "100%", height: "auto", margin: "-2.5rem 0 0 0" }}
          src={goldDivider}
          alt="divider"
        />
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        <p>VICE PRESIDENT</p>
      </>
    ),
    name: (
      <>
        <p>Debra Miller</p>
        <img
          style={{ width: "100%", height: "auto", margin: "-2.5rem 0 0 0" }}
          src={whiteDivider}
          alt="divider"
        />
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        <p>TREASURER</p>
      </>
    ),
    name: (
      <>
        <p>Brandi Carter</p>
        <img
          style={{ width: "100%", height: "auto", margin: "-2.5rem 0 0 0" }}
          src={whiteDivider}
          alt="divider"
        />
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        <p>TRUSTEE</p>
      </>
    ),
    name: (
      <>
        <p>Jermell Griffin</p>
        <img
          style={{ width: "100%", height: "auto", margin: "-2.5rem 0 0 0" }}
          src={whiteDivider}
          alt="divider"
        />
      </>
    ),
  },
  {
    id: 5,
    title: (
      <>
        <p>BOARD ADVISOR</p>
      </>
    ),
    name: (
      <>
        <p>Bonnie Weaver</p>
        <img
          style={{ width: "100%", height: "auto", margin: "-2.5rem 0 0 0" }}
          src={whiteDivider}
          alt="divider"
        />
      </>
    ),
  },
  {
    id: 6,
    title: (
      <>
        <p>SECRETARY</p>
      </>
    ),
    name: (
      <>
        <p>Kiana Newell</p>
        <img
          style={{ width: "100%", height: "auto", margin: "-2.5rem 0 0 0" }}
          src={whiteDivider}
          alt="silver-divider"
        />
      </>
    ),
  },
];
export default boardCardData;
