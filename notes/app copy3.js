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
app.use(express.static("public")); // directs calls to the public folder
app.use(morgan("dev")); // shows method, path status code, time of execution

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save() // saves to the database
    .then((result) => {
      res.send(result); // sends back the object
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/one-blog", (req, res) => {
  Blog.findById("6176178630de8cd2ec9acdbf")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// routes
app.get("/", (req, res) => {
  const blogs = [
    { title: "David needs help", snippet: "David needs help with patience" },
    {
      title: "David has a bad knee",
      snippet: "Why are knees a repeating motif?",
    },
    {
      title: "David has an ear problem",
      snippet: "my ears are sensitive to sound",
    },
  ];
  // res.send("<p>home page</p>");
  res.render("index", { title: "Home", blogs }); //blogs by itself is the same as blogs: blogs
});

app.get("/about", (req, res) => {
  // res.send(`<p>${__dirname}</p>`);
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 page

app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});
