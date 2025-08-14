import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";
import Cart from "../cart";
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import type { AppDispatch } from "../../redux/store";
import type { RootState } from "../../redux/rootReducer";

const Header: React.FC = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const currentUser = useSelector((state: RootState) => state.userReducer.currentUser);
  const productsCount = useSelector(selectProductsCount);

  const handleCartClick = () => setCartIsVisible(true);

  const handleLoginClick = () => {
    dispatch(
      loginUser({
        name: "Helena Maia",
        email: "helenamaia@gmail.com",
      })
    );
  };

  const handleSairClick = () => dispatch(logoutUser());

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleSairClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
};

export default Header;
