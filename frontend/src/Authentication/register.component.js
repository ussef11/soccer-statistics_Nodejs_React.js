import { useState } from 'react';
import { useNavigate } from "react-router-dom";

var axios = require('axios');
const Register = () => {

const [username ,  setusername] = useState();
const [password ,  setpassword] = useState();
const [email ,  setemail] = useState();
const navigate = useNavigate();
const handlesubmite =  (e) =>{ 
    e.preventDefault();
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
 
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
    body :  JSON.stringify({ username :username ,password :password , email:email  , roles: ["user" , "user"] }),
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/api/auth/signup/", requestOptions)
      .then(response => response.text())
      .then(result =>  navigate("/Login"))
      .catch(error => console.log('error', error));
}



    return ( 

        <form onSubmit={handlesubmite}>
        <input placeholder='username' type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} />
        <input  placeholder='email' type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} />
        <input  placeholder='password' type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <input type="submit" value='register' />
        </form>


     );
}
 
export default Register;