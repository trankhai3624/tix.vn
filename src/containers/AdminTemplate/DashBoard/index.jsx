import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import DashBoard from "../DashBoard";
import DashBoard from "./dashBoard";
// import { LayDanhSachNguoiDung } from "../../AdminTemplate/modules/actions";

import { LayDanhSachNguoiDung } from "../modules/actions";

function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LayDanhSachNguoiDung());
  }, []);

  const data = useSelector((state) => state.AdminReducer.data);
  if (data == null) {
    return <>loading</>;
  }
  return (
    <div>
      <DashBoard />
    </div>
  );
}

export default Admin;
