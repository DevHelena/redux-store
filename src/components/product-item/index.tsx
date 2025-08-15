import { BsCartPlus } from "react-icons/bs";
import * as Styles from "./styles";
import { addProduct } from "../../redux/cart/actions";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import type { Product } from "../../types/product";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleProductClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <Styles.ProductContainer className="ProductContainer">
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <Styles.CustomButtonContainer onClick={handleProductClick}>
          <Styles.IconContainer>
            <BsCartPlus />
          </Styles.IconContainer>
          Add to Cart
        </Styles.CustomButtonContainer>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
