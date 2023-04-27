import { NextPage } from "next";
import  {Product } from ".../nyTestApi";
import  {ProductPage } from "@/pages/nyTestApi";
import { useRouter } from "next/router";
import nyTestApi from "@/pages/nyTestApi";



  
  const ProductExport: NextPage<Props> = ({ products }) => {
    const router = useRouter();
    const { code } = router.query;
  
    if (code) {
      const product = products.find((p) => p.code === code);
      if (product) {
        return <ProductPage product={product} />;
      }
    }
  
    return (
      <div>
        <nyTestApi products={products} />
      </div>
    );
  };
  
  export async function getStaticProps() {
    const response = await fetch(
      "https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&tagtype_1=brands&tag_contains_1=contains&tag_1=Arla&sort_by=unique_scans_n&page_size=300&json=true"
    );
  
    const data = await response.json();
  
    const products: Product[] = data.products.map((product: Product) => ({
      code: product.code,
      product_name: product.product_name,
      brands: product.brands,
      categories: product.categories,
      image_url: product.image_url,
      ecoscore_grade: product.ecoscore_grade,
      ecoScoreImage: nyTestApi.getEcoScoreImage(product.ecoscore_grade),
      ecoScoreLable: nyTestApi.getEcoScoreLable(product.ecoscore_grade),
    }));
  
    return {
      props: {
        products,
      },
    };
  }
  


































// import React, { useState } from "react"
// import styles from "../styles/Searchbar.module.css"
// import SearchIcon from "@mui/icons-material/Search"
// import { log } from "console"

// function SearchBar({}) {
//   // new code for fetch---------

//   const [searchResults, setSearchResults] = useState([])

//   const handelSearch = async (searchTerm: string) => {
//     try {
//       const response = await fetch(
//         // `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`
//         `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=1`
//       )
//       const data = await response.json()
//       setSearchResults(data.products)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   // new code for fetch---------

//   return (
//     // <form className={styles.form}>
//     //   <input
//     //     type="search"
//     //     name=""
//     //     placeholder="Search"
//     //     className={styles.input}
//     //   />
//     //   <div className={styles.searchIcon}>
//     //     <SearchIcon />
//     //   </div>

//       {/* new code for fetch--------- */}

//       <form className={styles.form}>
//       <input type="search" name="" placeholder="Search" className={styles.input} onChange={(e) => handleSearch(e.target.value)} />
//       <div className={styles.searchIcon}>
//         <SearchIcon />
//       </div>

//       {/* Render the search results here */}
//       {searchResults.map((product: any) => (
//         <div key={product.code}>
//           <h3>{product.product_name}</h3>
//           <p>{product.generic_name}</p>
//         </div>
//       ))}

//       {/* new code for fetch--------- */}
//     </form>
//   )
// }

// export default SearchBar
