import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./Transaction.module.css";

const Transaction = () => {
  const series = [20, 40, 15];
  const options = {
    chart: {
      type: "radialBar",
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "24px",
            color: "#000000",
          },
          value: {
            show: true,
            fontSize: "16px",
          },
          total: {
            show: true,
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              const totalSum = series.reduce((acc, value) => acc + value, 0);
              return totalSum;
            },
          },
        },
      },
    },
    fill: {
      colors: ["#9B6732", "#C2813E", "#CE9A65"],
    },
    labels: ["Sukses", "Batal", "Diproses"],
  };
  return (
    <div className="transactions">
      <h1 className="title-large-semibold mb-16">Transaksi</h1>
      <div className="d-flex align-items-center justify-content-center">
        <ul className="p-0">
          <li className="body-medium-semibold d-flex align-items-between">
            <p className="me-auto">Transaksi Sukses</p>
            <p className={styles.subtext}>20%</p>
          </li>
          <li className="body-medium-semibold d-flex align-items-between">
            <p className="me-auto">Transaksi Batal</p>
            <p className={styles.subtext}>40%</p>
          </li>
          <li className="body-medium-semibold d-flex align-items-between">
            <p className="me-16">Transaksi Diproses</p>
            <p className={styles.subtext}>15%</p>
          </li>
        </ul>

        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={240}
        />
      </div>
    </div>
  );
};

export default Transaction;
