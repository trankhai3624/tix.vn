import { makeStyles } from "@material-ui/core/styles";
// import { Autorenew } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    transform: "translateY(-45%)",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    width: "80%",
    padding: ".5rem 0",
    [theme.breakpoints.down(800)]: {
      display: "none",
    },
  },
  gridItem: {
    width: "100%",
    margin: "0 .5rem",
  },
  gridItem_Button: {
    color: "#00adb5",
    backgroundColor: "#222831",
    fontWeight: 500,
    width: "100%",
    marginTop: "1rem",
    [theme.breakpoints.down(1021)]: {
      marginTop: "0",
    },
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  submit: { width: "100%" },
}));
export default useStyles;
