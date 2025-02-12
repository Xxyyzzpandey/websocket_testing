
import { WebSocket } from "ws";

let userconnected=0;
export const HandleWss=(wss,socket)=>{
     socket.on('error',(err)=>{console.log(err)});
    
            socket.on('message',(data)=>{
                wss.clients.forEach((client)=>{
                    if(client.readyState===WebSocket.OPEN){
                        client.send(data.toString());
                    }
                })
            })
            console.log("user connected ",++userconnected);
            socket.send("hellow ,it is staring message for connected server")
}