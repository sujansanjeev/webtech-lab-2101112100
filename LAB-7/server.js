const express = require('express');
const app = express();
const port = 3000;

// Define a basic route for the root ("/") URL
app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

// Define another route for the "/about" URL
app.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
