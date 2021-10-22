const http = require("http");
// this code is running on the server NOT the browser
// So you won't see the console logs in the browser
// only on the server console or terminal
const server = http.createServer((req, res) => {
  //   console.log("request made");
  console.log("url: ", req.url, " method:", req.method);
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
