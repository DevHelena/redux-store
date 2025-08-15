import styled from "styled-components";

type ProductImageProps = {
  imageUrl: string;
};

export const ProductContainer = styled.div`
  margin-bottom: 30px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const ProductImage = styled.div<ProductImageProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  width: 300px;
  height: 360px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;

  button {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease;
    margin: 20px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;

    button {
      visibility: visible;
      opacity: 1;
    }
  }
  @media (max-width: 1030px) {
    width: 40vw;
    height: 450px;
  }

  @media (max-width: 775px) {
    width: 80vw;
    height: 450px;
  }
`;

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: #222222;
  color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;
