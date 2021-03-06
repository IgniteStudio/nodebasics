const express = require("express");

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  // res.send("<p>home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send(`<p>${__dirname}</p>`);
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page  THIS HAS TO BE AT THE BOTTOM OF THE REST
// BECAUSE it executes if nothing else matches
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});
