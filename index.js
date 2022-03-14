const express = require('express'),
 http = require('http'),
 redis = require('redis'),
 os = require('os');
const client = redis.createClient(6379, 'redis');
const app = express();
app.get('/', function(req, res, next) {
 client.incr('visits', function(err, visits) {
 if(err) return next(err);
 const response = '<center><br> <fontcolor="0000FF">hi everyone</fontcolor=><br>Cette requête a été traitée par le conteneur <b>' + os.hostname() + ' </b><br> Vous avez vu cette page <b> <font color="0F000F">' + visits + ' fois.</font></b> <br>';
 res.send(response);
 });
});
const appPort = 8080;
http.createServer(app).listen(appPort, function() {
 console.log('Listening on port ' + appPort);
})