import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyle from "./style";
import { ChangeMaCumRap } from "../../containers/HomeTemplate/Home/modules/constants";
import { ListItem } from "@material-ui/core";
import { ListItemAvatar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import cinema from "../../img/cinema.jpg";

function CumRap() {
  const classes = useStyle();

  const dispatch = useDispatch();

  const [maCumRap, setMaCumRap] = useState();

  const storeMaCumRap = useSelector((state) => state.HomeReducer.maCumRap);
  useEffect(() => {
    setMaCumRap(storeMaCumRap);
  });

  const listCumRap = useSelector((state) => state.HomeReducer.cumRap);
  const renderCumRap = () => {
    return listCumRap[0].lstCumRap.map((item, index) => {
      return (
        <ListItem
          key={item.maCumRap}
          button
          className={`${
            item.maCumRap === maCumRap ? classes.active : classes.deActive
          } ${classes.borderBottom} ${classes.cumRapItem}`}
          onClick={() => {
            setMaCumRap(item.maCumRap);
            dispatch({ type: ChangeMaCumRap, payload: item.maCumRap });
          }}
        >
          <ListItemAvatar>
            <Avatar src={cinema} />
          </ListItemAvatar>
          <ListItemText
            primary={`${item.tenCumRap.slice(0, 20)} "...`}
            secondary={`${item.diaChi.slice(0, 10)} "...`}
          />
        </ListItem>
      );
    });
  };
  if (listCumRap === null) {
    return null;
  }
  return <>{renderCumRap()}</>;
}

export default CumRap;
