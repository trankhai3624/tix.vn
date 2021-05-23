import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { DangNhap } from "./modules/actions";
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [account, setAccount] = useState({ taiKhoan: "", matKhau: "" });
  const err = useSelector((state) => state.SignInReducer.err);
  const data = useSelector((state) => state.SignInReducer.data);
  const loading = useSelector((state) => state.SignInReducer.loading);
  const dispatch = useDispatch();
  // const history = createBrowserHistory();
  const history = useHistory();
  const renderNoti = () => {
    if (err) {
      return <div className="alert alert-danger">{err.response.data}</div>;
    }
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setAccount({
      ...account,
      [name]: value,
    });
  };
  // useEffect({});

  const handleSignIn = (event) => {
    event.preventDefault();
    // console.log(account);
    dispatch(DangNhap(account, history));
  };
  // console.log(account);
  // console.log(err);
  // console.log(loading);
  // console.log(data);
  // console.log("abc");
  // console.log(localStorage.getItem([0]));
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>AuthPage</h3>
          {renderNoti()}
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
            <a>sign up</a>
          </form>
        </div>
      </div>
    </div>
  );
}
