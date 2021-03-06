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
            <img
              className={classes.imgPoster}
              src={filmDetail?.hinhAnh}
              alt=""
            />
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
              100 ph??t - 0 IMDb - 2D/Digital
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
                label="L???ch Chi???u"
                {...a11yProps(0)}
              />
              <Tab
                className={`${classes.textColorInherit}`}
                label="Th??ng Tin"
                {...a11yProps(1)}
              />
              <Tab
                className={`${classes.textColorInherit}`}
                label="????nh Gi??"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          {/* // * L???ch chi???u */}
          <TabPanel value={value} index={0}>
            {/* <Phim /> */}
          </TabPanel>
          {/* // * Th??ng tin */}
          <TabPanel value={value} index={1}>
            <Grid container>
              {/* // * Chi ti???t */}
              <Grid container xs={6}>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Ng??y c??ng chi???u</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>16.04.2021</p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>?????o di???n</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>L?? H???i</p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Di???n vi??n</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>
                    Ti???t C????ng, Hu???nh ????ng, M???c V??n Khoa, ???c Thanh V??n
                  </p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Th??? Lo???i</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}></p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>?????nh d???ng</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>2D/Digital</p>
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.infoTitle}>Qu???c Gia SX</p>
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.infoDetail}>Vi???t Nam</p>
                </Grid>
              </Grid>
              {/* // * N???i dung */}
              <Grid container xs={6}>
                <Grid item xs={12}>
                  <p className={classes.infoTitle}>N???i dung</p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.infoDetail}>
                    L???t M???t 5: 48H k??? v??? Hi???n - m???t c???u v???n ?????ng vi??n v?? thu???t
                    sau khi gi???i ngh??? v?? ch???n th????ng ???? c??ng v??? v?? con g??i v???
                    qu?? th??m gia ????nh L??m. H??? b??? cu???n v??o m???t cu???c r?????t ??u???i v???i
                    tay ph???n di???n A D??n. ????? b???o v??? cho gia ????nh nh???, Hi???n ph???i
                    ????a v??? con ch???y tr???n kh???p mi???n T??y s??ng n?????c v???i s??? tr??? gi??p
                    c???a ng?????i b???n th???t th?? v?? h??i h?????c.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          {/* // * ????nh gi?? */}
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
      </Container>
    </Container>
  );
}

export default ChiTiet;
