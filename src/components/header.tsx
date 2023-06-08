import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 32px;
  font-weight: 500;
  position: fixed;
  background: white;
  padding: 16px 0;
  width: 100%;
  z-index: 15;
`;

export const Header = ({ children }: { children: string }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
