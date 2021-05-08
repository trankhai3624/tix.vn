import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    // height: "28rem",
    backgroundColor: "#222",
    padding: "1rem 0",
    color: "#949494",
  },
  content: {
    // backgroundColor: "#fff",
    width: "80%",
    // height: "25rem",
    padding: "1rem 0",
    // textAlign: "center",
  },
  contentAbove: {
    borderBottom: "1px solid #4a4a4a",
    marginBottom: "1rem",
    paddingBottom: ".5rem",
  },
  title: { color: "#fff", fontSize: "80%", marginBottom: "0.5rem" },
  logo: {
    borderRadius: "50%",
    height: "30px",
    width: "30px",

    backgroundColor: "#fff",
    // marginRight: "1rem",
    margin: ".5rem 1.5rem .5rem 0",
  },
  app: {
    height: "30px",
    width: "auto",
    margin: "0 1.5rem 0 0.5rem",
  },

  companyLogo: { borderRadius: "8px", width: "80px", height: "37.65px" },
  infoMid: { padding: "0 1rem", lineHeight: 1.8 },
  infoTypo: { lineHeight: 1.8, fontSize: "12px", whiteSpace: "nowrap" },
  branch: { margin: 0, color: "#fff" },
  certificate: {
    width: "130px",
  },
  email: {
    color: "#02cdce",
    "&:hover": {
      textDecoration: "none",
      color: "#01DCDD",
      transition: "all 0.4s ",
    },
  },
}));
export default useStyles;
