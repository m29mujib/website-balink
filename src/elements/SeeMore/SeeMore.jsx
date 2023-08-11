import React from "react";
import styles from "./SeeMore.module.css";
import { Link } from "react-router-dom";

const SeeMore = ({ label, to, id }) => {
  return (
    <Link
      to={`/${to}`}
      className={`${styles.seeMore} body-small-semibold`}
      id={id}
    >
      {label}
    </Link>
  );
};

export default SeeMore;
