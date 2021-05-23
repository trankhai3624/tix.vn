import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { PlayCircleFilledOutlined } from "@material-ui/icons";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    // padding: theme.spacing(1),
    textAlign: "center",
    // backgroundColor: "rgba(37,36,39,0.4)",
    color: "#FAFAFA",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(3, 3, 3),
    width: "75%",
    height: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "7rem",
    // zIndex: 100,
    color: "#00adb5",
    "&:hover": {
      color: "#00d9e3",
      transition: "all 0.4s",
    },
  },
}));

export default function TransitionsModal({ trailer }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PlayCircleOutlineOutlinedIcon
        onClick={handleOpen}
        className={classes.playIcon}
      />

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
            <iframe
              width="100%"
              height="100%"
              src={trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
