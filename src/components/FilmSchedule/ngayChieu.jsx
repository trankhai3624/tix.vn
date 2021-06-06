import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import React, { useState } from "react";
import GioChieu from "./gioChieu";
import useStyle from "./style";

function NgayChieu({ data }) {
  const classes = useStyle();
  const [open, setOpen] = useState(true);
  const [expandDate, setExpandDate] = useState(null);

  const abc = data.map(({ ngayChieuGioChieu, maLichChieu }) => {
    return {
      date: new Date(ngayChieuGioChieu).toLocaleDateString(),
      time: new Date(ngayChieuGioChieu).toLocaleTimeString(),
      maLichChieu: maLichChieu,
    };
  });

  const a = data.map((item) => {
    return new Date(item.ngayChieuGioChieu).toLocaleDateString();
  });
  const b = [...new Set(a)];

  const renderNgayChieu = () => {
    return b.map((item, index) => {
      return (
        <>
          <ListItem
            key={index}
            button
            onClick={() => {
              if (expandDate == item) {
                setOpen(false);
                setExpandDate(null);
              } else {
                setOpen(true);
                setExpandDate(item);
              }
            }}
          >
            <ListItemText primary={item} />
            {open && item === expandDate ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={open && item === expandDate}
            timeout="auto"
            unmountOnExit
          >
            <List>
              <GioChieu data={abc} ngayChieu={item} />
            </List>
          </Collapse>
        </>
      );
    });
  };

  return <>{renderNgayChieu()}</>;
}

export default NgayChieu;
