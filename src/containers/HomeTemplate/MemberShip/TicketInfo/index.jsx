import React, { useEffect, useState } from "react";
import SumaryInfo from "./SumaryInfo";

function TicketInfo({ ticketInfo }) {
  //   console.log(ticketInfo);

  const [ticketList, setTicketList] = useState();
  useEffect(() => {
    if (ticketInfo) {
      let { thongTinDatVe } = ticketInfo;
      setTicketList(thongTinDatVe);
    }
  }, []);
  // console.log(ticketList);
  const renderTicketList = () => {
    if (ticketList) {
      return ticketList.map((item) => {
        return <SumaryInfo ticketList={item} />;
      });
    }
  };

  return <>{renderTicketList()}</>;
}

export default TicketInfo;
