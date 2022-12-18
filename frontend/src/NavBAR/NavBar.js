import { Link } from "react-router-dom";
import './Navbar.css'
 import useWindowDimensions from "../Hook/useWindowDimensions";
import { useEffect, useRef , useState } from "react";
import menusvg from '../svg/Menu.svg'
import close from '../svg/close.svg'
import login from '../svg/login.svg'
import logout from '../svg/logout.svg'
import authServices from "../Services/auth.service";


const Navbar = () => {

    const {height , width} = useWindowDimensions();
    const [showopt , setShowopt] = useState(true);
    const [optmobile , setoptmobile] = useState(false);
    const [searchinput , setsearchinput] = useState("Srearch");
    const [showadminBoard , setShowAdminBoard] =  useState(false)
    const [currentUser , SetCurrentUser] = useState("");
   


    useEffect(()=>{
        if(width <= 600){
            setShowopt(false)
        }else{
            setShowopt(true)
        }    
       
    })
   
    const handleclick = ()=>{
        setoptmobile(true)      
    }

    const closeclick = ()=>{
        if(optmobile)
        {
            setoptmobile(false)   
        }    
    }
    const user =  authServices.getCurrentUser();
useEffect(()=>{

    if(user){
        setShowAdminBoard(user.roles.includes("ROLE_ADMIN"))
        SetCurrentUser(user)
    }
},[1])
  

    const logoutSubmite = ()=>{
        authServices.logout().then(()=>{
            setShowAdminBoard(false)
            SetCurrentUser(undefined)
        })
    }





    
    return ( 
        <div className="nav"> 
        <nav className="navbar">
        <div className="content">
            <div className="title">
                <h1 className="logo"> <Link  style={{textDecoration:'none' , color:'wheat'}} to="/">  Bermuda</Link></h1>
            </div>
          {showopt ? <div  className="navopt">
          <Link  className="a" to="/">Home</Link>
                {/* <Link className="a" to="/test">TEST</Link> */}
                {showadminBoard &&   <Link className="a" to="/add/">Add channel</Link> }  
                {/* <Link className="a" to="/Live/">Live</Link> */}
                { !showadminBoard &&        <Link className="a" to="/Register/">Register</Link>}
                { !showadminBoard &&   <Link className="a" to="/Login/">Login</Link> }
                {showadminBoard && <Link onClick={logoutSubmite} className="a" to="/">Logout</Link> }         
            </div> : <button className="close"  onClick={()=>{ {optmobile ? closeclick() :handleclick() } }}>  { optmobile ? <img className="icon" src={close} alt="" /> : <img className="icon" src={menusvg} alt="" />} </button> }  
        </div>
    </nav>
    {optmobile && <div className="optmobile">
            <ul>
                
                <li> <Link className="a" to="/">Home</Link></li>
                {/* <li> <Link className="a" to="/test">TEST</Link></li> */}
                {showadminBoard &&   <li> <Link className="a" to="/add/">Add channel</Link></li> }  
                {/* <li> <Link className="a" to="/Live/">Live</Link></li> */}
                { !showadminBoard &&   <li> <Link className="a" to="/Register/">Register</Link></li>}
                { !showadminBoard &&   <li> <Link className="a" to="/Login/">Login <img style={{width:"23px",position:'relative' , top:'7px'}} src={logout} /> </Link></li> }
                {showadminBoard && <li> <Link onClick={logoutSubmite} className="a" to="/">Logout <img src={login} style={{width:"23px",position:'relative' , top:'7px'}} /> </Link></li> }  
                <li> <div className="search"> <input value={searchinput} onChange={(e)=>{setsearchinput(e.target.value)}} className="search" type="search"  /> <div className="searchicon"><button className="buttonSrearch" onClick={()=>{alert("shearch" + searchinput)}}><i class="fas fa-search"></i></button> </div>  </div> </li> 
               
                
            </ul>
            
   
         </div> 
         
         } 
    </div>
     );
}
 
export default Navbar;