import React from "react";
import styled from "styled-components";
import {ThemeSwitcher} from "features/Theme/ThemeSwitcher";

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 2.5rem;
  font-weight: var(--fw-bold);
  letter-spacing: 0.7rem;
  color: #fff;
`;

export const Header = () => {
  return (
    <ContainerHeader>
      <Logo>TODO</Logo>
      <ThemeSwitcher />
    </ContainerHeader>
  );
};
