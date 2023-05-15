import { NextPage } from "next"
import { useEffect, useState } from "react"
import Image from "next/image"
import { User } from "@/types/user"
import { InputNameComponent } from "@/p-components/inputNameComponent"
import { InputEmailComponent } from "@/p-components/inputEmailComponent"
import styles from "../styles/subscriptionPage.module.css"

interface Props {
  name: string
  email: string

  setName: (name: string) => void
  setEmail: (email: string) => void
}

const user: User = {
  name: "",
  email: "",
}

const addUser = async (name: string, email: string, user: User) => {
  try {
    const response = await fetch("/api/user/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, name, email }),
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

const Database: NextPage<Props> = ({}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [users, setUsers] = useState<User[]>([])

  const getUsers = async () => {
    try {
      const response = await fetch("/api/user", {
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

      setUsers(data) // Store the retrieved user data in state
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      <div className={styles.logoContainer}>
        <Image
          src={"/Logga.svg"}
          alt={""}
          className={styles.logo}
          width={"100"}
          height={"100"}
        />
      </div>

      <div className={styles.card}>
        <div className={styles.headline}>
          <h1 className={styles.h1}>PRENUMERERA PÅ VÅRT NYHETSBREV</h1>
        </div>

        <InputNameComponent name={name} setName={setName} />
        <InputEmailComponent email={email} setEmail={setEmail} />

        <div className={styles.checkboxContainer}>
          <form action="/action_page.php">
            <input type="checkbox" id="checkbox1" className="styles.checkbox" />
            <label htmlFor="checkbox1">
              Jag samtycker till KliMats användarvillkor och regler
            </label>
            <br />
            <input type="checkbox" id="checkbox2" className="styles.checkbox" />
            <label htmlFor="checkbox2">
              Jag vill prenumerera på KliMats nyhetsbrev och få uppdaterad
              information om hur jag kan minska mitt klimatavtryck.
            </label>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>

        {/* Display the retrieved user data */}

        <div>
          <button
            onClick={() => {
              addUser(name, email, user)
            }}
          >
            Post
          </button>
        </div>

        <div>
          <h2 className="text-green-500">Users:</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                Name: {user.name} <br />
                Emial {user.email}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button onClick={getUsers} className=" w-6 h-4">
            Get users
          </button>
        </div>

        <button
          className=" bg-blue-500 hover:bg-blue-400
                    rounded font-bold text-white"
        >
          Button
        </button>
      </div>
    </>
  )
}

export default Database
