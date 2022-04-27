import './App.css';
import React from "react";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import CardPage from "./pages/CardPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BlogPage />} />
          <Route index path="posts/:id" element={<CardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
