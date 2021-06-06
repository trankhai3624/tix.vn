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
import Container from "@material-ui/core/Container";
import { DangKy } from "../../containers/HomeTemplate/Sign/modules/actions";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import useStyles from "./style";
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

export default function SignUp() {
  const classes = useStyles();

  const err = useSelector((state) => state.AuthReducer.errSignUp);
  const loading = useSelector((state) => state.AuthReducer.loadingSignUp);
  const dataSignUp = useSelector((state) => state.AuthReducer.dataSignUp);

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    criteriaMode: "all",
  });
  const currentPassword = watch(["matKhau"]);
  console.log(currentPassword);
  const onSubmit = (data) => {
    // setValue("maLoaiTaiKhoan", "value");
    dispatch(DangKy(data));
    if (dataSignUp != null) {
      reset();
    }

    // console.log(data);
  };

  const renderNoti = () => {
    if (err) {
      return <div className="alert alert-danger">{err.response.data}</div>;
    }
    if (dataSignUp) {
      return <div className="alert alert-success">Đăng ký thành công</div>;
      reset();
    }
  };

  // console.log(loading);
  // console.log(data);
  return (
    <Container component="main" maxWidth="false" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.signIn} component="h1" variant="h5">
          Sign up
        </Typography>
        {renderNoti()}
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Grid container spacing={3} justify="center">
            {/* // * Khách hàng */}
            <input
              className={classes.input}
              style={{ display: "none" }}
              value="KhachHang"
              {...register("maLoaiNguoiDung")}
            />
            {/* // * Mã nhóm */}
            <input
              className={classes.input}
              style={{ display: "none" }}
              value="GP09"
              {...register("maNhom")}
            />
            {/* // * Họ tên */}
            <Grid item xs={5}>
              <label className={classes.label}>Họ tên</label>
              <input
                className={classes.input}
                type="text"
                {...register("hoTen", {
                  required: "Họ tên không thể bỏ trống",
                  pattern: {
                    value: /^([^0-9]*)$/,
                    message: "Tên không thể dùng số",
                  },
                })}
              />
              <ErrorMessage errors={errors} name="hoTen">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
            </Grid>
            {/* // * Email */}
            <Grid item xs={5}>
              <label className={classes.label}>Email</label>
              <input
                className={classes.input}
                {...register("email", {
                  required: "Email không thể bỏ trống.",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Email không chính xác.",
                  },
                })}
              />
              <ErrorMessage errors={errors} name="email">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
            </Grid>
            {/* // * SDT */}
            <Grid item xs={5}>
              <label className={classes.label}>Số điện thoại</label>
              <input
                className={classes.input}
                {...register("soDt", {
                  required: "Số điện thoại không thể bỏ trống",
                  pattern: {
                    value:
                      /(\+84|0)+(3[2-9]|5[6|8|9]|9\d(?!5)|8[1-9]|7[0|6-9])+([0-9]{7})\b/,
                    message: "Số điện thoại không chính xác",
                  },
                })}
              />
              <ErrorMessage errors={errors} name="soDt">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
            </Grid>
            {/* // * Tài khoản */}
            <Grid item xs={5}>
              <label className={classes.label}>Tài khoản</label>
              <input
                className={classes.input}
                {...register("taiKhoan", {
                  required: "Tài khoản không thể bỏ trống",
                  minLength: {
                    value: 8,
                    message: "Tài khoản dài ít nhất 8 kí tự",
                  },
                  pattern: {
                    value: /^[a-z0-9]/,
                    message: "không đúng định dạng",
                  },
                })}
              />
              <ErrorMessage errors={errors} name="taiKhoan">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
            </Grid>
            {/* // * Mật khẩu */}
            <Grid item xs={5}>
              <label className={classes.label}>Mật khẩu</label>
              <input
                className={classes.input}
                type="password"
                {...register("matKhau", {
                  required: "Mật khẩu không thể bỏ trống",
                  pattern: {
                    value: /[^-\s]/,
                    message: "Không dùng khoản trắng",
                  },
                  minLength: { value: 8, message: "Mật khẩu ít nhất 8 kí tự" },
                })}
              />
              <ErrorMessage errors={errors} name="matKhau">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
            </Grid>
            {/* // * Xác nhận mật khẩu */}
            <Grid item xs={5}>
              <label className={classes.label}>Xác nhận mật khẩu</label>
              <input
                className={classes.input}
                type="password"
                {...register("matKhauRepeat", {
                  required: "Xác nhận lại mật khẩu.",
                  validate: (value) =>
                    value == currentPassword || "Mật khẩu không khớp",
                })}
              />
              <ErrorMessage errors={errors} name="matKhauRepeat">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
            </Grid>
            <input
              className={`${classes.input} ${classes.submit}`}
              type="submit"
              value="Đăng kí"
            />
          </Grid>
        </form>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
}
