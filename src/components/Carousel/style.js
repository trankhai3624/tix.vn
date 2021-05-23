import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "#E74C3C",
    // width: "100%",
    height: "42rem",
    position: "relative",
    overflow: "hidden",
    "& .slick-slider": { left: "-25px", width: "105%" },
  },
  carouselItem: {
    position: "relative",
    width: "100%",
    height: "42rem",
    "&:hover": {
      "&:hover $playIcon": {
        opacity: "1",
        // backgroundColor: "rgba(236,70,248,0.9)",
        transform: "scale(1.12)",
        transition: "all 1s",
      },
    },
  },
  img: {
    width: "100%",
    height: "42rem",
    position: "absolute",
    top: 0,
    left: 0,
    "&:hover": {},
  },
  playIcon: {
    transition: "all 0.1s linear",
    // borderRadius: "0 0 10px 10px",
    opacity: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "7rem",
    // zIndex: 100,
    color: "#00adb5",
    "&:hover": {
      cursor: "pointer",
    },
  },
  dots: {
    bottom: "60px",
    transition: "all 0.3s",
    "& li.slick-active button::before": {
      color: "#02cdce !important",
      transform: "scale(1.2)",
      transition: "all 0.3s",
      opacity: 1,
    },
    "& li": {
      "&:hover": {
        transform: "scale(1.2)",
        transition: "all 0.3s",
      },
      "& button::before": {
        fontSize: theme.typography.pxToRem(11),
        color: "#eeeeee",
        opacity: 1,
      },
    },
  },
  arrow: {
    zIndex: 2,
    "& .MuiSvgIcon-root": {
      width: "2.5rem",
      height: "2.5rem",
      fontSize: "1rem",
      margin: "1rem",
      color: "rgb(0, 173, 181,0.5)",
      cursor: "pointer",
      "&:hover": {
        transition: "all .4s",
        color: "rgb(0, 173, 181)",
      },
    },
  },
  arrowLeft: { position: "absolute", top: "40%", left: 0 },
  arrowRight: { position: "absolute", top: "40%", right: "25px" },
}));
