import {BottomNavigation,BottomNavigationAction,  Typography  } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import {useState} from 'react'
import styles from "../styles/Muinav.module.css"
import Link from "next/link";
import Box from "@mui/material/Box"



  

export const  MuiBottomNavBar=()=>{

    const [value,setValue] = useState(0)
return(

    

<BottomNavigation sx=
{{width:'100%' } }     
 value={value} onChange={(event,newvalue)=>{setValue(newvalue) }} 
 className={styles.nav}> 
    
    <Link href={"/"} className={styles.Link}>
      
    <BottomNavigationAction label='Home'icon={ <HomeOutlinedIcon/>}  className={styles.homeIcon1} >
  

    </BottomNavigationAction>
 
    </Link>

    <Link href={"/nytestApi"}  >
    <BottomNavigationAction label='Search'icon={ <SearchIcon className={styles.searchIcon1}/>} ></BottomNavigationAction>
    </Link>

    <Link href={"/Search"}>
    <BottomNavigationAction label='Faq'icon={ <PublicOutlinedIcon/>} className={styles.globeIcon1} > </BottomNavigationAction>
    </Link>

{/* 
    <Link href={"/pask"}>
    <BottomNavigationAction label='Faq'icon={ <QuizOutlinedIcon/>}  className={styles.faqIcon1} > </BottomNavigationAction>
    </Link> */}

  

</BottomNavigation>

)



}


