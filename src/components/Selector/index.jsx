import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "./style";
import { Button, Container, Grid } from "@material-ui/core";

export default function FilmSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //   console.log(age);
  return (
    <Container maxWidth="md" className={classes.form}>
      <Grid container spacing={1}>
        <Grid className={classes.gridItem} item xs>
          <FormControl className={`${classes.formControl} `}>
            <InputLabel id="film">Phim</InputLabel>
            <Select
              labelId="film"
              id="film"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Gái già lắm chiêu</MenuItem>
              <MenuItem value={20}>Bố già</MenuItem>
              <MenuItem value={30}>Raya</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridItem} item xs>
          <FormControl className={`${classes.formControl} `}>
            <InputLabel id="film">Rạp</InputLabel>
            <Select
              labelId="film"
              id="film"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>BHD Quang Trung</MenuItem>
              <MenuItem value={20}>Lotte Nguyễn Văn Lượng</MenuItem>
              <MenuItem value={30}>Galaxy Nguyễn Văn Quá</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridItem} item xs>
          <FormControl className={`${classes.formControl} `}>
            <InputLabel id="film">Ngày xem</InputLabel>
            <Select
              labelId="film"
              id="film"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Hôm nay</MenuItem>
              <MenuItem value={20}>Ngày mai</MenuItem>
              <MenuItem value={30}>Chủ nhật</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridItem} item xs>
          <FormControl className={`${classes.formControl} `}>
            <InputLabel id="film">Xuất chiếu</InputLabel>
            <Select
              labelId="film"
              id="film"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>14:00</MenuItem>
              <MenuItem value={20}>15:30</MenuItem>
              <MenuItem value={30}>20:00</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.gridItem} item xs>
          <Button className={classes.gridItem_Button}>Mua vé ngay</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
