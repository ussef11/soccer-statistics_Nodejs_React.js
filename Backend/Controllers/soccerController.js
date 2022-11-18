var axios = require("axios");
const Channel = require('../models/channel.model')
const soccer =async  (req, res) => {
  let date_ob = new Date();
  let year = date_ob.getFullYear();
  let month = date_ob.getMonth() + 1;
  let day = date_ob.getDate();

  const todaydate = year + "-" + month + "-" + day;
  console.log(todaydate);

  


  var config = {
    method: "get",
    url: `https://apiv3.apifootball.com/?&action=get_events&Widgetkey=893b8a8d15fa14f9ba4b684f1df592e740769586d0a302a04731404785f69321&timezone=%2B01%3A00&withOutDetails=true&_=1665666305646&from=${todaydate}&to=${todaydate}`,
    headers: { 
     
    },
  };
  let i = 0;
  axios(config)
    .then(async function (response) {
      let soccer = [];
      let Allmatches = [];
      let matchStart = false;
      let matchfin = true;
      let chan = [];
      soccer = response.data;
      for (i; i < soccer.length; i++) {
        let country_name = soccer[i]["country_name"];
        let league_name = soccer[i]["league_name"];
        if (league_name.includes("UEFA Champions League") ||
          league_name.includes("UEFA Europa League") ||
          league_name == "Botola Pro" ||
          league_name.includes("DFB Pokal") ||
          league_name == "Bundesliga" ||
          league_name == "La Liga" ||
          league_name == "Serie A" ||
          league_name.includes("CAF Champions League") ||
          (league_name == "Premier League" && country_name == "England") ||
          league_name.includes("Friendlies")
        ) {

          // console.log(await getinfo(soccer[i]["match_id"]))
          
           chan =  await getinfo(soccer[i]["match_id"])
          
          //  console.log(chan[0]["ChannelName"])
          let channel 
         try{
           channel = chan[0]["ChannelName"]
         }
         catch{
           channel = "Not Available"
         }
      
          let match_status = soccer[i]["match_status"];
          let match_hometeam_score;
          let match_awayteam_score;
      
          let team_home_badge = soccer[i]["team_home_badge"];
          let team_away_badge = soccer[i]["team_away_badge"];
         let league_logo = soccer[i]["league_logo"]
          let awayTeam = soccer[i]["match_awayteam_name"];
          let hometeam = soccer[i]["match_hometeam_name"];
          let start = soccer[i]["match_live"];
          let match_time = soccer[i]["match_time"];
          let match_live;


          if (match_status == "") {
            match_live = "Not Started";
            matchStart = false;
          } else if (!isNaN(match_status) || match_status =="Half Time" ) {
            match_live = "Live Now";
            match_time = soccer[i]["match_status"];
            matchStart = true;
            matchfin = false;
            match_hometeam_score = soccer[i]["match_hometeam_score"];
            match_awayteam_score = soccer[i]["match_awayteam_score"];
          }else if(match_status == "Finished"){
            match_live = "Live Now";
            match_time = soccer[i]["match_status"];
            matchfin = true;
            matchStart = true;
            match_hometeam_score = soccer[i]["match_hometeam_score"];
            match_awayteam_score = soccer[i]["match_awayteam_score"];
          }

          const responseData = { 
            league_name: league_name,
            match_id: soccer[i]["match_id"],
            match_time: match_time,
            awayTeam: awayTeam,
            team_away_badge: team_away_badge,
            match_awayteam_score: match_awayteam_score,
            match_live: match_live,
            matchStart: matchStart,
            hometeam: hometeam,
            match_hometeam_score: match_hometeam_score,
            team_home_badge: team_home_badge,
            match_status: match_status,
            matchfin:matchfin,
           channel:channel,
           league_logo:league_logo
           
          
          };
          Allmatches.push(responseData);
        }
      }

      res.json(Allmatches);
    })
    .catch(function (error) {
      console.log(error);
    });
};


function getinfo(id)
{
  const info = Channel.find(({ MatchId: id } )   ).sort({createdAt:-1})
   .then((result)=>{
    
    return result
   }).catch(()=>{
    return ""
   })
   return info
}

const AddChannel = (req,res)=>{
   const NewChannel = Channel(req.body);
   NewChannel.save()
   .then((result)=>{
    res.json(`Channel ${NewChannel} Has Been Added :)`)
   }).catch((err)=>{res.status(500).json(err) })
}


const  GetChannel =(req,res)=>{
  let params= req.params.id
   Channel.find(({MatchId:params})).sort({createdAt:-1})
   .then((result)=>{
    res.json(result)
   }).catch((err)=>{
     res.json(err)
   })

   

}

module.exports = { soccer,AddChannel,GetChannel };
