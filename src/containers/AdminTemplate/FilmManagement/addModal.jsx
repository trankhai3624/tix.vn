import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ThemPhim } from "../modules/actions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  addUserButton: {},
  dataField: { margin: "1rem" },
  select: {
    width: "10rem",
  },
}));

export default function AddModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { accessToken } = JSON.parse(localStorage.getItem("QuanTri"));

  const [addFilmInfo, setAddFilmInfo] = useState({
    maPhim: "",
    tenPhim: "",
    moTa: "",
    hinhAnh: "",
    danhGia: "",
    biDanh: "",
    ngayKhoiChieu: "",
    maNhom: "GP09",
    trailer: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setAddFilmInfo({ ...addFilmInfo, [id]: value });
  };
  const submitAddFilm = () => {
    dispatch(ThemPhim(addFilmInfo, accessToken));
  };
  // console.log(accessToken);
  // console.log(addFilmInfo);
  return (
    <div>
      <button
        className={classes.addUserButton}
        type="button"
        onClick={handleOpen}
      >
        Thêm phim
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="maPhim"
              label="Mã phim"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="tenPhim"
              label="Tên phim"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="biDanh"
              label="Bí danh"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="trailer"
              label="Trailer"
            />
            <TextField
              onChange={handleOnChange}
              error
              className={classes.dataField}
              id="hinhAnh"
              label="Hình ảnh"
              // helperText="KhachHang hoặc QuanTri"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="moTa"
              label="Mô tả"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="ngayKhoiChieu"
              label="Ngày khởi chiếu"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="danhGia"
              label="Đánh giá"
            />
            <Button onClick={submitAddFilm}>Thêm</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
