import React, { useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useStyles } from "../userStyle";
import EditModal from "./editModal";
import DeleteModal from "./delModal";
import AddModal from "./addModal";
import { useDispatch, useSelector } from "react-redux";
import { LayDanhSachPhim } from "../modules/actions";

export default function FilmManagement() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const rows = [];
  const dataFilm = useSelector((state) => state.AdminReducer.dataFilm);
  useEffect(() => {
    dispatch(LayDanhSachPhim());
  }, []);

  const columns = [
    { field: "maPhim", headerName: "Mã phim", width: 100 },
    { field: "tenPhim", headerName: "Tên phim", width: 150 },
    { field: "moTa", headerName: "Mô tả", width: 150 },
    { field: "hinhAnh", headerName: "Hình ảnh", width: 150 },
    { field: "danhGia", headerName: "Đánh giá", width: 100 },
    { field: "biDanh", headerName: "Bí danh", width: 100 },
    { field: "ngayKhoiChieu", headerName: "Ngày khởi chiếu", width: 200 },
    { field: "trailer", headerName: "Trailer", width: 200 },
    {
      field: "edit",
      headerName: "Sửa",
      width: 100,
      renderCell: (params) => <EditModal data={params.value} />,
    },
    {
      field: "delete",
      headerName: "Xóa",
      width: 100,
      renderCell: (params) => <DeleteModal data={params.value} />,
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridColumnsToolbarButton />
        <GridFilterToolbarButton />
        <GridToolbarExport />
        <Button className={classes.addUserButton}>
          <AddModal />
        </Button>
      </GridToolbarContainer>
    );
  }

  if (dataFilm == null) {
    return <>loading</>;
  }
  dataFilm.map((item, index) => {
    const {
      maPhim,
      tenPhim,
      moTa,
      hinhAnh,
      danhGia,
      biDanh,
      ngayKhoiChieu,
      trailer,
    } = item;
    item.id = index + 1;
    item.edit = {
      maPhim,
      tenPhim,
      moTa,
      hinhAnh,
      danhGia,
      biDanh,
      ngayKhoiChieu,
      trailer,
    };
    item.delete = { maPhim, tenPhim };
    rows.push(item);
  });
  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        FilterPanel
        components={{
          Toolbar: CustomToolbar,
        }}
        // filterModel
        // columnBuffer={5}
        // autoPageSize={true}
      />
    </div>
  );
}
