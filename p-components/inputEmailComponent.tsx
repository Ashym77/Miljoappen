import styles from "../styles/subscriptionPage.module.css"

interface Props {
  email: string

  setEmail: (email: string) => void
}

export const InputEmailComponent = ({ email, setEmail }: Props) => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value

    setEmail(newEmail)
  }
  return (
    <>
      <div>
        <p className={styles.inputComponentsText}>E-post</p>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className={styles.inputComponents}
        />
      </div>
    </>
  )
}
