import axios from "axios";
import * as ActionType from "./constants";

// * Carousel:
// Lấy danh sách phim
export const DangNhap = (user, history) => {
  return (dispatch) => {
    dispatch(DangNhapRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          dispatch(DangNhapSuccess(result.data));
          //Lưu trạng thái login xuống localStorage
          localStorage.setItem("KhachHang", JSON.stringify(result.data));
          //Chuyển hướng qua trang Dashboard
          history.push("/");
        } else {
          dispatch(DangNhapSuccess(result.data));
          //Lưu trạng thái login xuống localStorage
          localStorage.setItem("QuanTri", JSON.stringify(result.data));
          //Chuyển hướng qua trang Dashboard
          history.push("/dashboard");
        }
        //success
      })
      .catch((err) => {
        dispatch(DangNhapFailed(err));
      });
  };
};

const DangNhapRequest = () => {
  return {
    type: ActionType.DangNhapRequest,
  };
};

const DangNhapSuccess = (data) => {
  return {
    type: ActionType.DangNhapSuccess,
    payload: data,
  };
};

const DangNhapFailed = (err) => {
  return {
    type: ActionType.DangNhapFailed,
    payload: err,
  };
};
