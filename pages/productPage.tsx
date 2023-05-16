import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Navbar } from "@/p-components/Navbar"
import styles from "../styles/productPage2.module.css"
import Link from "next/link"
import Image from "next/image"

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
          <Link href={"/productFetch"}>
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

        <div className={styles.totalscoreContainer}>
          <p className={styles.totalscore}> {ecoscore_score}/100 </p>
          <p className={styles.totalscoretext}>Klimatpoäng</p>
        </div>
        {/* </div> */}
      </div>

      <div className={styles.headlineContainer}>
        <h3 className={styles.headline}>
          Produktens klimatpoäng bygger på två kategorier
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
        <Link
          href={`https://world.openfoodfacts.org/product/${code}`}
          className={styles.linkBox}
        >
          <p className={styles.linkText}>Läs mer om produktens klimatpoäng </p>

          <div className={styles.iconContainer}>
            {/* <Image src={"/link_icon.svg"} alt="" className={styles.linkIcon} /> */}
            <Image
              src={"/link_icon_v2.svg"}
              alt={""}
              width={"10"}
              height={"10"}
              className={styles.linkIcon}
            ></Image>
          </div>
        </Link>
        {/* <hr className={styles.line} /> */}
      </div>

      <Navbar />
    </div>
  )
}

export default ProductPage
