import { useState } from "react"
import Link from "next/link"
import router from "next/router"

export default function IndexPage() {
  const [searchTerm, setSearchTerm] = useState("")

  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault()
  //     window.location.href = `/fetchApiPage?searchTerm=${searchTerm}`
  //   }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push({
      pathname: "/fetchApiPage",
      query: { searchTerm },
    })
  }

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h1>Index Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button type="submit">Search</button>
      </form>
      <Link href="/fetchApiPage">
        <p>Go to Fetch API Page</p>
      </Link>
    </div>
  )
}
