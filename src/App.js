import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import HomePage from "./pages/home";
import Layout from "./layout";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/profile" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
