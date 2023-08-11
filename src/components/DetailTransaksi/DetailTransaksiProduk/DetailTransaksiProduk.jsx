import React, { useState } from "react";
import young_bearded_man_with_striped_shirt1 from "../../../assets/images/young_bearded_man_with_striped_shirt1.png";
import styles from "./DetailTransaksiProduk.module.css";

const DetailTransaksiProduk = ({
  userDataDetailProduk,
  userDataProdukStatus,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Mendapatkan data yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userDataDetailProduk.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const currentItemsStatus = userDataProdukStatus.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
      <div className={`${styles.row} row mb-3`} id="row">
        <div className="col-1">
          <img
            src={young_bearded_man_with_striped_shirt1}
            alt=""
            className="p-3"
          />
        </div>

        <div className="col-5  d-flex align-items-center pt-2">
          <div className="ps-1 ">
            <span className="body-large-semibold p-1">Yasmien Kosdofana </span>
            <p
              className={`${styles.textJasMie77} body-small-regular p-1 `}
              id="JasMie77"
            >
              JasMasdase77
            </p>
          </div>

          <div className="body-small-regular ps-5" id="textcontact">
            <span className="p-1">YasmienKosdofa@gmail.com</span>
            <p className="p-1">0878 1234 5678</p>
          </div>
        </div>

        <div className="col-6 p-1 d-flex justify-content-start align-items-center">
          <span className="body-small-bold">Alamat</span>
          <span className="ps-3 body-small-regular ">
            Jl. Perdamaian, Dusun. Rukun, RT. 01 RW.03, Desa Agung Yasa, Kec.
            Suryoagung, Prov. Bali 15124
          </span>
        </div>
      </div>

      <div className={`p-4 mb-3  ${styles.container}`} id="container">
        <p className="title-medium-semibold">Data Transaksi</p>
        <div className="row mt-4 text-center ">
          <div className="col-12 p-0 ">
            <div className="table-responsive">
              <table className={` ${styles.tabledata} table`} id="tabledata">
                {/* Render data pada halaman saat ini */}
                <thead
                  className={`${styles.thead} body-medium-semibold`}
                  id="thead"
                >
                  <tr id="tr-table">
                    <th
                      className={`p-3 ${styles.roundedLeftTop} ${styles.tableHeadRow}`}
                      id="th-kodetransaksi"
                    >
                      Kode Transaksi
                    </th>
                    <th
                      className={`p-3 ${styles.tableHeadRow} `}
                      id="th-namaproduk"
                    >
                      Nama Produk
                    </th>
                    <th
                      className={`p-3 ${styles.tableHeadRow}`}
                      id="th-hargaproduk"
                    >
                      Harga Produk
                    </th>
                    <th className={`p-3 ${styles.tableHeadRow}`} id="th-jumlah">
                      Jumlah
                    </th>
                    <th className={`p-3 ${styles.tableHeadRow}`} id="th-total">
                      Total
                    </th>
                    <th
                      className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow} `}
                    ></th>
                  </tr>
                </thead>
                <tbody className={styles.tbody} id="tbody">
                  {currentItems.map((item, index) => (
                    <tr
                      className={`${styles.tableRow} body-medium-regular`}
                      key={index}
                    >
                      <td
                        className={`p-3 ${styles.tableHeadRowBody}`}
                        id="td-kodetransaksi"
                      >
                        {item.kodetransaksi}
                      </td>
                      <td
                        className={`p-3 ${styles.tableHeadRowBody}`}
                        id="td-namaproduk"
                      >
                        {item.namaproduk}
                      </td>
                      <td
                        className={`p-3 ${styles.tableHeadRowBody}`}
                        id="td-hargaproduk"
                      >
                        {item.hargaproduk}
                      </td>
                      <td
                        className={`p-3 ${styles.tableHeadRowBody}`}
                        id="td-jumlah"
                      >
                        {item.jumlah}
                      </td>
                      <td
                        className={`p-3 ${styles.tableHeadRowBody}`}
                        id="td-total"
                      >
                        {item.total}
                      </td>
                      <td className={`p-3 ${styles.tableHeadRowBody}`}></td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div
                className={`${styles.rowtransaksi} row  mx-3 p-2`}
                id="rowtransaksi"
              >
                <div className="col-2 d-flex justify-content-end pe-5">
                  <span className="body-medium-semibold">Total</span>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-4   ps-4">
                  <span className="ps-5 body-large-semibold">Rp 2.460.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`p-4 ${styles.container}`} id="container">
        <p className="title-medium-semibold">Status Transaksi</p>
        <div className="row mt-4 text-center ">
          <div className="col-12 p-0 ">
            <div className="table-responsive">
              <table className={`${styles.tablestatus} table`} id="tablestatus">
                {/* Render data pada halaman saat ini */}
                <thead
                  className={`${styles.thead} body-medium-semibold`}
                  id="thead"
                >
                  <tr id="tr-table">
                    <th
                      className={`p-3 ${styles.tableHeadRow}  ${styles.roundedLeftTop} `}
                    >
                      Tanggal{" "}
                    </th>
                    <th className={`p-3 ${styles.tableHeadRow}`}>Jam</th>
                    <th
                      className={`p-3 ${styles.tableHeadRow}  ${styles.roundedRightTop}`}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className={styles.tbody} id="tbody">
                  {currentItemsStatus.map((item, index) => (
                    <tr
                      className={` ${styles.tableRow} body-medium-regular`}
                      key={index}
                    >
                      <td
                        className={`p-3 ${styles.tableHeadRowBody}  ${styles.roundedLeftBot}`}
                      >
                        {item.tanggal}
                      </td>
                      <td className={`p-3 ${styles.tableHeadRowBody}`}>
                        {item.jam}
                      </td>
                      <td
                        className={`p-3 title-small-semibold ${
                          styles.tableHeadRowBody
                        } ${styles.roundedRightBot} ${
                          item.status === "Sukses" ? styles.success : ""
                        } 
                                          ${
                                            item.status === "Dipesan"
                                              ? styles.order
                                              : ""
                                          } 
                                          ${
                                            item.status === "Dibatalkan"
                                              ? styles.cancel
                                              : ""
                                          }`}
                      >
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTransaksiProduk;
