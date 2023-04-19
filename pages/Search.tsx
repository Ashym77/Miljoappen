import { NextPage } from 'next'
import Link from 'next/link'
import styles from "../styles/Search.module.css"
import Image from "next/image"
import { MuiBottomNavBar } from '@/p-components/MuiBottomNavBar'





interface Props {}

const search: NextPage<Props> = ({}) => {
 

 
  return(


  <div>
    
  <Image src={'/farsk-mellanmjolk.svg'} alt={'#'} width={"200"}
          height={"200"} className={styles.Image}></Image>



<Image src={'/klimatbar.svg'} alt={'#'} width={"200"}
          height={"200"} className={styles.Image1 }></Image>





<div className={styles.navdiv}>
  
<MuiBottomNavBar/>
</div>

</div>
)
}




export default search