import { makeStyles } from "@material-ui/core/styles";
import background from "../../../img/cool-background.png";
export const useStyles = makeStyles((theme) => ({
  fullContainer: {
    // height: "42rem",
    width: "100%",
    backgroundColor: "#393e46",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  fluidContainer: {
    height: "100%",
    backgroundColor: "#eeeeee",
    padding: 0,
    // margin: 0,
  },
  pageTitle: {
    backgroundColor: "#393e46",
    // color: "#00adb5",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    flexDirection: "column",
  },
  title: {
    color: "#00f3ff",
    fontSize: "1rem",
    fontWeight: 600,
    backgroundColor: "#393e46",
    letterSpacing: "4px",
    lineHeight: "2.5rem",
  },
  topContent: {
    backgroundColor: "#00adb5",

    marginBottom: "2rem",
  },
  filmInfo: {
    padding: 0,
    margin: 0,
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
    letterSpacing: "3px",
    color: "#222831",
    marginLeft: "1rem",
  },
  mainContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
  },
  screen: { margin: "auto", width: "80%", marginBottom: "3rem" },
  seatsContainer: {
    width: "70%",
    margin: "auto",
  },
  seatItem: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0.3rem",
  },

  tutorial: {
    marginTop: "3rem",
    marginBottom: "2rem",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  emptySeat: {
    backgroundColor: "#393e46",
    height: "1.2rem",
    width: "1.5rem",
    margin: "auto",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  checkedSeat: {
    backgroundColor: "#00adb5",
    height: "1.2rem",
    width: "1.5rem",
    margin: "auto",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  bookedSeat: {
    backgroundColor: "red",
    height: "1.2rem",
    width: "1.5rem",
    margin: "auto",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    color: "#eeeeee",
  },
  // **PHIM INFO
  bottomContent: {
    marginTop: "1rem",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  tongHop: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",

    margin: "1rem 0",
  },
  tongHopPhim: {
    textAlign: "center",
  },
  img: { width: "74px", height: "108px" },
  tongHopRap: {},
  tongHopVe: {},
  infoTitle: { color: "#fff", fontSize: "1rem", fontWeight: 600 },
}));
