import { makeStyles } from "@material-ui/core/styles";
import { Autorenew } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    height: "80px",
    transform: "translateY(-45%)",

    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
  },
  gridItem: {
    position: "relative",
  },
  gridItem_Button: {
    position: "absolute",
    transform: "translateY(50%)",
    color: "#00adb5",
    backgroundColor: "#222831",
    fontWeight: 500,
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {},
}));
export default useStyles;
