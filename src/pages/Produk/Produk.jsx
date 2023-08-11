import TableProduk from "../../components/Table/TableProduk/TableProduk"
import useApi from '../../api/useApi'
import React, { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
const Produk = () => {
   const { response: produk, loading, error, get } = useApi();

  useEffect(() => {
    get("https://64328e2b3e05ff8b3728907e.mockapi.io/products/products").catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    ); 
  }, []);
  
  console.log(produk);
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
          <TableProduk data={produk} />
        )}
      </div>
    </div>
   ) ;
};

export default Produk