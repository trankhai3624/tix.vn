import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  loading: false,
  err: null,
  data: null,
};

// * PHIM CHI TIẾT: LayThongTinPhim
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // *SIGN - IN
    case ActionType.DangNhapRequest:
      //sửa state
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionType.DangNhapSuccess:
      //sửa state
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case ActionType.DangNhapFailed:
      //sửa state
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
