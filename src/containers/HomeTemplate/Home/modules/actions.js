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
export const LayThongTinLichChieuHeThongRap = () => {
  return (dispatch) => {
    dispatch(LayThongTinLichChieuHeThongRapRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`,
      method: "GET",
    })
      .then((result) => {
        dispatch(LayThongTinLichChieuHeThongRapSuccess(result.data));
      })
      .catch((err) => {
        dispatch(LayThongTinLichChieuHeThongRapFailed(err));
      });
  };
};

const LayThongTinLichChieuHeThongRapRequest = () => {
  return {
    type: ActionType.LayThongTinLichChieuHeThongRapRequest,
  };
};

const LayThongTinLichChieuHeThongRapSuccess = (data) => {
  return {
    type: ActionType.LayThongTinLichChieuHeThongRapSuccess,
    payload: data,
  };
};

const LayThongTinLichChieuHeThongRapFailed = (err) => {
  return {
    type: ActionType.LayThongTinLichChieuHeThongRapFailed,
    payload: err,
  };
};
