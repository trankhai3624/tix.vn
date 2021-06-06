import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  //* SIGN UP
  loadingSignUp: false,
  errSignUp: null,
  dataSignUp: null,

  //* SIGN IN
  loadingSignIn: false,
  errSignIn: null,
  dataSignIn: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // *SIGN - UP
    case ActionType.DangKyRequest:
      //sửa state
      state.loadingSignUp = true;
      state.dataSignUp = null;
      state.errSignUp = null;
      return { ...state };

    case ActionType.DangKySuccess:
      //sửa state
      state.loadingSignUp = false;
      state.dataSignUp = payload;
      state.errSignUp = null;
      return { ...state };

    case ActionType.DangKyFailed:
      //sửa state
      state.loadingSignUp = false;
      state.dataSignUp = null;
      state.errSignUp = payload;
      return { ...state };

    //* SIGN IN
    case ActionType.DangNhapRequest:
      //sửa state
      state.loadingSignIn = true;
      state.dataSignIn = null;
      state.errSignIn = null;
      return { ...state };

    case ActionType.DangNhapSuccess:
      //sửa state
      state.loadingSignIn = false;
      state.dataSignIn = payload;
      state.errSignIn = null;
      return { ...state };

    case ActionType.DangNhapFailed:
      //sửa state
      state.loadingSignIn = false;
      state.dataSignIn = null;
      state.errSignIn = payload;
      return { ...state };
    default:
      return state;
  }
};
