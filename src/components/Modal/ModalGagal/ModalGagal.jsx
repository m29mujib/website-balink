import React from "react";
import ModalGagalLogo from "../../../assets/images/ModalGagalLogo.png";
import styles from "./Modal.module.css";

const ModalGagal = () => {
  return (
    <div
      id="modalGagalContainer"
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        id="modalGagalContent"
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <img
          id="modalGagalLogo"
          src={ModalGagalLogo}
          alt="success"
          className="mb-16"
        />
        <h4 id="modalGagalTitle" className="title-large-semibold mb-16">
          Gagal Disimpan
        </h4>
        <p id="modalGagalText" className="body-small-regular mb-16">
          Data yang anda buat Gagal disimpan
        </p>
      </div>
    </div>
  );
};

export default ModalGagal;
