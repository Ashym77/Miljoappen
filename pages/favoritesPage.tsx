import { NextPage } from "next"
import { useEffect, useState } from "react"
import styles from "../styles/favoritesPage.module.css"
import { Navbar } from "@/p-components/Navbar"
import Image from "next/image"

interface Props {}

interface Favorite {
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

const FavoritesPage: NextPage<Props> = ({}) => {
  const [favorites, setFavorites] = useState<Favorite[]>([])

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    )
    setFavorites(storedFavorites)
  }, [])

  const removeFromFavorites = (code: string) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.code !== code
    )
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

  return (
    <div>
      <div className={styles.headline}>
        <h1>FAVORITER</h1>
      </div>
      <div className={styles.productContainer}>
        {favorites.map((favorite) => (
          <div className={styles.cardGrid} key={favorite.code}>
            <div className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img
                  src={favorite.image_url}
                  alt={favorite.product_name}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productName}>
                <p>
                  {favorite.product_name.slice(0, 22)}
                  {favorite.product_name.length > 22 ? "..." : ""}
                </p>
              </div>
              <div className={styles.genericName}>
                {favorite.generic_name !== undefined ? (
                  <p>
                    {favorite.generic_name.slice(0, 22)}
                    {favorite.generic_name.length > 22 ? "..." : ""}
                  </p>
                ) : favorite.brands !== undefined ? (
                  <p>
                    {favorite.brands.slice(0, 22)}
                    {favorite.brands.length > 22 ? "..." : ""}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>

              <div className={styles.productEcoScoreImageContainer}>
                <img
                  src={favorite.ecoScoreImage}
                  alt={`EcoScore: ${favorite.ecoscore_grade}`}
                  className={styles.productEcoScore}
                />
              </div>
              <div className={styles.productEcoScoreText}>
                <p>{favorite.ecoScoreLabel} klimatpåverkan </p>
              </div>
              <div className={styles.productButton}>
                <button onClick={() => removeFromFavorites(favorite.code)}>
                  <Image
                    src={"/blackClose.svg"}
                    alt={""}
                    className={styles.dialogImageE}
                    width={"100"}
                    height={"100"}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <Navbar />
    </div>
  )
}

export default FavoritesPage
