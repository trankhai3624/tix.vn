import axios from "axios";
import * as ActionType from "./constants";

// * Carousel:
// Lấy danh sách phim
export const ThongTinTaiKhoan = (user, history) => {
  return (dispatch) => {
    dispatch(ThongTinTaiKhoanRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(ThongTinTaiKhoanSuccess(result.data));
      })
      .catch((err) => {
        dispatch(ThongTinTaiKhoanFailed(err.response.data));
      });
  };
};

const ThongTinTaiKhoanRequest = () => {
  return {
    type: ActionType.ThongTinTaiKhoanRequest,
  };
};

const ThongTinTaiKhoanSuccess = (data) => {
  return {
    type: ActionType.ThongTinTaiKhoanSuccess,
    payload: data,
  };
};

const ThongTinTaiKhoanFailed = (err) => {
  return {
    type: ActionType.ThongTinTaiKhoanFailed,
    payload: err,
  };
};

export const CapNhatThongTinNguoiDung = (info, accessToken) => {
  return (dispatch) => {
    dispatch(CapNhatThongTinNguoiDungRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: info,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(CapNhatThongTinNguoiDungSuccess(result.data));
      })
      .catch((err) => {
        dispatch(CapNhatThongTinNguoiDungFailed(err));
      });
  };
};

const CapNhatThongTinNguoiDungRequest = () => {
  return {
    type: ActionType.CapNhatThongTinNguoiDungRequest,
  };
};

const CapNhatThongTinNguoiDungSuccess = (data) => {
  return {
    type: ActionType.CapNhatThongTinNguoiDungSuccess,
    payload: data,
  };
};

const CapNhatThongTinNguoiDungFailed = (err) => {
  return {
    type: ActionType.CapNhatThongTinNguoiDungFailed,
    payload: err,
  };
};
