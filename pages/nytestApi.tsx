import { log } from "console"
import { NextPage } from "next"
import styles from "../styles/nyTestApi.module.css"
import Image from "next/image"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar"

interface Props {}

interface Product {
  code: string

  product_name: string

  brands: string

  categories: string

  image_url: string

  ecoscore_grade: string

  ecoScoreImage: string

  ecoScoreLabel: string
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
    // case "unknown":
    //   return ecoScoreImage[5]
    default:
      return ecoScoreImage[5]
  }
}

const ecoScoreLabel = [
  "Låg klimatpåverkan",
  "Låg klimatpåverkan",
  "Måttlig klimatpåverkan",
  "Hög klimatpåverkan",
  "Hög klimatpåverkan",
  "Odefinierat",
]

function getEcoScoreLabel(label: string): string {
  switch (label) {
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
  const [products, setProducts] = useState<Product[]>([])

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&tagtype_1=brands&tag_contains_1=contains&tag_1=Arla&sort_by=unique_scans_n&page_size=300&json=true"
        //"https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&json=true"
        //"https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&sort_by=unique_scans_n&page_size=250&json=true"
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

        ecoScoreLabel: getEcoScoreLabel(product.ecoscore_grade),
      }))

      setProducts(products)

      setFilteredProducts(products)
    }

    fetchProducts()
  }, [])

  // function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
  //   const searchTerm = event.target.value.toString()
  //   // console.log(products)
  //   // console.log(searchTerm)
  //   // setFilteredProducts([])
  //   const myFiltredProducts = products.forEach((product: Product) => {
  //     console.log(product)
  //     if (product.product_name === undefined) {
  //       console.log("undefiend product")
  //     } else {
  //       console.log("product was found :)")

  //       const hasLetter = product.product_name.includes(searchTerm)
  //       if (hasLetter) {
  //         setFilteredProducts([...filteredProducts, product])
  //       }
  //     }
  //   })

  //   console.log(myFiltredProducts)
  //   console.log("finished")
  // }
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase()
    //const firstLetter = event.target.value.trim().charAt(0).toLowerCase();

    const newFilteredProducts = products.filter((product) => {
      const productName = product.product_name?.toLowerCase()
      return productName?.includes(searchTerm)
      //return productName?.charAt(0) === firstLetter;
    })

    setFilteredProducts(newFilteredProducts)
  }

  // TODO

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
      <div className={styles.productContainer}>
        {filteredProducts.map((product) => (
          <div className={styles.productCard} key={product.code}>
            <div className={styles.imageContainer}>
              <img
                src={product.image_url}
                alt={product.product_name}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productInfoContainer}>
              <div className={styles.textContainer}>
                <div className={styles.nameContainer}>
                  <h3 className={styles.productName}>{product.product_name}</h3>
                </div>
                <div className={styles.ecoScoreContainer}>
                  <div className={styles.scoreContainer}>
                    <h3 className={styles.ecoScoreImageLabel}>Miljöpoäng: </h3>
                    <img
                      src={product.ecoScoreImage}
                      alt={`EcoScore: ${product.ecoscore_grade}`}
                      className={styles.ecoscoreImage}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.productInfoContainer2}>
                <div className={styles.labelContainer}>
                  <p className={styles.ecoScoreLabel}>
                    {product.ecoScoreLabel}
                  </p>
                </div>
              </div>
              {/* <div className={styles.productNameContainer}> */}
              {/* </div> */}
              {/* <p className={styles.productBrand}>{product.brands}</p> */}
              {/* <p className={styles.productEcoScore}>
                EcoScore: {product.ecoscore_grade}
              </p> */}

              <div className={styles.buttonContainer}>
                <button className={styles.button}>
                  <Link href="/Search" className={styles.buttonlink}>
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

const nyTestApi: NextPage<Props> = ({}) => {
  return <ProductList />
}

export default nyTestApi
