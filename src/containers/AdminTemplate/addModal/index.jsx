import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
// import { ThemNguoiDung } from "../modules/actions";
import { ThemNguoiDung } from "../modules/actions";

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
  const errAddUser = useSelector((state) => state.AdminReducer.errAddUser);
  console.log(errAddUser);

  const [addUserInfo, setAddUserInfo] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP09",
    maLoaiNguoiDung: "",
    hoTen: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setAddUserInfo({ ...addUserInfo, [id]: value });
  };
  const submitAddUser = () => {
    dispatch(ThemNguoiDung(addUserInfo, accessToken));
  };
  console.log(addUserInfo);
  return (
    <div>
      <button
        className={classes.addUserButton}
        type="button"
        onClick={handleOpen}
      >
        Thêm người dùng
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
              id="hoTen"
              label="Họ tên"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="taiKhoan"
              label="Tài khoản"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="matKhau"
              label="Mật khẩu"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="email"
              label="Email"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="soDt"
              label="Số điện thoại"
            />
            <TextField
              onChange={handleOnChange}
              className={classes.dataField}
              id="maLoaiNguoiDung"
              label="Loại tài khoản"
            />
            <Button onClick={submitAddUser}>Thêm</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
