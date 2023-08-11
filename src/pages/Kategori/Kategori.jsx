import React, { useEffect } from "react";
import TableKategori from "../../components/Table/TableKategori/TableKategori";
import Spinner from "../../components/Spinner/Spinner";
import useApi from "../../api/useApi";


const Kategori = () => {
 const { response: kategori, loading, error, get } = useApi();

  useEffect(() => {
    get("https://64a3f9ebc3b509573b56dca8.mockapi.io/kategori").catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    ); 
  }, []);
  
  console.log(kategori);
  console.log(error); 
  console.log(loading);
  return(
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <TableKategori data={kategori} />
        )}
      </div>
    </div>
  )
};

export default Kategori;
 