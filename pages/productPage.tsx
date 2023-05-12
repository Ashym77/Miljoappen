import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../styles/productPage.module.css"
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar"
import { Navbar } from "@/p-components/Navbar"
import { connectToDatabase } from "@/utils/db"
// import { addFavorites } from "@/pages/api/favorites/[newfavorites]"
import Favoritesdb, { addFavorites } from "@/pages/favoritesdb"
// import { Favoritesdb } from "@/Favoritesdb"

const ProductPage = () => {
  const router = useRouter()
  // const { code } = router.query

  const {
    code,
    product_name,
    generic_name,
    brands,
    categories,
    image_url,
    ecoscore_grade,
    ecoScoreImage,
    ecoScoreLabel,
    ecoscore_score,
  } = router.query

  console.log(router)

  const [product, setProduct] = useState({ product_name: "", generic_name: "" })

  const handleAddToFavorites = async () => {
    try {
      await addFavorites(product.product_name, product.generic_name)
      console.log("Product added to favorites")
      setProduct({ product_name: "", generic_name: "" })
    } catch (err) {
      console.error(`Failed to add product to favorites: ${err}`)
    }
  }

  const handleSubmit = async () => {
    const response = await fetch("/api/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })

    const data = await response.json()

    console.log(data.message)
  }

  // const handleAddToFavorites = async () => {
  //   try {
  //     const db = await connectToDatabase()
  //     const collection = db.collection("favorites")
  //     const result = await collection.insertOne({
  //       // code,
  //       product_name,
  //       // generic_name,
  //       // brands,
  //       // categories,
  //       // image_url,
  //       // ecoscore_grade,
  //       // ecoScoreImage,
  //       // ecoScoreLabel,
  //     })
  //     console.log(`Product added to favorites with id: ${result.insertedId}`)
  //   } catch (err) {
  //     console.error(`Failed to add product to favorites: ${err}`)
  //   }
  // }

  return (
    <div>
      <div className={styles.productImageContainer2}>
        {/* <img
          className={styles.productImage}
          src={`${image_url}`}
          alt={`${product_name}`}
        /> */}
      </div>

      <div className={styles.productNameContainer2}>
        <p className={styles.product_name}>Product Name: {product_name}</p>
        <p className={styles.generic_name}>Generic Name: {generic_name}</p>
      </div>

      <div className={styles.infoCard}>
        {/* <div className = {styles.ecoScoreContainer}> */}
        {/* <div className={styles.ecoScoreImageContainer}>
          <img
            className={styles.ecoScoreImage}
            src={`${ecoScoreImage}`}
            alt={`EcoScore: ${ecoscore_grade}`}
          />
        </div> */}
        {/* <div className={styles.ecoScoreLabelContainer}>
          <p className={styles.ecoScoreLabel}>
            Eco Score Label: {ecoScoreLabel}
          </p>
        </div> */}

        {/* <table>
          <tr>
            <th>Kategori</th>
            <th>Påverkan</th>
          </tr>
        </table> */}

        {/* <div className={styles.categoriesContainer}>
          <p className={styles.categories}></p>
          <p className={styles.categories}>Kategori</p>
        </div> */}

        {/* <div className={styles.impactContainer}>
          <p className={styles.impact}></p>
          <p className={styles.categories}>Påverkan</p>
        </div>
        <p> {ecoscore_score}/100 Klimatpoäng</p> */}
        <button>hej</button>

        {/* </div> */}
      </div>

      <Favoritesdb
        product_name={product.product_name}
        generic_name={product.generic_name}
        setProduct_name={(product_name: string) =>
          setProduct((prev) => ({ ...prev, product_name }))
        }
        setGeneric_name={(generic_name: string) =>
          setProduct((prev) => ({ ...prev, generic_name }))
        }
      />

      <button onClick={handleSubmit}>Add to database</button>

      <button onClick={handleAddToFavorites}>Add to favorites</button>
      {/* <div className={styles.navdiv}>
        <MuiBottomNavBar />
      </div> */}

      <Navbar />
      {/* <p className={styles.ecoscore_grade}>Eco Score Grade:</p>
      <h1 className={styles.headline}>Product Details</h1>
      <p className={styles.code}>Code:</p>
      <p className={styles.product_name}>Product Name: {product_name}</p>
      <p className={styles.brands}>Brands: </p>
      <p className={styles.categories}>Categories</p> */}
    </div>
  )
}

export default ProductPage
