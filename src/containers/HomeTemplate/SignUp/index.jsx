import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { DangKy } from "./modules/actions";
import { useDispatch, useSelector } from "react-redux";

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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [infoTaiKhoan, setInfoTaiKhoan] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP09",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const err = useSelector((state) => state.SignUpReducer.err);
  const loading = useSelector((state) => state.SignUpReducer.loading);
  const data = useSelector((state) => state.SignUpReducer.data);

  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setInfoTaiKhoan({
      ...infoTaiKhoan,
      [name]: value,
    });
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    // console.log(account);
    dispatch(DangKy(infoTaiKhoan));
  };

  const renderNoti = () => {
    if (err) {
      return <div className="alert alert-danger">{err.response.data}</div>;
    }
    if (data) {
      return <div className="alert alert-success">Đăng ký thành công</div>;
    }
  };

  console.log(infoTaiKhoan);
  console.log(err);
  console.log(loading);
  console.log(data);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {renderNoti()}
        <form onSubmit={handleSignUp} className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* // * Họ tên */}
            <Grid item xs={12}>
              <TextField
                autoComplete="hoTen"
                name="hoTen"
                variant="outlined"
                required
                fullWidth
                id="hoTen"
                label="Full Name"
                autoFocus
                onChange={handleOnChange}
              />
            </Grid>
            {/* // * Email */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleOnChange}
              />
            </Grid>
            {/* // * Số điện thoại */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="soDt"
                label="Số điện thoại"
                name="soDt"
                autoComplete="soDt"
                onChange={handleOnChange}
              />
            </Grid>
            {/* // * Tài khoản */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="taiKhoan"
                label="Tài khoản"
                type="taiKhoan"
                id="taiKhoan"
                autoComplete="taiKhoan"
                onChange={handleOnChange}
              />
            </Grid>
            {/* // * Mật khẩu */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="matKhau"
                label="Mật khẩu"
                type="password"
                id="matKhau"
                autoComplete="current-password"
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
