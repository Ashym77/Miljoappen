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
      <h1 className={styles.h1}> KlimatMat</h1>



      <p className={styles.p}>
        Välkommen till KlimatMat! <br />
Här kan du enkelt söka på livsmedelsprodukters
klimatavtryck och pris
      </p>


 

    <form  className={styles.form}>

      <input type="search" name=""  placeholder="Search" className={styles.input}/>
      <div className={styles.searchIcon} >
      <SearchIcon /> 
      </div>
       </form>
    
    <button className={styles.button}>

        <Link href="/Search">Sök produkt</Link>
      
    </button>


        <Image
          src={"/planet_earth.svg"}
          alt={"#"}
          width={"200"}
          height={"200"}
          className={styles.Image}
        ></Image>
    
    
     <div className={styles.navdiv}>
    <MuiBottomNavBar/>
    </div>
</div>

  )
}

export default index
