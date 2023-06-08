import React, { FC } from "react";
import styled from "styled-components";
import Navigation from "@component/components/navigation";

const StyledLayout = styled.section`
  margin: 0 auto;
  position: relative;
  height: 100vh;
  .content {
    margin: 0 auto;
    position: relative;
    width: 90vw;
    top: 56px;
    padding-bottom: 24px;
    height: 90vh;
    overflow: hidden;

    @media (min-width: 800px) {
      top: 64px;
    }
  }
`;

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <StyledLayout>
      <Navigation />
      <div className="content">{children}</div>
    </StyledLayout>
  );
};

export default Layout;
