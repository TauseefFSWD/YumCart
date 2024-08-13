import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Menu from "./Menu";
import Services from "./Services";
import About from "./About";
import PaymentPage from "./PaymentPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
