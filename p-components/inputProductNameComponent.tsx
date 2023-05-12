interface Props {
  product_name: string

  setProduct_name: (product_name: string) => void
}

export const InputProductNameComponent = ({
  product_name,
  setProduct_name,
}: Props) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value
    setProduct_name(newName)
  }

  return (
    <input
      type="text"
      value={product_name}
      onChange={handleNameChange}
      placeholder="namn"
      className=""
    />
  )
}
