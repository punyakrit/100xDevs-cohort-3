import {WebSocketServer} from 'ws'

const wss = new WebSocketServer({port:8080 })

let user = 0
let allSocket = []

wss.on('connection', (socket)=>{
    allSocket.push(socket)
    user++;
    socket.send("uo" + user)

    socket.on("message",(message)=>{
        allSocket.forEach((s)=>{
            s.send(message.toString() + " form user ")
        })
    })
})