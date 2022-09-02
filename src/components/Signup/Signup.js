import React, { useState } from 'react'
import InputControll from '../InputControll/InputControll'
import styles from './Signup.module.css'
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'; 
import {auth} from '../../firebase';


function Signup() {
  const navigate= useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission=()=>{
    if(!values.name || !values.email || !values.pass)
    {
      setErrorMsg("Fill all fields");
      return;
    }

    setErrorMsg("");

    setSubmitButtonDisabled(true);
    
    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(res)=>
      {
        setSubmitButtonDisabled(false);
        const user=res.user;
        await updateProfile(user,{
          displayName: values.name,
        });
        alert("Sign in Successfully");
        navigate("/");
        console.log(res)
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      
        console.log("Error-", err)});
  }
  return (
    <div className={styles.container}>

      <div className={styles.innerBox}>
           <h1 className={styles.heading}>Signup</h1>

           <InputControll label="Name" placeholder="Enter your name"
           onChange={(event) =>
            setValues((prev)=> ({
              ...prev, name: event.target.value
            }))
           } 
           />
           <InputControll label="Email" placeholder="Enter your address"
              onChange={(event) =>
                setValues((prev)=> ({
                  ...prev, email: event.target.value
                }))
               } 
           />
           <InputControll label="Password" placeholder="Enter password"
              onChange={(event) =>
                setValues((prev)=> ({
                  ...prev, pass: event.target.value
                }))
               } 
           />

           <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisabled} className='btn'>Signup</button>
            <p>
              Already have an account?{""}
              <span>
                <Link to="/login"><b>Login</b></Link>
              </span>
            </p>
           </div>
      </div>
      
    </div>
  )
}

export default Signup
