import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CreateIcon from "@material-ui/icons/Create";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { CapNhatThongTinNguoiDung } from "../modules/actions";

const useStyles = makeStyles((theme) => ({
  editButton: { cursor: "pointer", width: "1.5rem", height: "1.5rem" },
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
    justifyContent: "center",
    alignItems: "center",
  },
  dataField: {
    margin: "1rem",
  },
  button: {
    margin: "auto",
    backgroundColor: "#222831",
    color: "#00adb5",
    "& hover": {
      color: "#222831",
    },
  },
}));

export default function EditModal({ data }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const sampleData = data;
  sampleData.maNhom = "GP09";

  const [userInfo, setUserInfo] = useState({
    hoTen: data.hoTen,
    taiKhoan: data.taiKhoan,
    matKhau: data.matKhau,
    email: data.email,
    maLoaiNguoiDung: data.maLoaiNguoiDung,
    soDt: data.soDt,
    maNhom: "GP09",
  });
  const { accessToken } = JSON.parse(localStorage.getItem("QuanTri"));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };

  const handleUpdate = () => {
    // console.log(sampleData);
    console.log(userInfo);
    // console.log(accessToken);
    if (JSON.stringify(sampleData) !== JSON.stringify(userInfo)) {
      dispatch(CapNhatThongTinNguoiDung(userInfo, accessToken));
    } else {
      console.log("gi???ng");
    }
    // console.log();
  };

  return (
    <div>
      <CreateIcon className={classes.editButton} onClick={handleOpen} />
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
              onChange={handleChange}
              className={classes.dataField}
              id="hoTen"
              label="H??? t??n"
              defaultValue={data.hoTen}
            />
            <TextField
              disabled
              onChange={handleChange}
              className={classes.dataField}
              id="taiKhoan"
              label="T??i kho???n"
              defaultValue={data.taiKhoan}
            />
            <TextField
              onChange={handleChange}
              className={classes.dataField}
              id="email"
              label="Email"
              defaultValue={data.email}
            />
            <TextField
              onChange={handleChange}
              className={classes.dataField}
              id="soDt"
              label="??i???n tho???i"
              defaultValue={data.soDt}
            />
            <TextField
              onChange={handleChange}
              error
              className={classes.dataField}
              id="maLoaiNguoiDung"
              label="Lo???i t??i kho???n"
              defaultValue={data.maLoaiNguoiDung}
              helperText="KhachHang ho???c QuanTri"
            />
            <Button
              className={classes.button}
              type="submit"
              onClick={handleUpdate}
            >
              Ch???nh s???a
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
