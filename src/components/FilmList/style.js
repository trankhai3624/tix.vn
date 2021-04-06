import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    ".Mui-selected": {
      color: "#00adb5 !important",
      fontSize: "26px",
    },
  },

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
}));

export default useStyles;
