import React, { useEffect } from "react";
import TableArtikel from "../../components/Table/TableArtikel/TableArtikel";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";

const Artikel = () => {
  const { response: artikel, loading, error, get } = useApi();

  useEffect(() => {
    get("https://64328e2b3e05ff8b3728907e.mockapi.io/products/artikel").catch(
      (error) => {
        // Handle error
        console.error(error);
      } 
    );
  }, []);
 
  console.log(artikel);
  console.log(error);
  console.log(loading);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <TableArtikel data={artikel} />
        )}
      </div>
    </div>
  );
};

export default Artikel;
