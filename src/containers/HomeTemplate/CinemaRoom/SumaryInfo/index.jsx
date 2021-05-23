import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";
import PaymentIcon from "@material-ui/icons/Payment";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { useHistory } from "react-router";
import { DatVe } from "../modules/actions";

function SumaryInfo({ phongVeInfo }) {
  const classes = useStyles();
  const totalAmount = useSelector((state) => state.PhongVeReducer.totalAmount);
  const seatList = useSelector((state) => state.PhongVeReducer.seatList);
  const bookingSeat = useSelector((state) => state.PhongVeReducer.bookingSeat);
  const data = useSelector((state) => state.PhongVeReducer.data);
  const sumSeat = seatList.toString();
  // console.log(data);
  const history = useHistory();
  const dispatch = useDispatch();
  const { taiKhoan, email, soDT, accessToken } = JSON.parse(
    localStorage.getItem("KhachHang")
  );
  // console.log(taiKhoan);

  const [dataBooking, setDataBooking] = useState({
    maLichChieu: null,
    danhSachVe: [],
    taiKhoanNguoiDung: taiKhoan,
  });
  // console.log(dataBooking);

  useEffect(() => {
    if (data) {
      setDataBooking({
        ...dataBooking,
        maLichChieu: data.thongTinPhim.maLichChieu,
      });
    }
  }, []);
  console.log(dataBooking.maLichChieu);
  const confirmPayment = () => {
    const danhSachVe = [];
    bookingSeat.forEach((danhSach) => {
      let { maGhe, giaVe } = danhSach;
      danhSachVe.push({ maGhe, giaVe });
    });

    dataBooking.danhSachVe = danhSachVe;
    // dataBooking.maLichChieu = maLichChieu;
    console.log(dataBooking);
    if (dataBooking.danhSachVe.length > 0) {
      dispatch(DatVe(dataBooking, accessToken));
    } else {
      alert("bạn chưa chọn ghế");
    }
  };
  // console.log(dataBooking);
  // console.log();
  return (
    <Grid className={classes.tongHop} container>
      {/* //**BACK */}
      <Grid item xs={1} className={classes.icon}>
        <ArrowBackOutlinedIcon fontSize="large" />
      </Grid>
      {/* //**TỔNG HỢP PHIM */}
      <Grid className={classes.tongHopPhim} xs={3} item>
        <Grid container>
          <Grid item xs={5}>
            <img
              className={classes.img}
              src={phongVeInfo?.thongTinPhim.hinhAnh}
            />
          </Grid>

          <Grid item xs={5}>
            <p className={classes.infoTitle}>
              {phongVeInfo?.thongTinPhim.tenPhim}
            </p>
          </Grid>
        </Grid>
      </Grid>
      {/* //** TỔNG HỢP RẠP */}
      <Grid className={classes.tongHopRap} xs={4} item>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            Rạp
          </Grid>
          <Grid className={classes.infoTitle} item xs={7}>
            {phongVeInfo?.thongTinPhim.tenCumRap}
          </Grid>
          <Grid item xs={3}>
            Suất chiếu
          </Grid>
          <Grid className={classes.infoTitle} item xs={7}>
            {" "}
            {phongVeInfo?.thongTinPhim.ngayChieu}
            <br></br>
            {phongVeInfo?.thongTinPhim.gioChieu}
          </Grid>
          <Grid item xs={3}>
            Phòng chiếu
          </Grid>
          <Grid className={classes.infoTitle} item xs={7}>
            {" "}
            {phongVeInfo?.thongTinPhim.tenRap}
          </Grid>
        </Grid>
      </Grid>
      {/* //**TỔNG HỢP VÉ */}
      <Grid className={classes.tongHopVe} xs={2} item>
        <Grid container>
          <Grid item xs={3}>
            Ghế
          </Grid>
          <Grid className={classes.infoTitle} item xs={7}>
            {sumSeat}
          </Grid>
          <Grid item xs={3}>
            Thành tiền
          </Grid>
          <Grid className={classes.infoTitle} item xs={7}>
            {totalAmount}
          </Grid>
        </Grid>
      </Grid>
      {/* //**NEXT */}
      <Grid item xs={1} className={classes.icon} onClick={confirmPayment}>
        <PaymentIcon fontSize="large" />
        <div className={classes.thanhToan}>Thanh Toán</div>
      </Grid>
    </Grid>
  );
}

export default SumaryInfo;
