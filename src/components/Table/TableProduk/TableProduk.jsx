import React, { useState } from "react";
import keyboard_arrow_right from "../../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../../assets/icons/btn_arrow_left.svg";
import add from "../../../assets/icons/add.svg";
import styles from "./TableProduk.module.css";
import { Link, useNavigate } from "react-router-dom";
import Gambar from "../../../assets/assetsLandingPage/bali.svg";
import Edit from "../../../assets/icons/edit_square.svg";
import Delete from "../../../assets/icons/deleteRed.svg";
import TableSearch from "../../../elements/TableSearch/TableSearch";
import Button from "../../../elements/Button/Button";
import useApi from "../../../api/useApi";
import Modal from "react-modal";
import konfirmasi from "../../../assets/images/konfirmasi.png";
import close from "../../../assets/icons/close.svg";
import check from "../../../assets/icons/check.svg";
import deleteImg from "../../../assets/icons/delete1.png";
// import ErrorDisplay from "../../../components/ErrorDisplay/ErrorDisplay";
// import Spinner from "../../../components/Spinner/Spinner";


const TableProduk = ({ data }) => {
  const { response: produk, loading, error, del } = useApi();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [modalKonfirmasiIsOpen, setModalKonfirmasiIsOpen] = useState(false);
  const [modalTerhapusIsOpen, setModalTerhapusIsOpen] = useState(false);

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(data?.length / itemsPerPage); 
 
  // Mendapatkan data yang ditampilkan pada halaman saat ini 
  const indexOfLastItem = currentPage * itemsPerPage; 
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const [selectedId, setSelectedId] = useState(null);
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  console.log("current items", currentItems)

    const customStylesConfirmation = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      padding: "60px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      zIndex: "9999",
    },
  };

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

  const handleTambahProduk = () => {
    navigate("/produk/tambah");
  };

   const closeKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(false);
  };

  const openKonfirmasiModal = (id) => {
    setSelectedId(id);
    setModalKonfirmasiIsOpen(true);
  };

  const openTerhapusModal = () => {
    setModalTerhapusIsOpen(true);
    setTimeout(() => {
      closeTerhapusModal();
      window.location.reload();
    }, 1500);
  };

  const closeTerhapusModal = () => {
    setModalTerhapusIsOpen(false);
  };

  const deleteProduk = () => {
    del(`https://64328e2b3e05ff8b3728907e.mockapi.io/products/products/${selectedId}`)
      .then(() => {
        openTerhapusModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        {/* <TableSearch /> */}

        <Button
          onClick={handleTambahProduk}
          label="Tambah Produk"
          icon={add}
          color="brown"
        />
      </div>

      <div className="row mt-4 text-center">
        <div className="col-12 p-0">
          <div className="table-responsive">
            <table className="table ">
              {/* Render data pada halaman saat ini */}
              <thead className={styles.thead} id="thead">
                <tr id="tr-table">
                  <th
                    className={`p-3 ${styles.roundedLeftTop} ${styles.tableHeadRow}`}
                  >
                    Foto
                  </th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Nama</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Harga</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Kategori</th>
                  <th
                    className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow}`}
                  ></th>
                </tr>
              </thead>
              <tbody className={styles.tbody} id="tbody">
                {currentItems?.map((item) => (
                  <tr className={styles.tableRow} key={item.id}>
                    <td className="p-3" onClick={() => navigate(`/produk/detail/${item.id}`)}>
                      <img src={Gambar} className={styles.image} />
                    </td>
                    <td className="p-3" onClick={() => navigate(`/produk/detail/${item.id}`)}>{item.namaProduk}</td>
                    <td className="p-3" onClick={() => navigate(`/produk/detail/${item.id}`)}>{item.hargaProduk}</td>
                    <td className="p-3" onClick={() => navigate(`/produk/detail/${item.id}`)}>{item.kategoriProduk}</td>
                    <td className="p-3">
          
                        <img
                          src={Edit}
                          alt=""
                          className={`${styles.actionButton} pe-3`}
                           onClick={() => navigate(`/produk/edit/${item.id}`)}
                        />
                       
                        <img
                          src={Delete}
                          alt=""
                          className={styles.actionButton}
                          onClick={() => openKonfirmasiModal(item.id)}
                        //   onClick={() =>
                        //   del(
                        //     `https://64328e2b3e05ff8b3728907e.mockapi.io/products/products/${item.id}`
                        //   )
                        // }
                        />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Kotak angka untuk memilih jumlah item per halaman */}
      <div className={`${styles.previous} row`} id="previous">
        <div className="col-10 p-3">
          <span className={styles.tableSpan}>Showing</span>
          <select
            className={`${styles.itemsPerPage} ms-2 `}
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={changeItemsPerPage}
          >
            <option value={10}>10</option>
            <option value={30}>20</option>
            <option value={50}>50</option>
          </select>
          <span className={`${styles.tableSpan} ms-2`}>of 50</span>
        </div>
        <div className="col-2 p-3">
          <button
            className={`${styles.btnleft} col-2 me-1`}
            id="btnleft"
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            <img src={btn_arrow_left} alt="" />
          </button>

          {/* tombol halaman */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            return (
              <button
                className={`${styles.paginationPage} me-1 ${
                  currentPage === page && styles.active
                }`}
                key={page}
                onClick={() => goToPage(page)}
                disabled={currentPage === page}
              >
                {page}
              </button>
            );
          })}

          {/* Tombol halaman berikutnya */}
          <button
            className={styles.btnright}
            id="btnright"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <img src={keyboard_arrow_right} alt="" />
          </button>
        </div>
      </div>

      <Modal
                isOpen={modalKonfirmasiIsOpen}
                onRequestClose={closeKonfirmasiModal}
                contentLabel="Confirmation Modal"
                style={customStylesConfirmation}
                id="modalKonfirmasi"
              >
                <div
                  id="modalKonfirmasiContainer"
                  className={`d-flex justify-content-center align-items-center`}
                >
                  <div
                    id="modalKonfirmasiContent"
                    className={`d-flex flex-column justify-content-center align-items-center`}
                  >
                    <img
                      id="modalKonfirmasiImage"
                      src={konfirmasi}
                      alt="konfirmasi-img"
                      className="mb-16"
                    />
                    <h4
                      id="modalKonfirmasiTitle"
                      className="title-large-semibold mb-32 text-center"
                    >
                      Apakah anda ingin menghapus data ini?
                    </h4>
                    <p id="modalKonfirmasiText1" className="body-small-regular">
                      Data yang sudah dihapus tidak dapat dikembalikan lagi
                    </p>
                    <p
                      id="modalKonfirmasiText2"
                      className="body-small-regular mb-32"
                    >
                      Apakah anda yakin?
                    </p>
                    <div className="d-flex gap-5 justify-content-center">
                      <div className="d-grid col-6">
                        <Button
                          id="modalKonfirmasiYesButton"
                          label="Yes"
                          color="white"
                          icon={check}
                          onClick={deleteProduk}
                        />
                      </div>
                      <div className="d-grid col-6">
                        <Button
                          id="modalKonfirmasiCancelButton"
                          label="Cancel"
                          color="brown"
                          icon={close}
                          onClick={closeKonfirmasiModal}
                        />
                      </div>
                    </div>
                  </div>
                </div>
       </Modal>

      <Modal
                isOpen={modalTerhapusIsOpen}
                onRequestClose={closeTerhapusModal}
                contentLabel="Deleted Modal"
                style={customStylesConfirmation}
                id="modalTerhapus"
              >
                <div
                  id="modal-terhapus-container"
                  className={`d-flex justify-content-center align-items-center`}
                >
                  <div
                    id="modal-terhapus-content"
                    className={`d-flex flex-column justify-content-center align-items-center`}
                  >
                    <img
                      id="modal-terhapus-image"
                      src={deleteImg}
                      alt="success"
                      className="mb-16"
                    />
                    <h4
                      id="modal-terhapus-heading"
                      className="title-large-semibold mb-16"
                    >
                      Berhasil Dihapus
                    </h4>
                    <p
                      id="modal-terhapus-message"
                      className="body-small-regular mb-16"
                    >
                      Data telah berhasil dihapus
                    </p>
                  </div>
                </div>
      </Modal>
    </div>
  );
};

export default TableProduk;
