

  interface Props {
    name: string
  
  
    setName: (name: string) => void

  
  }

  export const InputNameComponent = ({ name, setName }: Props) => {
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newName = event.target.value
      setName(newName)
      
    }
  
    return <input type="text" value={name} onChange={handleNameChange} placeholder="namn" className=""/>
  }

