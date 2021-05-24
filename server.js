const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.POT || 3000;

// Use CSS 
app.use(express.static(__dirname + '/public'));

http.listen(PORT, () => {
    console.log(`Server started at ${PORT}...`);
});


// Redirecting to HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// Socket.io
const io = require('socket.io')(http);

io.on('connection', (socket) =>{
    console.log('connected..');
});