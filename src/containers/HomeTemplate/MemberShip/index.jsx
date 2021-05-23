import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from "./style";
import AccountInfo from "./AccountInfo";
import { useDispatch, useSelector } from "react-redux";
import { ThongTinTaiKhoan } from "../MemberShip/modules/actions";
import { Container } from "@material-ui/core";
import TicketInfo from "./TicketInfo";
// import DataList from "./TicketInfo/dataList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function MemberShip() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const data = useSelector((state) => state.MemberReducer.data);
  const loading = useSelector((state) => state.MemberReducer.loading);

  const err = useSelector((state) => state.MemberReducer.err);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [dataRequest, setDataRequest] = useState({ taiKhoan: "" });
  const dispatch = useDispatch();

  // console.log(err);
  useEffect(() => {
    if (localStorage.getItem("KhachHang")) {
      let { taiKhoan } = JSON.parse(localStorage.getItem("KhachHang"));

      dispatch(ThongTinTaiKhoan({ taiKhoan }));
    }
  }, []);
  // console.log(data);
  if (loading) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        scrollButtons="off"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        centered={true}
        variant="fullWidth"
      >
        <Tab label="Tài khoản" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item 3" {...a11yProps(2)} />
      </Tabs>
      {/* //** Account Info */}
      <div className={classes.tabpanel}>
        <TabPanel value={value} index={0}>
          <div className={classes.containerAccountInfo}>
            <AccountInfo user={data} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TicketInfo ticketInfo={data} />
        </TabPanel>
      </div>
    </div>
  );
}

export default MemberShip;
