import {WebSocketServer, WebSocket} from 'ws'

const wss = new WebSocketServer({port:8080 })

interface User {
    user : WebSocket,
    room : string
}

let allSocket :User[] = []

wss.on('connection', (socket)=>{
    socket.on("message",(message)=>{
        let parsedMessage = JSON.parse(message.toString())
        if(parsedMessage.type === 'join'){
            console.log("User joined room " + parsedMessage.payload.roomId)
            allSocket.push({
                user: socket,
                room : parsedMessage.payload.roomId
            })
        }
        if(parsedMessage.type === 'chat'){
            // const currentUserRoom = allSocket.find(x => x.user == socket)
            let currentRoom = null

            for(let i=0; i<allSocket.length; i++){
                if(allSocket[i].user == socket){
                    currentRoom = allSocket[i].room 
                }
            }
            for(let i=0; i<allSocket.length; i++){
                if(allSocket[i].room == currentRoom){
                    allSocket[i].user.send(parsedMessage.payload.message)
                }
            }

        }
    })

})