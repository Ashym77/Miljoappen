import { NextPage } from 'next'
interface Props {}
import styles from '../styles/startsida.module.css'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
const Startsida: NextPage<Props> = ({}) => {
  return (
  <div>

    <div className= {styles.loggaContainer}>
<Image src={'/Logga.svg'} alt={''} width={'100'} height={'100'} className={styles.logga}></Image>
{/* <img src="/Logga.svg" alt="" /> */}
    </div>

    <div className={styles.textContainer}>


    <p className={styles.text}>Välkommen till Klimat! <br />
Här kan du enkelt söka på livsmedelsprodukters
klimatavtryck </p>


    </div>


<div className={styles.formContainer}>
  <form>


 <input type="search" name="" id=""  className={styles.input} placeholder='sök produkt'/>

 <SearchIcon /> 
 </form>

  </div>

</div>
)}

export default Startsida