import styled from "styled-components";

type CartContainerProps = {
  isVisible: boolean;
};

type CartItemImageProps = {
  imageUrl: string;
};

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;

  p {
    color: #222222;
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;
`;

export const CartContent = styled.div`
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    min-width: 85%;
  }
`;

export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  p {
    color: #222222;
  }
`;

export const CartItemImage = styled.div<CartItemImageProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 250px;
  width: 170px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
  }
`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: black;

  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const RemoveButton = styled.div`
  margin-right: 20px;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;