const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");

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
app.use(express.urlencoded({ extended: true }));
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
// using '/blogs' as the base url means you can omit it from the blogRoutes calls
app.use('/blogs', blogRoutes);

// 404 page

app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});
