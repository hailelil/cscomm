import React, { useState } from "react";
import { login } from "../api";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  console.log("Trying login with:", username, password);  // DEBUG

  try {
    const res = await login(username, password);
    console.log("JWT response:", res.data);               // DEBUG

    localStorage.setItem("access", res.data.access);
    onLogin(username);
  } catch (e) {
    console.log("Login failed:", e.response?.data || e.message);
    alert("Login failed");
  }
};
return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
