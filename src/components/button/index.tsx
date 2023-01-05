import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  color: white;
  display: inline-block;
  padding: 12px;
  border-radius: 5px;
  margin: 0.5rem 0.75rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  cursor: pointer;
`;

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<Props> = ({ children, type = "submit" }) => {
  return <SButton type={type}>{children || "Click"}</SButton>;
};
