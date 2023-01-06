const axios = require('axios')
let i =0
const getall = (req , res)=>{
    var config = {
      method: 'get',
      url: 'contact me',
      headers: {
        
        'cache-control': 'max-age=0', 
        'sec-chua': '^\\^', 
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36', 
       
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
        'sec-fetch-site': 'none', 
        'sec-fetch-mode': 'navigate', 
       
        'sec-fetch-dest': 'document', 
        }
    };
    
    axios(config)
    .then(function (response) {
      let soccer = []
      let Allmatches =[]
      let matchStart = false
      soccer = response.data
    for(i;i<soccer.length;i++)
    {
      let match_status = soccer[i]["match_status"]
      let match_hometeam_score
      let match_awayteam_score 
      let country_name = soccer[i]["country_name"]
      let team_home_badge =  soccer[i]["team_home_badge"]
      let team_away_badge =  soccer[i]["team_away_badge"]
      let league_name = soccer[i]["league_name"]
      let awayTeam  = soccer[i]["match_awayteam_name"]
      let hometeam =   soccer[i]["match_hometeam_name"]
      let start = soccer[i]["match_live"]
      let match_time = soccer[i]["match_time"]
      let match_live  
      if(league_name.includes("UEFA Europa League") || league_name == "Bundesliga" || league_name == "La Liga" || league_name =="Serie A" || league_name.includes("CAF Champions League") )
      { 
      if(start == 0){match_live = "Not Started" 
    }
      else{match_live = "Live Now"
      match_time = soccer[i]["match_status"]
      matchStart = true
      match_hometeam_score =  soccer[i]["match_hometeam_score"]
      match_awayteam_score =  soccer[i]["match_awayteam_score"]
    }
      
      

    const responseData = {
      league_name :league_name,
      match_id : soccer[i]["match_id"],
      match_time :match_time,
      awayTeam :awayTeam,
      team_away_badge:team_away_badge,
      match_awayteam_score:match_awayteam_score,
      match_live :match_live,
      matchStart : matchStart,
      hometeam :hometeam,
      match_hometeam_score:match_hometeam_score,
      team_home_badge:team_home_badge,
      match_status:match_status
    } 
      Allmatches.push( responseData)
    }} 
    
      res.json(Allmatches)
    })
    .catch(function (error) {
      console.log(error);
    });
    
}
module.exports ={
    getall
}
