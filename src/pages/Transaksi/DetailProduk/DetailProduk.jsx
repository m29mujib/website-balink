import React from "react";
import DetailTransaksiProduk from "../../../components/DetailTransaksi/DetailTransaksiProduk/DetailTransaksiProduk";


const DetailProduk = () => {
  const userDataDetailProduk = [
    {
      kodetransaksi: "ABCD1234E5F6",
      namaproduk: "Kaos Bali",
      hargaproduk: "Rp 60.000",
      jumlah: "3",
      total: "Rp 180.000",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      namaproduk: "Topeng Bali",
      hargaproduk: "Rp 120.000",
      jumlah: "3",
      total: "Rp 360.000",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      namaproduk: "Lukisan Seni",
      hargaproduk: "Rp 1.920.000",
      jumlah: "1",
      total: "Rp 1.920.000",
    },


  ];


  //status
  const userDataProdukStatus = [
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

  
  return <DetailTransaksiProduk userDataDetailProduk={userDataDetailProduk}  userDataProdukStatus={userDataProdukStatus} />;
};
  
 
  
  export default DetailProduk;