import { BrowserRouter, Switch } from "react-router-dom";
import { routeHome } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  LayDanhSachPhim,
  LayThongTinHeThongRap,
} from "./containers/HomeTemplate/Home/modules/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LayThongTinHeThongRap());
    dispatch(LayDanhSachPhim());
  });

  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>{showLayoutHome(routeHome)}</Switch>
    </BrowserRouter>
  );
}

export default App;
