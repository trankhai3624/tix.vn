import React from "react";
import { Redirect, Route } from "react-router-dom";
import Footer from "../../components/Footer/footer";
// import Carousel from "../../components/Carousel";
import Header from "../../components/HomeNavbar";
import { useSelector } from "react-redux";
// import HomeReducer from "../HomeTemplate/Home/modules/actions";

function LayoutHome(props) {
  return (
    <>
      <Header />

      {props.children}
      <Footer />
    </>
  );
}

const HomeTemplate = ({ exact, path, component }) => {
  if (!localStorage.getItem("KhachHang")) return <Redirect to="/auth" />;
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={component} />
    </LayoutHome>
  );
};

export default HomeTemplate;
