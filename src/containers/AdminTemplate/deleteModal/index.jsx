import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { XoaNguoiDung } from "../modules/actions";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    width: "1.5rem",
    height: "1.5rem",
    cursor: "pointer",
    color: "red",
  },
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
  highLightTaiKhoan: {
    color: "red",
  },
  submitDelete: {
    backgroundColor: "red",
  },
}));

export default function DeleteModal({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { accessToken } = JSON.parse(localStorage.getItem("QuanTri"));
  const handleOpen = () => {
    console.log(data);
    setOpen(true);
  };
  const errDelete = useSelector((state) => state.AdminReducer.errDelete);
  // console.log(errDelete);
  const handleClose = () => {
    setOpen(false);
  };

  const submitDelete = () => {
    dispatch(XoaNguoiDung(data, accessToken));
  };
  return (
    <div>
      <HighlightOffIcon onClick={handleOpen} className={classes.deleteButton} />
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
            <p>
              Muốn xóa tài khoản
              <span className={classes.highLightTaiKhoan}>
                {" "}
                {`${data.taiKhoan}`}{" "}
              </span>
              khỏi cơ sở dữ liệu?
            </p>
            <p>Thao tác này không thể hoàn tác. Chú ý</p>
            <Button className={classes.submitDelete} onClick={submitDelete}>
              Xóa
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
