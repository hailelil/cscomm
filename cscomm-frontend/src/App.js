import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [username, setUsername] = useState(null);
  return (
    <div>
      {!username ? (
        <LoginForm onLogin={setUsername} />
      ) : (
        <ChatRoom username={username} />
      )}
    </div>
  );
}

export default App;
