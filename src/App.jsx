import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="List" element={<List />} />
      <Route path="Login" element={<Login />} />
      <Route path="Singup" element={<Singup />} />

    </Routes>
  );
};

export default App;
