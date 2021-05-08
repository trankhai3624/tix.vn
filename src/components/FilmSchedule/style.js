import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& .MuiTab-wrapper": {
      width: "90px",
      height: "90px",
      padding: 0,
      margin: 0,
    },
    "& .MuiButtonBase-root": { width: "90px", height: "90px" },
  },

  logo: {
    width: "50px",
    height: "50px",
  },
}));

export default useStyles;
