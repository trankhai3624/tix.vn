import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../CinemaRoom/style";
import { LayDanhSachPhongVe } from "./modules/actions";
import screen from "../../../img/screen.png";
import SeatItem from "./SeatItem";
import SumaryInfo from "./SumaryInfo";
import { ClearBookingSeat } from "./modules/constants";
import { Redirect, useHistory } from "react-router";

function PhongChieuFilm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.PhongVeReducer.loading);
  const dataDatVe = useSelector((state) => state.PhongVeReducer.dataDatVe);
  const data = useSelector((state) => state.PhongVeReducer?.data);
  const maLichChieu = props.match.params.maLichChieu;

  useEffect(() => {
    dispatch(LayDanhSachPhongVe(maLichChieu));

    return () => {
      dispatch({ type: ClearBookingSeat });
    };
  }, []);

  const renderSeat = () => {
    if (loading == false) {
      const cloneData = data;

      return cloneData.danhSachGhe.map((item, index) => {
        // console.log(item);

        return <SeatItem seatInfo={item} key={item.maGhe} />;
      });
    }
  };
  if (dataDatVe) {
    alert("Đặt vé thành công. Vào trang cá nhân để xem chi tiết vé.");
    history.replace("/");
  }

  if (!localStorage.getItem("KhachHang")) {
    return <Redirect to="/sign" />;
  }

  return (
    <>
      <Container className={classes.fullContainer} maxWidth={false}>
        <Container className={classes.fluidContainer} maxWidth="lg">
          <Grid container>
            {/* //**PAGE TITLE */}
            <Grid className={classes.pageTitle} item xs={12}>
              <Typography className={classes.title}>ĐẶT VÉ ONLINE</Typography>
            </Grid>
            {/* //**INFO RẠP */}
            <Grid className={classes.topContent} item xs={12}>
              <p className={classes.filmInfo}>
                {data?.thongTinPhim.tenCumRap} || {data?.thongTinPhim.tenRap} ||
                Số ghế {data?.danhSachGhe.length}
              </p>
              <p className={classes.filmInfo}>
                {data?.thongTinPhim.ngayChieu} || {data?.thongTinPhim.gioChieu}
              </p>
            </Grid>
            {/* //**DANH SÁCH GHẾ */}
            <Grid className={classes.mainContent} item xs={12}>
              <img className={classes.screen} src={screen} />
              <Grid className={classes.seatsContainer} container spacing={1}>
                {renderSeat()}
              </Grid>
              <Grid className={classes.tutorial} container scpacing={2}>
                <Grid item xs={2}>
                  <div className={classes.emptySeat}></div>
                  <p>Ghế trống</p>
                </Grid>
                <Grid item xs={2}>
                  <div className={classes.checkedSeat}></div>
                  <p>Đang chọn</p>
                </Grid>
                <Grid item xs={2}>
                  <div className={classes.bookedSeat}>X</div>
                  <p>Không thể chọn</p>
                </Grid>
              </Grid>
            </Grid>
            {/* //**TỔNG HỢP */}
            <Grid className={classes.bottomContent} item xs={12}>
              <SumaryInfo phongVeInfo={data} maLichChieu={maLichChieu} />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default PhongChieuFilm;
