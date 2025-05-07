import {WebSocketServer} from 'ws'

const wss = new WebSocketServer({port:8080 })

let user = 0

wss.on('connection', (socket)=>{
    user++;
    socket.send("uo" + user)
})