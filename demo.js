const express = require('express');
const app = express();
const port = 3000;

// ✅ Define your route correctly
app.get('/movies/movies', (req, res) => {
  res.send('Movies route is working!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});