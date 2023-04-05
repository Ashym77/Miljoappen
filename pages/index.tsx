import { NextPage } from "next"
import Link from "next/link"
import styles from "../styles/index.module.css"
import Image from "next/image"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

interface Props {}

const index: NextPage<Props> = () => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const searchInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement
    const searchButton = document.getElementById(
      "searchButton"
    ) as HTMLButtonElement
    const productsList = document.getElementById("productsList") as HTMLElement

    const fetchProducts = (query: string): Promise<any> => {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${query}&json=1`
      console.log(`Fetching products for query: ${query}`)
      return fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`)
          }
          return response.json()
        })
        .then((data) => data.products)
    }

    const displayProducts = (products: any[]): void => {
      productsList.innerHTML = ""
      products.forEach((product) => {
        const card = document.createElement("div")
        card.classList.add("card")

        const image = document.createElement("img")
        image.src = product.image_url
        image.alt = product.product_name
        image.classList.add("card-image")
        card.appendChild(image)

        const content = document.createElement("div")
        content.classList.add("card-content")
        card.appendChild(content)

        const name = document.createElement("h2")
        name.innerText = product.product_name
        content.appendChild(name)

        const brand = document.createElement("p")
        brand.innerText = `Brand: ${product.brands}`
        content.appendChild(brand)

        const nutriScore = document.createElement("p")
        nutriScore.innerText = `NutriScore: ${product.nutriscore_grade}`
        content.appendChild(nutriScore)

        const ecoScore = document.createElement("p")
        ecoScore.innerText = `EcoScore: ${product.ecoscore_grade}`
        content.appendChild(ecoScore)

        productsList.appendChild(card)
      })
    }

    const handleSearch = (): void => {
      fetchProducts(searchQuery)
        .then((products) => {
          setProducts(products)
          displayProducts(products)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    searchButton.addEventListener("click", handleSearch)

    return () => {
      searchButton.removeEventListener("click", handleSearch)
    }
  }, [searchQuery])

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchQuery(event.target.value)
  }

  return (
    <div id="container" className="bg-purple-900">
      <h1 className="text-white text-center py-8"> Klimat Mat</h1>

      <p
        id="frontpage-p"
        className="ml-8 mt-32 mb-16 text-white text-md md:text-lg"
      >
        Välkommen till miljöappen! <br></br>
        Här kan du enkelt ta reda på livsmedelsprodukters klimatavtryck och pris
      </p>

      <div className="search-container">
        <label>
          <input
            id="searchInput"
            name="searchBar"
            type="search"
            placeholder="Sök produkt..."
            className="rounded-lg p-2 ml-2"
          />
        </label>
        <button id="searchButton">Search</button>
      </div>
      <ul id="productsList"></ul>

      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </div>
  )
}

export default index
