const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple JSON API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from backend API!" });
});

app.listen(port, () => {
  console.log(`Backend API running on port ${port}`);
});