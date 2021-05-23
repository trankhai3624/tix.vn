import React from "react";
import { Redirect, Route } from "react-router-dom";
import Footer from "../../components/Footer/footer";
// import Carousel from "../../components/Carousel";
import Header from "../../components/HomeNavbar";
import { useSelector } from "react-redux";
// import HomeReducer from "../HomeTemplate/Home/modules/actions";

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
  if (!localStorage.getItem("QuanTri")) return <Redirect to="/auth" />;
  return (
    <LayoutAdmin>
      <Route exact={exact} path={path} component={component} />
    </LayoutAdmin>
  );
};

export default AdminTemplate;
