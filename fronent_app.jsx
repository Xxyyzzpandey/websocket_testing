import { useEffect, useState } from 'react'
import {WebSocketButton,WebSocketButton2} from "./websocketbutton"

import './App.css'

function App() {
   
//  const [socket,setSocket]=useState(null)                         
//  const [latestMessage,setLatestMessage]=useState("")

//   useEffect(()=>{
//     const socket=new WebSocket('ws://localhost:3000')
//     socket.onopen=()=>{
//       console.log('connected')
//       setSocket(socket);
//     }
//     //
//     socket.onmessage=(message)=>{
//       console.log('Recieved message :',message.data)
//       setLatestMessage(message.data)
//     }
//     return ()=>socket.close();
//   },[])

//   if(!socket){
//     return <div>
//       connecting to socket server.....
//     </div>
//   }

  return (
    <>
     <WebSocketButton/>
     <WebSocketButton2/>

      {/* <input type="text" onChange={(e)=>{setLatestMessage(e.target.value)}}/>
      <button onClick={()=>{socket.send({latestMessage})}}>send</button>
      { latestMessage} */}
    </>
  )
}

export default App
