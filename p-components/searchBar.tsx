import React, { useState } from "react"
import styles from "../styles/Searchbar.module.css"
import SearchIcon from "@mui/icons-material/Search"
import { log } from "console"

function SearchBar({}) {
  // new code for fetch---------

  const [searchResults, setSearchResults] = useState([])

  const handelSearch = async (searchTerm: string) => {
    try {
      const response = await fetch(
        // `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=1`
      )
      const data = await response.json()
      setSearchResults(data.products)
    } catch (error) {
      console.log(error)
    }
  }

  // new code for fetch---------

  return (
    // <form className={styles.form}>
    //   <input
    //     type="search"
    //     name=""
    //     placeholder="Search"
    //     className={styles.input}
    //   />
    //   <div className={styles.searchIcon}>
    //     <SearchIcon />
    //   </div>

      {/* new code for fetch--------- */}

      <form className={styles.form}>
      <input type="search" name="" placeholder="Search" className={styles.input} onChange={(e) => handleSearch(e.target.value)} />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>

      {/* Render the search results here */}
      {searchResults.map((product: any) => (
        <div key={product.code}>
          <h3>{product.product_name}</h3>
          <p>{product.generic_name}</p>
        </div>
      ))}

      {/* new code for fetch--------- */}
    </form>
  )
}

export default SearchBar
