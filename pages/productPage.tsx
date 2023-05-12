import { useRouter } from "next/router"
import { useState } from "react"
//import styles from "../styles/productPage.module.css"
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar"
import { Navbar } from "@/p-components/Navbar"
import styles from "../styles/productPage2.module.css"
import Link from "next/link"
const ProductPage = () => {
  const router = useRouter()

  const {
    code,
    product_name,
    brands,
    categories,
    image_url,
    ecoscore_grade,
    ecoScoreImage,
    ecoScoreLabel,
    ecoscore_score,
  } = router.query

  return (
    <div>
      <div className={styles.heartIconContainer}>
        <div className={styles.arrowIconContainer}>
          <Link href={"/productFetch"}>
            <img src={"/pil_icon.svg"} alt="" />
          </Link>
        </div>

        <img src={"/heart_icon_white.svg"} alt="" />
      </div>

      <div className={styles.infoCard}>
        <div className={styles.productNameContainer2}>
          <p className={styles.product_name}> {product_name}</p>
        </div>

        <div className={styles.productImageContainer2}>
          <img
            className={styles.productImage}
            src={`${image_url}`}
            alt={`${product_name}`}
          />
        </div>

        {/* <div className = {styles.ecoScoreContainer}> */}
        <div className={styles.ecoScoreImageContainer}>
          <img
            className={styles.ecoScoreImage}
            src={`${ecoScoreImage}`}
            alt={`EcoScore: ${ecoscore_grade}`}
          />
        </div>
        <div className={styles.ecoScoreLabelContainer}>
          <p className={styles.ecoScoreLabel}>{ecoScoreLabel} klimatpåverkan</p>
        </div>

        {/* <table>
          <tr>
            <th>Kategori</th>
            <th>Påverkan</th>
          </tr>
        </table> */}
        {/* 
        <div className={styles.categoriesContainer}>
          <p className={styles.categories}></p>
          <p className={styles.categories}>Kategori</p>
        </div>

        <div className={styles.impactContainer}>
          <p className={styles.impact}></p>
          <p className={styles.categories}>Påverkan</p>
        </div> */}
        <div className={styles.totalscoreContainer}>
          <p className={styles.totalscore}> {ecoscore_score}/100 </p>
          <p className={styles.totalscoretext}>Klimatpoäng</p>
        </div>
        {/* </div> */}
      </div>

      <div className={styles.headlineContainer}>
        <h3 className={styles.headline}>
          {" "}
          Produktens klimatpoäng bygger på två kategorier{" "}
        </h3>
      </div>

      <div className={styles.text1Container}>
        <p className={styles.lcaText}>
          LCA (Life Cycle analysis), som anger ett <br /> snittvärde för
          liknande produkters utsläpp
        </p>
      </div>

      <div className={styles.text2Container}>
        <p className={styles.bonusMalustext}>
          Bonus malus, som ger plus- och minuspoäng baserat på fyra
          underkategorier: miljömärkning, ingrediensers ursprung, miljöskadliga
          ingredienser och förpackning
        </p>
      </div>

      <div className={styles.linkContainer}>
        <Link href={"https://www.google.com"}>
          <p className= {styles.linkText}>Läs mer om produktens klimatpoäng</p>
        </Link>
      </div>

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
