import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
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
