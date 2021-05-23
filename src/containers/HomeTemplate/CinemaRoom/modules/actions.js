import axios from "axios";
import { useHistory } from "react-router";
import * as ActionType from "./constants";

// * Carousel:
// Lấy danh sách phim
export const LayDanhSachPhongVe = (maLichChieu) => {
  return (dispatch) => {
    dispatch(LayDanhSachPhongVeRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(LayDanhSachPhongVeSuccess(result.data));
      })
      .catch((err) => {
        dispatch(LayDanhSachPhongVeFailed(err));
      });
  };
};

const LayDanhSachPhongVeRequest = () => {
  return {
    type: ActionType.LayDanhSachPhongVeRequest,
  };
};

const LayDanhSachPhongVeSuccess = (data) => {
  return {
    type: ActionType.LayDanhSachPhongVeSuccess,
    payload: data,
  };
};

const LayDanhSachPhongVeFailed = (err) => {
  return {
    type: ActionType.LayDanhSachPhongVeFailed,
    payload: err,
  };
};

export const DatVe = (info, accessToken) => {
  return (dispatch) => {
    dispatch(DatVeRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data: info,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(DatVeSuccess(result.data));
      })
      .catch((err) => {
        dispatch(DatVeFailed(err));
      });
  };
};

const DatVeRequest = () => {
  return {
    type: ActionType.DatVeRequest,
  };
};

const DatVeSuccess = (data) => {
  return {
    type: ActionType.DatVeSuccess,
    payload: data,
  };
};

const DatVeFailed = (err) => {
  return {
    type: ActionType.DatVeFailed,
    payload: err,
  };
};
