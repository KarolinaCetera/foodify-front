import styled from "styled-components";
import { FC } from "react";

const SimpleButton = styled.button`
  color: white;
  background-color: seagreen;
`;

interface ButtonProps {
  children: JSX.Element;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <SimpleButton type="button">{children}</SimpleButton>;
};

export default Button;
