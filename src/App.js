import React,{useState} from "react";
import "./style.css";
import app from './firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth(app);

  const singUp = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
      alert('sign up sucessfull');
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }

  return (
    <div>
      <input placeholder='email' type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
      <input placeholder='password' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={singUp} type="submit">Sing Up</button>    
    </div>
  );
}
