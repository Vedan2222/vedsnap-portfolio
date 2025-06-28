// src/auth/Login.jsx
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (error) {
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-sm mx-auto mt-20 bg-gray-900 border border-gray-700 rounded">
      <h2 className="text-xl mb-4 text-white">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 bg-black border border-gray-600 text-white"
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 bg-black border border-gray-600 text-white"
        required
      />
      <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
        Login
      </button>
    </form>
  );
}
