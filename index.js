// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Dockerized Node.js Express Server! update');
});

app.listen(PORT, () => {
    console.log(`✅ App is running`);
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
