import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "./style";
import { Button, Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { LayThongTinLichChieuPhim } from "../../containers/HomeTemplate/Home/modules/actions";
// import { LayThongTinLichChieuPhimRequest } from "../../containers/HomeTemplate/Home/modules/constants";

export default function FilmSelect() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const lichChieu = useSelector((state) => state.HomeReducer.lichChieuPhim);
  const loadingLichChieuPhim = useSelector(
    (state) => state.HomeReducer.loadingLichChieuPhim
  );
  const danhSachPhim = useSelector((state) => state.HomeReducer.danhSachPhim);

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

  console.log(infoSelect.maLichChieu);

  useEffect(() => {
    if (infoSelect.maPhim !== "") {
      handleDispatchMovie(infoSelect.maPhim);
    }
  }, [infoSelect.maPhim]);
  return (
    <Container maxWidth="md" className={classes.form}>
      <Grid container spacing={1}>
        <Grid className={classes.gridItem} item xs>
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
        <Grid className={classes.gridItem} item xs>
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
        <Grid className={classes.gridItem} item xs>
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
        <Grid className={classes.gridItem} item xs>
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

        <Grid className={classes.gridItem} item xs>
          <Button type="submit" className={classes.gridItem_Button}>
            Mua vé ngay
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
