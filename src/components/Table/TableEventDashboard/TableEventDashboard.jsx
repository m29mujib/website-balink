import React, { useState } from "react";
import styles from "./TableEventDashboard.module.css";

const TableEventDashboard = ({ userDataEvent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isClicked, setIsClicked] = useState(false);

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(userDataEvent.length / itemsPerPage);

  // Mendapatkan data yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userDataEvent.slice(indexOfFirstItem, indexOfLastItem);

  // Mengubah halaman
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Halaman sebelumnya
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Halaman berikutnya
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Mengubah jumlah item per halaman
  const changeItemsPerPage = (e) => {
    const value = parseInt(e.target.value, 10);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="row mt-4 text-center px-3">
        <div className="col-12 p-0 ">
          <div className="table-responsive">
            <table className="table">
              {/* Render data pada halaman saat ini */}
              <thead className={styles.thead} id="thead">
                <tr id="tr-table" className={styles.tableBrown}>
                  <th
                    className={`p-3 ${styles.roundedLeftTop} ${styles.tableHeadRow}`}
                  >
                    Kode Transaksi
                  </th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Event</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Status</th>
                  <th
                    className={`p-3 ${styles.tableHeadRow} ${styles.roundedRightTop}`}
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className={styles.tbody} id="tbody">
                {currentItems.map((item, index) => (
                  <tr className={styles.tableRow} key={index}>
                    <td className="p-3">{item.kodetransaksi}</td>
                    <td className="p-3">{item.event}</td>
                    <td
                      className={`p-3 title-small-semibold ${
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
                    <td className="p-3">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableEventDashboard;
