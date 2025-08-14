import { useSelector } from "react-redux"; 
import * as Styles from "./styles";
import CartItem from "../cart-item/index"
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
  const handleEscapeAreaClick = () => setIsVisible(false);

  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        
        <Styles.CartTotal>R$ {productsTotalPrice}</Styles.CartTotal>
        
        { products.map(product => 
          <CartItem key={product.id} product={product}/>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
