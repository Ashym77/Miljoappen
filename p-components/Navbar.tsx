import SearchIcon from "@mui/icons-material/Search"
import Link from "next/link"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import styles from "../styles/navbar.module.css"
import { useRouter } from "next/router"

export const Navbar = () => {
  const router = useRouter()
  const isHomePage = router.pathname === "/"
  const isFavorit = router.pathname === "/favorites"
  const IsFaq = router.pathname === "/faqPage"

  return (
    <div>
      <div className={styles.navContainer}>
        <nav className={styles.navBar}>
          <ul className={styles.navUl}>
            <li>
              <Link href={"/"}>
                {isHomePage ? (
                  <img
                    src={"/home_icon_green.svg"}
                    alt="Home"
                    className={styles.homeIconGreen}
                  />
                ) : (
                  <img
                    src={"/home_icon_white.svg"}
                    alt="Home"
                    className={styles.homeIconWhite}
                  />
                )}
              </Link>
            </li>

            <li>
              <Link href={"/favorites"}>
                {isFavorit ? (
                  <img
                    src={"/favorit_icon_green.svg"}
                    alt="Favorit"
                    className={styles.favoritIconGreen}
                  />
                ) : (
                  <img
                    src={"/favorit_icon_white.svg"}
                    alt="Favorit"
                    className={styles.favoritIconWhite}
                  />
                )}
              </Link>
            </li>

            <li>
              <Link href={"/faqPage"}>
                {IsFaq ? (
                  <img
                    src={"/faq_icon_green.svg"}
                    alt={"Faq icon"}
                    className={styles.faqIconGreen}
                  />
                ) : (
                  <img
                    src={"/faq_icon_white.svg"}
                    alt="Faq icon"
                    className={styles.faqIconWhite}
                  />
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
