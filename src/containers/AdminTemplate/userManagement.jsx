import React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useStyles } from "./userStyle";
import EditModal from "./editModal/index";
import DeleteModal from "./deleteModal";
import AddModal from "./addModal";

export default function UserManagement({ userData }) {
  const classes = useStyles();
  const rows = [];

  const columns = [
    { field: "id", headerName: "STT", width: 50 },
    { field: "hoTen", headerName: "Họ tên", width: 150 },
    { field: "taiKhoan", headerName: "Tài khoản", width: 150 },
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
      renderCell: (params) => <DeleteModal taiKhoan={params.value} />,
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

  userData.map((item, index) => {
    const { hoTen, taiKhoan, matKhau, email, maLoaiNguoiDung, soDt } = item;
    item.id = index + 1;
    item.edit = { hoTen, taiKhoan, matKhau, email, maLoaiNguoiDung, soDt };
    item.delete = { taiKhoan };
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
      />
    </div>
  );
}
