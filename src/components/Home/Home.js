import React, { useState } from 'react';
import { Link , useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";


function Home(props) {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const handleSignOut=(user)=>{
    const auth = getAuth();
signOut(auth).then(() => {
  alert("Signout Successfully");
  navigate("login")
}).catch((err) => {
    setErrorMsg(err.message);
});
    // console.log(user)
  };
  return (
    <div>
     <div className='container'>
        <div className='d-flex justify-content-between'>
            <h1>
            <Link to="/login">Login</Link>
            </h1>

            <h1>
            <Link to="/signup">Signup</Link>
            </h1>
        </div>
     </div>

<br/>
<br/>
<br/>
     <div className='container'>
        <h2>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
     </div>

     <div className='container d-flex justify-content-center'>
     <button onClick={handleSignOut}>Sign Out</button>
     </div>





     <b className='man'>{errorMsg}</b>
    </div>
  )
}

export default Home
