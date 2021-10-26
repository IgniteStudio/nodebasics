const express = require("express");
const Blog = require("../models/blog");

const router = express.Router();
// create must be before :id because if it came after the browser would think it was an id
router.get("/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

router.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) // -1 means desc order
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
