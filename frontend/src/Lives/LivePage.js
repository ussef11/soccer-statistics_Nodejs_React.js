import * as React from 'react';
import { useEffect ,useState} from 'react';

import { useParams } from 'react-router-dom';
import screenfull from 'screenfull';
import useFetch from '../Hook/UseFetch';
import './Livepage.css';
import m3u from '../svg/tvlist.m3u'
import {ReactFlvPlayer} from 'react-flv-player'

const Livepage = () => {
  const [hls , sethls] = useState()

  const {id} = useParams()
const{hometeam} = useParams()
const{awayteam} = useParams()
const {Data:channel} = useFetch(`http://localhost:3001/football/GetChannel/${id}/${hometeam}/${awayteam}`)
    channel&&channel.map((data)=>{
        sethls(data.linkchaine)
    })
    useEffect(()=>{
        const src = {
            hls: 'https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/chunklist_b1600000.m3u8'
          };
          var settings = {
            timeout: 12000,
            licenseKey: 'Kl8lYz0wN3o9NjJjczl2P3JvbTVkYXNpczMwZGIwQSVfKg==',
            iframeMode: true,
            iframeAllowed: true,
            autoplay: false,
            sharing: false,
            skin: 's3',
            src: src,
            pip: false,
            logoPosition: 'bottom',
            logoWatermark: 'false',
            mute: 'false',
            isLive: true,
            gaEvents: ['context', 'ready', 'playerstart', 'error', 'adimpression', 'adloadererror', 'aderror']
        };
          const elementID = 'rmp';
          const rmp = new window.RadiantMP(elementID);
          rmp.init(settings);
    })
   


    
    
                                      
                                        


    return (  
      <div className="livepage">  <div className="titdiv">   <p className='tit'>{hometeam} ضد {awayteam} بث مباشر مباراة  </p>  
      {channel&&channel.map((data)=>( 
        <h1 className='tit'> {data.ChannelName}</h1>      
           ))}    </div> 
        <div className='playerDiv'>

           <div className='btndiv'>
            <div className="btn">
             <a>
              1080px
            </a> 
            </div>
            <div className="btn">
             <a>
              720px
            </a> 
            </div>
            <div className="btn">
             <a>
              480px
            </a> 
            </div>
           
           </div>

      <div id="rmp"></div>
    
    {/* <ReactFlvPlayer
    url = "https://pull-f5-va01.tiktokcdn.com/game/stream-2994397616979050584_or4.flv">

    </ReactFlvPlayer> */}


        </div> </div>
    );
}
 
export default Livepage;







