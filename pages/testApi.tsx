import { log } from "console"
import { NextPage } from "next"

import { useEffect, useState } from "react"

interface Props {}

interface Product {
  code: string

  product_name: string

  brands: string

  categories: string

  image_url: string
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://world.openfoodfacts.org/cgi/search.pl?action=process&sort_by=unique_scans_n&page_size=100&json=true"
      )

      const data = await response.json()

      const products: Product[] = data.products.map((product: Product) => ({
        code: product.code,

        product_name: product.product_name,

        brands: product.brands,

        categories: product.categories,

        image_url: product.image_url,
      }))

      setProducts(products)

      setFilteredProducts(products)
    }

    fetchProducts()
  }, [])

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toString()
    // console.log(products)
    // console.log(searchTerm)
    // setFilteredProducts([])
    const myFiltredProducts = products.forEach((product: Product) => {
      console.log(product)
      if (product.product_name === undefined) {
        console.log("undefiend product")
      } else {
        console.log("product was found :)")

        const hasLetter = product.product_name.includes(searchTerm)
        if (hasLetter) {
          setFilteredProducts([...filteredProducts, product])
        }
      }
    })

    console.log(myFiltredProducts)
    console.log("finished")

    // const filteredProducts = products?.filter((product: Product) =>
    //   // console.log()
    //   {
    //     console.log(product.product_name)

    //     // product.product_name.includes(searchTerm)
    //   }
    // )
    // console.log(filteredProducts)

    // setFilteredProducts(filteredProducts)
  }

  // TODO

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        onChange={(event) => {
          handleSearch(event)
        }}
      />{" "}
      {/* <button onClick={handleSearch}>Search</button> */}{" "}
      <ul>
        {" "}
        {filteredProducts.map((product) => (
          <li key={product.code}>
            <h3>{product.product_name}</h3> <p>{product.brands}</p>{" "}
            <p>{product.categories}</p>
            <img src={product.image_url} alt={product.product_name} />{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  )
}

const TestApi: NextPage<Props> = ({}) => {
  return <ProductList />
}

export default TestApi
