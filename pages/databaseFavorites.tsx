import { Favorites } from "@/types/favorites"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import styles from "../styles/index.module.css"
// import { ObjectId } from "mongodb"

interface Props {
  code: string

  product_name: string

  generic_name: string

  brands: string

  categories: string

  image_url: string

  ecoscore_grade: string

  ecoScoreImage: string

  ecoScoreLable: string

  setCode: (code: string) => void

  setProduct_name: (product_name: string) => void

  setGeneric_name: (generic_name: string) => void

  setBrands: (brands: string) => void

  setCategories: (categories: string) => void

  setImage_url: (name: string) => void

  setEcoscore_grade: (ecoscore_grade: string) => void

  setEcoScoreImage: (ecoScoreImage: string) => void

  setEcoScoreLable: (ecoScoreLable: string) => void
}

const favorites: Favorites = {
  code: "",

  product_name: "",

  generic_name: "",

  brands: "",

  categories: "",

  image_url: "",

  ecoscore_grade: "",

  ecoScoreImage: "",

  ecoScoreLable: "",
}

interface OutputProps {
  code: string

  product_name: string

  generic_name: string

  brands: string

  categories: string

  image_url: string

  ecoscore_grade: string

  ecoScoreImage: string

  ecoScoreLable: string
}

const addFavorites = async (
  //   code: string,
  product_name: string,
  generic_name: string,
  //   brands: string,
  //   categories: string,
  //   image_url: string,
  //   ecoscore_grade: string,
  //   ecoScoreImage: string,
  //   ecoScoreLable: string,
  favorites: Favorites
) => {
  try {
    const response = await fetch("/api/favorites/newFavorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...favorites,
        // code,
        product_name,
        generic_name,
        // brands,
        // categories,
        // image_url,
        // ecoscore_grade,
        // ecoScoreImage,
        // ecoScoreLable,
      }),
    })

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await response.json()
    console.log(data._id)
  } catch (error) {
    console.error("Error:", error)
  }
}

const InputProductNameComponent = ({
  //   code,
  //   setCode,
  product_name,
  setProduct_name,
}: //   generic_name,
//   setGeneric_name,
//   brands,
//   setBrands,
//   categories,
//   setCategories,
//   image_url,
//   setImage_url,
//   ecoscore_grade,
//   setEcoscore_grade,
//   ecoScoreImage,
//   setEcoScoreImage,
//   ecoScoreLable,
//   setEcoScoreLable,
Props) => {
  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newProduct_name = event.target.value
    setProduct_name(newProduct_name)
  }

  return (
    <input
      type="text"
      value={product_name}
      onChange={handleProductNameChange}
      placeholder="produkt namn"
      className=""
    />
  )
}

const InputGenericNameComponent = ({
  generic_name,
  setGeneric_name,
}: Props) => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGenericName = event.target.value

    setGeneric_name(newGenericName)
  }
  return (
    <div>
      <div className={styles.emailContainer}>
        <input
          type="text"
          value={generic_name}
          onChange={handleEmailChange}
          className={styles.inputEmail}
          placeholder="generic_name"
        />
      </div>
    </div>
  )
}

const OutputComponent: React.FC<OutputProps> = ({
  product_name,
  generic_name,
}) => {
  return (
    <div className=" mt-5 mb-5">
      <p>Product Name: {product_name}</p>
      <p>Generic Name: {generic_name}</p>
    </div>
  )
}

const DatabaseFavorites: NextPage<Props> = ({}) => {
  const [product_name, setProduct_name] = useState("")
  const [generic_name, setGeneric_name] = useState("")

  const [favorites, setFavorites] = useState<Favorites[]>([])
  const [showFavorites, setShowFavorites] = useState(false)

  const getFavorites = async () => {
    try {
      const response = await fetch("/api/favorites", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      setFavorites(data) // Store the retrieved user data in state
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      <InputProductNameComponent
        product_name={product_name}
        setProduct_name={setProduct_name}
        generic_name={""}
        setGeneric_name={function (product_name: string): void {
          throw new Error("Function not implemented.")
        }}
        code={""}
        brands={""}
        categories={""}
        image_url={""}
        ecoscore_grade={""}
        ecoScoreImage={""}
        ecoScoreLable={""}
        setCode={function (code: string): void {
          throw new Error("Function not implemented.")
        }}
        setBrands={function (brands: string): void {
          throw new Error("Function not implemented.")
        }}
        setCategories={function (categories: string): void {
          throw new Error("Function not implemented.")
        }}
        setImage_url={function (name: string): void {
          throw new Error("Function not implemented.")
        }}
        setEcoscore_grade={function (ecoscore_grade: string): void {
          throw new Error("Function not implemented.")
        }}
        setEcoScoreImage={function (ecoScoreImage: string): void {
          throw new Error("Function not implemented.")
        }}
        setEcoScoreLable={function (ecoScoreLable: string): void {
          throw new Error("Function not implemented.")
        }}
      />
      <InputGenericNameComponent
        generic_name={generic_name}
        setGeneric_name={setGeneric_name}
        product_name={""}
        setProduct_name={function (product_name: string): void {
          throw new Error("Function not implemented.")
        }}
        code={""}
        brands={""}
        categories={""}
        image_url={""}
        ecoscore_grade={""}
        ecoScoreImage={""}
        ecoScoreLable={""}
        setCode={function (code: string): void {
          throw new Error("Function not implemented.")
        }}
        setBrands={function (brands: string): void {
          throw new Error("Function not implemented.")
        }}
        setCategories={function (categories: string): void {
          throw new Error("Function not implemented.")
        }}
        setImage_url={function (name: string): void {
          throw new Error("Function not implemented.")
        }}
        setEcoscore_grade={function (ecoscore_grade: string): void {
          throw new Error("Function not implemented.")
        }}
        setEcoScoreImage={function (ecoScoreImage: string): void {
          throw new Error("Function not implemented.")
        }}
        setEcoScoreLable={function (ecoScoreLable: string): void {
          throw new Error("Function not implemented.")
        }}
      />

      <OutputComponent
        product_name={product_name}
        generic_name={generic_name}
        code={""}
        brands={""}
        categories={""}
        image_url={""}
        ecoscore_grade={""}
        ecoScoreImage={""}
        ecoScoreLable={""}
      />

      {/* Display the retrieved user data */}

      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            addFavorites(
              code,
              product_name,
              generic_name,
              brands,
              categories,
              image_url,
              ecoscore_grade,
              ecoScoreImage,
              ecoScoreLable,
              favorites
            )
          }}
          className=" bg-green-500"
        >
          Post
        </button>
      </div>

      <div className=" bg-red-600 ">
        <h2 className={styles.h2}>Favorites:</h2>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite._id}>
              <p>Id: {favorite._id}</p>

              <p>Name: {favorite.product_name}</p>

              <p>Generic name: {favorite.generic_name}</p>
              <br />

              {/* Id: {user.id}, Name: {user.name}, Email: {user.email},  */}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={getFavorites}>Get favorites</button>
      </div>
    </>
  )
}

export default DatabaseFavorites
