import React from "react";
import styles from "./TableSearch.module.css";
import vector from "../../assets/icons/Vector.svg";

const TableSearch = ({ onClick, onChange }) => {
  return (
    <div className={`${styles.search} me-auto`} id="search">
      <input
        id="searchinput"
        type="text"
        className={`${styles.searchinput} form-control`}
        placeholder="Search..."
        onClick={onClick}
        onChange={onChange}
      />
      <img src={vector} alt="" className={styles.vector} />
    </div>
  );
};

export default TableSearch;
