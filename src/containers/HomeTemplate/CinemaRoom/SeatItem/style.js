import { makeStyles } from "@material-ui/core/styles";
// import background from "../../../img/cool-background.png";
export const useStyles = makeStyles((theme) => ({
  seatItem: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  seatStandard: {
    height: "1.2rem",
    width: "1.5rem",
    margin: "auto",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    color: "#eeeeee",
    marginBottom: "0.3rem",
    cursor: "pointer",
  },
  emptySeat: {
    backgroundColor: "#393e46",
  },
  checkedSeat: {
    backgroundColor: "#00adb5",
  },
  bookedSeat: {
    backgroundColor: "#696969",
  },
}));
