import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "./style";
import {
  Button,
  Container,
  Grid,
  Link,
  useMediaQuery,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { LayThongTinLichChieuPhim } from "../../containers/HomeTemplate/Home/modules/actions";
import { Redirect, useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";

// import { LayThongTinLichChieuPhimRequest } from "../../containers/HomeTemplate/Home/modules/constants";

export default function FilmSelect() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const lichChieu = useSelector((state) => state.HomeReducer.lichChieuPhim);
  const loadingLichChieuPhim = useSelector(
    (state) => state.HomeReducer.loadingLichChieuPhim
  );
  const danhSachPhim = useSelector((state) => state.HomeReducer.danhSachPhim);
  const theme = useTheme();
  const [infoSelect, setInfoSelect] = useState({
    maPhim: "",
    heThongRap: "",
    cumRap: "",
    maLichChieu: "",
  });

  // const []

  const renderPhim = () => {
    return danhSachPhim.map((item, index) => {
      return (
        <MenuItem key={item.maPhim} value={item.maPhim}>
          {item.tenPhim}
        </MenuItem>
      );
    });
  };

  const renderHeThongRap = () => {
    if (loadingLichChieuPhim) {
      return (
        <MenuItem disabled key="1" value="1">
          Vui lòng chọn phim
        </MenuItem>
      );
    } else {
      return lichChieu.heThongRapChieu.map((item, index) => {
        return (
          <MenuItem key={item.maHeThongRap} value={item.maHeThongRap}>
            {item.tenHeThongRap}
          </MenuItem>
        );
      });
    }
  };

  const renderCumRap = () => {
    if (infoSelect.heThongRap && lichChieu !== "") {
      let filterCumRap = lichChieu.heThongRapChieu.filter((cumRap) => {
        return cumRap.maHeThongRap === infoSelect.heThongRap;
      });

      return filterCumRap[0].cumRapChieu.map((item, index) => {
        return (
          <MenuItem key={item.maCumRap} value={item.maCumRap}>
            {item.tenCumRap}
          </MenuItem>
        );
      });
    } else {
      return (
        <MenuItem disabled key="1" value="1">
          Vui lòng chọn phim và hệ thống rạp.
        </MenuItem>
      );
    }
  };

  const renderSuatChieu = () => {
    if (infoSelect.heThongRap && infoSelect.cumRap && lichChieu !== "") {
      let filterCumRap = lichChieu.heThongRapChieu.filter((cumRap) => {
        return cumRap.maHeThongRap === infoSelect.heThongRap;
      });

      let filterNgayChieu = filterCumRap[0].cumRapChieu.filter((cumRap) => {
        return cumRap.maCumRap === infoSelect.cumRap;
      });

      return filterNgayChieu[0].lichChieuPhim.map((item, index) => {
        return (
          <MenuItem key={index} value={item.maLichChieu}>
            {item.ngayChieuGioChieu}
          </MenuItem>
        );
      });
    } else {
      return (
        <MenuItem disabled key="1" value="1">
          Vui lòng chọn phim, hệ thống rạp và cụm rạp.
        </MenuItem>
      );
    }
  };

  const handleDispatchMovie = (maPhim) => {
    if (maPhim !== null || maPhim !== "") {
      dispatch(LayThongTinLichChieuPhim(maPhim));
    }
  };
  const muaVe = () => {
    if (!localStorage.getItem("KhachHang")) {
      alert("Đăng nhập trước khi đặt vé!");
      history.push("/sign");
    } else if (infoSelect.maLichChieu == "") {
      return alert("Vui lòng chọn suất chiếu.");
    } else if (localStorage.getItem("KhachHang")) {
      history.push(`/datve/${infoSelect.maLichChieu}`);
    }
  };

  useEffect(() => {
    if (infoSelect.maPhim !== "") {
      handleDispatchMovie(infoSelect.maPhim);
    }
  }, [infoSelect.maPhim]);
  return (
    <Container className={classes.form}>
      <Grid
        container
        spacing={1}
        justify="center"
        alignItem="center"
        alignContent="center"
      >
        <Grid className={classes.gridItem} item xs={2}>
          <FormControl className={`${classes.formControl} `}>
            <InputLabel id="film">Phim</InputLabel>
            <Select
              labelId="film"
              id="film"
              value={infoSelect.maPhim}
              onChange={(event, newValue) => {
                setInfoSelect({
                  maPhim: event.target.value,
                  heThongRap: "",
                  cumRap: "",
                  maLichChieu: "",
                });
              }}
            >
              {renderPhim()}
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridItem} item xs={2}>
          <FormControl className={`${classes.formControl} `}>
            <InputLabel id="heThongRap">Hệ thống rạp</InputLabel>
            <Select
              labelId="heThongRap"
              id="heThongRap"
              value={infoSelect.heThongRap}
              onChange={(event) => {
                setInfoSelect({
                  ...infoSelect,
                  heThongRap: event.target.value,
                  cumRap: "",
                  maLichChieu: "",
                });
              }}
            >
              {renderHeThongRap()}
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridItem} item xs={2}>
          <FormControl className={`${classes.formControl} `}>
            <InputLabel id="cumRap">Cụm rạp</InputLabel>
            <Select
              labelId="cumRap"
              id="cumRap"
              value={infoSelect.cumRap}
              onChange={(event) => {
                setInfoSelect({
                  ...infoSelect,
                  cumRap: event.target.value,
                  maLichChieu: "",
                });
              }}
            >
              {renderCumRap()}
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridItem} item xs={2}>
          <FormControl className={`${classes.formControl} `}>
            <InputLabel id="suatChieu">Suất chiếu</InputLabel>
            <Select
              labelId="suatChieu"
              id="suatChieu"
              value={infoSelect.ngayChieu}
              onChange={(event) => {
                setInfoSelect({
                  ...infoSelect,
                  maLichChieu: event.target.value.slice(0, 10),
                });
              }}
            >
              {renderSuatChieu()}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          className={classes.gridItem}
          item
          xs={useMediaQuery(theme.breakpoints.down(1021)) ? 5 : 2}
        >
          <Button
            type="submit"
            className={classes.gridItem_Button}
            onClick={() => {
              muaVe();
            }}
          >
            Mua vé ngay
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
