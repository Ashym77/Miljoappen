import { NextPage } from "next"
import Link from "next/link"
import styles from "../styles/index.module.css"
import Image from "next/image"
import SearchIcon from "@mui/icons-material/Search"
import { MuiBottomNavBar } from "@/p-components/MuiBottomNavBar"
import { useEffect } from "react"

interface Props {}

const ecoScoreImage = [
  "/ecoscore_a_v4.svg",
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

const index: NextPage<Props> = ({}) => {
  useEffect(() => {
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

        document.body.classList.add("dialogMask") // Add the overlay to the body
        // document.body.classList.add("dialog-overlay") // Add the overlay to the body
      }
    })

    closeButton.addEventListener("click", () => {
      modal.close()
      // document.body.classList.remove("dialog-overlay") // Remove the overlay from the body when the dialog is closed
      document.body.classList.remove("dialogMask") // Remove the overlay from the body when the dialog is closed
    })

    // modal.addEventListener("close", () => {
    //   document.body.classList.remove("dialog-overlay") // Remove the overlay from the body when the dialog is closed
    // })
  })

  return (
    <div>
      <div className={styles.logoContainer}>
        <Image
          src={"/Logga.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          className={styles.logo}
        ></Image>
      </div>

      <div className={styles.textContainer}>
        <p className={styles.text}>
          Välkommen till Klimat! <br />
          Här kan du enkelt söka på livsmedelsprodukters klimatavtryck
        </p>
      </div>

      <div className={styles.searchbarContainer}>
        <form className={styles.form}>
          <input
            type="search"
            name=""
            placeholder="Search"
            className={styles.input}
          />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </form>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <Link href="/nyFetch" className={styles.buttonlink}>
            Sök produkt
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
              src={"/ecoscore_a_v2.svg"}
              alt={"/ecoscore_a_v2.svg"}
              className={styles.dialogImageA}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelA}>Minimal</h3>
            <h2 className={styles.dialogClimatetextA}>Klimatpåverkan</h2>

            <Image
              src={"/ecoscore_b_v2.svg"}
              alt={"/ecoscore_b_v2.svg"}
              className={styles.dialogImageB}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelB}>Låg</h3>
            <h2 className={styles.dialogClimatetextB}>Klimatpåverkan</h2>

            <Image
              src={"/ecoscore_c_v2.svg"}
              alt={"/ecoscore_c_v2.svg"}
              className={styles.dialogImageC}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelC}>Måttlig</h3>
            <h2 className={styles.dialogClimatetextC}>Klimatpåverkan</h2>

            <Image
              src={"/ecoscore_d_v2.svg"}
              alt={"/ecoscore_d_v2.svg"}
              className={styles.dialogImageD}
              width={"100"}
              height={"100"}
            />
            <h3 className={styles.dialogClimateLabelD}>Medelhög</h3>
            <h2 className={styles.dialogClimatetextD}>Klimatpåverkan</h2>

            <Image
              src={"/ecoscore_e_v2.svg"}
              alt={"/ecoscore_e_v2.svg"}
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
      {/* </div> */}

      {/* <dialog
        data-modal
        className="fixed inset-0 z-50 flex items-center justify-center"
        className="bg-white rounded-lg p-8 grid grid-cols-2 grid-rows-6 gap-4"
        className="bg-white rounded-lg p-8 grid grid-cols-2 grid-rows-6 gap-4 items-center justify-center"
      >
        <button
          type="button"
          data-action="modal#close"
          data-close-modal
          className="absolute top-4 right-4"
        >
          X
        </button>
        <div className="bg-white rounded-lg p-8 grid grid-cols-2 grid-rows-6 gap-4">
          <h1 className="col-span-2 text-center font-bold text-xl">
            Vår klimatskala
          </h1>
          <img
            src="/ecoscore_a_v2.svg"
            alt="Minimal"
            className="col-span-1 row-span-1 w-33 h-33"
          ></img>
          <h3 className="col-span-1 row-span-1 text-center">Minimal</h3>
          <img
            src="/ecoscore_b_v2.svg"
            alt="Minimal"
            className="col-span-1 row-span-1 w-33 h-33"
          ></img>
          <h3 className="col-span-1 row-span-1 text-center">Låg</h3>
          <img
            src="/ecoscore_c_v2.svg"
            alt="Minimal"
            className="col-span-1 row-span-1 w-33 h-33"
          ></img>
          <h3 className="col-span-1 row-span-1 text-center">Måttlig</h3>
          <img
            src="/ecoscore_d_v2.svg"
            alt="Minimal"
            className="col-span-1 row-span-1 w-33 h-33"
          ></img>
          <h3 className="col-span-1 row-span-1 text-center">Medelhög</h3>
          <img
            src="/ecoscore_e_v2.svg"
            alt="Minimal"
            className="col-span-1 row-span-1 w-33 h-33"
          ></img>
          <h3 className="col-span-1 row-span-1 text-center">Hög</h3>
          <button data-close-modal className="col-span-2 mt-4 text-center">
          Close
        </button>
          <button
            type="button"
            data-action="modal#close"
            data-close-modal
            className="absolute top-4 right-4"
          >
            X
          </button>
        </div>
      </dialog> */}

      {/* <dialog data-modal class="fixed inset-0 z-50 flex items-center justify-center">
  <div class="bg-white rounded-lg p-8 grid grid-cols-2 grid-rows-6 gap-4">
    <h1 class="col-span-2 text-center font-bold text-xl">Vår klimatskala</h1>
    <img src="/ecoscore_a_v2.svg" alt="Minimal" class="col-span-1 row-span-1 w-16 h-16">
    <h3 class="col-span-1 row-span-1 text-center">Minimal</h3>
    <img src="/ecoscore_b_v2.svg" alt="Låg" class="col-span-1 row-span-1 w-16 h-16">
    <h3 class="col-span-1 row-span-1 text-center">Låg</h3>
    <img src="/ecoscore_c_v2.svg" alt="Måttlig" class="col-span-1 row-span-1 w-16 h-16">
    <h3 class="col-span-1 row-span-1 text-center">Måttlig</h3>
    <img src="/ecoscore_d_v2.svg" alt="Medelhög" class="col-span-1 row-span-1 w-16 h-16">
    <h3 class="col-span-1 row-span-1 text-center">Medelhög</h3>
    <img src="/ecoscore_e_v2.svg" alt="Hög" class="col-span-1 row-span-1 w-16 h-16">
    <h3 class="col-span-1 row-span-1 text-center">Hög</h3>
    <button data-close-modal class="col-span-2 mt-4 text-center">Close</button>
  </div>
</dialog> */}

      {/* <p className={styles.hoverText}>Läs mer om vår klimatskala</p>
      <div className={styles.card}>
        <p>This is the hover card that appears when you hover over the text.</p>
      </div> */}

      <div className={styles.imageContainer}>
        <Image
          src={"/Startsida bild.svg"}
          alt={"#"}
          width={"200"}
          height={"200"}
          className={styles.Image}
        ></Image>
      </div>

      <div className={styles.navdiv}>
        <MuiBottomNavBar />
      </div>
    </div>
  )
}

export default index
