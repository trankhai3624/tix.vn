import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import backapp from "../../img/app/backapp.jpg";
import mobile from "../../img/app/mobile.png";
import Slider from "react-slick";
import phim1 from "../../img/app/slide1.jpg";
import phim2 from "../../img/app/slide2.jpg";
import phim3 from "../../img/app/slide4.jpg";
import phim4 from "../../img/app/slide10.jpg";

import useStyles from "./style";

function MobileApp() {
  const classes = useStyles();
  const settings = {
    loop: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    dots: false,
    autoplay: true,
  };
  return (
    <Container
      className={classes.container}
      style={{ backgroundImage: `url(${backapp})` }}
      maxWidth={false}
    >
      <Grid container className={classes.content}>
        <Grid item md={6} sm={12} xs={12} className={classes.left}>
          <Typography className={classes.title}>
            Ứng dụng tiện lợi dành cho người yêu điện ảnh
          </Typography>
          <Typography className={classes.text}>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </Typography>
          <a
            href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
            target="_blank"
            className={classes.button}
          >
            App miễn phí - Tải về ngay
          </a>
          <Typography className={classes.text}>
            TIX có hai phiên bản{" "}
            <a
              href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
              target="_blank"
              className={classes.downloadLink}
            >
              iOS
            </a>{" "}
            &{" "}
            <a
              href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              target="_blank"
              className={classes.downloadLink}
            >
              Android
            </a>
          </Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box className={classes.right}>
            <img
              className={`${classes.imgResponsive} ${classes.phoneImg}`}
              src={mobile}
              alt="Loading..."
            />
            <div className={classes.sliderScreen}>
              <Slider {...settings}>
                <img src={phim1} width="100%" alt="" />
                <img src={phim2} width="100%" alt="" />
                <img src={phim3} width="100%" alt="" />
                <img src={phim4} width="100%" alt="" />
              </Slider>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MobileApp;
