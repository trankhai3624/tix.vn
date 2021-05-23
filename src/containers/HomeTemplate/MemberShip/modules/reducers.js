import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  loading: false,
  err: null,
  data: null,

  loadingUpdateInfo: false,
  errUpdateInfo: null,
  dataUpdateInfo: null,
};

// * MEMBER
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // *SIGN - IN
    case ActionType.ThongTinTaiKhoanRequest:
      //sửa state
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionType.ThongTinTaiKhoanSuccess:
      //sửa state
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case ActionType.ThongTinTaiKhoanFailed:
      //sửa state
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    // * CẬP NHẬT THÔNG TIN
    case ActionType.CapNhatThongTinNguoiDungRequest:
      //sửa state
      state.loadingUpdateInfo = true;
      state.dataUpdateInfo = null;
      state.errUpdateInfo = null;
      return { ...state };

    case ActionType.CapNhatThongTinNguoiDungSuccess:
      //sửa state
      state.loadingUpdateInfo = false;
      state.dataUpdateInfo = payload;
      state.errUpdateInfo = null;
      return { ...state };

    case ActionType.CapNhatThongTinNguoiDungFailed:
      //sửa state
      state.loadingUpdateInfo = false;
      state.dataUpdateInfo = null;
      state.errUpdateInfo = payload;
      return { ...state };

    default:
      return state;
  }
};
