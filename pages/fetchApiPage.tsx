import { useRouter } from "next/router"
import React from "react"
import { useEffect, useState } from "react"

type Product = {
  code: string
  product_name: string
  image_url: string
}

type ApiResponse = {
  products: Product[]
}

export default function FetchApiPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const abortControllerRef = React.useRef<AbortController | null>(null)

  const fetchData = async () => {
    if (!searchTerm) {
      setProducts([])
      return
    }
    abortControllerRef.current?.abort() // cancel previous request (if any)
    const abortController = new AbortController()
    abortControllerRef.current = abortController
    const signal = abortController.signal
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=Sweden&sort_by=unique_scans_n&page_size=440&search_terms=${searchTerm}&json=true`,
        { signal }
      )
      const data = await response.json()
      setProducts(data.products)
    } catch (err) {
      // Handle errors here
      console.error(err)
    }
  }

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchTermSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const searchParams = new URLSearchParams(router.asPath.split("?")[1])
    searchParams.set("searchTerm", searchTerm)
    router.push(`/?${searchParams.toString()}`, undefined, { shallow: true })
    await fetchData()
  }

  const handleClearSearchTerm = () => {
    setSearchTerm("")
    setProducts([])
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split("?")[1])
    const initialSearchTerm = searchParams.get("searchTerm") || ""
    setSearchTerm(initialSearchTerm.toString())
  }, [router.asPath])

  useEffect(() => {
    fetchData()
    return () => {
      abortControllerRef.current?.abort() // cancel ongoing request on unmount
    }
  }, [searchTerm])

  return (
    <div>
      <h1>Fetch API Page</h1>
      <form onSubmit={handleSearchTermSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearchTerm}>
          Clear
        </button>
      </form>
      {products.map((product) => (
        <div key={product.code}>
          <p>{product.product_name}</p>
          <img
            src={product.image_url}
            alt={product.product_name}
            width={50}
            height={10}
            // className={styles.productImage}
          />
        </div>
      ))}
    </div>
  )
}
