import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#E74C3C",
    // width: "100%",
    height: "42rem",
    position: "relative",
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
    // bottom: "-2%",
    transition: "all 0.3s",
    "& li.slick-active button::before": {
      color: "#02cdce",
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
        color: "#1d232b",
        opacity: 1,
      },
    },
  },
}));
