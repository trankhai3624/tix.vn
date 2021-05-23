import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  loading: true,
  err: null,
  data: null,
  //*update
  loadingUpdate: false,
  errUpdate: null,
  dataUpdate: null,
  //* xóa
  loadingDelete: false,
  errDelete: null,
  dataDelete: null,

  //*ThemNguoiDung
  loadingAddUser: false,
  errAddUser: null,
  dataAddUser: null,
};

// * LayDanhSachNguoiDung
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // LayDanhSachNguoiDung
    case ActionType.LayDanhSachNguoiDungRequest:
      //sửa state
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionType.LayDanhSachNguoiDungSuccess:
      //sửa state
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case ActionType.LayDanhSachNguoiDungFailed:
      //sửa state
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    //*CapNhatThongTinNguoiDung
    case ActionType.CapNhatThongTinNguoiDungRequest:
      //sửa state
      state.loadingUpdate = true;
      state.dataUpdate = null;
      state.errUpdate = null;
      return { ...state };

    case ActionType.CapNhatThongTinNguoiDungSuccess:
      //sửa state
      state.loadingUpdate = false;
      state.dataUpdate = payload;
      state.errUpdate = null;
      return { ...state };

    case ActionType.CapNhatThongTinNguoiDungFailed:
      //sửa state
      state.loadingUpdate = false;
      state.dataUpdate = null;
      state.errUpdate = payload;
      return { ...state };

    //*XoaNguoiDung
    case ActionType.XoaNguoiDungRequest:
      //sửa state
      state.loadingDelete = true;
      state.dataDelete = null;
      state.errDelete = null;
      return { ...state };

    case ActionType.XoaNguoiDungSuccess:
      //sửa state
      state.loadingDelete = false;
      state.dataDelete = payload;
      state.errDelete = null;
      return { ...state };

    case ActionType.XoaNguoiDungFailed:
      //sửa state
      state.loadingDelete = false;
      state.dataDelete = null;
      state.errDelete = payload;
      return { ...state };

    //*ThemNguoiDung
    case ActionType.ThemNguoiDungRequest:
      //sửa state
      state.loadingAddUser = true;
      state.dataAddUser = null;
      state.errAddUser = null;
      return { ...state };

    case ActionType.ThemNguoiDungSuccess:
      //sửa state
      state.loadingAddUser = false;
      state.dataAddUser = payload;
      state.errAddUser = null;
      return { ...state };

    case ActionType.ThemNguoiDungFailed:
      //sửa state
      state.loadingAddUser = false;
      state.dataAddUser = null;
      state.errAddUser = payload;
      return { ...state };
    default:
      return state;
  }
};
