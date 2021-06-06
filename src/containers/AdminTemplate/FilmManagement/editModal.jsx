import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CreateIcon from "@material-ui/icons/Create";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CapNhatPhim } from "../modules/actions";

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

  const [filmInfo, setFilmInfo] = useState({
    maPhim: data.maPhim,
    tenPhim: data.tenPhim,
    moTa: data.moTa,
    hinhAnh: data.hinhAnh,
    danhGia: data.danhGia,
    biDanh: data.biDanh,
    ngayKhoiChieu: data.ngayKhoiChieu,
    maNhom: "GP09",
    trailer: data.trailer,
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
    setFilmInfo({
      ...filmInfo,
      [id]: value,
    });
  };

  const handleUpdate = () => {
    // console.log(sampleData);
    // console.log(userInfo);
    // console.log(accessToken);
    if (JSON.stringify(sampleData) !== JSON.stringify(filmInfo)) {
      dispatch(CapNhatPhim(filmInfo, accessToken));
    } else {
      console.log("giống");
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
              disabled
              onChange={handleChange}
              className={classes.dataField}
              id="maPhim"
              label="Mã phim"
              defaultValue={data.maPhim}
            />
            <TextField
              disabled
              onChange={handleChange}
              className={classes.dataField}
              id="tenPhim"
              label="Tên phim"
              defaultValue={data.tenPhim}
            />
            <TextField
              onChange={handleChange}
              className={classes.dataField}
              id="biDanh"
              label="Bí danh"
              defaultValue={data.biDanh}
            />
            <TextField
              onChange={handleChange}
              className={classes.dataField}
              id="trailer"
              label="Trailer"
              defaultValue={data.trailer}
            />
            <TextField
              onChange={handleChange}
              error
              className={classes.dataField}
              id="hinhAnh"
              label="Hình ảnh"
              defaultValue={data.hinhAnh}
              // helperText="KhachHang hoặc QuanTri"
            />
            <TextField
              onChange={handleChange}
              className={classes.dataField}
              id="moTa"
              label="Mô tả"
              defaultValue={data.moTa}
            />
            <TextField
              onChange={handleChange}
              className={classes.dataField}
              id="ngayKhoiChieu"
              label="Ngày khởi chiếu"
              defaultValue={data.ngayKhoiChieu}
            />
            <TextField
              onChange={handleChange}
              className={classes.dataField}
              id="danhGia"
              label="Đánh giá"
              defaultValue={data.danhGia}
            />
            <Button
              className={classes.button}
              type="submit"
              onClick={handleUpdate}
            >
              Chỉnh sửa
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
