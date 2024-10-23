import React from "react";
import Main2 from "./main_2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Components/Products/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Products" element={<Product></Product>}></Route>
        <Route path="/" element={<Main2></Main2>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
