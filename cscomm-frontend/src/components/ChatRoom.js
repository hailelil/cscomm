import React, { useEffect, useState } from "react";

export default function ChatRoom({ username }) {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/chat/general/");
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prev) => [...prev, data]);
    };
    setSocket(ws);
    return () => ws.close();
  }, []);

  const send = () => {
    socket.send(JSON.stringify({ message: text }));
    setText("");
  };

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <div>
        {messages.map((msg, i) => (
          <div key={i}><b>{msg.user}</b>: {msg.message}</div>
        ))}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
