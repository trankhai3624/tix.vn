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

  //* film management
  errFilm: null,
  dataFilm: null,

  //* film management
  // update film
  errUpdateFilm: null,
  dataUpdateFilm: null,

  // thêm film
  errAddFilm: null,
  dataAddFilm: null,
  // xóa film
  errDelFilm: null,
  dataDelFilm: null,
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

    //* lấy danh sách phim
    case ActionType.LayDanhSachPhimRequest:
      //sửa state
      state.loading = true;
      state.dataFilm = null;
      state.errFilm = null;
      return { ...state };

    case ActionType.LayDanhSachPhimSuccess:
      //sửa state
      state.loading = false;
      state.dataFilm = payload;
      state.errFilm = null;
      return { ...state };

    case ActionType.LayDanhSachPhimFailed:
      //sửa state
      state.loading = false;
      state.dataFilm = null;
      state.errFilm = payload;
      return { ...state };

    //* Cập nhật phim
    case ActionType.CapNhatPhimRequest:
      //sửa state
      state.dataUpdateFilm = null;
      state.errUpdateFilm = null;
      return { ...state };

    case ActionType.CapNhatPhimSuccess:
      //sửa state
      state.dataUpdateFilm = payload;
      state.errUpdateFilm = null;
      return { ...state };

    case ActionType.CapNhatPhimFailed:
      //sửa state
      state.dataUpdateFilm = null;
      state.errUpdateFilm = payload;
      return { ...state };

    //* thêm phim
    case ActionType.ThemPhimRequest:
      //sửa state
      state.dataAddFilm = null;
      state.errAddFilm = null;
      return { ...state };

    case ActionType.ThemPhimSuccess:
      //sửa state
      state.dataAddFilm = payload;
      state.errAddFilm = null;
      return { ...state };

    case ActionType.ThemPhimFailed:
      //sửa state
      state.dataAddFilm = null;
      state.errAddFilm = payload;
      return { ...state };

    //* xóa phim
    case ActionType.XoaPhimRequest:
      //sửa state
      state.dataDelFilm = null;
      state.errDelFilm = null;
      return { ...state };

    case ActionType.XoaPhimSuccess:
      //sửa state
      state.dataDelFilm = payload;
      state.errDelFilm = null;
      return { ...state };

    case ActionType.XoaPhimFailed:
      //sửa state
      state.dataDelFilm = null;
      state.errDelFilm = payload;
      return { ...state };

    default:
      return state;
  }
};
