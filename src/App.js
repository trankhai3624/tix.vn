import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routeAdmin, routeHome } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  LayDanhSachPhim,
  LayThongTinHeThongRap,
} from "./containers/HomeTemplate/Home/modules/actions";
import PageNotFound from "./containers/PageNotFound/index";
import SignIn from "./containers/HomeTemplate/SignIn";
import SignUp from "./containers/HomeTemplate/SignUp";
import Auth from "./containers/Auth";
import AdminTemplate from "./containers/AdminTemplate";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LayThongTinHeThongRap());
    dispatch(LayDanhSachPhim());
  }, []);

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
  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
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
      <Switch>
        {showLayoutHome(routeHome)}
        {/* <Route path="/signin" component={SignIn} /> */}
        {showLayoutAdmin(routeAdmin)}
        <Route path="/auth" component={Auth} />

        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
