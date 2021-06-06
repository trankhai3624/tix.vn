import Admin from "../containers/AdminTemplate/DashBoard";
import PhongChieuFilm from "../containers/HomeTemplate/CinemaRoom";
import ChiTiet from "../containers/HomeTemplate/Detail";
import Home from "../containers/HomeTemplate/Home";
import MemberShip from "../containers/HomeTemplate/MemberShip";
import Sign from "../containers/HomeTemplate/Sign/index";
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
  {
    exact: true,
    path: "/sign",
    component: Sign,
  },
];

export const routeAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: Admin,
  },
];
