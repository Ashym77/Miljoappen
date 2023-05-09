import { NextPage } from "next"
import Image from "next/image"
import styles from "../styles/info.module.css"
interface Props {}

const Info: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src={"/Klimatskala.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          className={styles.klimatSkala}
        ></Image>
      </div>
    </div>
  )
}

export default Info
