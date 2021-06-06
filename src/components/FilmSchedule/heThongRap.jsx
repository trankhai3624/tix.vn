import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyle from "./style";
import {
  ChangeMaHeThongRap,
  ChangeMaCumRap,
  ClearSelection,
} from "../../containers/HomeTemplate/Home/modules/constants";
import { ListItem } from "@material-ui/core";
import { ListItemAvatar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

function HeThongRap() {
  const classes = useStyle();

  const [heThongRap, setHeThongRap] = useState("BHDStar");

  const LichChieuHeThongRap = useSelector(
    (state) => state.HomeReducer.lichChieuHeThongRap
  );

  const dispatch = useDispatch();
  const renderHeThongRap = () => {
    return LichChieuHeThongRap.map((item, index) => {
      return (
        <ListItem
          key={item.maHeThongRap}
          button
          className={`${classes.heThongRapItem} ${classes.borderBottom}
          ${
            item.maHeThongRap === heThongRap ? classes.active : classes.deActive
          }`}
          onClick={() => {
            setHeThongRap(item.maHeThongRap);

            dispatch({
              type: ChangeMaHeThongRap,
              payload: item.maHeThongRap,
            });
            dispatch({ type: ClearSelection });
          }}
        >
          <ListItemAvatar>
            <Avatar
              src={item.logo}
              className={`${classes.logoImgHeThongRap} `}
            />
          </ListItemAvatar>
        </ListItem>
      );
    });
  };

  return <>{renderHeThongRap()}</>;
}

export default HeThongRap;
