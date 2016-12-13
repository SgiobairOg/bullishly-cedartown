//  server.js

//  modules ...

var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );

//  configuration ...

// config files
var db = require( './config/db' );

// port
var port = process.env.PORT || 8080;

// mongoDB connect
mongoose.connect(db.url);

// get all data of body (POST) parameters
//  parse application/json
app.use( bodyParser.json() );

//  parse application/vdn.api+json as json
app.use( bodyParser.json( { type: 'application/vnd.api+json' } ) );

//  parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { extended: true } ) );

//  override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use( methodOverride( 'X-HTTP-Method-Override' ) );

//  static files location /public/img will be /img for users
app.use( express.static( __dirname + '/public' ) );

//  routes...
require( './app/routes')(app); //  configure routes

// start app...
// startup the app at http://localhose:8080
app.listen(port);

// it lives!
console.log(`Fantastic Engine is running on ${port}`);

// expose
exports = module.exports = app;