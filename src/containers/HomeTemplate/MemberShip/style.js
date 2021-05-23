import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    // height: "45rem",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  containerAccountInfo: {
    // position: "absolute",
    // left: 0,
    // width: "100%",
    left: 0,
  },
  tabpanel: {
    width: "100%",
  },
}));
