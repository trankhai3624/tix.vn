import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
// import
import useStyle from "./style";
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

export default function VerticalTabs() {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(LayThongTinHeThongRap());
  // });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ThongTinHeThongRap = useSelector(
    (state) => state.HomeReducer.heThongRap
  );
  // console.log(ThongTinHeThongRap);

  const renderThongTinHeThongRap = () => {
    return ThongTinHeThongRap.map((item, index) => {
      return (
        <Tab
          label={<img src={item.logo} className={classes.logo} alt="" />}
          key={index}
          className={classes.tab}
          {...a11yProps(index)}
        />
      );
    });
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={1}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {renderThongTinHeThongRap()};
      </Tabs>
    </div>
  );
}
