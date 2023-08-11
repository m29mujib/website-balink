import React from "react";
import DetailTransaksiEvent from "../../../components/DetailTransaksi/DetailTransaksiEvent/DetailTransaksiEvent";


const DetailEvent = () => {
  const userDataDetailEvent = [
    {
      kodetransaksi: "ABCD1234E5F6",
      namaevent: "Tari Kecak",
      hargatiket: "Rp 120.000",
      jumlah: "3",
      total: "Rp 360.000",
    },


  ];


  //status
  const userDataEventStatus = [
  {
    tanggal: "15 Januari 2023",
    jam: "20:40:55 WITA",
    status: "Dipesan",
  },

  {
    tanggal: "15 Januari 2023",
    jam: "21:32:32 WITA",
    status: "Sukses",
  },

  {
    tanggal: "15 Januari 2023",
    jam: "21:32:32 WITA",
    status: "Dibatalkan",
  },


  ];

  
  return <DetailTransaksiEvent userDataDetailEvent={userDataDetailEvent}  userDataEventStatus={userDataEventStatus} />;
};
  
 
  
  export default DetailEvent;