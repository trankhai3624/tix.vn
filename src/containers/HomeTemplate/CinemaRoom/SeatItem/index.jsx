import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";
import { BookingSeat } from "../modules/constants";
function SeatItem({ seatInfo }) {
  // console.log(seatInfo);
  const dispatch = useDispatch();
  // console.log(bookingSeat);
  const handleBookingSeat = () => {
    setSelect(!select);
    dispatch({
      type: BookingSeat,
      payload: seatInfo,
    });
  };
  const [select, setSelect] = useState(false);
  const classes = useStyles();
  const bookingSeat = useSelector((state) => state.PhongVeReducer.bookingSeat);
  return (
    <>
      <Grid className={classes.seatItem} item xs={1}>
        <div
          item
          xs={3}
          className={`${classes.seatStandard} ${
            seatInfo.taiKhoanNguoiDat === null
              ? classes.emptySeat
              : classes.bookedSeat
          } ${select ? classes.checkedSeat : null}`}
          onClick={
            seatInfo.taiKhoanNguoiDat === null
              ? () => handleBookingSeat()
              : null
          }
          // key={seatInfo.danhSachGhe.maGhe}
        >
          {seatInfo.taiKhoanNguoiDat === null ? seatInfo.tenGhe : "X"}
        </div>
      </Grid>
    </>
  );
}

export default SeatItem;
