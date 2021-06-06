import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "1rem 0",
    margin: 0,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // height: "35rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backGround: {
    width: "100%",
    height: "35rem",
  },
  content: {
    margin: "auto",
    width: "70%",
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "xx-large",
    margin: "1rem 0",
  },
  text: {
    fontSize: "large",
    margin: "1rem 0",
  },
  button: {
    backgroundColor: "#222831",
    color: "#00adb5",
    padding: "10px 20px",
    fontSize: "large",
    fontWeight: 700,
    border: "none",
    borderRadius: "4px",
    textDecoration: "none",
    letterSpacing: "2px",
    margin: "1rem 0",
    "&:hover": {
      color: "#fff",
      transition: "all 0.4s",
      textDecoration: "none",
    },
  },
  downloadLink: {
    color: "#fff",
    textDecoration: "underline",
    "&:hover": { color: "#fff", textDecoration: "underline" },
  },

  slider: {
    width: "100%",
  },
  img: { width: "100%", height: "100%" },
  right: {
    position: "relative",
    padding: "0",
  },
  phoneImg: {
    padding: "0 28%",
    width: "100%",
  },
  sliderScreen: {
    position: "absolute",
    padding: "1.5% 29.3% 0 29.3%",
    top: "0",
    left: "0",
    width: "100%",

    "& .slick-list": {
      borderRadius: "20px",
    },
  },
}));
export default useStyles;
