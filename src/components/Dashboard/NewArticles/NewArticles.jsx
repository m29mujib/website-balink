import React from "react";
import styles from "./NewArticles.module.css";
import kulinerUbud from "../../../assets/images/kuliner-ubud.png";
import SeeMore from "../../../elements/SeeMore/SeeMore";

const NewArticles = ({ articles }) => {
  return (
    <div id="new-article" className="new-article">
      <h1 id="new-article-title" className="title-large-semibold mb-16">
        Artikel Terbaru
      </h1>
      {articles.map((article, index) => (
        <div
          id={`new-article-item-${index}`}
          key={index}
          className="d-flex align-items-center gap-3 mb-16"
        >
          <img
            id={`new-article-img-${index}`}
            className={styles.articlesImg}
            src={kulinerUbud}
            alt="article-img"
          />
          <div
            id={`new-article-content-${index}`}
            className="d-flex flex-column"
          >
            <h4
              id={`new-article-title-${index}`}
              className="body-medium-regular m-0"
            >
              {article.title}
            </h4>
            <p
              id={`new-article-date-${index}`}
              className={`${styles.subtext} body-small-regular m-0`}
            >
              {article.date}
            </p>
          </div>
        </div>
      ))}
      <SeeMore id="new-article-see-more" label="Lihat Semua" to="artikel" />
    </div>
  );
};

export default NewArticles;
