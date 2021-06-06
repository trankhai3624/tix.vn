import { Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import cinema from "../../img/cinema.jpg";

import useStyles from "./style";
import logo1 from "../../img/footer/customer/1.png";
import logo2 from "../../img/footer/customer/lotte.png";
import logo3 from "../../img/footer/customer/bhd.png";
import logo4 from "../../img/footer/customer/cgv.png";
import logo5 from "../../img/footer/customer/5.jpg";
import logo6 from "../../img/footer/customer/6.png";
import logo7 from "../../img/footer/customer/7.jpg";
import logo8 from "../../img/footer/customer/cine.png";
import logo9 from "../../img/footer/customer/9.png";
import logo10 from "../../img/footer/customer/10.png";
import facebook from "../../img/footer/customer/facebook.png";
import zalo from "../../img/footer/customer/zalo.png";

import apple from "../../img/footer/customer/apple.png";
import android from "../../img/footer/customer/android.png";

import zion from "../../img/footer/customer/zion-logo.jpg";

import certificate from "../../img/footer/customer/d1e6bd560daa9e20131ea8a0f62e87f8.png";

function Footer() {
  const classes = useStyles();
  const logo = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  const renderImg = logo.map((img, index) => {
    return (
      <a href="#" key={index}>
        <img className={classes.logo} src={img} alt="" />
      </a>
    );
  });
  return (
    <Container maxWidth={false} className={classes.container}>
      <Container className={classes.content} maxWidth="md">
        <Grid justify="center" container className={classes.contentAbove}>
          <Grid item xs={4}>
            <Typography className={classes.title}>TIX</Typography>
            <Grid container>
              <Grid item xs={6}>
                <Link>FAQ</Link>
              </Grid>{" "}
              <Grid item xs={6}>
                <Link>Thỏa thuận sử dụng</Link>
              </Grid>{" "}
              <Grid item xs={6}>
                <Link>Chính sách bảo mật</Link>
              </Grid>{" "}
              <Grid item xs={6}>
                <Link>Brand Guidelines</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} className={classes.doiTac}>
            <Typography className={classes.title}>ĐỐI TÁC</Typography>
            <Grid container>{renderImg}</Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.title}>MOBILE APP</Typography>
            <Grid container>
              <a>
                <img className={classes.app} src={apple} alt="" />
              </a>
              <a>
                <img className={classes.app} src={android} alt="" />
              </a>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.title}>SOCIAL</Typography>
            <a>
              <img className={classes.app} src={facebook} alt="" />
            </a>
            <a>
              <img className={classes.app} src={zalo} alt="" />
            </a>
          </Grid>
        </Grid>
        <Grid container className={classes.companyInfo}>
          <Grid item md={1}>
            <img className={classes.companyLogo} src={zion} alt="" />
          </Grid>
          <Grid className={classes.infoMid} item md={9}>
            <Typography className={`${classes.branch} ${classes.infoTypo}`}>
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </Typography>
            <Typography className={classes.infoTypo}>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
              <Typography className={classes.infoTypo}>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              </Typography>
              <Typography className={classes.infoTypo}>
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </Typography>
              <Typography className={classes.infoTypo}>
                Số Điện Thoại (Hotline): 1900 545 436
              </Typography>
              <Typography className={classes.infoTypo}>
                Email:
                <a
                  className={classes.email}
                  href="mailto:trankhai3624@gmail.com"
                >
                  trankhai3624@gmail.com
                </a>
              </Typography>
            </Typography>
          </Grid>
          <Grid item md={2}>
            <img src={certificate} className={classes.certificate} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Footer;
