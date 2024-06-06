// Create web server
const express = require('express');
const app = express();
app.use(express.static('public'));
// Create a route to handle GET requests
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Data to send to the client
const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'I liek fish' },
  { username: 'KittyKat', comment: 'meowww' }
];