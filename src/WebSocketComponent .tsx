import React, { useEffect, useState } from "react";

interface WebSocketMessage {
  type: string;
  data: {
    msg: string;
  };
}

const WebSocketComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:3000/api/v1/socket/queue/80");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    socket.onmessage = (event) => {
      const receivedMessage: WebSocketMessage = JSON.parse(event.data);
      // Check if the message type is 'queue' and update the state with the message
      console.log("Message received from server:", JSON.parse(event.data));
      if (receivedMessage.type === "queue") {
        setMessage(receivedMessage.data.msg);
      }
    };

    // Clean up function to close the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>WebSocket Example</h1>
      <div>
        {/* Render the message received from the WebSocket server */}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default WebSocketComponent;
