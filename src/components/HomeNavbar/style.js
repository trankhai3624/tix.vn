import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    backgroundColor: "#1d232b",
    // width: "100%",
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
    "&:hover": {
      color: "#02cdce",

      transition: "all 0.4s",
    },
  },
}));
