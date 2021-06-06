import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  loadingDanhSachPhim: true,
  loadingLichChieuHeThongRap: true,
  loadingLichChieuPhim: true,
  err: null,
  lichChieuHeThongRap: [],
  danhSachPhim: [],
  lichChieuPhim: null,
  maHeThongRap: "BHDStar",
  cumRap: null,
  maCumRap: null,
  filmList: null,
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
    case ActionType.LayThongTinLichChieuHeThongRapRequest:
      //sửa state
      state.loadingLichChieuHeThongRap = true;
      state.lichChieuHeThongRap = null;
      state.err = null;
      return { ...state };

    case ActionType.LayThongTinLichChieuHeThongRapSuccess:
      //sửa state
      state.loadingLichChieuHeThongRap = false;
      state.lichChieuHeThongRap = payload;
      state.err = null;
      return { ...state };

    case ActionType.LayThongTinLichChieuHeThongRapFailed:
      //sửa state
      state.loadingLichChieuHeThongRap = false;
      state.lichChieuHeThongRap = null;
      state.err = payload;
      return { ...state };

    case ActionType.ChangeMaHeThongRap:
      state.maHeThongRap = payload;

      state.cumRap = state.lichChieuHeThongRap.filter(
        (lichChieuHeThongRap) =>
          lichChieuHeThongRap.maHeThongRap === state.maHeThongRap
      );

      return { ...state };

    case ActionType.ChangeMaCumRap:
      state.maCumRap = payload;

      const clone = state.cumRap[0].lstCumRap.filter(
        (cumRap) => cumRap.maCumRap === state.maCumRap
      );
      state.filmList = clone[0].danhSachPhim;
      return { ...state };

    case ActionType.ClearSelection:
      state.maCumRap = null;
      state.filmList = null;

      return { ...state };

    default:
      return state;
  }
};
