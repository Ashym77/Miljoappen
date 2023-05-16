import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import SearchIcon from "@mui/icons-material/Search"
import styles from "../styles/nyFetch.module.css"
import { Navbar } from "@/p-components/Navbar"
import React from "react"

interface Product {
  code: string
  product_name: string
  generic_name: string
  brands: string
  categories: string
  image_url: string
  ecoscore_grade: string
  ecoScoreImage: string
  ecoScoreLabel: string
  ecoscore_score: string
}

const FetchApiPage2 = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    async function fetchProducts() {
      if (!searchTerm) {
        setProducts([])
        return
      }

      try {
        const response = await fetch(
          `https://world.openfoodfacts.org/cgi/search.pl?action=process&&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&sort_by=unique_scans_n&page_size=425&json=true&search_terms=${searchTerm}`
        )
        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProducts()
  }, [searchTerm])

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchTermSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const searchParams = new URLSearchParams(router.asPath.split("?")[1])
    searchParams.set("searchTerm", searchTerm)
    router.push(`/?${searchParams.toString()}`, undefined, { shallow: true })
    await fetchProducts()
  }

  const handleClearSearchTerm = () => {
    setSearchTerm("")
    setProducts([])
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split("?")[1])
    const initialSearchTerm = searchParams.get("searchTerm") || ""
    setSearchTerm(initialSearchTerm.toString())
  }, [router.asPath])
  return (
    <div>
      <div className={styles.searchbarContainer}>
        <form className={styles.form} onSubmit={handleSearchTermSubmit}>
          <input
            type="search"
            className={styles.input}
            placeholder="Sök produkt..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <button type="submit" className={styles.searchIcon}>
            <SearchIcon />
          </button>
        </form>
      </div>

      <div className={styles.productButton}>
        {products.map((product) => (
          <div key={product.code}>
            <button
              className={styles.button}
              onClick={() =>
                router.push({
                  pathname: "/productPage",
                  query: {
                    code: product.code,
                    product_name: product.product_name,
                    generic_name: product.generic_name,
                    brands: product.brands,
                    categories: product.categories,
                    image_url: product.image_url,
                    ecoscore_grade: product.ecoscore_grade,
                    ecoScoreImage: product.ecoScoreImage,
                    ecoScoreLabel: product.ecoScoreLabel,
                    ecoscore_score: product.ecoscore_score,
                  },
                })
              }
            >
              <div className={styles.productContainer}>
                <div className={styles.cardGrid}>
                  <div className={styles.productCard}>
                    <div className={styles.productImageContainer}>
                      <img
                        src={product.image_url}
                        alt={product.product_name}
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.productName}>
                      <p>
                        {product.product_name.slice(0, 18)}
                        {product.product_name.length > 18 ? "..." : ""}
                      </p>
                    </div>
                    <div className={styles.genericName}>
                      {product.generic_name !== undefined ? (
                        <p>
                          {product.generic_name.slice(0, 22)}
                          {product.generic_name.length > 22 ? "..." : ""}
                        </p>
                      ) : product.brands !== undefined ? (
                        <p>
                          {product.brands.slice(0, 22)}
                          {product.brands.length > 22 ? "..." : ""}
                        </p>
                      ) : (
                        <p></p>
                      )}
                    </div>
                    <div className={styles.productEcoScoreImageContainer}>
                      <img
                        src={product.ecoScoreImage}
                        alt={`EcoScore: ${product.ecoscore_grade}`}
                        className={styles.productEcoScore}
                      />
                    </div>
                    <div className={styles.productEcoScoreText}>
                      <p>{product.ecoScoreLabel} klimatpåverkan</p>
                    </div>
                    <div className={styles.showDetails}>
                      <p>Visa detaljer</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
        {/* <ProductList /> */}
      </div>
      <Navbar />
    </div>
  )
}

export default FetchApiPage2
