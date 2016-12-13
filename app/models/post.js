//  app/models/post.js

//  grab mongoose
var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    template: { type: String, default: '' },
    sourceURL: { type: String, default: '' },
    date: { type: Date, default: Date.now },
});

//  pass with module.exports 
module.exports = mongoose.model('Post', PostSchema);