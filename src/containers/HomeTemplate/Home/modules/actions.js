import axios from "axios";
import * as ActionType from "./constants";

// * Carousel:
// Lấy danh sách phim
export const LayDanhSachPhim = () => {
  return (dispatch) => {
    dispatch(LayDanhSachPhimRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
      method: "GET",
    })
      .then((result) => {
        dispatch(LayDanhSachPhimSuccess(result.data));
      })
      .catch((err) => {
        dispatch(LayDanhSachPhimFailed(err));
      });
  };
};

const LayDanhSachPhimRequest = () => {
  return {
    type: ActionType.LayDanhSachPhimRequest,
  };
};

const LayDanhSachPhimSuccess = (data) => {
  return {
    type: ActionType.LayDanhSachPhimSuccess,
    payload: data,
  };
};

const LayDanhSachPhimFailed = (err) => {
  return {
    type: ActionType.LayDanhSachPhimFailed,
    payload: err,
  };
};

// * Selector: Lấy thông tin lịch chiếu phim
// Lấy thông tin lịch chiếu phim
export const LayThongTinLichChieuPhim = (maPhim) => {
  return (dispatch) => {
    dispatch(LayThongTinLichChieuPhimRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(LayThongTinLichChieuPhimSuccess(result.data));
      })
      .catch((err) => {
        dispatch(LayThongTinLichChieuPhimFailed(err));
      });
  };
};

const LayThongTinLichChieuPhimRequest = () => {
  return {
    type: ActionType.LayThongTinLichChieuPhimRequest,
  };
};

const LayThongTinLichChieuPhimSuccess = (data) => {
  return {
    type: ActionType.LayThongTinLichChieuPhimSuccess,
    payload: data,
  };
};

const LayThongTinLichChieuPhimFailed = (err) => {
  return {
    type: ActionType.LayThongTinLichChieuPhimFailed,
    payload: err,
  };
};
// * Schedule:
// Lấy thông tin hệ thống rạp
export const LayThongTinHeThongRap = () => {
  return (dispatch) => {
    dispatch(LayThongTinHeThongRapRequest());
    axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    })
      .then((result) => {
        dispatch(LayThongTinHeThongRapSuccess(result.data));
      })
      .catch((err) => {
        dispatch(LayThongTinHeThongRapFailed(err));
      });
  };
};

const LayThongTinHeThongRapRequest = () => {
  return {
    type: ActionType.LayThongTinHeThongRapRequest,
  };
};

const LayThongTinHeThongRapSuccess = (data) => {
  return {
    type: ActionType.LayThongTinHeThongRapSuccess,
    payload: data,
  };
};

const LayThongTinHeThongRapFailed = (err) => {
  return {
    type: ActionType.LayThongTinHeThongRapFailed,
    payload: err,
  };
};
