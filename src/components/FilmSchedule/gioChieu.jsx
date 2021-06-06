import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import useStyle from "./style";

function GioChieu({ data, ngayChieu }) {
  const classes = useStyle();

  const history = useHistory();
  const renderGioChieu = () => {
    return data
      .filter((lichChieu) => lichChieu.date === ngayChieu)
      .map(({ time, maLichChieu }) => {
        return (
          <Button
            className={classes.button}
            onClick={() => {
              history.push(`/datve/${maLichChieu}`);
            }}
            key={maLichChieu}
          >
            {time}
          </Button>
        );
      });
  };
  return <>{renderGioChieu()}</>;
}

export default GioChieu;
