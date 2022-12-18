import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import authService from '../Services/auth.service';
import React, { Component } from "react";
import './login.css'
var axios = require('axios');
const Register   = () => {

const [username ,  setusername] = useState();
const [password ,  setpassword] = useState();
const [email ,  setemail] = useState();
const [seccessful , setSeccussful] = useState()
const [message , setMessage] = useState("")
const navigate = useNavigate();



const handlesubmite =  (e) =>{ 
    e.preventDefault();
  

    authService.register(username, email,password).then((res)=>{
        setMessage(res.data.message)
        console.log(message)
        setSeccussful(true)
    }).catch((error)=>{
      setSeccussful(true)
      setMessage(error.response.data.message)
      console.log(error.response.data.message)
    
    })

    
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
 
    
    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    // body :  JSON.stringify({ username :username ,password :password , email:email  , roles: ["user" , "user"] }),
    //   redirect: 'follow'
    // };
    
    // fetch("http://localhost:3001/api/auth/signup/", requestOptions)
    //   .then(response => response.text())
    //   .then(result =>  navigate("/Login"))
    //   .catch(error => console.log('error', error));
}



    return ( 

      <div className="register"> 
        <div style={{textAlign:'center'}}  className="tit">
        <h3 style={{color:"white"}}>  {seccessful && message} </h3> 

      
        </div>
        <form onSubmit={handlesubmite}>
        <input className='int' placeholder='username' type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} />
        <input className='int' placeholder='email' type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} />
        <input className='int' placeholder='password' type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <input className='button' type="submit" value='REGISTER' />
        </form>
        </div>

     );
}
 
export default Register;