//  app/models/post.js

//  grab mongoose
var mongoose = require( 'mongoose' );

//  define post model
//  pass with module.exports 
module.exports = mongoose.model('Post', {
  template: { type: String, default: '' },
  sourceURL: { type: String, default: '' },
  date: { type: Date, default: Date.now },
});