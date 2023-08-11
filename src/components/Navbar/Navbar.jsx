import React from "react";
import avatar from "../../assets/images/avatar.png";
import notification from "../../assets/icons/notifications.svg";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();

  const setTitle = (pathname) => {
    if (pathname === "/dashboard") {
      return "Dashboard";
    } else if (pathname.includes("akun")) {
      return "Akun";
    } else if (pathname.includes("event")) {
      return "Event";
    } else if (pathname.includes("produk")) {
      return "Produk";
    } else if (pathname.includes("kategori")) {
      return "Kategori";
    } else if (pathname.includes("transaksi")) {
      return "Transaksi";
    } else if (pathname.includes("promo")) {
      return "Promo";
    } else if (pathname.includes("artikel")) {
      return "Artikel";
    } else if (pathname.includes("profile")) {
      return "Profile";
    } else {
      return "Dashboard";
    }
  };
  return (
    <nav id="navbar" className={`${styles.navbar} navbar`}>
      <div className="container-fluid">
        <a id="navbarBrand" className="navbar-brand headline-small-semibold">
          {setTitle(pathname)}
        </a>
        <div id="userContainer" className="user">
          <a id="notificationLink" href="">
            <img
              id="notificationIcon"
              src={notification}
              alt="notification-icon"
              className="me-16"
            />
          </a>
          <a id="avatarLink" href="">
            <img id="avatarImage" src={avatar} alt="avatar-img" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
