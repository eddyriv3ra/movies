import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Wishlist from "./pages/Wishlist";
import "./styles/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
