
/**
 * User claims a building based on criteria and proximity 
{
User:<string>
Building:<_id>     Critertia:<string>
}

 * @param  {[type]} req  [description]
 * @param  {[type]} res) {app.post(prefix + '/building', function(req, res) {app.post(prefix + '/building', function(req, res) {app.post(prefix + '/building', function(req, res) {app.post(prefix + '/building', function(req, res) {app.post(prefix + '/building', function(req, res [description]
 * @return {[type]}      [description]
 */
var mongoose = require('mongoose');
var DB_ADDR = 'mongodb://localhost/localusers';
const express = require('express')  
const app = express()

app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {  
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {  
  response.json({
    chance: request.chance
  })
})

//initialization of the database
mongoose.connect(DB_ADDR);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
	// require("./Accounts/api.js")(db, model, app, "/api/admin");
	console.log("Mongoose Models");
	console.log(mongoose.modelNames());
});
app.post('/user/claimBuilding', function(req, res) {


});
app.listen(3000)  ;
