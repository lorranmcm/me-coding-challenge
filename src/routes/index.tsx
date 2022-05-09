import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import { Auth } from "../pages/Auth";
import { Blank } from "../pages/Blank";
import { Home } from "../pages/Home";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="auth" element={<Auth />} />
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="*" element={<Blank />} />
      <Route />
    </Routes>
  );
};

export default Router;
