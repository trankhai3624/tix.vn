import {
  AppBar,
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { LayThongTinPhim } from "./modules/actions";
import { useStyles } from "./style";
import PropTypes from "prop-types";
import Rap from "../../../components/FilmSchedule/Rap";
import Phim from "../../../components/FilmSchedule/Phim";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ChiTiet(props) {
  const dispatch = useDispatch();
  const filmDetail = useSelector((state) => state.DetailReducer.phimDetail);
  const loading = useSelector((state) => state.DetailReducer.loading);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  useEffect(() => {
    const maPhim = props.match.params.maPhim;
    // console.log(maPhim);
    dispatch(LayThongTinPhim(maPhim));
  }, []);
  console.log(filmDetail);
  console.log(loading);
  // console.log(maPhim);
  // console.log(loading);
  // console.log(filmDetail);
  // if
  return (
    <Container maxWidth={false} className={classes.containerBackground}>
      <Container className={classes.containerItem} maxWidth="md">
        <Grid className={classes.itemTop} container xs={12}>
          {/* // *Phim item */}
          <Grid className={classes.filmPoster} item xs={3}>
            <img className={classes.imgPoster} src={filmDetail?.hinhAnh} />
          </Grid>
          <Grid className={classes.filmInfo} item xs={6}>
            <Typography className={classes.showingDay}>
              {filmDetail?.ngayKhoiChieu}
            </Typography>
            <Typography>
              <span className={classes.ageTag}>P</span>
              <span className={classes.filmName}>{filmDetail?.tenPhim}</span>
            </Typography>
            <Typography className={classes.filmDuration}>
              100 phút - 0 IMDb - 2D/Digital
            </Typography>
          </Grid>
          {/* // *Rating score */}
          <Grid className={classes.filmRating} item xs={2}>
            <CircularProgressbar
              value={filmDetail?.danhGia}
              text={filmDetail?.danhGia}
              maxValue={10}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#222831",
                textColor: "#fff",
                pathColor: "#00f3ff",
                trailColor: "transparent",
              })}
            />
          </Grid>
        </Grid>
        <Grid className={classes.itemBot}>
          <AppBar
            className={`${classes.colorPrimary} ${classes.elevation4} ${classes.appBar}  `}
            position="static"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab
                className={`${classes.textColorInherit}`}
                label="Lịch Chiếu"
                {...a11yProps(0)}
              />
              <Tab
                className={`${classes.textColorInherit}`}
                label="Thông Tin"
                {...a11yProps(1)}
              />
              <Tab
                className={`${classes.textColorInherit}`}
                label="Đánh Giá"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          {/* // * Lịch chiếu */}
          <TabPanel value={value} index={0}>
            <Phim />
          </TabPanel>
          {/* // * Thông tin */}
          <TabPanel value={value} index={1}>
            <Grid container>
              {/* // * Chi tiết */}
              <Grid container xs={6}>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Ngày công chiếu</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>16.04.2021</p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Đạo diễn</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>Lý Hải</p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Diễn viên</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>
                    Tiết Cương, Huỳnh Đông, Mạc Văn Khoa, Ốc Thanh Vân
                  </p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Thể Loại</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}></p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Định dạng</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>2D/Digital</p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Quốc Gia SX</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>Việt Nam</p>
                </Grid>
              </Grid>
              {/* // * Nội dung */}
              <Grid container xs={6}>
                <Grid item xs={12}>
                  <p className={classes.infoTitle}>Nội dung</p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.infoDetail}>
                    Lật Mặt 5: 48H kể về Hiền - một cựu vận động viên võ thuật
                    sau khi giải nghệ vì chấn thương đã cùng vợ và con gái về
                    quê thăm gia đình Lâm. Họ bị cuốn vào một cuộc rượt đuổi với
                    tay phản diện A Dìn. Để bảo vệ cho gia đình nhỏ, Hiền phải
                    đưa vợ con chạy trốn khắp miền Tây sông nước với sự trợ giúp
                    của người bạn thật thà và hài hước.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          {/* // * Đánh giá */}
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
      </Container>
    </Container>
  );
}

export default ChiTiet;
