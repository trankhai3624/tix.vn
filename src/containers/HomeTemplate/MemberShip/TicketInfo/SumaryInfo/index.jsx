import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";
import { useHistory } from "react-router";

function SumaryInfo({ ticketList }) {
  const classes = useStyles();
  if (ticketList) {
    console.log(ticketList);
    return (
      <Grid className={classes.tongHop} container>
        {/* //**TỔNG HỢP PHIM */}
        <Grid xs={3} item>
          <Grid className={classes.tongHopContent} container>
            <Grid item xs={3}>
              Tên Phim
            </Grid>
            <Grid className={classes.infoTitle} item xs={5}>
              {ticketList.tenPhim}
            </Grid>
          </Grid>
          <Grid className={classes.tongHopContent} container>
            <Grid item xs={3}>
              Thời lượng
            </Grid>
            <Grid className={classes.infoTitle} item xs={5}>
              {`${ticketList.thoiLuongPhim} phút`}
            </Grid>
          </Grid>
        </Grid>
        {/* //** TỔNG HỢP RẠP */}
        <Grid xs={3} item>
          <Grid className={classes.tongHopContent} container>
            <Grid item xs={4}>
              Rạp
            </Grid>
            <Grid className={classes.infoTitle} item xs={7}>
              {ticketList.danhSachGhe[0].tenHeThongRap}
            </Grid>

            <Grid item xs={4}>
              Phòng chiếu
            </Grid>
            <Grid className={classes.infoTitle} item xs={7}>
              {ticketList.danhSachGhe[0].tenCumRap}
            </Grid>
            <Grid item xs={4}>
              Ngày đặt
            </Grid>
            <Grid className={classes.infoTitle} item xs={7}>
              {ticketList.ngayDat}
            </Grid>
          </Grid>
        </Grid>
        {/* //**TỔNG HỢP VÉ */}
        <Grid xs={3} item>
          <Grid className={classes.tongHopContent} container>
            <Grid item xs={3}>
              Mã vé
            </Grid>
            <Grid className={classes.infoTitle} item xs={7}>
              {ticketList.maVe}
            </Grid>
            <Grid item xs={3}>
              Giá vé
            </Grid>
            <Grid className={classes.infoTitle} item xs={7}>
              {ticketList.giaVe}
            </Grid>
          </Grid>
        </Grid>
        {/* //**TỔNG HỢP GHẾ */}
        <Grid xs={3} item>
          <Grid className={classes.tongHopVe} container>
            <Grid item xs={2}>
              Ghế
            </Grid>
            <Grid className={classes.infoTitle} item xs={7}>
              {ticketList.danhSachGhe.map((item) => {
                return `${item.tenGhe} `;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
}

export default SumaryInfo;
