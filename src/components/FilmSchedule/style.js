import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "red",
    width: "100%",
    // height: "25rem",
    marginTop: "2rem",
    justifyContent: "center",
    [theme.breakpoints.down(678)]: { display: "none" },
  },
  column: {
    border: "1px solid #eeeeee",
    height: 500,
    overflow: "hidden",
    // padding: "0 0.5rem",
  },
  columnList: {
    height: 500,
    overflow: "hidden",
    overflowY: "auto",
    width: "100%",
  },
  borderBottom: { borderBottom: "1px solid #d1d1d1", borderBottomWidth: "50%" },
  heThongRapItem: {
    // margin: ".5rem ",
    opacity: "0.5",
    width: "100%",
    // padding: ".5rem",
    justifyContent: "center",
  },

  logoImgHeThongRap: {
    width: "50px",
    height: "50px",
    // margin: ".5rem 0",
  },
  cumRapItem: {
    height: "76px",
    width: "264px",
  },
  active: {
    opacity: 1,
  },
  deActive: { opacity: 0.3 },
  button: {
    backgroundColor: "#00adb5",
    color: "#222831",
    margin: "0.5rem 1rem",
    "&:hover": {
      backgroundColor: "#00dee8",
    },
  },
}));

export default useStyles;
