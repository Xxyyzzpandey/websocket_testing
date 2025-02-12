// import express from "express"
// import {  WebSocketServer } from "ws";
// import {HandleWss} from "./wss.js"

// const app=express();
// const httpServer=app.listen(3000);

// const wss=new WebSocketServer({server:httpServer});

// wss.on('connection',(socket)=>{
//        HandleWss(wss,socket);
// })


import express from "express"
import http from "http";
import {  WebSocketServer } from "ws";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ noServer: true });

// Route for /signin (Simple HTTP connection)
app.get("/signin", (req, res) => {
  res.send("This is a simple HTTP connection on /signin.");
});

// Upgrade HTTP connection to WebSocket for /clicked
server.on("upgrade", (req, socket, head) => {
  if (req.url === "/clicked") {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
    // Handle WebSocket connection
    wss.on("connection", (ws, req) => {
       ws.setMaxListeners(300);//to increase no of listenign default is 10
      console.log("WebSocket connection established for /clicked");
    
      // Log the button click and close the connection
      ws.on("message", (message) => {
        if (message === "button-clicked") {
          console.log("Button clicked!");
          ws.send("Button click acknowledged");
          ws.on("close", () => {
              console.log("WebSocket connection closed.");
            });
        }
      });
    });
    socket.destroy();
  } else {
    socket.destroy();
  }
});


// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
