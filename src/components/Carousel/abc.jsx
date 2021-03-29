import React, { useRef } from "react";
import { useStyles } from "./style";
import Slider from "react-slick";
import poster1 from "../../img/carousel/p1.jpg";
import poster2 from "../../img/carousel/p2.jpg";
import poster3 from "../../img/carousel/p3.png";
import poster4 from "../../img/carousel/p4.jpg";
import { Box, Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MovieFilterSharpIcon from "@material-ui/icons/MovieFilterSharp";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Carousel = () => {
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
    infinite: true,
    arrows: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    dots: true,
    dotsClass: `slick-dots ${classes.dots}`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.bgColor}`}>
        <Grid container className={classes.header}>
          <Grid item xs={6} className={`${classes.headerItem}`}>
            {/* <MovieFilterSharpIcon
              className={`${classes.logo}`}
              style={{ margin: "0px 1rem 0 4.5rem", color: "#FAFAFA" }}
            />
            <h1 className={`${classes.logo}`} style={{ fontWeight: "700" }}>
              Có làm mới có ăn
            </h1> */}
          </Grid>
          <Grid item xs={6} className={classes.headerItem}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm kiếm phim…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
        </Grid>
        <Box className={classes.carousel}>
          <Slider ref={ref} {...settings}>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img alt="alo alo" src={poster1} />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={4} className={classes.stackItem}>
                      <PlayCircleFilledIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Trailer
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <AddShoppingCartIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Đặt vé
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <ErrorOutlineIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img src={poster2} />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={4} className={classes.stackItem}>
                      <PlayCircleFilledIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Trailer
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <AddShoppingCartIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Đặt vé
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <ErrorOutlineIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img src={poster3} />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={4} className={classes.stackItem}>
                      <PlayCircleFilledIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Trailer
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <AddShoppingCartIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Đặt vé
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <ErrorOutlineIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.containerAll}>
                <div className={classes.containerImage}>
                  <img src={poster4} />
                  <Grid
                    container
                    spacing={3}
                    className={classes.stackContainer}
                  >
                    <Grid item xs={4} className={classes.stackItem}>
                      <PlayCircleFilledIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Trailer
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <AddShoppingCartIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Đặt vé
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.stackItem}>
                      <ErrorOutlineIcon />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Slider>
        </Box>
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {};
// };

export default Carousel;
