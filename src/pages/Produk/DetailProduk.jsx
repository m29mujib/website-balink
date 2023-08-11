import styles from './DetailProduk.module.css'
// import Images from '../../assets/assetsLandingPage/bali.svg'
import Button from '../../elements/Button/Button'

import Edit from '../../assets/icons/edit_square_white.svg'

import { useNavigate, useParams } from 'react-router-dom'
import useApi from '../../api/useApi'
import { useEffect, useState } from 'react'
import Gambar from "../../assets/assetsLandingPage/bali.svg";

const DataDetailProduk = {
   title: "Pie susu khass bali",
   titleDeskripsi: "MasukaPie susu Bli ajik dengan Rasa yang manis dan tekstur yang lembut, jajanan khas Pulau Dewata Bali. Berbagai macam Rasa dan Variant yang ada.",
   deskripsi: "!! Apabila stok masih tersedia jadi Pie susu masih ready !! n DeskripsiMasukaPie susu Bli ajik dengan Rasa yang manis dan tekstur yang lembut, jajanan khas pulau dewata bali. Berbagai macam rasa dan variant yang ada.",
   kategori: "Pakaian",
   harga: "120000",
   stok: "190"
}


const DetailProduk = () => {
  const { response: produk, loading, error, get } = useApi();
  const [data, setData] = useState([])
  const navigate = useNavigate();

  const { id } = useParams();  
  const [values, setValues] = useState({
    fotoProduk: "",
    namaProduk: "",
    deskripsiProduk: "",
    kategoriProduk: "",
    hargaProduk: "",
    stokProduk: "",
  });

  useEffect(() => {
    get(
      `https://64328e2b3e05ff8b3728907e.mockapi.io/products/products/${id}`
    ).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  const [file, setFile] = useState();

  useEffect(() => { 
    if (produk) {
      setValues({
        fotoProduk: produk.fotoProduk,
        namaProduk: produk.namaProduk,
        deskripsiProduk: produk.deskripsiProduk,
        kategoriProduk: produk.kategoriProduk,
        hargaProduk: produk.hargaProduk,
        stokProduk: produk.stokProduk,
      });
    }
  }, [produk]);

   return(
    <div>
          {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
      <div className={styles.wrapper} id='wrapper'>
         <div className={styles.wrapperDetail} id='wrapper-detail'>
         <h1 className='headline-small-semibold'>Detail Produk</h1>
         <div className={styles.parentImages} id='parentsImages'>
             <img src={Gambar} className={styles.fotoProduk}/>
             <img src={Gambar} className={styles.fotoProduk}/>
             <img src={Gambar} className={styles.fotoProduk}/>
             <img src={Gambar} className={styles.fotoProduk}/>
         </div>
         <div className={styles.parentDetail} id='parentsDetail'>       
            <h1 className={`title-large-semibold ${styles.titleProduk}`} id='titleProduk'>{values.namaProduk}</h1>
            <p className='body-medium-reguler' id='title-deskripsi'>{DataDetailProduk.titleDeskripsi}</p>
            <p className='body-medium-reguler' id='deskripsi'>{values.deskripsiProduk}</p>
            <p className='body-medium-reguler' id='deskripsi'>{values.deskripsiProduk}</p>
            <p className='body-medium-reguler' id='deskripsi'>{values.deskripsiProduk}</p>
            <p className='body-medium-reguler' id='deskripsi'>{values.deskripsiProduk}</p>
            <p className='body-medium-reguler' id='deskripsi'>{values.deskripsiProduk}</p>
            <p className='body-medium-reguler' id='deskripsi'>{values.deskripsiProduk}</p>
            <p className='body-medium-reguler' id='deskripsi'>{values.deskripsiProduk}</p>
         </div>

         <div className={styles.keterangan} id='keterangan'>
            <div className={styles.kategori} id='kategori'>
               <label className='body-medium-regular'>Kategori Produk</label>
               <p className='title-medium-semibold'>{values.kategoriProduk}</p>
            </div>
            <div className={styles.harga} id='harga'>
               <label className='body-medium-reguler'>Harga Produk</label>
               <p className='title-medium-semibold'>{values.hargaProduk}</p>
            </div>
            <div className={styles.stok} id='stok'>
               <label className='body-medium-reguler'>Stok Produk</label>
               <p className='title-medium-semibold'>{values.stokProduk}</p>
            </div>
         </div>
         <div className="d-flex justify-content-end align-items-center gap-3 pt-5">
        <div className="d-grid col-3 ">
          <Button label="Edit" color="brown" icon={Edit} onClick={() => navigate(`/produk/edit/${id}`)}/>
        </div>
      </div>
      </div>
   </div>
      )}
   </div>
   )
}
export default DetailProduk