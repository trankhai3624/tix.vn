import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#E74C3C",
    // width: "100%",
    height: "42rem",
    position: "relative",
    overflow: "hidden",
    "& .slick-slider": { left: "-25px", width: "105%" },
  },
  img: {
    width: "100%",
    height: "42rem",
    // position: "absolute",
    top: 0,
    left: 0,
  },
  // dotsClass: {
  //   textDecoration: "none",
  // },
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
