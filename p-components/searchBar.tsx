
import React, { useState } from "react";
import styles from "../styles/Searchbar.module.css"
import SearchIcon from '@mui/icons-material/Search';


function SearchBar({  }) {
  

  

  return (
    
    <form  className={styles.form}>

    <input type="search" name=""  placeholder="Search" className={styles.input}/>
    <div className={styles.searchIcon} >
    <SearchIcon /> 
    </div>
    </form>
      
    
   
  );
}

export default SearchBar;