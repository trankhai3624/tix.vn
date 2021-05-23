import { makeStyles } from "@material-ui/core/styles";

import background from "../../../img/cool-background.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  containerBackground: {
    // height: "42rem",
    // backgroundColor: "#393e46",
    // backgroundImage: background,
    width: "100%",
    padding: 0,
    margin: 0,
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  containerItem: {
    width: "100%",
    // height: "42rem",
    // margin: 0,
    padding: 0,
    color: "#fff",
  },
  itemTop: {
    // marginTop: "8%",
    // marginTop: "1rem",
    paddingTop: "8%",
  },
  filmPoster: {
    maxWidth: "220px",
    width: "215px",
    height: "318px",
    margin: 0,
    padding: 0,
  },
  imgPoster: {
    borderRadius: "4px",

    width: "100%",
    height: "100%",
  },
  filmInfo: {
    justifyContent: "center",
    alignItems: "left",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    lineHeight: 1.42857143,
    color: "#e9e9e9",
  },
  showingDay: {
    fontSize: "20px",
    fontWeight: 500,
  },
  ageTag: {
    // backgroundColor: "",
    marginRight: "6px",
    marginTop: "6px",
    backgroundColor: "#00ac4d",
    color: "#fff",
    fontSize: "25px",
    borderRadius: "4px",
    padding: "0 5px",
    display: "inline-block",
    textAlign: "center",
    minWidth: "33px",
  },
  filmName: {
    fontSize: "32px",
    fontWeight: 700,
  },
  filmDuration: { fontSize: "20px", color: "#e9e9e9" },
  filmRating: {
    justifyContent: "center",
    alignItems: "left",
    display: "flex",
    flexDirection: "column",
  },
  itemBot: {
    marginTop: "10%",
    height: "35rem",
  },
  colorPrimary: {
    backgroundColor: "transparent",
    textAlign: "center",
    alignItems: "center",
  },
  elevation4: { boxShadow: "none" },
  textColorInherit: {
    color: "#00f3ff",
    backgroundColor: "#393e46",
    fontSize: "1rem",
    fontWeight: 600,
  },

  infoTitle: {
    padding: 0,
    margin: 0,
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
  },
  infoDetail: {
    color: "#e9e9e9",
    fontSize: "1rem",
  },
}));
