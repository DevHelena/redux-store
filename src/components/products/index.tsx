import products from "../../data/products";
import ProductItem from "../product-item";
import type { Product } from "../../types/product";
import * as Styles from "./styles";

const Products = () => {
  return (
    <Styles.ContainerProduct>
      <Styles.ProductList>
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}        
      </Styles.ProductList>

    </Styles.ContainerProduct>
  );
};

export default Products;
