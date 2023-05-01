import { User } from "@/Types/user"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import styles from "../styles/index.module.css"
import { ObjectId } from "mongodb";




interface Props {
  name: string
  email:string

  setName: (name: string) => void
  setEmail: (email: string) => void

}

const user: User = {
  name: "",
  email: "",


};

interface OutputProps {
  name: string;
  email: string;
  
}

const addUser = async  (name: string, email: string,  user: User)=> {
  try {
    const response = await fetch("/api/user/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, name, email, }),
    })

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await response.json()
    console.log(data._id)
  } catch (error) {
    console.error("Error:", error)
  }
}

const InputNameComponent = ({ name, setName }: Props) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value
    setName(newName)
    
  }

  return <input type="text" value={name} onChange={handleNameChange} placeholder="namn" className=""/>
}

const InputEmailComponent = ({ email, setEmail }: Props) => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    
    setEmail(newEmail);
  };
  return( 
  
    <div>

<div className={styles.emailContainer}>
    
  <input  type="text" value={email} onChange={handleEmailChange} className={styles.inputEmail}  placeholder="Email"/>

  </div>

  </div>
  )
}



const OutputComponent: React.FC<OutputProps> = ({ name, email }) => {
  return (
    <div className=" mt-5 mb-5">

      <p>Name: {name}</p>
      <p>Email: {email}</p>
 
    </div>
  );
};

const Database: NextPage<Props> = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [users, setUsers] = useState<User[]>([]);
  const [showUsers, setShowUsers] = useState(false);


  const getUsers = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setUsers(data); // Store the retrieved user data in state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <InputNameComponent name={name} setName={setName} email={""}  setEmail={function (email: string): void {
        throw new Error("Function not implemented.")
      
      } } />
      <InputEmailComponent email={email} setEmail={setEmail} name={""} setName={function (name: string): void {
        throw new Error("Function not implemented.")
      } }/>
   

      <OutputComponent name={name} email={email}  />
      
      {/* Display the retrieved user data */}
 
<div className={styles.buttonContainer}>

      <button
        onClick={() => {
          addUser(name, email,  user);
        }}
        className=" bg-green-500"
      >
        Post
      </button>
      </div>
      
      
      <div className=" bg-red-600 ">
        <h2 className={styles.h2}>Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Id: {user.id}</p>
              
              <p>Name: {user.name}</p>
              
              <p>Email: {user.email}</p>
              <br />
        
              
              {/* Id: {user.id}, Name: {user.name}, Email: {user.email},  */}
            </li>
          ))}
        </ul>
      </div>  

            <div>
              
              <button onClick={getUsers}>

              Get users

              </button>
              </div>  




    </>
  );
};

export default Database