import { NextPage } from "next"
import { useEffect, useState } from "react"
import { InputProductNameComponent } from "@/p-components/inputProductNameComponent"
import { InputGenericNameComponent } from "@/p-components/inputGenericNameComponent"
import { Favorites } from "@/types/favorites"

interface Props {
  product_name: string
  generic_name: string
  setProduct_name: (product_name: string) => void
  setGeneric_name: (generic_name: string) => void
}

const favorite: Favorites = {
  product_name: "",
  generic_name: "",
}

export const addFavorites = async (
  product_name: string,
  generic_name: string,
  favorite: Favorites
) => {
  try {
    const response = await fetch("/api/favorites/newfavorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...favorite, product_name, generic_name }),
    })

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await response.json()
    console.log(data) // Access the _id field from the response
  } catch (error) {
    console.error("Error:", error)
  }
}

const Favoritesdb: NextPage<Props> = ({}) => {
  const [product_name, setProduct_name] = useState("")
  const [generic_name, setGeneric_name] = useState("")

  const [favorites, setFavorites] = useState<Favorites[]>([])

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
      console.log(data)
      console.log(data._id)

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
      />
      <InputGenericNameComponent
        generic_name={generic_name}
        setGeneric_name={setGeneric_name}
      />

      {/* Display the retrieved user data */}

      <div>
        <button
          onClick={() => {
            addFavorites(product_name, generic_name, favorite)
          }}
        >
          Post
        </button>
      </div>

      <div>
        <h2 className="text-green-500">Favorites:</h2>
        <ul>
          {favorites.map((favorites) => (
            <li key={favorites._id}>
              product name: {favorites.product_name} <br />
              Generic name {favorites.generic_name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={getFavorites} className=" w-6 h-4">
          Get favorites
        </button>
      </div>

      <button
        className=" bg-blue-500 hover:bg-blue-400
                    rounded font-bold text-white"
      >
        Button
      </button>
    </>
  )
}

export default Favoritesdb
