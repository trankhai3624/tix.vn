import React from "react";
import Carousel from "../../../components/Carousel";
import FilmSelect from "../../../components/Selector";
import FilmList from "../../../components/FilmList/filmList1";
// import FilmList from "../../../components/FilmList/filmList2";
import Schedules from "../../../components/FilmSchedule/index";
import News from "../../../components/News";
import MobileApp from "../../../components/MobileApp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const loadingDanhSachPhim = useSelector(
    (state) => state.HomeReducer.loadingDanhSachPhim
  );
  const loadingHeThongRap = useSelector(
    (state) => state.HomeReducer.loadingHeThongRap
  );

  const loadingLichChieuHeThongRap = useSelector(
    (state) => state.HomeReducer.loadingLichChieuHeThongRap
  );

  if (loadingDanhSachPhim || loadingHeThongRap || loadingLichChieuHeThongRap)
    return <p>Loading.....</p>;
  return (
    <div>
      <Carousel />
      <FilmSelect />
      <FilmList />
      <Schedules />
      <News />
      <MobileApp />
    </div>
  );
}

export default Home;
