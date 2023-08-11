import React from "react";
import styles from './LandingPage.module.css'
import balink from "../../assets/assetsLandingPage/balink.svg"
import phone from "../../assets/assetsLandingPage/phone.svg"
import info from "../../assets/assetsLandingPage/info.svg"
import lokasi from "../../assets/assetsLandingPage/lokasi.svg"
import pencarian from "../../assets/assetsLandingPage/pencarian.svg"
import waktu from "../../assets/assetsLandingPage/waktu.svg"
import wisata from "../../assets/assetsLandingPage/wisata.svg"
import belanja from "../../assets/assetsLandingPage/belanja.svg"
import apple from "../../assets/assetsLandingPage/apple.svg"
import play from "../../assets/assetsLandingPage/play.svg"
import ujang from "../../assets/assetsLandingPage/ujang.svg"
import dadang from "../../assets/assetsLandingPage/dadang.svg"
import oscar from "../../assets/assetsLandingPage/oscar.svg"
import bilgates from "../../assets/assetsLandingPage/bilgates.svg"
import whatsapp from "../../assets/assetsLandingPage/whatsapp.svg"
import instagram from "../../assets/assetsLandingPage/instagram.svg"
import email from "../../assets/assetsLandingPage/email.svg"
import gps from "../../assets/assetsLandingPage/gps.svg"
import { HashLink as Link } from "react-router-hash-link";

const LandingPage = () => {
  return (
    <div>
      {/* header */}
      <header className={styles.navbarLandingpage}>
        <img
          className={styles.logo}
          src={balink}
          alt="logo"
          weight="155.71"
          height={50}
        />
        <nav className={styles.navbarLink}>
          <ul className="title-medium-regular">
            <li className="mx-8">
              <Link to="#" className={styles.link}>
                Home
              </Link>
            </li>
            <li className="mx-8">
              <Link to='#info' className={styles.link} smooth>
                About Us
              </Link>
            </li>
            <li className="mx-8">
              <Link to='#download' className={styles.link} smooth>
                Download
              </Link>
            </li>
            <li className="mx-8">
              <Link to="#" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* jumbotron */}
      <div className={styles.bgJumbotron}>
        <div className="container pt-5">
          <div className="row flex-lg-row-reverse align-items-center py-5">
            <div className="col-lg-6">
              <img
                src={phone}
                className="d-block mx-lg-auto img-fluid"
                alt="phone"
                width={450}
                height={610}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <div className={styles.textJumbotron}>
                <div className="display-medium-semibold mb-8">
                  Nikmati Liburanmu dengan Cepat dan Mudah di Pulau Dewata
                </div>
                <p className="title-medium-semibold mb-8">
                  Bingung mau pergi ke bali tapi tidak tau tujuan wisatanya dan
                  tidak tau buah tangan khas Bali ??{" "}
                  <span className={styles.spanText}>Balink</span> siap
                  memberikan solusinya bagi anda{" "}
                </p>
                <div className="mt-48">
                  <Link to="/login" className={styles.buttonMain}>
                    Mulai Aktivitas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* info */}
      <div id="info">
        <div className="container pt-5 mb-5">
          <div className="row flex-lg-row align-items-center py-5">
            <div className="col-lg-6">
              <img
                src={info}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={400}
                height={545}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <div className={styles.textInformation}>
                <div className="headline-large-semibold mb-8">
                  Balink Aplikasi Traveller Asik
                </div>
                <p className="body-large-regular mb-8">
                  Kami menyediakan sebuah layanan dari sebuah aplikasi Wisata
                  Masa Kini khusus nya Wisata yang ada di Bali. Nyaman, aman,
                  cepat dan senang akan kalian dapat kan di{" "}
                  <span className={styles.spanText}>Balink</span>
                </p>

                <div className="mt-48">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img src={lokasi} alt="location" />
                    </div>
                    <div className="flex-grow-1 ms-3 ">
                      <div className="headline-large-semibold mb-4">Lokasi</div>
                      <p className="body-large-regular mb-4">
                        Kamu dapat mengakses lokasi dari event yang belum kamu
                        ketahui lokasi penyelenggaraan event.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-48">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img src={pencarian} alt="pencarian" />
                    </div>
                    <div className="flex-grow-1 ms-3 ">
                      <div className="headline-large-semibold mb-4">
                        Pencarian
                      </div>
                      <p className="body-large-regular mb-4">
                        Kami menyediakan fitur pencarian agar barang yang kamu
                        beli dapat ditemukan dengan cepat.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-48">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img src={waktu} alt="pencarian" />
                    </div>
                    <div className="flex-grow-1 ms-3 ">
                      <div className="headline-large-semibold mb-4">Waktu</div>
                      <p className="body-large-regular mb-4">
                        Kami menyediakan tanggal dan waktu untuk selalu update
                        cuaca terkini yang ada di Bali dan waktu Pagelaran
                        Event.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fitur */}
      <div className={styles.fiturBg}>
        <div className="container py-5">
          <div className={styles.textFitur}>
            <div className="row row-cols-lg-3 py-5">
              <div className=" d-flex justify-content-center">
                <div className="card h-100 w-75">
                  <div className={styles.totalFitur}>
                    <div className="mt-3 display-small-semibold">20</div>
                  </div>
                  <div className="mt-3 headline-small-semibold">
                    Artikel Wisata
                  </div>
                  <p className="my-3 body-medium-regular">
                    Artikel terkait beberapa destinasi yang ada di pulau dewata
                    bali dengan sajian yang menarik.
                  </p>
                </div>
              </div>

              <div className=" d-flex justify-content-center">
                <div className="card h-100 w-75">
                  <div className={styles.totalFitur}>
                    <div className="mt-3 display-small-semibold">250 +</div>
                  </div>
                  <div className="mt-3 headline-small-semibold">
                    Oleh - Oleh
                  </div>
                  <p className="my-3 body-medium-regular">
                    Oleh - oleh khas bali dengan dari segala bentuk, baju,
                    gantungan kunci, kue dll.
                  </p>
                </div>
              </div>

              <div className=" d-flex justify-content-center">
                <div className="card h-100 w-75">
                  <div className={styles.totalFitur}>
                    <div className="mt-3 display-small-semibold">150 +</div>
                  </div>
                  <div className="mt-3 headline-small-semibold">Event Bali</div>
                  <p className="my-3 body-medium-regular">
                    Kuliner yang tersebar di segala tempat yang ada di pulau
                    bali dengan citarasa yang enak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* event */}
      <div className={styles.textEvent}>
        <div className="container pt-5">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <img
                src={wisata}
                className="d-block mx-lg-auto img-fluid"
                alt="wisata"
                width={450}
                height={610}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <div className="headline-large-semibold mb-8">
                Memilih Tempat Wisata
              </div>
              <p className="body-large-regular text-event mb-8">
                Dengan aplikasi ini kamu dapat memilih tempat wisata dari
                beberapa event yang ada di Bali. Kamu juga akan mengetahui
                tempat dan waktu penyelenggaraan event tersebut. Ada beberapa
                event yang kamu membeli tiket terlebih dahulu. Kami menyediakan
                informasi deskripsi kegiatan, link maps, dan info terkait event.{" "}
              </p>
              <div className="mt-3">
                <button type="button" className={styles.buttonMain}>
                  Info Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.textEvent}>
        <div className="container pt-5">
          <div className="row flex-lg-row-reverse align-items-center py-5">
            <div className="col-lg-6">
              <img
                src={belanja}
                className="d-block mx-lg-auto img-fluid"
                alt="belanja"
                width={450}
                height={610}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <div className="headline-large-semibold mb-8">
                Tempat belanja yang aman
              </div>
              <p className="body-large-regular mb-8">
                Kamu ingin membeli oleh - oleh khas bali dapat kamu mengakses
                Shopping yang ada di Balink. Kamu dapat berbelanja dengan mudah,
                aman dan cepat. Dengan sistem COD atau transfer kami juga
                menyediakan untuk keamanan transaksinya.
              </p>
              <div className="mt-3">
                <button type="button" className={styles.buttonMain}>
                  Info Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* download */}
      <div className={styles.textDownload} id="download">
        <div className="container py-5">
          <div className="row">
            <div className={styles.cardDownload}>
              <div className="row flex-lg-row align-items-center py-5">
                <div className="col-lg-9">
                  <div className="headline-large-semibold mb-8">
                    Gunakan <span className={styles.spanText}>BALINK</span>{" "}
                    sekarang juga{" "}
                  </div>
                  <p className="body-large-regular mb-8">
                    Peniliain pengguna terhadap Balink
                  </p>
                  <div className="mt-3">
                    <button type="button" className={styles.buttonMain}>
                      Info Selengkapnya
                    </button>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="mt-48">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <img className="my-2" src={play} alt="playstore" />
                        <img className="my-2" src={apple} alt="appstore" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* rating */}
      <div className={styles.textRating}>
        <div className="container py-5">
          <div className="text-center">
            <h1 className="headline-large-semibold mb-8">Penilaian Pengguna</h1>
            <p className="body-large-regular mb-8">
              Peniliain pengguna terhadap <b>Balink</b>
            </p>
          </div>

          <div className={styles.items}>
            <div className={styles.item}>
              <div className=" d-flex justify-content-center">
                <div className={styles.cardRating}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={ujang}
                      width={60}
                      height={60}
                      className={styles.imgRating}
                    />
                  </div>
                  <div className="mt-3 body-large-semibold">Ujang</div>
                  <p className="mt-3 body-medium-regular">
                    “Lorem ipum dolor sip amet amrt jabang bayi jaan jan”.
                  </p>
                  <div className={styles.star}>
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className=" d-flex justify-content-center">
                <div className={styles.cardRating}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={dadang}
                      width={60}
                      height={60}
                      className={styles.imgRating}
                    />
                  </div>
                  <div className="mt-3 body-large-semibold">Dadang</div>
                  <p className="mt-3 body-medium-regular">
                    “Lorem ipum dolor sip amet amrt jabang bayi jaan jan”.
                  </p>
                  <div className={styles.star}>
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className=" d-flex justify-content-center">
                <div className={styles.cardRating}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={oscar}
                      width={60}
                      height={60}
                      className={styles.imgRating}
                    />
                  </div>
                  <div className="mt-3 body-large-semibold">Oscar</div>
                  <p className="mt-3 body-medium-regular">
                    “Lorem ipum dolor sip amet amrt jabang bayi jaan jan”.
                  </p>
                  <div className={styles.star}>
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star mx-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className=" d-flex justify-content-center">
                <div className={styles.cardRating}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={bilgates}
                      width={60}
                      height={60}
                      className={styles.imgRating}
                    />
                  </div>
                  <div className="mt-3 body-large-semibold">Bill Gates</div>
                  <p className="mt-3 body-medium-regular">
                    “Lorem ipum dolor sip amet amrt jabang bayi jaan jan”.
                  </p>
                  <div className={styles.star}>
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star mx-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className=" d-flex justify-content-center">
                <div className={styles.cardRating}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={ujang}
                      width={60}
                      height={60}
                      className={styles.imgRating}
                    />
                  </div>
                  <div className="mt-3 body-large-semibold">Ujang</div>
                  <p className="mt-3 body-medium-regular">
                    “Lorem ipum dolor sip amet amrt jabang bayi jaan jan”.
                  </p>
                  <div className={styles.star}>
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                    <i className="bi bi-star-fill mx-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className={`${styles.bgFooter} ${styles.textFooter}`}>
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-lg-5">
              <img
                className={styles.logo}
                src={balink}
                alt="logo"
                weight="155.71"
                height={50}
              />
              <div className="col-sm-6 my-3">
                <p className="label-medium-regular">
                  Desa Tukadmungga, Kec. Buleleng, Kabupaten Buleleng, Bali
                  81119
                </p>
              </div>
            </div>

            <div className="col-lg-2">
              <ul className="list-unstyled mb-0 body-large-regular">
                <li>
                  <Link to="#" className={styles.link}>
                    Nearby
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Filter
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Report
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2">
              <ul className="list-unstyled mb-0 body-large-regular">
                <li>
                  <Link to="#" className={styles.link}>
                    Showcase
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Widget Kit
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <ul className="list-unstyled mb-0 body-large-regular">
                <li>
                  <Link to="#" className={styles.link}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    GetStarted
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center">
          <div>
            <a className="btn" href="#!" role="button">
              <img src={whatsapp} alt="whatsapp" width={25} height={25} />
            </a>
            <a className="btn" href="#!" role="button">
              <img src={instagram} alt="instagram" width={25} height={25} />
            </a>
            <a className="btn" href="#!" role="button">
              <img src={email} alt="email" width={25} height={25} />
            </a>
            <a className="btn" href="#!" role="button">
              <img src={gps} alt="gps" width={25} height={25} />
            </a>
          </div>
          <div className="body-large-regular p-3">Copyright 2023</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
