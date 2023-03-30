import { NextPage } from "next"
import Link from "next/link"
import styles from "../styles/index.module.css"
import Image from "next/image"

interface Props {}

const index: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1 className={styles.h1}> Miljöappen</h1>

      <p className={styles.p}>
        Välkommen till miljöappen! <br></br>
        Här kan du enkelt ta reda på livsmedelsprodukters klimatavtryck och pris
      </p>

<<<<<<< HEAD
  

  

   
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

=======
      <button className={styles.button}>
        <Link href="/Search">Sök produkt</Link>
      </button>
>>>>>>> ecac69c6fec9c7b7fddcb17c6fafad024456f538

      <div className=" flex justify-center">
        <Image
          src={"/earth1.svg"}
          alt={"#"}
          width={"150"}
          height={"150"}
          className={" mx-auto"}
        ></Image>
      </div>

      <nav>
        <li></li>
      </nav>
    </div>
  )
}

export default index
