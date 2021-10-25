const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

// connect to mongo db
const dbURI =
  "mongodb+srv://davos:pass@cluster0.tuigm.mongodb.net/node-tute?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

console.log("connected to db");

// register view engine
app.set("view engine", "ejs");

// listen for requests

// middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.send(`<p>${__dirname}</p>`);
  res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })// -1 means desc order
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 page

app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});

// const blogs = [
//   {
//     title: "David needs help",
//     snippet: "David needs help with patience" },
//   {
//     title: "David has a bad knee",
//     snippet: "Why are knees a repeating motif?",
//   },
//   {
//     title: "David has an ear problem",
//     snippet: "my ears are sensitive to sound",
//   },
// ];
// // res.send("<p>home page</p>");
// res.render("index", { title: "Home", blogs }); //blogs by itself is the same as blogs: blogs
