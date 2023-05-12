interface Props {
  generic_name: string

  setGeneric_name: (generic_name: string) => void
}

export const InputGenericNameComponent = ({
  generic_name,
  setGeneric_name,
}: Props) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value
    setGeneric_name(newName)
  }

  return (
    <input
      type="text"
      value={generic_name}
      onChange={handleNameChange}
      placeholder="namn"
      className=""
    />
  )
}
