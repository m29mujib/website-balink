import styles from './EditProfil.module.css'
import Logo from "../../assets/images/Balink 1.png"
import Button from '../../elements/Button/Button'
import Cancel from '../../assets/icons/cancel.svg'
import Simpan from '../../assets/icons/save.svg'
import File from '../../assets/icons/drive_folder_upload.svg'
import Input from '../../elements/Input/Input'
import Textarea from '../../elements/Textarea/Textarea'
const EditProfil = () => {
   const dataPerusahaan = {
      nama: "PT. BALINK BARONG",
      deskripsi: "Balink adalah brand aplikasi yang dibuat khusus traveling yang ada di pulau Dewata bali. Balink dibuat untuk memberikan kemudahan bagi para wisatawan nasional yang ingin mengunjungi Pulau Dewata Bali. Banyak yang bisa dilakukan oleh pengguna Balink sebagai tempat untuk melakukan reservasi tempat wisata, membaca artikel hinggal membeli suatu produk khas Bali. Balink menghadirkan inovaso terbaru dengan kemudahan sistem yang dapat di rasakan oleh pengguna saat menggunakan aplikasi Balink.",

   }
   return(
      <div className={styles.wrapper}>
         {/* Judul */}
         <div className={styles.judul}>
               <div className={styles.sideLeft}>
                  <img src={Logo} className={styles.logo}/>
                  <div className={styles.parentBoxFile}> 
                     <span className='me-2'><img src={File} alt="" /></span>           
                     <label htmlFor="boxFile" className={styles.AddBoxImage}>
                        Pilih Foto
                     </label>
                     <input
                        className={styles.boxFile}
                        id="boxFile"
                        type="file"     
                     />
                 </div>
                 <p className='body-small-regular text-center mt-2'>Select Your Photo Profil max 2mb.</p>
               </div>
               <div className={styles.sideRight}>
                  <div className={styles.nama}>
                      <Input type="text" label="Nama Perusahaan" value={dataPerusahaan.nama}/>  
                  </div>
                  <div className={`${styles.deskripsi} mt-3`}>
                     <Textarea type="text" label="Deskripsi Perusaaan" value={dataPerusahaan.deskripsi} className={`w-100 p-2 title-small-regular ${styles.border}`} rows="7"/>  
                     <div className={styles.parentDeskripsi}>
                        <span className={styles.deskripsiText}>Deskripsi Perusaaan</span>
                     </div>    
                  </div>
               </div>
         </div>

         {/* Informasi */}
         <div className={styles.informasi}>
            <h2 className="title-medium-bold">Informasi Perusahaan</h2>
         <div className={styles.parentInformasi}>
            <div className={styles.sideLeftInformasi}>
               <div className={styles.input}>
                  <Input type="text" label="Email" value={"BalinkBarong@gmail.com"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="No Telephone" value={"+62 812 3456 7891"}/>
               </div>
            </div>
            <div className={styles.sideRightInformasi}>
               <div className={styles.input}>
                  <Input type="text" label="Whatsapp" value={"+62 812 3456 7891"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="Instagram" value={"@balinkbarong"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="Facebook" value={"Pesonabalibarong"}/>
               </div>
            </div>
         </div>
         </div>

         <div className={styles.informasi}>
            <h2 className="title-medium-bold">Alamat Perusahaan</h2>
         <div className={styles.parentInformasi}>
            <div className={styles.sideLeftInformasi}>
               <div className={styles.input}>
                   <Input type="text" label="Negara" value={"BalinkBarong@gmail.com"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="Kode Pos" value={"+62 812 3456 7891"}/>
               </div>
            </div>
            <div className={styles.sideRightInformasi}>
               <div className={styles.input}>
                   <Input type="text" label="Alamat" value={"Kecamatan Kuta, Sebelah Selata Kota Denpasar, Bali"}/>
               </div>
            </div>
         </div>
         </div>

         <div className={styles.informasi}>
            <h2 className="title-medium-bold">Rekening Perusahaan</h2>
         <div className={styles.parentInformasi}>
            <div className={styles.sideInformasi}>
               <div className={styles.input}>
                  <Input type="text" label="Bank Central Asia (BCA)" value={"3456 1234 6789"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="Bank Mandiri" value={"3456 1234 6789"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="Bank Rakyat Indonesia" value={"Isi Nomor Rekening Anda"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="Bank Nasional Indonesia" value={"Isi Nomor Rekening Anda"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="Bank Tabungan Negara" value={"Isi Nomor Rekening Anda"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="SeaBank" value={"Isi Nomor Rekening Anda"}/>
               </div>
               <div className={styles.input}>
                  <Input type="text" label="Bank BPD Bali" value={"Isi Nomor Rekening Anda"}/>
               </div>
            </div>
         </div>
         </div>  

         <div className="d-flex w-100 justify-content-end mt-3">
            <Button label="Batal" color="white" icon={Cancel}/>
            <Button label="Simpan" color="brown" icon={Simpan}/>
         </div>
     </div>
   )
}

export default EditProfil;

