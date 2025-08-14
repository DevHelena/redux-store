import React from "react";
import products from "../../data/products";
import ProductItem from "../product-item";
import type { Product } from "../../types/product";
import * as Styles from "./styles";

const Products: React.FC = () => {
  return (
    <Styles.Container>
      {products.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Styles.Container>
  );
};

export default Products;
