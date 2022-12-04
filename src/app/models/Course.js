const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');





const Course = new Schema({
  // id:{type:String},
  name:{type:String, required:true,},
  description:{type:String},
  image:{type: String, maxLength:255},
  slug: { type: String ,slug:'name',unique:true},
},{
  timestamps: true,
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ overrideMethods: 'all',deletedAt : true });

module.exports = mongoose.model('Course', Course);