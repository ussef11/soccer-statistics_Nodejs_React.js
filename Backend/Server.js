const express = require('express')
const app = express();
const cors =  require('cors')
const mongoose = require('mongoose')
const cookieSession = require("cookie-session");

const SoccerRoute = require('./Routes/SoccerRoute')



// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

require('dotenv').config();

const port = process.env.port || 3001


var corsOptions = {
    origin: "http://localhost:3000",
 
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

app.use(express.json())



const db = require("./models");
const Role = db.role;


const URI = process.env.ATLAS_URI
mongoose.connect(URI , {useNewUrlParser: true,useUnifiedTopology: true}).then((result)=>{
console.log("Connected To DataBase :{)");  initial()
}).catch((err)=>{console.log(err)})


function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }





app.listen(port , ()=>{
    console.log(`Server is running in Port :${port}`)
})


// routes
require('./Routes/auth.routes')(app);
require('./Routes/user.routes')(app);
require("./Routes/SoccerRoute")(app);