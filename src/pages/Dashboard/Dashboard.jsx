import React from "react";
import styles from "./Dashboard.module.css";
import Statistics from "../../components/Dashboard/Statistics/Statistics";
import NewArticles from "../../components/Dashboard/NewArticles/NewArticles";
import BestProduct from "../../components/Dashboard/BestProduct/BestProduct";
import NewUser from "../../components/Dashboard/NewUser/NewUser";
import Transaction from "../../components/Dashboard/Transaction/Transaction";
import ClosestEvent from "../../components/Dashboard/ClosestEvent/ClosestEvent";
import OrderStatus from "../../components/Dashboard/OrderStatus/OrderStatus";

const Dashboard = () => {
  const articlesData = [
    {
      title: "Festival Kuliner Ubud",
      date: "1 hari yang lalu",
    },
    {
      title: "Odalan ",
      date: "2 hari yang lalu",
    },
    {
      title: "Festival Desa Sanur",
      date: "2 hari yang lalu",
    },
    {
      title: "Galungan & Kuningan ",
      date: "3 hari yang lalu",
    },
    {
      title: "Festival Air",
      date: "4 hari yang lalu",
    },
    {
      title: "Parade Ogoh - ogoh",
      date: "5 hari yang lalu",
    },
  ];
  const products = [
    {
      name: "Pie Susu",
      store: "Toko Bli Ajik",
      price: "Rp 32.000",
    },
    {
      name: "Pakaian",
      store: "Joger Jelek",
      price: "Rp 24.000",
    },
    {
      name: "Gantungan Kunci",
      store: "Oleh - Oleh Krisna",
      price: "Rp 15.000",
    },
    {
      name: "Kacang Disco",
      store: "Oleh - Oleh Krisna",
      price: "Rp 25.000",
    },
    {
      name: "Batik Bali",
      store: "Oleh - Oleh Krisna",
      price: "Rp 16.000",
    },
  ];
  const users = [
    {
      name: "Ahmed Bin Salman",
      timestamp: "1 hari yang lalu",
    },
    {
      name: "Ahnan Antum",
      timestamp: "2 hari yang lalu",
    },
  ];
  const events = [
    {
      title: "Tari Kecak",
      location: "Pecatu, Kuta Selatan, Badung, Bali",
      time: "16:00 WITA",
    },
    {
      title: "Parade Ogoh - Ogoh",
      location: "Puputan, Denpasar, Bali",
      time: "08:00 WITA",
    },
    {
      title: "Nyepi Eve",
      location: "Jalan badung, Bali",
      time: "09:00 WITA",
    },
  ];
  return (
    <div className={styles.dashboardContainer} id="dashboardContainer">
      <div
        id="userAmountContainer"
        className={`${styles.userAmount} ${styles.card}`}
      >
        <Statistics
          label="Jumlah Pengguna"
          total="100.000"
          newAmount="200"
          id="jumlah-pengguna"
        />
      </div>
      <div
        id="ticketSoldContainer"
        className={`${styles.ticketSold} ${styles.card}`}
      >
        <Statistics
          label="Ticket Terjual"
          total="200.000"
          newAmount="50"
          id="ticket-terjual"
        />
      </div>
      <div
        id="productSoldContainer"
        className={`${styles.productSold} ${styles.card}`}
      >
        <Statistics
          label="Barang Terjual"
          total="150.000"
          newAmount="700"
          id="barang-terjual"
        />
      </div>
      <div
        id="articleTotalContainer"
        className={`${styles.articleTotal} ${styles.card}`}
      >
        <Statistics
          label="Jumlah Artikel"
          total="25"
          newAmount="5"
          id="jumlah-artikel"
        />
      </div>
      <div
        id="articlesContainer"
        className={`${styles.articlesContainer} ${styles.card}`}
      >
        <NewArticles articles={articlesData} />
      </div>
      <div
        id="productsContainer"
        className={`${styles.productsContainer} ${styles.card}`}
      >
        <BestProduct products={products} />
      </div>
      <div
        id="usersContainer"
        className={`${styles.usersContainer} ${styles.card}`}
      >
        <NewUser users={users} />
      </div>
      <div
        id="transactionsContainer"
        className={`${styles.transactionsContainer} ${styles.card}`}
      >
        <Transaction />
      </div>
      <div
        id="orderStatusContainer"
        className={`${styles.orderStatusContainer} ${styles.card}`}
      >
        <OrderStatus />
      </div>
      <div
        id="eventContainer"
        className={`${styles.eventContainer} ${styles.card}`}
      >
        <ClosestEvent events={events} />
      </div>
    </div>
  );
};

export default Dashboard;
