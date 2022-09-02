import React from 'react'
import InputControll from '../InputControll/InputControll'
import styles from './Login.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'; 
import {auth} from '../../firebase';
// import { async } from '@firebase/util';

function Login() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  })

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission=() => {
    if(!values.email || !values.pass)
    {
      setErrorMsg("Fill the fields");
      return;
    }
    setErrorMsg("");

    signInWithEmailAndPassword(auth, values.email, values.pass)
    .then((res) => {
      setSubmitButtonDisabled(false);
      alert("Login Successfully");

      navigate("/");

    })
    .catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    })
  }
  return (
    <div className={styles.container}>

      <div className={styles.innerBox}>
           <h1 className={styles.heading}>Login</h1>

           <InputControll label="Email" placeholder="Enter your address"
           onChange={(event) => 
          setValues((prev) => ({
            ...prev, email:event.target.value
          }))
          }
            />
           <InputControll label="Password" placeholder="Enter password"
           onChange={(event) => 
            setValues((prev) => ({
              ...prev, pass:event.target.value
            }))
          }
           />

           <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission} className='btn'>Login</button>
            <p>
              Already have an account?{""}
              <span>
                <Link to="/signup"><b>Sign up</b></Link>
              </span>
            </p>
           </div>
      </div>
      
    </div>
  )
}

export default Login
