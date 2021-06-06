import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Input from "@material-ui/core/Input";
import { useDispatch } from "react-redux";
import { CapNhatThongTinNguoiDung } from "../modules/actions";
import { useHistory } from "react-router";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00adb5",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: "1rem 0",
  },
}));

export default function AccountInfo({ user }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [updateInfo, setUpdateInfo] = useState(false);
  const [changePass, setChangePass] = useState(false);
  const [info, setInfo] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  });
  const { accessToken } = JSON.parse(localStorage.getItem("KhachHang"));

  useEffect(() => {
    if (user) {
      let { taiKhoan, matKhau, hoTen, email, soDT, maNhom } = user;
      setInfo({
        taiKhoan: taiKhoan,
        matKhau: matKhau,
        email: email,
        soDt: soDT,
        maNhom: maNhom,
        maLoaiNguoiDung: "KhachHang",
        hoTen: hoTen,
      });
    }
  }, []);

  const dispatchUpdateInfo = () => {
    console.log(info);
    dispatch(CapNhatThongTinNguoiDung(info, accessToken));
    setUpdateInfo(!updateInfo);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {user?.hoTen}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                autoComplete="hoTen"
                name="hoTen"
                variant="outlined"
                required
                fullWidth
                id="hoTen"
                label="Họ Tên"
                defaultValue={user?.hoTen}
                disabled={updateInfo ? false : true}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                autoComplete="taiKhoan"
                name="taiKhoan"
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="Tài khoản"
                defaultValue={user?.taiKhoan}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                autoComplete="matKhau"
                name="matKhau"
                variant="outlined"
                required
                fullWidth
                id="matKhau"
                label="Mật khẩu"
                defaultValue={user?.matKhau}
                disabled={changePass ? false : true}
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                defaultValue={user?.email}
                disabled={updateInfo ? false : true}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                autoComplete="soDt"
                name="soDt"
                variant="outlined"
                required
                fullWidth
                id="soDt"
                label="Số điện thoại"
                defaultValue={user?.soDT}
                disabled={updateInfo ? false : true}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          {updateInfo ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              fullWidth
              onClick={dispatchUpdateInfo}
            >
              Cập nhật
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              fullWidth
              onClick={() => {
                setUpdateInfo(!updateInfo);
              }}
            >
              Chỉnh sửa thông tin
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
            onClick={() => {
              setChangePass(!changePass);
            }}
          >
            Đổi mật khẩu
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.submit}
            fullWidth
            onClick={() => {
              localStorage.removeItem("KhachHang");
              history.push("/");
            }}
          >
            Đăng xuất
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
