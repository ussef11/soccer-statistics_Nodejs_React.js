import useFetch from "../Hook/UseFetch";
import "./home.css";
import vs from "../svg/vs.svg";
import clock from "../svg/clock.svg";
import location from "../svg/beinsport.svg";
import line from "../svg/line.svg";
import vertical from "../svg/vertical.svg";
import calendar from "../svg/calendar.svg";
import { useEffect, useState, useRef, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Carousel from "react-material-ui-carousel";
import Cover from "./cover";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [date, setdate] = useState();
  const [color, setcolor] = useState(0);
  const {
    Data: matches,
    ispending,
    errormsg,
  } = useFetch("http://localhost:3001/football/");

  
  const clickhandler = (e) => {
    e.preventDefault();
  };

  let lista = ["red","rgb(73, 62, 62)","red","rgb(73, 62, 62)"]

  setInterval(()=>{

      setcolor(prev => prev == lista.length -1 ? 0 : prev+1) 
  },2500)




 

  return (
    <div className="home">
      <div className="Homecontent">
      
      {/* autoPlay={false} */}
        <Carousel autoPlay={false}>
          {matches &&
            matches.map((data) => (
              <div className="cover">
                <div className="logos">
                  <div className="homeTeam">
                    <div className="img1">
                      {" "}
                      <img src={data.team_home_badge} intrinsicsize="512x512" />{" "}
                    </div>
                    <div className="span1">
                      {" "}
                      <span className="homename">{data.hometeam}</span>{" "}
                    </div>
                  </div>
                  <div className="awayTeam">
                    <div className="img1">
                      {" "}
                      <img src={data.team_away_badge} intrinsicsize="512x512" />
                    </div>
                    <div className="span1">
                      {" "}
                      <span className="awayname">{data.awayTeam}</span>
                    </div>
                  </div>
                </div>
                {data.matchStart ? (
                  <div className="started">
                     <div className="tournomantdiv">
                      <span className="tournament">{data.league_name} - {data.country_name}</span>
                    </div>
                    <div className="line">
                      <img className="lineimg" src={line} />
                    </div>

                    <div  className="livefin"  style={{backgroundColor:`${lista[color]}`}}>
                  {/* //SSSSSSSSSSSSSS */}
                       
                        <span className="minstarta"> {data.match_status}'</span>
                    
                    </div>
                    <div className="score">
                      <div className="homescore">
                        {" "}
                        <span>{data.match_hometeam_score}</span>{" "}
                      </div>
                      <div className="space">
                        {" "}
                        <span>-</span>{" "}
                      </div>
                      <div className="awayscore">
                        {" "}
                        <span>{data.match_awayteam_score}</span>{" "}
                      </div>
                    </div>
                    <div className="info">
                      <div className="timediv">
                        <span className="time">
                          {" "}
                          <img className="timeimg" src={clock} />
                          {data.match_time}
                        </span>
                      </div>
                      <div className="vertical">
                        <img className="linever" src={vertical} />
                      </div>

                      <div className="localdiv">
                        <span className="local">
                          {" "}
                          <span className="chanelspan">{data.channel}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="notStarted">
                    <div className="tournomantdiv">
                      <span className="tournament">{data.league_name} - {data.country_name}</span>
                    </div>
                    <div className="line">
                      <img className="lineimg" src={line} />
                    </div>

                    <div className="versus">
                      <img className="vs" src={vs} />
                    </div>

                    <div className="info">
                      <div className="timediv">
                        <span className="time">
                          {" "}
                          <img className="timeimg" src={clock} />
                          {data.match_time}
                        </span>
                      </div>
                      <div className="vertical">
                        <img className="linever" src={vertical} />
                      </div>

                      <div className="localdiv">
                        <span style={{"font-size":"18px"}} className="local">
                        {data.channel}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </Carousel>

        <div className="allmatches">
          <div className="bar">
            <div className="lasted">
              <span className="Schedule">Match Schedule</span>
            </div>

            <div className="date">
              <DatePicker
                className="inpcal"
                onSelect={date}
                onChange={(date) => setdate(date)}
                customInput={<img className="calimg" src={calendar} />}/>
            </div>
          </div>



          {matches && matches.map((data) => (
<Link style={{"text-decoration":"none"}} to={`/Live/${data.match_id}/${data.hometeam}/${data.awayTeam}`}> 
            <div className="matches">
              <div className="details">
                <div className="homet">
                  <img className="homeim" src={data.team_home_badge} />
                  <span className="hname">{data.hometeam}</span>
                </div>

                {data.matchStart ? (
                 <div className="resultdiv">
                 <span className="homer">{data.match_hometeam_score}</span>
                 <span className="sp">-</span>
                 <span className="awayr">{data.match_awayteam_score}</span>
                 <div  className="liveNowfin"  style={{backgroundColor:`${lista[color]}`}} >
                  
                  <span  className="minstart"> {data.match_status}<sup>'</sup> </span>
               
                </div> 
               </div>
                 
                ) : (
                  <div className="vers">
                  {" "}
                  <img className="vsimage" src={vs} />
                </div>

                  
                )}

                <div className="awayt">
                  <img className="awayim" src={data.team_away_badge} />
                  <span className="aname">{data.awayTeam}</span>
                </div>
            
              </div>

          
                
        
                <div className="infom">
                  <div className="infomdiv"> 
                  <img
                    className="tournmatch"
                    src={data.league_logo}
                  />
                  <span className="tmatch">
                    {" "}
                    <img className="timematch" src={clock} /> {data.match_time}
                  </span>
                  </div>
                  <div className="chadiv">
                        <span className="local">
                          {" "}
                          <span style={{"color":"black"}} className="chanelspan">{data.channel}</span>
                        </span>
                      </div>
                </div>
            
            </div>
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
