import { NextPage } from 'next'
import Link from 'next/link'
import styles from "../styles/Search.module.css"
import Image from "next/image"
import { MuiBottomNavBar } from '@/p-components/MuiBottomNavBar'





interface Props {}

const search: NextPage<Props> = ({}) => {
 

 
  return(


  <div>
    


    <div>

 

  {/*
    <Link href="/">
      <object data="returnbutton.sv" type="image/svg+xml">
        <button></button>
      </object>
    </Link>
  */}


  


    </div>

    <div>
  <Image src={'/farsk-mellanmjolk.svg'} alt={'#'} width={"200"}
          height={"200"} className={styles.Image}></Image>

</div>


<div className={styles.titleContainer}>

<h3 className= {styles.title}> Arla Mjölk </h3>

</div>

<div className={styles.infoContainer}>

<Image src={'/Klimatavtryck Mjölk.svg'} alt={'#'}  width={"200"}
          height={"200"} className={styles.imageInfo}></Image>

</div>


<div className={styles.buttonContainer}>
<button className={styles.button}>

<Link href="/avtryck" className={styles.buttonlink}>Jämför liknande produkt</Link>

</button>
</div>


 



<div className={styles.navdiv}>
  
<MuiBottomNavBar/>
</div>

</div>


)
}




export default search