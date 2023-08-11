import React, { useState } from "react";
import styles from "./Promo.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Button from "../../elements/Button/Button";
import restart from "../../assets/icons/restart_alt.svg";
import save from "../../assets/icons/save.svg";
import useApi from "../../api/useApi";
import { useNavigate } from "react-router-dom";
import ModalSuksesLogo from "../../assets/images/ModalSuksesLogo.png";
import ModalGagalLogo from "../../assets/images/ModalGagalLogo.png";
import Modal from "react-modal";

const TambahPromo = () => {
  const navigate = useNavigate();
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
    NamaPromo: "",
    DeskripsiPromo: "", 
    KodePromo: "",
    PotonganHarga: "",
  });

  const [errors, setErrors] = useState({
    NamaPromo: false,
    DeskripsiPromo: false,
    KodePromo: false,
    PotonganHarga: false,
  });

  const { response: promo, loading, error, post } = useApi();

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
      post(
        "https://648179fd29fa1c5c503172c3.mockapi.io/promo",
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
  };

  const openModalSukses = () => {
    setModalSuksesIsOpen(true);
    setTimeout(() => {
      closeModalSukses();
      navigate("/promo");
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
  const onReset = (e) => {
    setValues({
      NamaPromo: "",
      DeskripsiPromo: "",
      KodePromo: "",
      PotonganHarga: "",
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

  return (
    <div>
    <div className={`${styles.autoLayoutTambah}`}>

      <div className={`${styles.layoutTambah}`}>
        <p className="headline-small-semibold">Tambah Promo Baru</p>
        <div className={`${styles.input}`} id="namaPromo">
          <div className={`${styles.title}`}>
            <div>
              <p className="title-large-semibold">Nama Promo</p>
            </div>
            <div>
              <p className={`${styles.titleRight}`}>Wajib</p>
            </div>
          </div>

          <p className="body-small-regular">
            Ketik nama promo maksimal 70 kata dengan kalimat yang menarik agar
            pembeli dapat menemukan promo dari nama promo, kode promo, merek dan
            Deskripsi promo.
          </p>

          <div>
            <Input
              type={"text"}
              id={"addNamaPromo"}
              label={"Nama Promo"}
              placeholder={"Masukkan Nama Promo"}
              name={"NamaPromo"}
              value={values.NamaPromo}
              onChange={handleOnChange}
              error={errors.NamaPromo}
            />
            <br />
          </div>
        </div>

        <div className={`${styles.input}`} id="deskripsiPromo">
          <div className={`${styles.title}`}>
            <div>
              <p className="title-large-semibold">Deskripsi Promo</p>
            </div>
            <div>
              <p className={`${styles.titleRight}`}>Wajib</p>
            </div>
          </div>

          <p className={`body-small-regular ${styles.descPromo}`}>
            Tuliskan deskripsi promomu untuk disajikan dalam bentuk penjelasn
            yang lebih rinci.
          </p>

          <div className={styles.inputBox}>
            <Textarea
              rows={4}
              required={"required"}
              placeholder={"Masukkan Deskripsi Promo"}
              className={
                errors.DeskripsiPromo
                  ? `${styles.errorInput} ${styles.textArea}`
                  : styles.textArea
              }
              id={"addDeskripsiPromo"}
              name={"DeskripsiPromo"}
              value={values.DeskripsiPromo}
              onChange={handleOnChange}
            />
            <label
              className={
                errors.DeskripsiPromo
                  ? `${styles.errorTitle} ${styles.inputTitle}`
                  : styles.inputTitle
              }
            >
              Deskripsi Promo
            </label>
          </div>
        </div>

        <div className={`${styles.input}`} id="kodePromo">
          <div className={`${styles.title}`}>
            <div>
              <p className="title-large-semibold">Kode Promo</p>
            </div>
            <div>
              <p className={`${styles.titleRight}`}>Wajib</p>
            </div>
          </div>

          <p className="body-small-regular">
            Kode promo digunakan untuk memudahkan bagi pengguna dari promo yang
            sedang berlangsung.
          </p>

          <div>
            <Input
              type={"text"}
              id={"addKodePromo"}
              label={"Kode Promo"}
              placeholder={"Masukkan Kode Promo"}
              name={"KodePromo"}
              value={values.KodePromo}
              onChange={handleOnChange}
              error={errors.KodePromo}
            />
            <br />
          </div>
        </div>

        <div className={`${styles.input}`} id="potonganHarga">
          <div className={`${styles.title}`}>
            <div>
              <p className="title-large-semibold">Potongan Harga</p>
            </div>
            <div>
              <p className={`${styles.titleRight}`}>Wajib</p>
            </div>
          </div>

          <div className="desc">
            <p className="body-small-regular">
              Potongan Harga menunjukkan bahwa promo yang sedang berlangsung
              dengan potongan harga yang sudah di tentukan.
            </p>
          </div>

          <div>
            <Input
              type={"number"}
              id={"addPotonganHarga"}
              label={"Potongan Harga"}
              placeholder={"Rp. 0"}
              name={"PotonganHarga"}
              value={values.PotonganHarga}
              onChange={handleOnChange}
              error={errors.PotonganHarga}
            />
            <br />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end gap-3 pt-5">
        <div className="d-grid col-3">
          <Button
            label="Reset"
            color="white"
            icon={restart}
            onClick={onReset}
          />
        </div>
        <div className="d-grid col-3">
          <Button label="Simpan" color="brown" icon={save} onClick={onSubmit} />
        </div>
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

export default TambahPromo;
