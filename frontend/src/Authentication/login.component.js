import { useState } from 'react';
import axios, * as others from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username ,  setusername] = useState();
    const [password ,  setpassword] = useState();
    const navigate = useNavigate()
 const handlesubmit = (e)=>{
    e.preventDefault();

   
    fetch("http://localhost:3001/api/auth/signin/",
     {method: "POST",
     headers: { "Content-Type": "application/json" },
     body :  JSON.stringify({ username :username ,password :password })}
     )
      .then(response => {response.text()
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }})
      .then(result =>{
       
        console.log(result)
        alert('login')
        navigate("/")}
      )
      .catch(error => alert('error', error));
 }
    return ( 
        <form onSubmit={handlesubmit}>
        <input placeholder='username' type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} />
        <input  placeholder='password' type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <input type="submit" value='register' />
        </form>

     );
}
 
export default Login;