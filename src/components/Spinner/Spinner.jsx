import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div
      id="spinner-container"
      className="d-flex justify-content-center align-items-center min-vh-100"
    >
      <div
        id="spinner"
        className={`${styles.spinnerBorder} spinner-border`}
        role="status"
      >
        <span id="spinnerText" className="visually-hidden">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Spinner;
