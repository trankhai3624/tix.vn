import { makeStyles } from "@material-ui/core/styles";
import background from "../../../../../img/cool-background.png";
export const useStyles = makeStyles((theme) => ({
  icon: { textAlign: "center", cursor: "pointer" },
  tongHop: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    margin: "1rem 0",
    padding: "1rem 0",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  tongHopContent: {
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
  },
  img: { width: "74px", height: "108px" },
  tongHopRap: {},
  tongHopVe: {},
  infoTitle: { color: "#fff", fontSize: "1rem", fontWeight: 600 },
}));
