import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

function LayoutAdmin(props) {
  return (
    <>
      {/* <Header /> */}

      {props.children}
      {/* <Footer /> */}
    </>
  );
}

const AdminTemplate = ({ exact, path, component }) => {
  const history = useHistory();
  if (localStorage.getItem("KhachHang")) {
    alert("Tài khoản không có quyền truy cập.");
    history.push("/");
  } else if (!localStorage.getItem("QuanTri")) {
    return <Redirect to="/auth" />;
  }
  return (
    <LayoutAdmin>
      <Route exact={exact} path={path} component={component} />
    </LayoutAdmin>
  );
};

export default AdminTemplate;
