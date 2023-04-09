import {BottomNavigation,BottomNavigationAction, Box, Typography  } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import {useState} from 'react'
import styles from "../styles/Muinav.module.css"
import Link from "next/link";


  

export const  MuiBottomNavBar=()=>{

    const [value,setValue] = useState(0)
return(


<BottomNavigation sx=
{{width:'100%', marginTop:8, position:'absoloute', bottom:0} }
 value={value} onChange={(event,newvalue)=>{setValue(newvalue)}} 
 showLabels className={styles.nav}> 
    
    <Link href={"/"} className={styles.Link}>
      
    <BottomNavigationAction label='Home'icon={ <HomeOutlinedIcon/>}  className={styles.homeIcon1} >
  

    </BottomNavigationAction>
 
    </Link>

    <Link href={"/Search"}  >
    <BottomNavigationAction label='Search'icon={ <SearchIcon className={styles.searchIcon1}/>} ></BottomNavigationAction>
    </Link>

    <Link href={"/avtryck"}>
    <BottomNavigationAction label='Faq'icon={ <PublicOutlinedIcon/>} className={styles.globeIcon1} > </BottomNavigationAction>
    </Link>


    <Link href={"/pask"}>
    <BottomNavigationAction label='Faq'icon={ <QuizOutlinedIcon/>}  className={styles.faqIcon1} > </BottomNavigationAction>
    </Link>

  

</BottomNavigation>

)



}


