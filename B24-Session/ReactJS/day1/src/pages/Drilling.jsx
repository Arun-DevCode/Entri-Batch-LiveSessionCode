import React, { useState, useEffect } from "react";
import ComponentA from "../components/componentA";
import ProductProvider from "../context/ProductProvider";

function Drilling() {
  const name = "Entri App";
  return (
    <ProductProvider value={name}>
      <ComponentA data={value} />
      
    </ProductProvider>
  );
}

export default Drilling;
