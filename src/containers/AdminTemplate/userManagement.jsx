import React, { useEffect, useMemo, useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
  GridToolbarExport,
  GridDensitySelector,
} from "@material-ui/data-grid";
import { Button, makeStyles } from "@material-ui/core";
import { Popper } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./userStyle";
import EditModal from "./editModal/index";
import DeleteModal from "./deleteModal";
import AddModal from "./addModal";

export default function UserManagement({ userData }) {
  const classes = useStyles();
  const [listData, setListData] = useState([]);
  const rows = [];

  const columns = [
    { field: "id", headerName: "STT", width: 50 },
    { field: "hoTen", headerName: "Họ tên", width: 150 },
    { field: "taiKhoan", headerName: "Tài khoản", width: 150 },
    // { field: "matKhau", headerName: "Mật khẩu", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "maLoaiNguoiDung", headerName: "Người dùng", width: 200 },
    { field: "soDt", headerName: "Điện thoại", width: 200 },
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

  const handleClick = () => {
    alert("Nhấn được rồi nè");
  };
  // console.log(userData);

  userData.map((item, index) => {
    // console.log(item);
    const { hoTen, taiKhoan, matKhau, email, maLoaiNguoiDung, soDt } = item;
    item.id = index + 1;
    item.edit = { hoTen, taiKhoan, matKhau, email, maLoaiNguoiDung, soDt };
    item.delete = { taiKhoan };
    rows.push(item);
  });
  // console.log(rows);
  // console.log(listData);
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
