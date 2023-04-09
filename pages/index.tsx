import { NextPage } from "next"
import Link from "next/link"
import styles from "../styles/index.module.css"
import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from "@/p-components/searchBar";
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar";



interface Props {}

const index: NextPage<Props> = ({}) => {


  return (

    
    
    <div>







   <div className={styles.logoContainer}>
      <Image src={"/Logga.svg"} alt={""} width={"0"}
          height={"0"} className={styles.logo}></Image>

</div>
 
<div className={styles.textContainer}>

      <p className={styles.text}>
        Välkommen till Klimat! <br />
Här kan du enkelt söka på livsmedelsprodukters
klimatavtryck
      </p>

      </div>

<div className={styles.searchbarContainer}>
    <form  className={styles.form}>

      <input type="search" name=""  placeholder="Search" className={styles.input}/>
      <div className={styles.searchIcon} >
      <SearchIcon /> 
      </div>
       </form>

    </div>
   

   <div className={styles.buttonContainer}>
    <button className={styles.button}>

        <Link href="/Search" className={styles.buttonlink}>Sök produkt</Link>
      
    </button>
    </div>

<div className={styles.imageContainer}>
        <Image
          src={"/Mat bilder.svg"}
          alt={"#"}
          width={"200"}
          height={"200"}
          className={styles.Image}
        
        ></Image>

</div>
      
    
     <div className={styles.navdiv}>
    <MuiBottomNavBar/>
    </div>


</div>

  )
}

export default index
