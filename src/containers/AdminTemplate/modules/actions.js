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
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
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

//** XoaNguoiDung  */
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
        alert(result.data);
      })
      .catch((err) => {
        dispatch(XoaNguoiDungFailed(err.response));
        alert(err.response.data);
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
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
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

//*LayDanhSachPhim
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

//** Cập nhật phim  */
export const CapNhatPhim = (filmInfo, accessToken) => {
  return (dispatch) => {
    dispatch(CapNhatPhimRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
      method: "POST",
      data: filmInfo,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(CapNhatPhimSuccess(result.data));
        alert("Cập nhật thành công");
      })
      .catch((err) => {
        dispatch(CapNhatPhimFailed(err));
        alert(err.response.data);
      });
  };
};

const CapNhatPhimRequest = () => {
  return {
    type: ActionType.CapNhatPhimRequest,
  };
};

const CapNhatPhimSuccess = (data) => {
  return {
    type: ActionType.CapNhatPhimSuccess,
    payload: data,
  };
};

const CapNhatPhimFailed = (err) => {
  return {
    type: ActionType.CapNhatPhimFailed,
    payload: err,
  };
};

//*ThemPhim
export const ThemPhim = (addFilmInfo, accessToken) => {
  return (dispatch) => {
    dispatch(ThemPhimRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
      method: "POST",
      data: addFilmInfo,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(ThemPhimSuccess(result.data));
        alert(result.data);
      })
      .catch((err) => {
        dispatch(ThemPhimFailed(err));
        alert(err.response);
      });
  };
};

const ThemPhimRequest = () => {
  return {
    type: ActionType.ThemPhimRequest,
  };
};

const ThemPhimSuccess = (data) => {
  return {
    type: ActionType.ThemPhimSuccess,
    payload: data,
  };
};

const ThemPhimFailed = (err) => {
  return {
    type: ActionType.ThemPhimFailed,
    payload: err,
  };
};

//** XoaPhim  */
export const XoaPhim = (maPhim, accessToken) => {
  return (dispatch) => {
    dispatch(XoaPhimRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(XoaPhimSuccess(result.data));
        alert(result.data);
      })
      .catch((err) => {
        dispatch(XoaPhimFailed(err.response));
        alert(err.response.data);
      });
  };
};

const XoaPhimRequest = () => {
  return {
    type: ActionType.XoaPhimRequest,
  };
};

const XoaPhimSuccess = (data) => {
  return {
    type: ActionType.XoaPhimSuccess,
    payload: data,
  };
};

const XoaPhimFailed = (err) => {
  return {
    type: ActionType.XoaPhimFailed,
    payload: err,
  };
};
