
interface Props {
 
  email:string


  setEmail: (email: string) => void

}



 export const InputEmailComponent = ({ email, setEmail }: Props) => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    
    setEmail(newEmail);
  };
  return( 
  
    <div>

<div>
    
  <input  type="text" value={email} onChange={handleEmailChange}placeholder="Email"/>

  </div>

  </div>
  )
}

