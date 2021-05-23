import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  loading: false,
  err: null,
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // *SIGN - UP
    case ActionType.DangKyRequest:
      //sửa state
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionType.DangKySuccess:
      //sửa state
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case ActionType.DangKyFailed:
      //sửa state
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
