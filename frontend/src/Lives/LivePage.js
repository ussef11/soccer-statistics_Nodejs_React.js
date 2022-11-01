import * as React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import screenfull from 'screenfull';
import useFetch from '../Hook/UseFetch';
import './Livepage.css';


const Livepage = () => {
const {id} = useParams()
const {Data:channel} = useFetch(`http://localhost:3001/football/GetChannel/${id}`)

    return (  
      <div className="livepage">  {channel&&channel.map((data)=>(
     <div className="titdiv">  <h1 className='tit'>watch sport online {data.ChannelName} </h1> </div>  
           ))}  
        <div className='playerDiv'>
            {channel&&channel.map((data)=>(
         <ReactPlayer width={'100%'} height='100%' url={data.linkchaine}/>
            ))}
        
        </div> </div>
    );
}
 
export default Livepage;