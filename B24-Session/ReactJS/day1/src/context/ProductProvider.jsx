import React from "react";
import productContext from "./ProductContext";

function ProductProvider(children) {
  const name = "Entri App";
  return <productContext.Provider>{children}</productContext.Provider>;
}

export default ProductProvider;
