//importa o react
import React from "react";

// para realizar a navegacao entre as rotas
import { Routes, Route, Navigate } from "react-router-dom";

// importa a pagina
import Dashboard from "./pages/Dashboard";
import Colaboradores from "./pages/Colaboradores";
import Login from "./pages/Login";

export const Paths = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Colaboradores" element={<Colaboradores />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<Navigate to="/Login" />} />
    </Routes>
  );
};
