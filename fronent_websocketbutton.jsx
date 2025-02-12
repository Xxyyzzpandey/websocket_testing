import React from "react";

const WebSocketButton = () => {
  const handleClick = () => {
    // Establish WebSocket connection to /clicked
    const ws = new WebSocket("ws://localhost:3000/clicked");

    ws.onopen = () => {
      console.log("WebSocket connection established for button 1.");
      // Send a message to the server
      ws.send("button-clicked");
    };

    ws.onmessage = (event) => {
      console.log("Server:", event.data);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>WebSocket Button Click Example</h1>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Click Me
      </button>
    </div>
  );
};

const WebSocketButton2 = () => {
    const handleClick = () => {
      // Establish WebSocket connection to /clicked
      const ws = new WebSocket("ws://localhost:3000/clicked");
  
      ws.onopen = () => {
        console.log("WebSocket connection established for button 2.");
        // Send a message to the server
        ws.send("button-clicked");
      };
  
      ws.onmessage = (event) => {
        console.log("Server:", event.data);
      };
  
      ws.onclose = () => {
        console.log("WebSocket connection closed.");
      };
  
      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>WebSocket Button Click Example</h1>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Click Me
        </button>
      </div>
    );
  };

export { WebSocketButton,WebSocketButton2};
