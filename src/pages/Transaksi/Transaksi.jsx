import React, { useState } from "react";
import TableTransaksiEvent from "../../components/Table/TableTransaksi/TableTransaksiEvent/TableTransaksiEvent";
import TableTransaksiProduk from "../../components/Table/TableTransaksi/TableTransaksiProduk/TableTransaksiProduk";
import TableSearch from "../../elements/TableSearch/TableSearch";
import Button from "../../elements/Button/Button";
import local_mall from "../../assets/icons/local_mall.svg";
import theater_comedy from "../../assets/icons/theater_comedy.svg";

const Transaksi = () => {
  const [activeButton, setActiveButton] = useState("produk");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const userDataProduk = [
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Dipesan",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Dipesan",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Dibatalkan",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      produk: "Kaos Barang",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
  ];

  const userDataEvent = [
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Dipesan",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Dipesan",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Dibatalkan",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
    {
      kodetransaksi: "ABCD1234E5F6",
      username: "JasMie77",
      waktu: "15/12/23 - 20:40:56",
      event: "Tari Kecak",
      total: "Rp 110.000 ",
      status: "Sukses",
    },
  ];

  return (
    <div>
      <div className="d-flex">
        {/* <TableSearch /> */}
        <div className="d-flex gap-4">
          <Button
            label="Produk"
            color={activeButton === "produk" ? "brown" : "white"}
            icon={local_mall}
            onClick={() => handleButtonClick("produk")}
          />
          <Button
            label="Event"
            color={activeButton === "event" ? "brown" : "white"}
            icon={theater_comedy}
            onClick={() => handleButtonClick("event")}
          />
        </div>
      </div>

      {activeButton === "produk" && (
        <TableTransaksiProduk userDataEvent={userDataProduk} />
      )}
      {activeButton === "event" && (
        <TableTransaksiEvent userDataEvent={userDataEvent} />
      )}
    </div>
  );
};

export default Transaksi;
