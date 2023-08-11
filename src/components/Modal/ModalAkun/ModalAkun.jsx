import React, { useContext, useState, useEffect } from "react";
import styles from "./ModalAkun.module.css";
import avatar from "../../../assets/images/avatar.png";
import { ModalAkunContext } from "../../../context/ModalAkunContext";
import Button from "../../../elements/Button/Button";
import deleteIcon from "../../../assets/icons/delete.svg";
import Input from "../../../elements/Input/Input";
import iconVisibility from "../../../assets/icons/visibility_off.svg";
import useApi from "../../../api/useApi";

const ModalAkun = ({ id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { closeModalAkun } = useContext(ModalAkunContext);
  const { response, error, loading, get } = useApi();
  console.log(response);
  console.log(error);
  console.log(loading);
  console.log(id);

  useEffect(() => {
    get(`https://64a3f9ebc3b509573b56dca8.mockapi.io/akun/${id}`).catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div id="modalAkunContainer" className={styles.modalContainer}>
      <div id="modalAkunContent" className={styles.modalContent}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <img
              id="avatarImage"
              src={avatar}
              alt=""
              className={styles.avatar}
            />
            <div id="inputGroup1" className={styles.inputGroup}>
              <Input
                label="Nama Lengkap"
                type="text"
                id="fullName"
                name="fullName"
                value={response?.pengguna}
                readOnly
              />
              <Input
                label="Email address"
                type="email"
                id="email"
                name="email"
                value={response?.email}
                readOnly
              />
            </div>
            <div id="inputGroup2" className={styles.inputGroup}>
              <Input
                label="Username"
                type="text"
                id="username"
                name="username"
                value={response?.username}
                readOnly
              />
              <Input
                label="Telephone"
                type="text"
                id="telephone"
                name="telephone"
                value={response?.telephone}
                readOnly
              />
            </div>
            <div id="inputGroup3" className={styles.inputGroup}>
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={response?.password}
                icon={iconVisibility}
                onClick={togglePasswordVisibility}
                readOnly
              />

              <Input
                label="Alamat"
                type="text"
                id="alamat"
                name="alamat"
                value={response?.alamat}
                readOnly
              />
            </div>

            <Button
              id="hapusButton"
              label="Hapus"
              onClick={() => closeModalAkun()}
              color="white"
              icon={deleteIcon}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalAkun;
