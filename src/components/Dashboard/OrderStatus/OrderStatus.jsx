import React, { useState } from "react";
import Button from "../../../elements/Button/Button";
import local_mall from "../../../assets/icons/local_mall.svg";
import theater_comedy from "../../../assets/icons/theater_comedy.svg";
import TableProdukDashboard from "../../Table/TableProdukDashboard/TableProdukDashboard";
import TableEventDashboard from "../../Table/TableEventDashboard/TableEventDashboard";

const OrderStatus = () => {
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
    <div className="order-status">
      <div className="d-flex gap-3">
        <h1
          className="title-large-semibold mb-16 me-auto"
          id="status-order-heading"
        >
          Status Order
        </h1>
        <Button
          id="event-button"
          label="Event"
          color={activeButton === "event" ? "brown" : "white"}
          icon={theater_comedy}
          onClick={() => handleButtonClick("event")}
        />
        <Button
          id="produk-button"
          label="Produk"
          color={activeButton === "produk" ? "brown" : "white"}
          icon={local_mall}
          onClick={() => handleButtonClick("produk")}
        />
      </div>
      {activeButton === "produk" && (
        <TableProdukDashboard userDataProduk={userDataProduk} />
      )}
      {activeButton === "event" && (
        <TableEventDashboard userDataEvent={userDataEvent} />
      )}
    </div>
  );
};

export default OrderStatus;
