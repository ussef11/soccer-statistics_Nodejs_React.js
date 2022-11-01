const express = require('express');
const Route = express.Router();

const soccerData = require('../Controllers/Soocer')
const soccerroute = require('../Controllers/soccerController')

Route.get('/AllMatches' ,soccerData.getall)
Route.get('/', soccerroute.soccer)
Route.post('/AddChannel', soccerroute.AddChannel)
Route.get('/GetChannel/?:id', soccerroute.GetChannel)


module.exports = Route