import { NextPage } from "next"
import { useState } from "react"
import router from "next/router"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/index.module.css"
import { Navbar } from "@/p-components/Navbar"
import SearchIcon from "@mui/icons-material/Search"

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

const IndexPage_nextPage: NextPage<Props> = ({}) => {
  // search--------------------------------------------
  const [searchTerm, setSearchTerm] = useState("")

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
  // search--------------------------------------------

  // dialog--------------------------------------------

  //   // nedan är kodet för mol rutan som dycker upp när man klickar knappen
  //   // nedan är kodet för mol rutan som dycker upp när man klickar knappen
  //   const openButton = document.querySelector(
  //     "[data-open-modal]"
  //   ) as HTMLButtonElement
  //   const closeButton = document.querySelector(
  //     "[data-close-modal]"
  //   ) as HTMLButtonElement
  //   const modal = document.querySelector("[data-modal]") as HTMLDialogElement

  //   // const myDialog = document.querySelector("my-dialog")

  //   openButton.addEventListener("click", () => {
  //     if (!modal.open) {
  //       modal.showModal()

  //       document.body.classList.add("dialogMask") // Add the overlay to the body
  //       // document.body.classList.add("dialog-overlay") // Add the overlay to the body
  //     }
  //   })

  //   closeButton.addEventListener("click", () => {
  //     modal.close()
  //     // document.body.classList.remove("dialog-overlay") // Remove the overlay from the body when the dialog is closed
  //     document.body.classList.remove("dialogMask") // Remove the overlay from the body when the dialog is closed
  //   })

  //   closeButton.addEventListener("click", () => {
  //     modal.close()
  //     document.body.classList.remove("dialogMask") // Remove the overlay from the body when the dialog is closed
  //   })

  return (
    <div>
      {/* <h1>Index Page</h1>
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
      </Link> */}

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
          Här kan du enkelt söka <br /> på livsmedelsprodukters klimatavtryck.
        </p>
      </div>

      <div className={styles.searchbarContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="search"
            name=""
            placeholder="Search"
            className={styles.input}
            value={searchTerm}
            onChange={(e) => {
              handleSearchTermChange
            }}
          />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </form>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <Link href="/fetchApiPage">
            <p>Go to Fetch API Page</p>
          </Link>
        </button>
      </div>
      {/* <div className={styles.linkContainer}>
        <Link href={"/info"} className={styles.linkText}>
          Läs mer om vår klimatskala
        </Link>
      </div> */}

      {/* <div> */}
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

      {/* <div className={styles.navdiv}>
        <MuiBottomNavBar />
      </div> */}
      <Navbar />
    </div>
  )
}

export default IndexPage_nextPage
