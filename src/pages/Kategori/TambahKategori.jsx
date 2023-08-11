import React, { useState } from "react";
import styles from "./TambahKategori.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import reset from "../../assets/icons/restart_alt.svg";
import save from "../../assets/icons/save.svg";
import Button from "../../elements/Button/Button";
import { useNavigate } from "react-router-dom";
import useApi from "../../api/useApi";
import ModalSuksesLogo from "../../assets/images/ModalSuksesLogo.png";
import ModalGagalLogo from "../../assets/images/ModalGagalLogo.png";
import Modal from "react-modal";

const TambahKategori = () => {
   const { response: kategori, loading, error, post } = useApi();
  const navigate = useNavigate(); 
   const [file, setFile] = useState();
   const [modalSuksesIsOpen, setModalSuksesIsOpen] = useState(false);
  const [modalGagalIsOpen, setModalGagalIsOpen] = useState(false);

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

  const [values, setValues] = useState({
    nama: "",
    deskripsi: "",
  });
  const [errors, setErrors] = useState({
    namaKa: false,
    deskripsi: false,
  }); 

  const onSubmit = () => {
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      if (values[key].trim() === "") {
        newErrors[key] = true;
      } else {
        newErrors[key] = false;
      }
    });

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log(values)
      post(
        "https://64a3f9ebc3b509573b56dca8.mockapi.io/kategori",
        values
      )
      .then(() => {
        openModalSukses();
      })
      .catch((error) => {
        openModalGagal();
        console.error(error);
      });
    }

    // if (!Object.values(newErrors).some((error) => error)) {
    //   setValues({
    //     namaKategori: "",
    //     deskripsiKategori: "",
    //   });

    //   console.log(values);
    // }
  };

  const onReset = () => {
    setValues({
      nama: "",
      deskripsi: "",
    });
    setFile("");
     navigate(-1);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const openModalSukses = () => {
    setModalSuksesIsOpen(true);
    setTimeout(() => {
      closeModalSukses();
      navigate("/kategori");
    }, 1500);
  };

  const closeModalSukses = () => {
    setModalSuksesIsOpen(false);
  };

  const openModalGagal = () => {
    setModalGagalIsOpen(true);
    setTimeout(() => {
      closeModalGagal();
    }, 1500);
  };

  const closeModalGagal = () => {
    setModalGagalIsOpen(false);
  };

  return (
    <div className={styles.tambahEventContainer}>
      <h1 className="headline-small-semibold">Tambah Kategori Baru</h1>

      <div className="row">
        <div className="mt-5">
          <div className={styles.sideTopParent}>
            <h2 className="title-large-semibold">Nama Kategori</h2>
            <p className={styles.info}>Wajib</p>
          </div>
          <div>
            <p className="body-small-regular">
              Ketik nama promo maksimal 20 kata dengan kalimat yang menarik agar
              Admin dapat dengan mudah memilih kategori berdasarkan barang yg
              dibuat.
            </p>
            <Input
              type={"text"}
              placeholder={"Masukkan nama kategori"}
              className={styles.input}
              id={"nama"}
              name={"nama"}
              value={values.nama}
              onChange={handleOnChange}
              label={"Nama Kategori"}
              error={errors.nama}
            />
          </div>
        </div>

        <div className="mt-5">
          <div className={styles.sideTopParent}>
            <h2 className="title-large-semibold">Deskripsi Kategori</h2>
            <p className={styles.info}>Wajib</p>
          </div>
          <div>
            <p className="body-small-regular">
              Tuliskan deskripsi Kategori yang kamu buat untuk untuk lebih
              membantu admin mengetahui kategori yang anda buat dipakai untuk
              barang apa saja.
            </p>
            <div className={styles.inputBox}>
              <Textarea
                rows={3}
                placeholder={"Masukkan deskripsi kategori"}
                className={
                  errors.deskripsi
                    ? `${styles.errorInput} ${styles.input}`
                    : styles.input
                }
                id={"deskripsi"}
                name={"deskripsi"}
                value={values.deskripsi}
                onChange={handleOnChange}
              />
              <label
                className={
                  errors.deskripsi
                    ? `${styles.errorTitle} ${styles.inputTitle}`
                    : styles.inputTitle
                }
              >
                Deskripsi
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div className="d-flex justify-content-end align-items-center gap-3 pt-5">
        <div className="d-grid col-3 ">
          <Button label="Reset" color="white" icon={reset} onClick={onReset} />
        </div>
        <div className="d-grid col-3 ">
          <Button label="Simpan" color="brown" icon={save} onClick={onSubmit} />
        </div>
      </div>
      <Modal
        isOpen={modalSuksesIsOpen}
        onRequestClose={closeModalSukses}
        contentLabel="Success Modal"
        style={customStylesConfirmation}
        id="modalSukses"
      > 
        <div
          id="modalSuksesContainer"
          className={`d-flex justify-content-center align-items-center`}
        >
          <div
            id="modalSuksesContent"
            className={`d-flex flex-column justify-content-center align-items-center`}
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
      </Modal>
      
      <Modal
        isOpen={modalGagalIsOpen}
        onRequestClose={closeModalGagal}
        contentLabel="Fail Modal"
        style={customStylesConfirmation}
      >
        <div
          id="modalGagalContainer"
          className={`d-flex justify-content-center align-items-center`}
        >
          <div
            id="modalGagalContent"
            className={`d-flex flex-column justify-content-center align-items-center`}
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
      </Modal>
    </div>
  );
};

export default TambahKategori;
