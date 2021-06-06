import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyle from "./style";
import { Container, useMediaQuery } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import { Scrollbars } from "react-custom-scrollbars";
import { ChangeMaHeThongRap } from "../../containers/HomeTemplate/Home/modules/constants";
import HeThongRap from "./heThongRap";
import CumRap from "./cumRap";
import Phim from "./phim";
import { useTheme } from "@material-ui/core/styles";

export default function VerticalTabs() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const LichChieuHeThongRap = useSelector(
    (state) => state.HomeReducer.lichChieuHeThongRap
  );
  const loading = useSelector(
    (state) => state.HomeReducer.loadingLichChieuHeThongRap
  );

  const [heThongRap, setHeThongRap] = useState("BHDStar");
  const [cumRap, setCumRap] = useState("bhd-star-cineplex-pham-hung");
  const theme = useTheme();

  useEffect(() => {
    dispatch({ type: ChangeMaHeThongRap, payload: heThongRap });
  }, []);

  const cumRapList = LichChieuHeThongRap.filter(
    (LichChieuHeThongRap) => LichChieuHeThongRap.maHeThongRap === heThongRap
  );

  if (loading) return null;
  return (
    <Container className={classes.container}>
      <Grid justify="center" container spacing={1}>
        {/*  hệ thống rạp  */}
        <Grid justify="center" item className={classes.column} xs={1}>
          <List className={classes.columnList}>
            <HeThongRap />
          </List>
        </Grid>
        {/*  cụm rạp  */}
        <Grid item className={`${classes.column} `} xs={3} justify="center">
          <List className={classes.columnList}>
            <CumRap />
          </List>
        </Grid>
        {/*  phim  */}
        <Grid item className={`${classes.column} `} xs={5}>
          <List className={classes.columnList}>
            <Phim />
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}
