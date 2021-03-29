import { BrowserRouter, Switch } from "react-router-dom";
import { routeHome } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";

function App() {
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
