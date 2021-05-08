import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  loadingDanhSachPhim: true,
  loadingHeThongRap: true,
  loadingLichChieuPhim: true,
  err: null,
  heThongRap: [],
  danhSachPhim: [],
  lichChieuPhim: null,
};

// * CAROUSEL: LẤY THÔNG TIN TOÀN BỘ DANH SÁCH PHIM
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // *CAROUSEL
    // lấy toàn bộ danh sách phim
    case ActionType.LayDanhSachPhimRequest:
      //sửa state
      state.loadingDanhSachPhim = true;
      state.danhSachPhim = null;
      state.err = null;
      return { ...state };

    case ActionType.LayDanhSachPhimSuccess:
      //sửa state
      state.loadingDanhSachPhim = false;
      state.danhSachPhim = payload;
      state.err = null;
      return { ...state };

    case ActionType.LayDanhSachPhimFailed:
      //sửa state
      state.loadingDanhSachPhim = false;
      state.danhSachPhim = null;
      state.err = payload;
      return { ...state };

    // * SELECTOR
    // Lấy thông tin lịch chiếu phim
    case ActionType.LayThongTinLichChieuPhimRequest:
      //sửa state
      state.loadingLichChieuPhim = true;
      state.lichChieuPhim = null;
      state.err = null;
      return { ...state };

    case ActionType.LayThongTinLichChieuPhimSuccess:
      //sửa state
      state.loadingLichChieuPhim = false;
      state.lichChieuPhim = payload;
      state.err = null;
      return { ...state };

    case ActionType.LayThongTinLichChieuPhimFailed:
      //sửa state
      state.loadingLichChieuPhim = false;
      state.lichChieuPhim = null;
      state.err = payload;
      return { ...state };

    // *SCHEDULE
    // lấy thông tin hệ thống rạp lịch chiếu
    case ActionType.LayThongTinHeThongRapRequest:
      //sửa state
      state.loadingHeThongRap = true;
      state.heThongRap = null;
      state.err = null;
      return { ...state };

    case ActionType.LayThongTinHeThongRapSuccess:
      //sửa state
      state.loadingHeThongRap = false;
      state.heThongRap = payload;
      state.err = null;
      return { ...state };

    case ActionType.LayThongTinHeThongRapFailed:
      //sửa state
      state.loadingHeThongRap = false;
      state.heThongRap = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
