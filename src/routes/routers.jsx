/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Fitur from "../pages/RuangLab";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Syaratketentuan from "../pages/Syaratketentuan";
import Historypeminjaman from "../pages/Historypeminjaman"


const Routers = () => {
  return (
    <Routes>
      {/*<Route path="/login" exact element={<Login />} />*/}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ruanglab" element={<Fitur />} />
      <Route path="/syaratketentuan" element={<Syaratketentuan/>} />
      <Route path="/historypeminjaman" element={<Historypeminjaman/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
};

export default Routers;
