import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  loading: true,
  err: null,
  phimDetail: null,
};

// * PHIM CHI TIẾT: LayThongTinPhim
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // *PHIM CHI TIẾT
    // LayThongTinPhim
    case ActionType.LayThongTinPhimRequest:
      //sửa state
      state.loading = true;
      state.phimDetail = null;
      state.err = null;
      return { ...state };

    case ActionType.LayThongTinPhimSuccess:
      //sửa state
      state.loading = false;
      state.phimDetail = payload;
      state.err = null;
      return { ...state };

    case ActionType.LayThongTinPhimFailed:
      //sửa state
      state.loading = false;
      state.phimDetail = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
