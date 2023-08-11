import styles from "./Profil.module.css";
import Logo from "../../assets/images/Balink 1.png";
import Button from "../../elements/Button/Button";
import Edit from "../../assets/icons/edit_square_white.svg";
import { useNavigate } from "react-router-dom";
const Profil = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      {/* Judul */}
      <div className={styles.judul}>
        <div className={styles.sideLeft}>
          <img src={Logo} className={styles.logo} />
        </div>
        <div className={styles.sideRight}>
          <h2 className="title-medium-bold">PT. BALINK BARONG</h2>
          <p className="title-small-regular">
            Balink adalah brand aplikasi yang dibuat khusus traveling yang ada
            di pulau Dewata bali. Balink dibuat untuk memberikan kemudahan bagi
            para wisatawan nasional yang ingin mengunjungi Pulau Dewata Bali.
            Banyak yang bisa dilakukan oleh pengguna Balink sebagai tempat untuk
            melakukan reservasi tempat wisata, membaca artikel hinggal membeli
            suatu produk khas Bali. Balink menghadirkan inovaso terbaru dengan
            kemudahan sistem yang dapat di rasakan oleh pengguna saat
            menggunakan aplikasi Balink.
          </p>
        </div>
      </div>

      {/* Informasi */}
      <div className={styles.informasi}>
        <h2 className="title-medium-bold">Informasi Perusahaan</h2>
        <div className={styles.parentInformasi}>
          <div className={styles.sideLeftInformasi}>
            <div className="email">
              <p className={`body-large-regular ${styles.label}`}>
                Email Adress
              </p>
              <p className="body-large-regular">BalinkBarong@gmail.com</p>
            </div>
            <div className="phone">
              <p className={`body-large-regular ${styles.label}`}>Phone</p>
              <p className="body-large-regular">+62 812 3456 7891</p>
            </div>
          </div>
          <div className={styles.sideRightInformasi}>
            <div className={styles.whatsapp}>
              <p className={`body-large-regular ${styles.label}`}>Whatsapp</p>
              <p className="body-large-regular">+62 812 3456 7891</p>
            </div>
            <div className={styles.instagram}>
              <p className={`body-large-regular ${styles.label}`}>Instagram</p>
              <p className="body-large-regular">@balinkbarong</p>
            </div>
            <div className={styles.facebook}>
              <p className={`body-large-regular ${styles.label}`}>Facebook</p>
              <p className="body-large-regular">Pesonabalibarong</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.informasi}>
        <h2 className="title-medium-bold">Alamat Perusahaan</h2>
        <div className={styles.parentInformasi}>
          <div className={styles.sideLeftInformasi}>
            <div className="email">
              <p className={`body-large-regular ${styles.label}`}>Negara</p>
              <p className="body-large-regular">BalinkBarong@gmail.com</p>
            </div>
            <div className="phone">
              <p className={`body-large-regular ${styles.label}`}>Kode Pos</p>
              <p className="body-large-regular">+62 812 3456 7891</p>
            </div>
          </div>
          <div className={styles.sideRightInformasi}>
            <div className={styles.whatsapp}>
              <p className={`body-large-regular ${styles.label}`}>Alamat</p>
              <p className="body-large-regular">
                Kecamatan Kuta, Sebelah Selata Kota Denpasar, Bali
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.informasi}>
        <h2 className="title-medium-bold">Rekening Perusahaan</h2>
        <div className={styles.parentInformasi}>
          <div className={styles.sideLeftInformasi}>
            <div className="email">
              <p className={`body-large-regular ${styles.label}`}>
                Bank Central Asia(BCA)
              </p>
              <p className="body-large-regular">3456 1234 6789</p>
            </div>
            <div className="phone">
              <p className={`body-large-regular ${styles.label}`}>
                Bank Mandiri
              </p>
              <p className="body-large-regular">3456 1234 6789 123</p>
            </div>
          </div>
          <div className={styles.sideRightInformasi}></div>
        </div>
      </div>

      <div className="d-flex w-100 justify-content-end mt-3">
        <Button
          label="Edit Profil"
          color="brown"
          icon={Edit}
          onClick={() => navigate("/profile/edit")}
        />
      </div>
    </div>
  );
};

export default Profil;
