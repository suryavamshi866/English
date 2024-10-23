import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Vocabulary from "./Vocabulary";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import "./styles.css";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <div className="container">
                <h1>Vocabulary Learning</h1>
                <Routes>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/reset-password" element={isLoggedIn ? <ResetPassword /> : <Navigate to="/login" />} />
                    <Route path="/" element={isLoggedIn ? <Vocabulary /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
