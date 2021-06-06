import { ListItemAvatar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import NgayChieu from "./ngayChieu";
import useStyle from "./style";

function Phim() {
  const classes = useStyle();

  const filmList = useSelector((state) => state.HomeReducer.filmList);
  const [expandFilm, setExpandFilm] = useState(null);
  const [open, setOpen] = React.useState(true);
  // console.log(filmList);
  const renderPhimList = () => {
    return filmList.map((item, index) => {
      return (
        <>
          <ListItem
            key={item.maPhim}
            button
            onClick={() => {
              if (expandFilm == item.maPhim) {
                setOpen(false);
                setExpandFilm(null);
              } else {
                setOpen(true);
                setExpandFilm(item.maPhim);
              }
            }}
          >
            <ListItemAvatar>
              <Avatar src={item.hinhAnh} />
            </ListItemAvatar>
            <ListItemText primary={`${item.tenPhim}`} />
            {open && item.maPhim === expandFilm ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </ListItem>
          <Collapse
            in={open && item.maPhim === expandFilm}
            timeout="auto"
            unmountOnExit
          >
            <List>
              <NgayChieu data={item.lstLichChieuTheoPhim} />
            </List>
          </Collapse>
        </>
      );
    });
  };
  if (filmList === null) {
    return "Mời chọn cụm rạp";
  }
  return <>{renderPhimList()}</>;
}

export default Phim;
