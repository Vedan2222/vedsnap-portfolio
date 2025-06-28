// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./auth/Login";
import AdminPanel from "./admin/AdminPanel";
import PrivateRoute from "./auth/PrivateRoute";

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/admin") || location.pathname === "/login";

  return (
    <div className="bg-black text-white min-h-screen">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
