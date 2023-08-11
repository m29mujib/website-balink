import React, { useEffect } from "react";
import styles from "./Promo.module.css";
import Button from "../../elements/Button/Button";
import edit from "../../assets/icons/edit_square_white.svg";
import hapus from "../../assets/icons/delete.svg";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api/useApi";

const DetailPromo = () => {
  const navigate = useNavigate();
  const { response, error, loading, get, del } = useApi();
  const { id } = useParams();

  useEffect(() => {
    get(`https://648179fd29fa1c5c503172c3.mockapi.io/promo/${id}`).catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }, []);

  const onDelete = () => {
    del(
      `https://648179fd29fa1c5c503172c3.mockapi.io/promo/${id}`
    );
    navigate(-1);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className={`${styles.autoLayoutDetail}`}>
          <div className={`${styles.layoutDetail}`}>
            <p className="headline-small-semibold">Detail Promo</p>

            <div id="namaPromo">
              <p className="title-medium-semibold">{response?.NamaPromo}</p>
              <p className="body-medium-regular">{response?.DeskripsiPromo}</p>
            </div>

            <div id="kodePromo">
              <p className="body-small-regular">Kode Promo</p>
              <p className="body-medium-semibold">{response?.KodePromo}</p>
            </div>

            <div id="potonganHarga">
              <p className="body-small-regular">Potongan Harga</p>
              <p className="body-medium-semibold">{response?.PotonganHarga}</p>
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 pt-5">
            <div className="d-grid col-3">
              <Button
                label="Hapus"
                color="white"
                icon={hapus}
                onClick={onDelete}
              />
            </div>
            <div className="d-grid col-3">
              <Button
                label="Edit"
                color="brown"
                icon={edit}
                onClick={() => navigate(`/promo/${id}`)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPromo;
