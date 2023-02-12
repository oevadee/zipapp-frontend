import Link from "next/link";
import * as React from "react";
import styled, { css } from "styled-components";

const buttonStyles = css<{ secondary?: boolean }>`
  color: white;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem 0.75rem;
  font-weight: bold;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.color.secondary : theme.color.primary};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-transform: uppercase;
  text-decoration: none;
`;

const SButton = styled.button`
  ${buttonStyles}
`;

const SLink = styled(Link)<{ secondary?: boolean }>`
  ${buttonStyles}
`;

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({
  children,
  type = "submit",
  secondary,
  href,
  ...rest
}) => {
  return (
    <>
      {href ? (
        <SLink href={href} type={type}>
          {children || "Click"}
        </SLink>
      ) : (
        <SButton type={type} secondary={secondary} {...rest}>
          {children || "Click"}
        </SButton>
      )}
    </>
  );
};
