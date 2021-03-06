
const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = http.Server(app);

app.get('/api', (req, res) => {
  res.json({status: 'Server works!'});
});

httpServer.listen(PORT, () => console.log('Listerning on port', PORT));