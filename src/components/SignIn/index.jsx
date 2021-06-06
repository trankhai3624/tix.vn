import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DangNhap } from "../../containers/HomeTemplate/Sign/modules/actions";
import { Container } from "@material-ui/core";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash/fp";
import ReactDOM from "react-dom";
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

export default function SignIn() {
  const err = useSelector((state) => state.AuthReducer.errSignIn);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    dispatch(DangNhap(data, history));
    console.log(history);
  };

  const renderNoti = () => {
    if (err) {
      return <div className="alert alert-danger">{err.response.data}</div>;
    }
  };

  return (
    <Container component="main" maxWidth="false" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <HttpsOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography className={classes.signIn} component="h1" variant="h5">
          Sign in
        </Typography>
        {renderNoti()}
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={classes.label}>Tài khoản</label>
          <input
            className={classes.input}
            {...register("taiKhoan", {
              required: "Tài khoản không thể bỏ trống",
            })}
          />

          <ErrorMessage errors={errors} name="taiKhoan">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <div className={classes.errNoti}>
                  <p key={type}>{message}</p>
                </div>
              ))
            }
          </ErrorMessage>

          <label className={classes.label}>Mật khẩu</label>
          <input
            className={classes.input}
            {...register("matKhau", {
              required: "Mật khẩu không thể bỏ trống.",
            })}
          />
          <div className={classes.errNoti}>
            <ErrorMessage errors={errors} name="matKhau">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              }
            </ErrorMessage>
          </div>
          <input
            className={`${classes.input} ${classes.submit}`}
            type="submit"
            value="Đăng nhập"
          />
        </form>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
}
