import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/index.module.css'

interface Props {}

const index: NextPage<Props> = ({}) => {
  return(
  
  <div >


  

  

   
<h1 className={styles.h1}> Miljöappen</h1>


<p className={styles.p}>
    Välkommen till miljöappen! <br></br>
    Här kan du enkelt ta reda på livsmedelsprodukters
    klimatavtryck och pris

</p>


<button  className={styles.button} >

  <Link href="/Search">Sök produkt</Link>
</button>







<nav>

<li>


  
</li>


</nav>


  </div>



  )
}

export default index