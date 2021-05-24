const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.POT || 3000;

app.use(express.static(__dirname + '/public'));

http.listen(PORT, () => {
    console.log(`Server started at ${PORT}...`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});