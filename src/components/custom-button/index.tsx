import { ReactNode, ButtonHTMLAttributes } from "react";
import * as Styles from "./styles";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  startIcon?: ReactNode;
};

const CustomButton = ({ children, startIcon, ...rest }: CustomButtonProps) => {
  return (
    <Styles.CustomButtonContainer {...rest}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}
      {children}
    </Styles.CustomButtonContainer>
  );
};

export default CustomButton;
