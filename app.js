const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
//app.set('views', 'myviews'); an example of a custom set app

// listen for requests
app.listen(3000);

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
