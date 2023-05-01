import { useContext, useEffect, useState } from "react"
import styles from "../styles/nyFetch.module.css"
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar"
import Link from "next/link"
import MyContextProvider, { MyProduct } from "@/context/my-context-provider"


const SearchFunction = () => {

    
    interface Props {}
    
    interface Product {
      code: string
    
      product_name: string
    
      brands: string
    
      categories: string
    
      image_url: string
    
      ecoscore_grade: string
    
      ecoScoreImage: string
    
      ecoScoreLable: string
    }
    
    const ecoScoreImage = [
      "/ecoscore_a.svg",
      "/ecoscore_b.svg",
      "/ecoscore_c.svg",
      "/ecoscore_d.svg",
      "/ecoscore_e.svg",
      "/ecoscore_u_v2.svg",
    ]
    
    function getEcoScoreImage(score: string): string {
      switch (score) {
        case "a":
          return ecoScoreImage[0]
        case "b":
          return ecoScoreImage[1]
        case "c":
          return ecoScoreImage[2]
        case "d":
          return ecoScoreImage[3]
        case "e":
          return ecoScoreImage[4]
        default:
          return ecoScoreImage[5]
      }
    }
    
    const ecoScoreLable = [
      "Låg klimatpåverkan",
      "Låg klimatpåverkan",
      "Måttlig klimatpåverkan",
      "Hög klimatpåverkan",
      "Hög klimatpåverkan",
      "Odefinierat",
    ]
    
    function getEcoScoreLable(lable: string): string {
      switch (lable) {
        case "a":
          return ecoScoreLable[0]
        case "b":
          return ecoScoreLable[1]
        case "c":
          return ecoScoreLable[2]
        case "d":
          return ecoScoreLable[3]
        case "e":
          return ecoScoreLable[4]
        default:
          return ecoScoreLable[5]
      }
    }
    
    function ProductList() {
      const [query, setQuery] = useState<string>("")
    
      const [products, setProducts] = useState<Product[]>([])
    
      const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    
      const [hasMore, setHasMore] = useState<boolean>(true)

      const {code} =useContext(MyProduct)
      const{product_name} = useContext(MyProduct)
      const {brands}= useContext(MyProduct)
      const {categories}= useContext(MyProduct)
      const {image_url}= useContext(MyProduct)
      const {ecoscore_grade}= useContext(MyProduct)
      const {ecoScoreImage}= useContext(MyProduct)
      const {ecoScoreLabel}= useContext(MyProduct)
     
      useEffect(() => {
        async function fetchProducts() {
          const response = await fetch(
            `https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${query}&json=1`
          )
    
          const data = await response.json()
    
          const products: Product[] = data.products.map((product: Product) => ({
            code: product.code,
    
            product_name: product.product_name,
    
            brands: product.brands,
    
            categories: product.categories,
    
            image_url: product.image_url,
    
            ecoscore_grade: product.ecoscore_grade,
    
            ecoScoreImage: getEcoScoreImage(product.ecoscore_grade),
    
            ecoScoreLable: getEcoScoreLable(product.ecoscore_grade),
          }))
    
          setProducts(products)
    
          setFilteredProducts(products.slice(0, 2)) // display first 10 products
    
          setHasMore(true)
        }
    
        fetchProducts()
      }, [query])
    
      function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = event.target.value.toLowerCase()
    
        const newFilteredProducts = products.filter((product) => {
          const productName = product.product_name?.toLowerCase()
          return productName?.includes(searchTerm)
        })
    
        setFilteredProducts(newFilteredProducts.slice(0, 2))
    
        setHasMore(true)
    
        setQuery(searchTerm)
      }
    
    //   function loadMore() {
    //     const currentSize = filteredProducts.length
    //     const nextProducts = products.slice(currentSize, currentSize + 2)
    //     setFilteredProducts((prevProducts) => [...prevProducts, ...nextProducts])
    //     if (currentSize + 24 >= products.length) {
    //       setHasMore(false)
    //     }
    //   }
    
      return (
        <div>
          <div className={styles.searchbarContainer}>
            {/* <h1>Product List</h1> */}
            <input
              type="search"
              className={styles.input}
              placeholder="Sök produkt..."
              onChange={(event) => {
                handleSearch(event)
              }}
            />
          </div>
          {/* <InfiniteScroll
            dataLength={filteredProducts.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            children={undefined}
          ></InfiniteScroll>  */}
          <div className={styles.productContainer}>
            {filteredProducts.map((product) => (
              <div className={styles.cardGrid}>
                <div className={styles.productCard} key={product.code}>
                  <div className={styles.productImageContainer}>
                    <img
                      src={product.image_url}
                      alt={product.product_name}
                      className={styles.productImage}
                    />
                  </div>
                  <div className={styles.productName}>
                    <p>{product.product_name}</p>
                  </div>
                  <div className={styles.productEcoScoreImageContainer}>
                    <img
                      src={product.ecoScoreImage}
                      alt={`EcoScore: ${product.ecoscore_grade}`}
                      className={styles.productEcoScore}
                    />
                  </div>
                  <div className={styles.productEcoScoreText}>
                    <p>{product.ecoScoreLable}</p>
                  </div>
                  <div className={styles.productButton}>
                    <button className={styles.button}>
                      <Link href="/productPage" className={styles.buttonlink}>
                        Visa produkt
                      </Link>
                    </button>
                  </div>
                
                </div>
              </div>
            ))}
          </div>
          <div className={styles.navdiv}>
            <MuiBottomNavBar />
          </div>
        </div>
      )
    }
    


return <ProductList/>



}
export default SearchFunction