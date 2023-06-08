import Link from "next/link";
import styled from "styled-components";
import { routes } from "@component/consts";
import { Logo } from "@component/components/logo";

const StyledNavigation = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  background: white;
  height: 56px;
  ul {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 0 5%;
  }
`;

const NavElement = styled.li`
  padding: 16px 0;
  margin-right: 24px;
`;

const Navigation = () => (
  <StyledNavigation>
    <ul>
      {routes.map((route, i) => {
        const linkContent = i === 0 ? <Logo /> : route.label;
        return (
          <NavElement key={route.link}>
            <Link href={route.link}>{linkContent}</Link>
          </NavElement>
        );
      })}
    </ul>
  </StyledNavigation>
);

export default Navigation;
