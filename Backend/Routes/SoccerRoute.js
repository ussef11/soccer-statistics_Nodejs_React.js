const express = require('express');
const Route = express.Router();


const soccerroute = require('../Controllers/soccerController')


module.exports = function(app) {
  app.use(function(req, res, next) {
    "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      'Access-Control-Allow-Origin', '*'

    next();
  });

  app.get('/', soccerroute.soccer)

  app.get('/GetChannel/?:id/', soccerroute.GetChannel)
  app.post('/AddChannelA', soccerroute.AddChannel)


}

// Route.get('/AllMatches' ,soccerData.getall)
// Route.get('/', soccerroute.soccer)

// Route.post('/AddChannelA', soccerroute.AddChannel)


// Route.get('/GetChannel/?:id/', soccerroute.GetChannel)


// module.exports = Route