import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./components/game";
import Home from "./views/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import Logout from "./components/logout";
import Login from "./views/login";
import Signup from "./views/signup";
import Leaderboard from "./views/Leaderboard";
import Profile from "./views/profile";        
import Description from "./views/description"; 
import ProtectedRoute from "./utils/ProtectedRoute"; 

function App() {
  return (
    <Router>

      <div className="flex flex-col min-h-screen bg-yellow-100">
        <Header />

        {/* Define Routes */}
        <div className="flex-grow flex items-center justify-center">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/game"
              element={
                <ProtectedRoute>
                  <Game />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/description" element={<Description />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

// Ensure default export
export default App;
