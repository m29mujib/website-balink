import React from "react";
import ModalSuksesLogo from "../../../assets/images/ModalSuksesLogo.png";
import styles from "./Modal.module.css";

const ModalSukses = () => {
  return (
    <div
      id="modalSuksesContainer"
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        id="modalSuksesContent"
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <img
          id="modalSuksesLogo"
          src={ModalSuksesLogo}
          alt="success"
          className="mb-16"
        />
        <h4 id="modalSuksesTitle" className="title-large-semibold mb-16">
          Berhasil Disimpan
        </h4>
        <p id="modalSuksesMessage" className="body-small-regular mb-16">
          Data yang anda buat sudah berhasil disimpan
        </p>
      </div>
    </div>
  );
};

export default ModalSukses;
