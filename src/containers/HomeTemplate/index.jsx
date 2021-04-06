import React, { Component } from "react";
import { Route } from "react-router-dom";
import Carousel from "../../components/Carousel";
import FilmList from "../../components/FilmList/filmList";
// import Carousel from "../../components/Carousel";
import Header from "../../components/HomeNavbar";
import FilmSelect from "../../components/Selector";
function LayoutHome(props) {
  return (
    <>
      <Header />
      <Carousel />
      <FilmSelect />
      <FilmList />
      {props.children}
    </>
  );
}

export default class HomeTemplate extends Component {
  render() {
    const { exact, path, component } = this.props;
    return (
      <LayoutHome>
        <Route exact={exact} path={path} component={component} />
      </LayoutHome>
    );
  }
}
