const express = require('express');
const {WebSocketServer} = require('ws');

const app = express();


const server = app.listen(8080,
    () => { 
        console.log(`server is listening on port 8080...`);
    });
    const wss = new WebSocketServer({server});
wss.on('connection', (ws) => {
    ws.on('error', console.error);

    ws.on('message', (data) => {
        console.log("data : " + data);
        ws.send(`{ from: 'Server', text: 'Welcome!', createdAt: ${Date()} }`);
    });
});