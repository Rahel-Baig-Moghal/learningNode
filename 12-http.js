const http = require("http");

// Create a server object
const server = http.createServer((req, res) => {
  // Check the request URL
  if (req.url === "/") {
    // If URL is "/", respond with a welcome message
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    // If URL is "/about", respond with a short history
    res.end("Here is our short history");
  } else {
    // If URL is not "/", "/about", respond with a 404 message
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
  }
});

// Make the server listen on port 5000
server.listen(5000);


// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];

// const newItems = _.flattenDeep(items);

// console.log(newItems);