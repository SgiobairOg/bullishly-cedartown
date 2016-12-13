//  app/routes.js

//  grab database model
var Post = require( './models/post');

module.exports = function( app ) {
  
  //server routes....
    //  api calls
    // authentication
  
  //sample api route
  app.get( '/api/posts', function(req, res) {
    //  use mongoose to get all posts
    Post.find( function( err, posts ) {
      if (err)
        res.send( err );
      
      res.json(posts);
    });
  });
  
  // route to create (app.post)
  
  // route to handle delete goes here (app.delete)
  
  // frontent routes...
  
  //route to handle all angular requests
  
  app.get('*', function( req, res ) {
    res.sendfile( './public/views/index.html');
  });
};