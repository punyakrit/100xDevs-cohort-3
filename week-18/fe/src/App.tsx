import { useEffect, useState } from "react"


function App() {
  const [socket, setSocket] = useState<WebSocket>()
  const [input, setInput] = useState("")

  useEffect(()=>{
    const ws= new WebSocket("ws://localhost:8080")
    setSocket(ws)
    ws.onmessage = (ev)=>{
      alert(ev.data)
    }
  },[])

  function sendMessage(){
    socket?.send(input)
  }
  return (
    <div>
      <input onChange={(e)=>{setInput(e.target.value)}} placeholder="message"></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
