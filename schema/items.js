var mongoose = require('mongoose');

var Itemschema = new mongoose.Schema({
    name: String,
    status: String,
    ordering: Number,  
  })
  var Items = mongoose.model('Items', Itemschema);

  module.exports= Items