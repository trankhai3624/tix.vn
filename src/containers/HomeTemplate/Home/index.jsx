// import { Typography } from "@material-ui/core";
import React from "react";
import Carousel from "../../../components/Carousel";
import FilmSelect from "../../../components/Selector";
import FilmList from "../../../components/FilmList/filmList";
// import Phim from "../../../components/FilmSchedule/Phim";
import Rap from "../../../components/FilmSchedule/Rap";
import News from "../../../components/News";
import MobileApp from "../../../components/MobileApp";
import TransitionsModal from "../../../components/Carousel/ModalTrailer/index2";
import { useSelector } from "react-redux";

function Home() {
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
    <div>
      <Carousel />
      <FilmSelect />
      <FilmList />
      <Rap />
      {/* <Phim /> */}
      <News />
      <MobileApp />
    </div>
  );
}

export default Home;
