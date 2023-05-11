import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../styles/productPage.module.css"
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar"
import { Navbar } from "@/p-components/Navbar"
import { connectToDatabase } from "@/utils/db"
import { Favorites } from "@/types/favorites"

import { NextPage } from "next"
// import MyContextProvider, { MyProduct } from '@/context/my-context-provider'
// import { useContext } from 'react'
// import Image from "next/image"
// import { log } from 'console'

const ProductPage = () => {
  const router = useRouter()

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

  const handleAddToFavorites = async () => {
    try {
      const db = await connectToDatabase()
      const collection = db.collection("favorites")
      const result = await collection.insertOne({
        code,
        product_name,
        generic_name,
        brands,
        categories,
        image_url,
        ecoscore_grade,
        ecoScoreImage,
        ecoScoreLabel,
      })
      console.log(`Product added to favorites with id: ${result.insertedId}`)
    } catch (err) {
      console.error(`Failed to add product to favorites: ${err}`)
    }
  }

  return (
    <div>
      <div className={styles.productImageContainer2}>
        <img
          className={styles.productImage}
          src={image_url}
          alt={product_name}
        />
      </div>

      <div className={styles.productNameContainer2}>
        <p className={styles.product_name}>Product Name: {product_name}</p>
      </div>

      <div className={styles.infoCard}>
        {/* <div className = {styles.ecoScoreContainer}> */}
        <div className={styles.ecoScoreImageContainer}>
          <img
            className={styles.ecoScoreImage}
            src={ecoScoreImage}
            alt={`EcoScore: ${ecoscore_grade}`}
          />
        </div>
        <div className={styles.ecoScoreLabelContainer}>
          <p className={styles.ecoScoreLabel}>
            Eco Score Label: {ecoScoreLabel}
          </p>
        </div>

        <table>
          <tr>
            <th>Kategori</th>
            <th>Påverkan</th>
          </tr>
        </table>

        <div className={styles.categoriesContainer}>
          <p className={styles.categories}></p>
          <p className={styles.categories}>Kategori</p>
        </div>

        <div className={styles.impactContainer}>
          <p className={styles.impact}></p>
          <p className={styles.categories}>Påverkan</p>
        </div>
        <p> {ecoscore_score}/100 Klimatpoäng</p>

        {/* </div> */}
      </div>

      <button onClick={handleAddToFavorites}>Add to favorites</button>

      <Navbar />
    </div>
  )
}

export default ProductPage

// import { NextPage } from 'next'
// import MyContextProvider, { MyProduct } from '@/context/my-context-provider'
// import { useContext } from 'react'
// import Image from "next/image"
// import { log } from 'console'

// interface Props {

// }

// const ProductPage: NextPage<Props> = ({}) => {
//     const{code} = useContext(MyProduct)

//     const{product_name} = useContext(MyProduct)
//     const {brands} = useContext(MyProduct)
//     const {categories} = useContext(MyProduct)
//     const {image_url} = useContext(MyProduct)
//     const {ecoscore_grade} = useContext(MyProduct)
//     const {ecoScoreImage} = useContext(MyProduct)

//     const {ecoScoreLabel} = useContext(MyProduct)
//     console.log(product_name);

//   return <div>
// <MyContextProvider>
// <div><h1>{product_name}</h1></div>
// <div><p>{brands}</p></div>
// <div><Image src={image_url} alt={""} width={"0"}
//           height={"0"}></Image></div>
//     </MyContextProvider>

//   </div>
// }

// export default ProductPage
