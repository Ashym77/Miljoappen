// import { NextPage } from "next"
// import Image from "next/image"
// import styles from "../styles/faqPage.module.css"
// import { Navbar } from "@/p-components/Navbar"

// interface Props {}

// const FaqPage: NextPage<Props> = ({}) => {
//   return (
//     <div>
//       <div className={styles.card}>
//         <div className={styles.headline}>
//           <h1 className={styles.h1}>FAQ</h1>
//         </div>
//         <div className={styles.image}>
//           <Image
//             src={"/faqEarth.svg"}
//             alt={""}
//             className={styles.earth}
//             width={"100"}
//             height={"100"}
//           />
//         </div>
//         <div className={styles.textContainer}>
//           <h2 className={styles.subheadline}>Vart hämtar ni datan från?</h2>
//           <p className={styles.text}>
//             Vi hämtar vår data från en ideell organisation som heter Open Food
//             Facts. Open Food Facts är en livsmedelsdatabas. All data är
//             tillgänglig för alla och vem som helst kan återanvända den för
//             vilket syfte som helst.
//           </p>
//         </div>
//         <div className={styles.textContainer}>
//           <h2 className={styles.subheadline}>
//             Hur tillförlitliga är resultaten?
//           </h2>
//           <p className={styles.text}>
//             Data från Open Food Facts anses generellt vara tillförlitlig då den
//             kommer från användargenererade bidrag som granskas och verifieras av
//             en användardriven process för att upprätthålla kvalitén och
//             noggrannheten.
//           </p>
//         </div>
//         <div className={styles.textContainer}>
//           <h2 className={styles.subheadline}>
//             Vilka produkter kan jämföras i appen?
//           </h2>
//           <p className={styles.text}>
//             Livsmedelsprodukter. Idag har KliMat tillgång till data från 2 907
//             618 livsmedelsprodukter. Färskvaror så som frukt och grönt finns i
//             mer begränsad utsträckning eftersom dessa ofta saknar etikett och
//             därför inte kan registreras.
//           </p>
//         </div>
//       </div>
//       <Navbar />
//     </div>
//   )
// }

// export default FaqPage

import { NextPage } from "next"
import Image from "next/image"
import styles from "../styles/faqPage.module.css"
import { Navbar } from "@/p-components/Navbar"
import { useState } from "react"
import Link from "next/link"

interface Props {}

interface QuestionProps {
  question: string
  answer: string
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className={styles.textContainer}>
      <div
        className={styles.subheadline}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2>{question}</h2>
        <div className={styles.arrowContainer}>
          <Image
            src={"/faqArrow.svg"}
            alt={""}
            className={styles.arrow}
            width={10}
            height={10}
          />
        </div>
      </div>
      <hr className={styles.line} />

      {showAnswer && <p className={styles.text}>{answer}</p>}
    </div>
  )
}

const FaqPage: NextPage<Props> = ({}) => {
  const questions: QuestionProps[] = [
    {
      question: "Vart hämtar ni datan från?",
      answer:
        "Vi hämtar vår data från en ideell organisation som heter Open Food Facts. Open Food Facts är en livsmedelsdatabas. All data är tillgänglig för alla och vem som helst kan återanvända den för vilket syfte som helst.",
    },
    {
      question: "Hur tillförlitliga är resultaten?",
      answer:
        "Data från Open Food Facts anses generellt vara tillförlitlig då den kommer från användargenererade bidrag som granskas och verifieras av en användardriven process för att upprätthålla kvalitén och noggrannheten.",
    },
    {
      question: "Vilka produkter kan jämföras i appen?",
      answer:
        "Livsmedelsprodukter. Idag har KliMat tillgång till data från 2 907 618 livsmedelsprodukter. Färskvaror så som frukt och grönt finns i mer begränsad utsträckning eftersom dessa ofta saknar etikett och därför inte kan registreras.",
    },
  ]

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.headline}>
          <h1 className={styles.h1}>FAQ</h1>
        </div>
        <div className={styles.image}>
          <Image
            src={"/faqEarth.svg"}
            alt={""}
            className={styles.earth}
            width={"100"}
            height={"100"}
          />
        </div>
        {questions.map((q) => (
          <Question question={q.question} answer={q.answer} key={q.question} />
        ))}

        <div className={styles.subscription}>
          <div className={styles.subtextContainer}>
            <h3 className={styles.subText}>
              Prenumerera på vårt nyhetsbrev för att ta del av nya tips om hur
              vi kan ta vara på planeten
            </h3>
          </div>
          <div className={styles.subButtonContainer}>
            <button className={styles.subButton}>
              <Link href="/subscriptionPage" className={styles.buttonlink}>
                PRENUMERERA
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  )
}

export default FaqPage
