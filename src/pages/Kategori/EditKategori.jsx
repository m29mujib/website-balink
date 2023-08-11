import React, { useEffect, useState } from "react";
import styles from "./TambahKategori.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import save from "../../assets/icons/save.svg";
import cancel from "../../assets/icons/cancel.svg";
import Button from "../../elements/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import ModalSuksesLogo from "../../assets/images/ModalSuksesLogo.png";
import ModalGagalLogo from "../../assets/images/ModalGagalLogo.png";
import Modal from "react-modal";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";

const EditKategori = () => {
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
  const { response: kategori, loading, error, get, put } = useApi();
  const [values, setValues] = useState({
    nama: "",
    deskripsi: "",
    });
  const { id } = useParams(); 
  const navigate = useNavigate();
  // const paragraphs = values.deskripsi.split("\n\n");
  // const onSubmit = () => { 
  //   console.log(values);
  //   setValues({
  //     namaKategori: "",
  //     deskripsiKategori: "",
  //   });
  // };
   useEffect(() => {
    get(
      `https://64a3f9ebc3b509573b56dca8.mockapi.io/kategori/${id}`
    ).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  useEffect(() => { 
    if (kategori) {
      setValues({
         nama: kategori.nama,
         deskripsi: kategori.deskripsi,
      });
    }
  }, [kategori]);

   const onSubmit = () => {
    put(
      `https://64a3f9ebc3b509573b56dca8.mockapi.io/kategori/${id}`,
      values
    )
    .then(() => {
        openModalSukses();
      })
      .catch((error) => {
        openModalGagal();
        console.error(error);
      });
  };

  const onCancel = () => {
    navigate(-1);
  };

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
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

 

  // const handleOnChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const onCancel = (e) => {
  //   e.preventDefault();
  
  // }


  return (
    <div className={styles.tambahEventContainer}>
      {
        loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
      <div>
        <h1 className="headline-small-semibold">Edit Kategori</h1>

      <div className="row">
        <div className="mt-5">
          <div className={styles.sideTopParent}>
            <h2 className="title-large-semibold">Nama Kategori</h2>
            <p className={styles.info}>Wajib</p>
        </div>

        <div>
            <p className="body-small-regular">
              Ketik nama promo maksimal 20 kata dengan kalimat yang menarik agar Admin 
              dapat dengan mudah memilih kategori berdasarkan barang yg dibuat.
            </p>
            <Input
              type="text"
              className={styles.input}
              id="nama"
              name="nama"
              value={values.nama}
              onChange={handleOnChange}
              label={"Nama Kategori"}
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
              membantu admin mengetahui kategori yang anda buat dipakai untuk barang apa saja. 
            </p>
            <div className={styles.inputBox}>
              <Textarea
                rows={3}
                className={styles.input}
                id="deskripsi"
                name="deskripsi"
                value={values.deskripsi}
                onChange={handleOnChange}
              />
              <label className={styles.inputTitle}>Deskripsi</label>
            </div>
          </div>
      </div>
      {/* button */}
      <div className="d-flex justify-content-end align-items-center gap-3 pt-5">
        <div className="d-grid col-3 ">
          <Button label="Batal" color="white" icon={cancel} onClick={onCancel}/>
        </div>
        <div className="d-grid col-3 ">
          <Button label="Simpan" color="brown" icon={save} onClick={onSubmit} />
        </div>
      </div>
    </div>
  </div>
      )}
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

export default EditKategori;
