// src/App.js
import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import UserContext from "./context/userContext";
import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPass from "./auth/ForgotPass";
import PrivateRoute from "./controller/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <UserContext>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
          <Route path="/cards" element={<PrivateRoute Component={Cards} />} />
          <Route path="/reports" element={<PrivateRoute Component={Reports} />} />
          <Route path="/settings" element={<PrivateRoute Component={Settings} />} />
          <Route path="/help" element={<PrivateRoute Component={Help} />} />
        </Routes>
      </UserContext>
    </BrowserRouter>
  );
};

export default App;
