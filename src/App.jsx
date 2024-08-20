import React from "react";
import Layout from './components/Layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Fitur from "./pages/RuangLab";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Syaratketentuan from "./pages/Syaratketentuan";
import Historypeminjaman from "./pages/Historypeminjaman"
import { AuthProvider } from './components/Layout/AuthContext';

function App() {
  return (
    <AuthProvider>
    
    <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route element={<Layout />}>
           <Route path="/home" element={<Home />} />
           <Route path="/ruanglab" element={<Fitur />} />
           <Route path="/register" element={<Register />} />
           <Route path="/syaratketentuan" element={<Syaratketentuan />} />
           <Route path="/historypeminjaman" element={<Historypeminjaman />} />
        </Route>     
    </Routes>

    </AuthProvider>
  );
}

export default App;