import phim1 from "../../img/carousel/p1.jpg";
import phim2 from "../../img/carousel/p2.jpg";
import phim3 from "../../img/carousel/p3.png";
import phim4 from "../../img/carousel/p4.jpg";
import phim5 from "../../img/carousel/p5.jpg";
import Slider from "react-slick";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useState, useRef } from "react";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";

function Carousel() {
  const classes = useStyles();
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const ArrowLeft = (props) => (
    <div onClick={previous}>
      <ArrowBackIosIcon />
    </div>
  );
  const ArrowRight = (props) => (
    <div onClick={next}>
      <ArrowForwardIosIcon />
    </div>
  );

  const settings = {
    // loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // infinite: false,
    // rows: 2,
    dots: true,
    dotsClass: `slick-dots ${classes.dots}`,
    // nextArrow: <ArrowLeft />,
    // prevArrow: <ArrowRight />,
  };

  return (
    <div>
      <Container maxWidth className={classes.container}>
        <Slider {...settings}>
          <img src={phim1} className={classes.img} />
          <img src={phim2} className={classes.img} />
          <img src={phim3} className={classes.img} />
          <img src={phim4} className={classes.img} />
          <img src={phim5} className={classes.img} />
        </Slider>
      </Container>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {};
// };

export default Carousel;
