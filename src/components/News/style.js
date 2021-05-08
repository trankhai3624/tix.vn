import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "none",
  },
  container: {
    padding: 0,
  },
  typo: {
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    height: "1.5rem",
    color: "#fa5238",
    cursor: "pointer",
    margin: "1rem",
    fontWeight: 700,
    letterSpacing: "2px",
  },
  newsItem: {
    padding: "0.5rem",
  },
  img: {
    width: "100%",
    height: "15rem",
  },
  title: {
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: "1.5rem",
    // height: "3rem",
  },
  newsSmall: {
    display: "flex",
    cursor: "pointer",
  },
  imgSmall: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  titleSmall: { fontSize: ".5rem", height: "50px", overflow: "hidden" },
}));
export default useStyles;
