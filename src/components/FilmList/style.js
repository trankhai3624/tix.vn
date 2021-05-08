import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    height: "26px",
  },
  tabs: {
    backgroundColor: "#fff",
    // boxShadow: "none",
    height: "26px",
  },
  tab: {
    color: "#222831",
    fontSize: "24px",
    textTransform: "capitalize",
    // lineHeight: "1rem",
    height: "26px",
    "&:hover": {
      fontSize: "26px",
      //   lineHeight: "1rem",
      height: "26px",
      transition: "all 0.4s",
    },
  },
  container: {
    marginTop: "2rem",
    backgroundColor: "#E74C3C",
    // width: "100%",
    // height: "42rem",
    position: "relative",
    // overflow: "hidden",
    "& .slick-slider": {
      left: "-25px",
      width: "105%",
      display: "flex",
    },
  },
  arrow: { fontSize: "1rem" },
  arrowLeft: {},
  arrowRight: {},
  dots: {},
  filmItem: {
    margin: "0.5rem",
    padding: "0.5rem",
    width: "100%",
    height: "275px",
  },
}));

export default useStyles;
