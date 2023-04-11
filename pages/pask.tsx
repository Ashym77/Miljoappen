import { NextPage } from 'next'
import styles from "../styles/pask.module.css"
import { MuiBottomNavBar } from '@/p-components/MuiBottomNavBar'
import Link from 'next/link'
import Image from "next/image"

interface Props {}

const Pask: NextPage<Props> = ({}) => {
  return (
  <div>


    <h1 className={styles.title}>Glad påsk  önskar vi er alla från grupp 6</h1>

  





<div className={styles.navdiv}>
    <MuiBottomNavBar/>
    </div>






  </div>
  
  
  )}

export default Pask
