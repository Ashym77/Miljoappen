import { User } from "@/types/user"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import styles from "../styles/index.module.css"



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



const addUser = async (name: string, email: string, user: User) => {
  try {
    const response = await fetch("/api/user/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, name, email }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data._id); // Access the _id field from the response
  } catch (error) {
    console.error("Error:", error);
  }
};

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

interface OutputProps {
    name: string;
    email: string;
    
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
      console.log(data);
      
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
            <li key={user._id}>
            id:{user._id}
              Name: {user.name}, Email: {user.email}, 
            </li>
          ))}
        </ul>
      </div>  

            <div>
              
              <button onClick={getUsers} className=" w-6 h-4">

              Get users

              </button>
              </div>  

              <button className=" bg-blue-500 hover:bg-blue-400
                    rounded font-bold text-white">
Button
</button>




    </>
  );
};

export default Database