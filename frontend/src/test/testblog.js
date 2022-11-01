
import UseFetch from '../Hook/UseFetch';
import { useState } from 'react';
const testblog = (props) => {
     const matches = props.mydata;
  
    var list = []

    list.push(matches);
   
    return ( 
<div className="app">


    

    

  { matches.map((data, idx)=>(
        <p>{data.league_name}</p>
    ))} 
            
  

</div>
     
     );
}
 
export default testblog;