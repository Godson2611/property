import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Property from "../pages/Property";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/property" element={<Property />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Approutes;
