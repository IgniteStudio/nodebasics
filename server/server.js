const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log("request made");
  console.log("url: ", req.url, " method:", req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html"); //can send text or html or other types of data

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }
  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data); // if you're using one piece of data
      res.end(data); // place it directly in end
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
