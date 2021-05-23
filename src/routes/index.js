import Admin from "../containers/AdminTemplate/DashBoard";
import PhongChieuFilm from "../containers/HomeTemplate/CinemaRoom";
import ChiTiet from "../containers/HomeTemplate/Detail";
import Home from "../containers/HomeTemplate/Home";
import MemberShip from "../containers/HomeTemplate/MemberShip";
import SignIn from "../containers/HomeTemplate/SignIn";
import SignUp from "../containers/HomeTemplate/SignUp";
export const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },

  {
    exact: true,
    path: "/phim/:maPhim",
    component: ChiTiet,
  },
  {
    exact: true,
    path: "/datve/:maLichChieu",
    component: PhongChieuFilm,
  },
  {
    exact: true,
    path: "/membership",
    component: MemberShip,
  },
];

export const routeAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: Admin,
  },
];
