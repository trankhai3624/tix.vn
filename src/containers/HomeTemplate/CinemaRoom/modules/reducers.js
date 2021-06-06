import * as ActionType from "./constants";
// HomeReducer
const initialState = {
  loading: true,
  err: null,
  data: null,
  bookingSeat: [],
  totalAmount: 0,
  seatList: [],
  loadingDatVe: false,
  dataDatVe: null,
  errDatVe: null,
};

// * CinemaRoom: LayDanhSachPhongVe
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // *PHIM CHI TIẾT
    case ActionType.LayDanhSachPhongVeRequest:
      //sửa state
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionType.LayDanhSachPhongVeSuccess:
      //sửa state
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case ActionType.LayDanhSachPhongVeFailed:
      //sửa state
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    case ActionType.BookingSeat:
      // state.bookingSeat = payload;
      const cloneBookingSeat = [...state.bookingSeat];
      const index = cloneBookingSeat.findIndex((item) => {
        return item.maGhe === payload.maGhe;
      });
      if (index == -1) {
        cloneBookingSeat.push(payload);
      } else {
        cloneBookingSeat.splice(index, 1);
      }
      state.bookingSeat = cloneBookingSeat;
      const tongTien = state.bookingSeat.reduce((total, value) => {
        return (total += value.giaVe);
      }, 0);
      state.totalAmount = tongTien;

      const danhSachGhe = state.bookingSeat.map((item, index) => {
        return item.tenGhe;
      });
      state.seatList = danhSachGhe;
      // console.log(danhSachGhe);

      return { ...state };

    case ActionType.ClearBookingSeat:
      //sửa state
      state.loading = true;
      state.err = null;
      state.bookingSeat = [];
      state.totalAmount = 0;
      state.seatList = [];
      state.loadingDatVe = false;
      state.dataDatVe = null;
      state.errDatVe = null;
      return { ...state };

    case ActionType.DatVeRequest:
      state.loadingDatVe = true;
      state.dataDatVe = null;
      state.errDatVe = null;
      return { ...state };

    case ActionType.DatVeSuccess:
      state.loadingDatVe = false;
      state.dataDatVe = payload;
      state.errDatVe = null;
      return { ...state };

    case ActionType.DatVeFailed:
      state.loadingDatVe = false;
      state.dataDatVe = null;
      state.errDatVe = payload;
      return { ...state };
    default:
      return state;
  }
};
