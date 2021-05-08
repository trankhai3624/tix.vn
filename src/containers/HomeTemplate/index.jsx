import React from "react";
import { Route } from "react-router-dom";
import Carousel from "../../components/Carousel";
import FilmList from "../../components/FilmList/filmList";
import Footer from "../../components/Footer/footer";
// import Carousel from "../../components/Carousel";
import Rap from "../../components/FilmSchedule/Rap";
import Header from "../../components/HomeNavbar";
import MobileApp from "../../components/MobileApp";
import News from "../../components/News";
import FilmSelect from "../../components/Selector";
import Phim from "../../components/FilmSchedule/Phim";
import { useSelector } from "react-redux";
// import HomeReducer from "../HomeTemplate/Home/modules/actions";

function LayoutHome(props) {
  const loadingDanhSachPhim = useSelector(
    (state) => state.HomeReducer.loadingDanhSachPhim
  );
  const loadingHeThongRap = useSelector(
    (state) => state.HomeReducer.loadingHeThongRap
  );

  // const renderLoading = () => {
  //   return <p>...loading</p>;
  // };

  if (loadingDanhSachPhim || loadingHeThongRap) return <p>Loading.....</p>;
  return (
    <p>
      <Header />
      <Carousel />
      <FilmSelect />
      <FilmList />
      <Rap />
      <Phim />
      <News />
      <MobileApp />
      <Footer />
      {props.children}
    </p>
  );
}

const HomeTemplate = ({ exact, path, component }) => {
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={component} />
    </LayoutHome>
  );
};

export default HomeTemplate;
