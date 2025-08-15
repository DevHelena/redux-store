import { useDispatch, useSelector } from "react-redux";
import * as Styles from "./styles";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import type { RootState } from "../../redux/rootReducer";import 
{ AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { removeProduct, increaseProduct, decreaseProduct } from "../../redux/cart/actions";
import type { AppDispatch } from "../../redux/store";
type CartProps = {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
};

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.cartReducer.products);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const handleEscapeAreaClick = () => setIsVisible(false);  
  const handleRemoveClick = (productId: string) => dispatch(removeProduct(productId));
  const handleIncreaseClick = (productId: string) => dispatch(increaseProduct(productId));
  const handleDecreaseClick = (productId: string) => dispatch(decreaseProduct(productId));


  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Your Cart</Styles.CartTitle>

        <Styles.CartTotal>$ {productsTotalPrice}</Styles.CartTotal>

        {products.map(product => (
              <Styles.CartItemContainer>
                <Styles.CartItemImage imageUrl={product.imageUrl} />

                <Styles.CartItemInfo>
                  <p>{product.name}</p>
                  <p>R${product.price}</p>

                  <Styles.CartItemQuantity>
                    <AiOutlineMinus
                      size={20}
                      onClick={() => handleDecreaseClick(product.id)}
                      aria-label={`Decrease quantity of ${product.name}`}
                    />
                    <p>{product.quantity}</p>
                    <AiOutlinePlus
                      size={20}
                      onClick={() => handleIncreaseClick(product.id)}
                      aria-label={`Increase quantity of ${product.name}`}
                    />
                  </Styles.CartItemQuantity>
                </Styles.CartItemInfo>

                <Styles.RemoveButton
                  onClick={() => handleRemoveClick(product.id)}
                  aria-label={`Remove ${product.name}`}
                >
                  <AiOutlineClose size={25} />
                </Styles.RemoveButton>
              </Styles.CartItemContainer>
        ))}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
