import { MuiBottomNavBar } from '@/p-components/MuiBottomNavBar'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from "../styles/Avtryck.module.css"

interface Props {}

const Avtryck: NextPage<Props> = ({}) => {
  return <div>

 <p>Hej där</p>

<div className={styles.navdiv}>
<MuiBottomNavBar/>
</div>
  </div>
  
}

export default Avtryck 