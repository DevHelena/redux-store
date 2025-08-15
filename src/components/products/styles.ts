import styled from "styled-components";

export const ContainerProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  padding: 30px;

  @media (max-width: 1240px) {
    width: 90%;
  }
  @media (max-width: 1100px) {
    width: 95%;
    padding: 20px;
  }  
  @media (max-width: 1030px) {
    width: 90%;
  }  
  @media (max-width: 500px) {
    width: 95%;
    justify-content: center;
    padding: 30px 0;
  }  
`;
