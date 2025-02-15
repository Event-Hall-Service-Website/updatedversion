import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Router, Routes, Route } from "react-router";

import Layout from "./layout/Layout";
import Home from "./pages/Homepage";
import PagenotFound from "./pages/PagenotFound";
import "./App.css";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<PagenotFound />} /> {/* Catch-all route */}
      </Route>
    </Routes>
  );
};

export default App;
