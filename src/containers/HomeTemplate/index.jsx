import React from "react";
import { Redirect, Route } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/HomeNavbar";

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
  if (localStorage.getItem("QuanTri")) {
    localStorage.removeItem("QuanTri");
  }
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={component} />
    </LayoutHome>
  );
};

export default HomeTemplate;
