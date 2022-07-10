var express = require('express');
var app = express();
const port = process.env.PORT || "4000";

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

//close page
app.get('/close', function(req,res){
  console.log('Server is Exiting');
});

app.listen(port);
console.log(`Listening to requests on http://localhost:${port}`);