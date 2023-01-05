import React from "react";
import styled from "styled-components";

const SWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const SMain = styled.main`
  width: 100%;
  heigth: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SWrapper>
      <SMain>{children}</SMain>
    </SWrapper>
  );
};
