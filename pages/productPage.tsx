import { useRouter } from "next/router"
import { useEffect, useState } from "react"
//import styles from "../styles/productPage.module.css"
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar"
import { Navbar } from "@/p-components/Navbar"
import styles from "../styles/productPage2.module.css"
import Link from "next/link"

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
  ecoscore_score: number
}

const ProductPage = () => {
  const router = useRouter()
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [heartIconSrc, setHeartIconSrc] = useState<string>(
    "/heart_icon_white.svg"
  )

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
  } = router.query as unknown as Product

  useEffect(() => {
    // Check if the current product is already saved as a favorite
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    console.log("favorites:", favorites)
    const isProductFavorite = favorites.some(
      (favorite: Product) => favorite.code === code
    )
    setIsFavorite(isProductFavorite)
  }, [code])

  // const [heartIconSrc, setHeartIconSrc] = useState<string>(
  //   "/heart_icon_white.svg"
  // )

  // const [heartIconSrc, setHeartIconSrc] = useState<string>(
  //   localStorage.getItem("isFavorite") === "true"
  //     ? "/heart_icon_green.svg"
  //     : "/heart_icon_white.svg"
  // )

  const handelFavoriteClick = () => {
    // Toggle favorites status
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    const updatedFavorites = isFavorite
      ? favorites.filter((favorite: Product) => favorite.code !== code)
      : [
          ...favorites,
          {
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
          },
        ]
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    setIsFavorite(!isFavorite)
    setHeartIconSrc(
      isFavorite ? "/heart_icon_white.svg" : "/heart_icon_green.svg"
    )
    // if (typeof window !== "undefined") {
    //   localStorage.setItem("isFavorite", JSON.stringify(!isFavorite))
    // }
    // router.push("/favorites")
  }

  return (
    <div>
      <div className={styles.heartIconContainer}>
        <div className={styles.arrowIconContainer}>
          <Link href={"/"}>
            <img src={"/pil_icon.svg"} alt="" />
          </Link>
        </div>
        <button onClick={handelFavoriteClick}>
          <img
            src={heartIconSrc}
            alt=""
            className={isFavorite ? styles.favoriteIcon : ""}
          />
        </button>
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
        <Link href={`https://world.openfoodfacts.org/product/${code}`}>
          <p className={styles.linkText}>Läs mer om produktens klimatpoäng</p>
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
