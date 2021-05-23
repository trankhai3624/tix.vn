import axios from "axios";
import * as ActionType from "./constants";

// * Carousel:
// Lấy danh sách phim
export const LayThongTinPhim = (maPhim) => {
  return (dispatch) => {
    dispatch(LayThongTinPhimRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(LayThongTinPhimSuccess(result.data));
      })
      .catch((err) => {
        dispatch(LayThongTinPhimFailed(err));
      });
  };
};

const LayThongTinPhimRequest = () => {
  return {
    type: ActionType.LayThongTinPhimRequest,
  };
};

const LayThongTinPhimSuccess = (data) => {
  return {
    type: ActionType.LayThongTinPhimSuccess,
    payload: data,
  };
};

const LayThongTinPhimFailed = (err) => {
  return {
    type: ActionType.LayThongTinPhimFailed,
    payload: err,
  };
};
