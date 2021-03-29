import Home from "../containers/HomeTemplate/Home";
import SignIn from "../containers/HomeTemplate/SignIn";
export const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/signin",
    component: SignIn,
  },
];
