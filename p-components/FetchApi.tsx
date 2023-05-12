import { useContext, useEffect, useState } from "react"
import styles from "../styles/nyFetch.module.css"
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar"
import Link from "next/link"
import { useRouter } from "next/router"
import { Navbar } from "./Navbar"

const FetchApi = () => {
  interface Props {}

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

  const ecoScoreImage = [
    "/ecoscore_a_v2.svg",
    "/ecoscore_b_v2.svg",
    "/ecoscore_c_v2.svg",
    "/ecoscore_d_v2.svg",
    "/ecoscore_e_v2.svg",
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

  const ecoScoreLabel = [
    "Minimal",
    "Låg",
    "Måttlig",
    "Medelhög",
    "Hög",
    "Odefinierat",
  ]

  function getEcoScoreLabel(Label: string): string {
    switch (Label) {
      case "a":
        return ecoScoreLabel[0]
      case "b":
        return ecoScoreLabel[1]
      case "c":
        return ecoScoreLabel[2]
      case "d":
        return ecoScoreLabel[3]
      case "e":
        return ecoScoreLabel[4]
      default:
        return ecoScoreLabel[5]
    }
  }

  function ProductList() {
    const [query, setQuery] = useState<string>("")

    const [products, setProducts] = useState<Product[]>([])

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

    const [hasMore, setHasMore] = useState<boolean>(true)

    const router = useRouter()

    useEffect(() => {
      async function fetchProducts() {
        const response = await fetch(
          // `https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${query}&json=1`
          `https://world.openfoodfacts.org/cgi/search.pl?action=process&&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&sort_by=unique_scans_nsearch_terms=${query}&page_size=425&json=true`
        )

        const data = await response.json()

        const products: Product[] = data.products.map((product: Product) => ({
          code: product.code,

          product_name: product.product_name,

          generic_name: product.generic_name,

          brands: product.brands,

          categories: product.categories,

          image_url: product.image_url,

          ecoscore_grade: product.ecoscore_grade,

          ecoScoreImage: getEcoScoreImage(product.ecoscore_grade),

          ecoScoreLabel: getEcoScoreLabel(product.ecoscore_grade),

          ecoscore_score: product.ecoscore_score,
        }))

        const filteredProducts = products.filter(
          (product) =>
            product.ecoscore_grade !== "undefined" &&
            product.ecoscore_grade !== "not-applicable" &&
            product.ecoscore_grade !== "unknown" &&
            product.product_name !== undefined &&
            product.image_url !== undefined
        )

        console.log("Filtered Products:", filteredProducts)
        console.log("All Products:", products)

        setProducts(filteredProducts)

        setFilteredProducts(filteredProducts.slice(0, 425)) // display first 10 products

        setHasMore(true)
      }

      fetchProducts()
    }, [])

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
      const searchTerm = event.target.value.toLowerCase()

      const newFilteredProducts = products.filter((product) => {
        const productName = product.product_name?.toLowerCase()
        return productName?.includes(searchTerm)
      })

      setFilteredProducts(newFilteredProducts.slice(0, 425))

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
        ></InfiniteScroll> */}

        <div className={styles.productButton}>
          {filteredProducts.map((product) => (
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
                  {/* {filteredProducts.map((product) => ( */}
                  {/* <div className={styles.cardGrid} key={product.code}> */}
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
                        <p>{product.ecoScoreLabel} klimatpåverkan </p>
                      </div>
                      <div className={styles.showDetails}>
                        <p>Visa detaljer</p>
                      </div>
                      {/* <div className={styles.productButton}>
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
                    Visa produkt
                  </button>
                </div> */}
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </button>
            </div>
          ))}
        </div>

        <Navbar />
        {/* <div className={styles.navdiv}>
          <MuiBottomNavBar />
        </div> */}
      </div>
    )
  }

  return <ProductList />
}
export default FetchApi
