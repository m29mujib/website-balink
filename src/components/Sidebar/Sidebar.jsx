import logo from "../../assets/logo/Balink 2 1.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import person from "../../assets/icons/person.svg";
import theater_comedy from "../../assets/icons/theater_comedy.svg";
import receipt_long from "../../assets/icons/receipt_long.svg";
import local_activity from "../../assets/icons/local_activity.svg";
import article from "../../assets/icons/article.svg";
import home from "../../assets/icons/home.svg";
import logout from "../../assets/icons/logout.svg";
import storefront from "../../assets/icons/storefront.svg";
import folder_copy from "../../assets/icons/folder_copy.svg";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={`${styles.sidebar} d-flex`}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{ width: 280, height: "100vh" }}
      >
        <Link
          to="/dashboard"
          className="d-flex align-items-center gap-5 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={logo} alt="img" />
        </Link>
        <br />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={dashboard} alt="" className="img" />
              <span id="dashboard">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/akun"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={person} alt="" className="img" />
              <span id="akun">Akun</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={theater_comedy} alt="" className="img" />
              <span id="event">Event</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/produk"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={storefront} alt="" className="img" />
              <span id="produk">Produk</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kategori"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={folder_copy} alt="" className="img" />
              <span id="kategori">Kategori</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transaksi"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={receipt_long} alt="" className="img" />
              <span id="transaksi">Transaksi</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/promo"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={local_activity} alt="" className="img" />
              <span id="promo">Promo</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/artikel"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={article} alt="" className="img" />
              <span id="artikel">Artikel</span>
            </NavLink>
          </li>
          <hr className={`${styles.garis}`} />
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={home} alt="" className="img" />
              <span id="profile">Profile</span>
            </NavLink>
          </li>
        </ul>
        <div className="exit">
          <Link
            to="#"
            className="d-flex align-item-center gap-3 text-decoration-none"
          >
            <img src={logout} alt="" className="img" />
            <span className="text-danger" id="keluar">
              Keluar
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
