const express = require('express');

const app = express();

app.use("/hello", (req , res) => {
  res.send("All tests are shown from the server");
});

app.use("/test", (req, res) => {
  res.send("This is all is frontend related data");
});

app.use("/",(req , res) => {
  res.send('Welcome to Node  DEVthinder')
});

app.listen(7777 , () => {
  console.log('Server is running on port 7777...');
});
