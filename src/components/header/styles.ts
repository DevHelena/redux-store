import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 20px 30px;

  @media (max-width: 1240px) {
    width: 90%;
  }
  @media (max-width: 1100px) {
    width: 95%;
    padding: 20px 20px;
  }  
  @media (max-width: 1030px) {
    width: 90%;
    padding: 10px 20px;
    font-size: small;
  }    
  @media (max-width: 500px) {
    width: 95%;
    padding: 15px 0;
  }  
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;  

  @media (max-width: 1030px) {
    font-size: medium;
  }  
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
  }
`;
