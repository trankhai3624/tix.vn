import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useRef } from "react";
import { useStyles } from "./style";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TransitionsModal from "./ModalTrailer/index2";
import { Link } from "react-router-dom";

function Carousel() {
  const classes = useStyles();
  const ref = useRef({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  const settings = {
    // loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    // rows: 2,
    dots: false,
    dotsClass: `slick-dots ${classes.dots}`,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  const danhSachPhim = useSelector((state) => state.HomeReducer.danhSachPhim);
  // console.log(danhSachPhim);

  const renderPhimCarousel = () => {
    return danhSachPhim.map((item, index) => {
      return (
        <div className={classes.carouselItem} key={index}>
          <Link to={`/phim/${item?.maPhim}`}>
            <img
              src={item.hinhAnh}
              className={classes.img}
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
    <div>
      <Container maxWidth={false} className={classes.container}>
        <Slider ref={ref} {...settings}>
          {renderPhimCarousel()}
        </Slider>
      </Container>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {};
// };

export default Carousel;
