import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import news1 from "../../img/news/24h/lat-mat-48h-16177782153424.png";
import news2 from "../../img/news/24h/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png";
import news3 from "../../img/news/24h/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png";
import news4 from "../../img/news/24h/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png";

function News() {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Typography align="center" className={classes.typo}>
        Tin Tức
      </Typography>
      <Grid container>
        <Grid className={classes.newsItem} item xs={6}>
          <img className={classes.img} src={news1}  alt="" />
          <Typography className={classes.title}>
            Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt:
            48H đậm chất
          </Typography>
          <Typography className={classes.description}>
            Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi
            gay cấn thót tim fans hâm mộ
          </Typography>
        </Grid>
        <Grid className={classes.newsItem} item xs={6}>
          <img className={classes.img} src={news2}  alt="" />
          <Typography className={classes.title}>
            Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt:
            48H đậm chất
          </Typography>
          <Typography className={classes.description}>
            Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi
            gay cấn thót tim fans hâm mộ
          </Typography>
        </Grid>
        <Grid className={classes.newsItem} item xs={4}>
          <img className={classes.img} src={news3}  alt="" />
          <Typography className={classes.title}>
            Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt:
            48H đậm chất
          </Typography>
          <Typography className={classes.description}>
            Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi
            gay cấn thót tim fans hâm mộ
          </Typography>
        </Grid>
        <Grid className={classes.newsItem} item xs={4}>
          <img className={classes.img} src={news4}  alt="" />
          <Typography className={classes.title}>
            Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt:
            48H đậm chất
          </Typography>
          <Typography className={classes.description}>
            Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi
            gay cấn thót tim fans hâm mộ
          </Typography>
        </Grid>
        <Grid className={classes.newsItem} item xs={4}>
          <Grid className={classes.newsSmall} item xs={12}>
            <img className={classes.imgSmall} src={news4}  alt="" />
            <Typography className={classes.titleSmall}>
              Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt:
              48H đậm chất
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default News;
