import { useState } from 'react';
import axios, * as others from 'axios';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/auth.service';
import './login.css'
const Login = () => {
    const [username ,  setusername] = useState();
    const [password ,  setpassword] = useState();
    const [seccessful , setSeccussful] = useState()
    const [message , setMessage] = useState("")
    const navigate = useNavigate()

    const handlesubmit = (e)=>{
      e.preventDefault();

    authService.login(username, password).then((res)=>{
     
      
      navigate("/");
      window.location.reload();
    }).catch((err)=>{
      console.log(err.response.data.message)
      
    })

  }

//  const handlesubmit = (e)=>{
//     e.preventDefault();
   
//     fetch("http://localhost:3001/api/auth/signin/",
//      {method: "POST",
//      headers: { "Content-Type": "application/json" },
//      body :  JSON.stringify({ username :username ,password :password })}
//      )
//       .then(response => {response.text()
//         if (response.data.accessToken) {
//             localStorage.setItem("user", JSON.stringify(response.data));
//           }})
//       .then(result =>{
       
//         console.log(result)
//         alert('login')
//         navigate("/")}
//       )
//       .catch(error => alert('error', error));

    return ( 

      <div className="login"> 
      <div className="title">
      <h3 style={{color:"white"}}>  {seccessful && message} </h3> 
      </div>
        <form onSubmit={handlesubmit}>
        <input className='int' placeholder='username' type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} />
        <input  className='int' placeholder='password' type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <input className='button' type="submit" value='LOGIN' />
        </form>
        </div>
     );
}
 
export default Login;