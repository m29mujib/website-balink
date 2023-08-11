import React from "react";
import styles from "./DetailKategori.module.css";

const DetailKategori = () => {
  const kategori = {
    title: "Pakaian",
    description: `Isi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, \n\n
    -baik itu dari kategori pakaian pria, wanita, \n\n
    -anak anak dan lain sebagainyaIsi di kategori ini semua jenis \n\n
    -pakaian termasuk didalamnya, baik itu dari kategori \n\n
    pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainyaIsi di kategori ini semua jenis pakaian termasuk didalamnya, baik itu dari kategori pakaian pria, wanita, anak anak dan lain sebagainya `,
  };
  const paragraphs = kategori.description.split("\n\n");
  return (
    <div className={styles.container}>
      <h1 className="headline-small-semibold mb-16">Detail Kategori</h1>
      <h4 className="title-large-semibold mb-24 mt-5">{kategori.title}</h4>
      {paragraphs.map((paragraph, index) => (
        <p className="body-medium-regular" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default DetailKategori;
