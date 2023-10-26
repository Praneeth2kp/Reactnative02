const http = require('http');
const express = require('express');
require('nodemon');
const app = express();

app.get('/', (req, res) => {
  const data = 'Hello Server';
  res.send(data);
});
app.get('/send-data', (req, res) => {
  const data = 'Hello from server!';
  console.log("Request Recieved")
  res.send(data);
});
const server = http.createServer(app);
const port = 1000;
server.listen(port, () => console.log(`Listening on ${port}`));
