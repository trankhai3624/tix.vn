import axios from "axios";
import * as ActionType from "./constants";

// * Carousel:
// Lấy danh sách phim
export const DangKy = (user) => {
  return (dispatch) => {
    dispatch(DangKyRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(DangKySuccess(result.data));
      })
      .catch((err) => {
        dispatch(DangKyFailed(err));
      });
  };
};

const DangKyRequest = () => {
  return {
    type: ActionType.DangKyRequest,
  };
};

const DangKySuccess = (data) => {
  return {
    type: ActionType.DangKySuccess,
    payload: data,
  };
};

const DangKyFailed = (err) => {
  return {
    type: ActionType.DangKyFailed,
    payload: err,
  };
};
