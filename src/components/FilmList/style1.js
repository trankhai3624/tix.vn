import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "1rem auto",
    width: "75%",
    padding: 0,
    // "& .slick-slider": {
    //   left: "-25px",
    //   display: "flex",
    // },
    position: "relative",
  },

  filmItem: {
    position: "relative",
    "&:hover": {
      "&:hover $playIcon": {
        opacity: "1",
        transform: "scale(1.12)",
        transition: "all 1s",
      },
    },
  },

  playIcon: {
    transition: "all 0.1s linear",
    opacity: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "7rem",
    color: "#00adb5",
    "&:hover": {
      cursor: "pointer",
    },
  },

  arrow: {
    fontSize: "3rem",
    position: "relative",
    "& .MuiSvgIcon-root": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "3rem",
    },
    margin: "0 1rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down(1000)]: {
      overflow: "hidden",
    },
  },

  arrowLeft: {
    position: "absolute",
    left: "-5%",
    top: "50%",
  },

  arrowRight: {
    position: "absolute",
    right: "-2%",
    top: "50%",
  },

  dots: {},

  filmImg: {
    padding: "0.5rem",
    width: "100%",
    height: "400px",
    borderRadius: "1rem",
  },
}));

export default useStyles;
