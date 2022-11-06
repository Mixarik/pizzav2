import React from "react";

import { Route, Routes } from "react-router-dom";

import PizzaPage from "../pages/PizzaPage/PizzasPage";
import CartPage from "../pages/CartPage/CartPage";
// import "../../scss/app.scss";


function App() {
  return (
    <Routes>
      <Route path="/" element={<PizzaPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
