import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  color: white;
  display: inline-block;
  padding: 12px;
  border-radius: 5px;
  margin: 5px 3px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.primary};
`;

interface Props {
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <SButton>{children || "Click"}</SButton>;
};
