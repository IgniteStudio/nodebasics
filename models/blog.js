const mongoose = require("mongoose");

// invokes mongoose schema
const Schema = mongoose.Schema;

// create new schema or structure to our documents in the database
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // timestamps on

// looks for the collection or plural of what's in quotes ie Blogs which is the name of the database
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
