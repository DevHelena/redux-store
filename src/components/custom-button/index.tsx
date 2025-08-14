import React, { ReactNode, ButtonHTMLAttributes } from "react";
import * as Styles from "./styles";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  startIcon?: ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({ children, startIcon, ...rest }) => {
  return (
    <Styles.CustomButtonContainer {...rest}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}
      {children}
    </Styles.CustomButtonContainer>
  );
};

export default CustomButton;
