import React, { useRef } from "react";
import { useStyles } from "./style1";
// import { useStyles } from "./style2";
import { Container, useMediaQuery } from "@material-ui/core";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TransitionsModal from "../Carousel/ModalTrailer/index2";
import { Typography } from "@material-ui/core";

function  FilmList() {
  const classes = useStyles();
  const ref = useRef({});
  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const ArrowLeft = (props) => (
    <div className={`${classes.arrow} ${classes.arrowLeft}`} onClick={previous}>
      <ArrowBackIosIcon />
    </div>
  );
  const ArrowRight = (props) => (
    <div className={`${classes.arrow} ${classes.arrowRight}`} onClick={next}>
      <ArrowForwardIosIcon />
    </div>
  );
  const theme = useTheme();

  const settings = {
    // loop: true,
    slidesToShow: `${useMediaQuery(theme.breakpoints.down(1200)) ? 3 : 4}`,
    slidesToScroll: 4,
    arrows: `${useMediaQuery(theme.breakpoints.down(1200)) ? false : false}`,
    infinite: true,
    rows: `${useMediaQuery(theme.breakpoints.down(1200)) ? 1 : 2}`,
    dots: false,
    dotsClass: `slick-dots ${classes.dots}`,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  const danhSachPhim = useSelector((state) => state.HomeReducer.danhSachPhim);

  const renderFilmList = () => {
    return danhSachPhim.map((item, index) => {
      return (
        <div className={classes.filmItem} key={item.maPhim}>
          <Link to={`/phim/${item.maPhim}`}>
            <img
              className={classes.filmImg}
              src={item.hinhAnh}
              key={index}
              alt=""
            />
          </Link>
          <div className={classes.playIcon}>
            <TransitionsModal trailer={item.trailer} />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Typography className={classes.tab}>Đang chiếu</Typography>
      <Container className={classes.container}>
        <Slider ref={ref} {...settings}>
          {renderFilmList()}
        </Slider>
      </Container>
    </>
  );
}

export default FilmList;
