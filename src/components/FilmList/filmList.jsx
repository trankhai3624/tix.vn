import React, { useRef } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from "./style";
import { Container } from "@material-ui/core";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { useSelector } from "react-redux";
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

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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

  const settings = {
    // loop: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    infinite: true,
    rows: 2,
    dots: false,
    dotsClass: `slick-dots ${classes.dots}`,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const danhSachPhim = useSelector((state) => state.HomeReducer.danhSachPhim);
  // console.log(danhSachPhim);

  const renderFilmList = () => {
    return danhSachPhim.map((item, index) => {
      return (
        <img
          className={classes.filmItem}
          src={item.hinhAnh}
          key={index}
          alt=""
        />
      );
    });
  };

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab className={classes.tab} label="Đang chiếu" {...a11yProps(0)} />
        </Tabs>
      </AppBar>

      <Container maxWidth="md" className={classes.container}>
        <TabPanel value={value} index={0}>
          <Slider ref={ref} {...settings}>
            {renderFilmList()}
          </Slider>
        </TabPanel>
      </Container>
    </div>
  );
}
