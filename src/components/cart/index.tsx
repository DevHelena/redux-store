import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import type { RootState } from "../../redux/rootReducer";

type CartProps = {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
};

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const products = useSelector((state: RootState) => state.cartReducer.products);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        <Styles.CartTotal>R$ {productsTotalPrice}</Styles.CartTotal>

        {products.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
