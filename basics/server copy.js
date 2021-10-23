const http = require("http");
// this code is running on the server NOT the browser
// So you won't see the console logs in the browser
// only on the server console or terminal
const server = http.createServer((req, res) => {
  //   console.log("request made");
  console.log("url: ", req.url, " method:", req.method);

  // set header content type
  // res.setHeader('Content-Type', 'text/plain'); //sets the header up
  res.setHeader('Content-Type', 'text/html'); //can send text or html or other types of data
  res.write('<head><link rel="stylesheet" href="#"></head>')
  // res.write('Hello all!'); //writes to the header
  res.write('<p>Hello all</p>');
  res.write('<p>Hello again</p>');
  res.end();// sends to the browser
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
