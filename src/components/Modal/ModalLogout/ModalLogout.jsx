import React from "react";
import styles from "./Modal.module.css";
import Button from "../../../elements/Button/Button";
import close from "../../../assets/icons/close.svg";
import check from "../../../assets/icons/check.svg";

const ModalLogout = () => {
  return (
    <div
      id="modalLogoutContainer"
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        id="modalLogoutContent"
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <h4
          id="modalLogoutTitle"
          className="title-large-semibold mb-32 text-center"
        >
          Apakah anda yakin Logout?
        </h4>
        <div className="d-flex gap-5 justify-content-center">
          <div className="d-grid col-6">
            <Button
              id="modalLogoutYesButton"
              label="Yes"
              color="white"
              icon={check}
            />
          </div>
          <div className="d-grid col-6">
            <Button
              id="modalLogoutCancelButton"
              label="Cancel"
              color="brown"
              icon={close}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
