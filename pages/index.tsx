import { NextPage } from "next"
import Link from "next/link"
import styles from "../styles/index.module.css"
import Image from "next/image"
import SearchIcon from "@mui/icons-material/Search"

import { useEffect, useState } from "react"
import FetchApi from "@/p-components/FetchApi"
import { Navbar } from "@/p-components/Navbar"
import router from "next/router"

interface Props {}

const ecoScoreImage = [
  "/ecoscore_a_v3.svg",
  "/ecoscore_b_v3.svg",
  "/ecoscore_c_v3.svg",
  "/ecoscore_d_v3.svg",
  "/ecoscore_e_v3.svg",
  "/ecoscore_u_v2.svg",
]

function getEcoScoreImage(score: string): string {
  switch (score) {
    case "a":
      return ecoScoreImage[0]
    case "b":
      return ecoScoreImage[1]
    case "c":
      return ecoScoreImage[2]
    case "d":
      return ecoScoreImage[3]
    case "e":
      return ecoScoreImage[4]
    default:
      return ecoScoreImage[5]
  }
}

const ecoScoreLable = [
  "Minimal",
  "Låg",
  "Måttlig",
  "Medelhög",
  "Hög",
  "Odefinierat",
]

function getEcoScoreLable(lable: string): string {
  switch (lable) {
    case "a":
      return ecoScoreLable[0]
    case "b":
      return ecoScoreLable[1]
    case "c":
      return ecoScoreLable[2]
    case "d":
      return ecoScoreLable[3]
    case "e":
      return ecoScoreLable[4]
    default:
      return ecoScoreLable[5]
  }
}

const index = ({}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    // nedan är kodet för modal rutan som dycker upp när man klickar knappen
    const openButton = document.querySelector(
      "[data-open-modal]"
    ) as HTMLButtonElement
    const closeButton = document.querySelector(
      "[data-close-modal]"
    ) as HTMLButtonElement
    const modal = document.querySelector("[data-modal]") as HTMLDialogElement

    // const myDialog = document.querySelector("my-dialog")

    openButton.addEventListener("click", () => {
      if (!modal.open) {
        modal.showModal()
      }
    })

    closeButton.addEventListener("click", () => {
      modal.close()
    })
  })

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    router.push(`/productFetch?search=${searchTerm}`)
    console.log(`Searching for ${searchTerm} in productFetch`)
    setSearchTerm("")
  }

  return (
    <div>
      <div className={styles.logoContainer}>
        <Image
          src={"/Slutgiltig logga.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          className={styles.logo}
        ></Image>
      </div>

      <div className={styles.textContainer}>
        <p className={styles.text}>
          Här kan du enkelt söka <br /> på livsmedelsprodukters klimatavtryck
        </p>
      </div>

      <div className={styles.searchbarContainer}>
        <form
          className={styles.form}
          onSubmit={handleFormSubmit}
          name="serchform"
        >
          <input
            type="search"
            name=""
            placeholder="Sök produkt"
            className={styles.input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </form>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <Link
            href={{ pathname: "/productFetch", query: { search: searchTerm } }}
            className={styles.buttonlink}
          >
            Sök produkt
          </Link>
        </button>
      </div>

      <div className={styles.dialogOpenButtonContainer}>
        <button data-open-modal className={styles.dialogOpenButton}>
          Läs mer om vår klimatskala
        </button>
      </div>

      <div className={styles.dialogMask}>
        <dialog data-modal className={styles.dialog}>
          <div className={styles.dialogContainer}>
            <h1 className={styles.dialogHeadline}>Vår klimatskala</h1>

            <Image
              src={"/Löv A.png"}
              alt={"/Löv A.png"}
              className={styles.dialogImageA}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelA}>Minimal</h3>
            <h2 className={styles.dialogClimatetextA}>Klimatpåverkan</h2>

            <Image
              src={"/Löv B.png"}
              alt={"/Löv B.png"}
              className={styles.dialogImageB}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelB}>Låg</h3>
            <h2 className={styles.dialogClimatetextB}>Klimatpåverkan</h2>

            <Image
              src={"/Löv C.png"}
              alt={"/Löv C.png"}
              className={styles.dialogImageC}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelC}>Måttlig</h3>
            <h2 className={styles.dialogClimatetextC}>Klimatpåverkan</h2>

            <Image
              src={"/Löv D.png"}
              alt={"/Löv D.png"}
              className={styles.dialogImageD}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelD}>Medelhög</h3>
            <h2 className={styles.dialogClimatetextD}>Klimatpåverkan</h2>

            <Image
              src={"/Löv E.png"}
              alt={"/Löv e.png"}
              className={styles.dialogImageE}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelE}>Hög</h3>
            <h2 className={styles.dialogClimatetextE}>Klimatpåverkan</h2>
          </div>

          <div className={styles.dialogCloseButtonContainer}>
            <button data-close-modal className={styles.dialogCloseButton}>
              <Image
                src={"/blackClose.svg"}
                alt={""}
                className={styles.dialogImageE}
                width={"30"}
                height={"33"}
              />
            </button>
          </div>
        </dialog>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={"/Startsida bild.svg"}
          alt={"#"}
          width={"200"}
          height={"200"}
          className={styles.Image}
        ></Image>
      </div>

      <Navbar />
    </div>
  )
}

export default index
