import { Link } from "react-router-dom";
import './Navbar.css'
 import useWindowDimensions from "../Hook/useWindowDimensions";
import { useEffect, useRef , useState } from "react";
import menusvg from '../svg/Menu.svg'
import close from '../svg/close.svg'



const Navbar = () => {

    const {height , width} = useWindowDimensions();
    const [showopt , setShowopt] = useState(true);
    const [optmobile , setoptmobile] = useState(false);
    const [searchinput , setsearchinput] = useState("Srearch");
   


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

    
    return ( 
        <div className="nav"> 
        <nav className="navbar">
        <div className="content">
            <div className="title">
                <h1 className="logo">Bermuda</h1>
            </div>
          {showopt ? <div  className="navopt">
                <Link className="a" to="/">Home</Link>
                <Link className="a" to="test">Create</Link>            
            </div> : <button className="close"  onClick={()=>{ {optmobile ? closeclick() :handleclick() } }}>  { optmobile ? <img className="icon" src={close} alt="" /> : <img className="icon" src={menusvg} alt="" />} </button> }  
        </div>
    </nav>
    {optmobile && <div className="optmobile">
            <ul>
                <li> <Link className="a" to="/">Home</Link></li>
                <li> <Link className="a" to="/test">TEST</Link></li>
                <li> <Link className="a" to="/add/">Add channel</Link></li>
                <li> <Link className="a" to="/Live/">Live</Link></li>
                <li> <Link className="a" to="/Register/">Register</Link></li>
                <li> <Link className="a" to="/Login/">Login</Link></li>
                <li> <div className="search"> <input value={searchinput} onChange={(e)=>{setsearchinput(e.target.value)}} className="search" type="search"  /> <div className="searchicon"><button className="buttonSrearch" onClick={()=>{alert("shearch" + searchinput)}}><i class="fas fa-search"></i></button> </div>  </div> </li> 
                
                
            </ul>
            
   
         </div> 
         
         } 
    </div>
     );
}
 
export default Navbar;