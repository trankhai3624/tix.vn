import axios from "axios";
import * as ActionType from "./constants";

// * DASHBOARD: USER MANAGEMENT:
//** LẤY DANH SÁCH NGƯỜI DÙNG  */
export const LayDanhSachNguoiDung = () => {
  return (dispatch) => {
    dispatch(LayDanhSachNguoiDungRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09`,
      method: "GET",
    })
      .then((result) => {
        dispatch(LayDanhSachNguoiDungSuccess(result.data));
      })
      .catch((err) => {
        dispatch(LayDanhSachNguoiDungFailed(err));
      });
  };
};

const LayDanhSachNguoiDungRequest = () => {
  return {
    type: ActionType.LayDanhSachNguoiDungRequest,
  };
};

const LayDanhSachNguoiDungSuccess = (data) => {
  return {
    type: ActionType.LayDanhSachNguoiDungSuccess,
    payload: data,
  };
};

const LayDanhSachNguoiDungFailed = (err) => {
  return {
    type: ActionType.LayDanhSachNguoiDungFailed,
    payload: err,
  };
};

//** Cập nhật thông tin  */
export const CapNhatThongTinNguoiDung = (userInfo, accessToken) => {
  return (dispatch) => {
    dispatch(CapNhatThongTinNguoiDungRequest());
    axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: userInfo,
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

/** XoaNguoiDung  */
export const XoaNguoiDung = (taiKhoan, accessToken) => {
  return (dispatch) => {
    dispatch(XoaNguoiDungRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan.taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(XoaNguoiDungSuccess(result.data));
      })
      .catch((err) => {
        dispatch(XoaNguoiDungFailed(err));
      });
  };
};

const XoaNguoiDungRequest = () => {
  return {
    type: ActionType.XoaNguoiDungRequest,
  };
};

const XoaNguoiDungSuccess = (data) => {
  return {
    type: ActionType.XoaNguoiDungSuccess,
    payload: data,
  };
};

const XoaNguoiDungFailed = (err) => {
  return {
    type: ActionType.XoaNguoiDungFailed,
    payload: err,
  };
};

//*ThemNguoiDung
export const ThemNguoiDung = (addUserInfo, accessToken) => {
  return (dispatch) => {
    dispatch(ThemNguoiDungRequest());
    axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: addUserInfo,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(ThemNguoiDungSuccess(result.data));
      })
      .catch((err) => {
        dispatch(ThemNguoiDungFailed(err));
      });
  };
};

const ThemNguoiDungRequest = () => {
  return {
    type: ActionType.ThemNguoiDungRequest,
  };
};

const ThemNguoiDungSuccess = (data) => {
  return {
    type: ActionType.ThemNguoiDungSuccess,
    payload: data,
  };
};

const ThemNguoiDungFailed = (err) => {
  return {
    type: ActionType.ThemNguoiDungFailed,
    payload: err,
  };
};
