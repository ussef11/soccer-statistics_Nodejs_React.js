import React, { useEffect } from 'react';
import { useState } from 'react';
import UseFetch from '../Hook/UseFetch';
import Listmatch from './testblog'
var axios = require('axios');
const Test = () => {
    const { Data, ispending, errormsg } = UseFetch(
                "http://localhost:3001/football"
              );

  




   
    return ( 
<div> 
{Data && <Listmatch mydata={Data} />}  
 </div>
    
 
    
    );
}
 
export default Test;