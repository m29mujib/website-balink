import React from "react";
import styles from "./Statistics.module.css";

const Statistics = ({ id, label, total, newAmount }) => {
  return (
    <div
      id={id}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h4 id={`${id}-label`} className="body-medium-semibold">
        {label}
      </h4>
      <h1 id={`${id}-total`} className="display-small-bold">
        {total}
      </h1>
      <p id={`${id}-new-amount`} className="body-small-reguler mb-0">
        <span className={styles.spanGreen}>{newAmount}</span> Sebulan terakhir
      </p>
    </div>
  );
};

export default Statistics;
