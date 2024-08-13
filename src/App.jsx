import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the active route's component */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
