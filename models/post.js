const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: {
    type: String,
    maxLength: [200, 'Message exceeds maximum allowed character size (200)'],
    required: [true, 'Please input a message']
  },
  user: {
    type: String,
    required: [true, 'Message requires a name'],
    maxLength: [20, 'Name exceeds maximum size of 20 characters']
  },
  date: Date
});

const PostModel = mongoose.model("Posts", PostSchema);

module.exports = PostModel;