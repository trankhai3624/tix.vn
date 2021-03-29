import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    backgroundColor: "#1d232b",
  },
  brand: {
    fontSize: "1.5rem",
    letterSpacing: "5px",
    color: "#FFFFFF",
    "&::after": {
      content: '"Khai"',
      backgroundColor: "",
      color: "#02cdce",
      fontWeight: "bold",
    },
    "&:hover": {
      color: "#FFFFFF",
      textDecoration: "none",
    },
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
  },
  menuItem: {
    position: "relative",

    "&::after": {
      position: "absolute",
      left: 0,
      bottom: "0",
      content: "''",
      width: "0%",
      height: "0.13rem",
      // backgroundColor: "#fff",
      "&::hover": {
        backgroundColor: "#02cdce",
        width: "100%",
        transition: "all 0.4s",
      },
    },
    "&:hover": {
      color: "#02cdce",

      transition: "all 0.4s",
    },
  },
  // menuItem:hover::after: { width: "100%" },
}));
