import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "./style";
import { BookingSeat } from "../modules/constants";
function SeatItem({ seatInfo }) {
  const dispatch = useDispatch();
  const handleBookingSeat = () => {
    setSelect(!select);
    dispatch({
      type: BookingSeat,
      payload: seatInfo,
    });
  };
  const [select, setSelect] = useState(false);
  const classes = useStyles();
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
