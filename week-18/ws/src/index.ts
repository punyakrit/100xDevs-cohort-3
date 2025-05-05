import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
let counter = 0;
wss.on('connection',function(ws){
    ws.on("message",(e)=>{
        if(e.toString() === "ping"){
            ws.send("pong")
        }
    })

})