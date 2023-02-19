import Link from "next/link";
import * as React from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "text";

const buttonStyles = css<{ variant?: ButtonVariant }>`
  color: white;
  display: inline-block;
  padding: ${({ variant }) => (variant === "text" ? "" : "6px 8px")};
  border-radius: 5px;
  font-weight: bold;
  background-color: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.color.secondary
      : variant === "primary"
      ? theme.color.primary
      : "transparent"};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-transform: uppercase;
  text-decoration: none;

  &:hover: {
    color: ${({ variant, theme }) => variant === "text" && theme.color.primary};
  }
`;

const SButton = styled.button`
  ${buttonStyles}
`;

const SLink = styled(Link)`
  ${buttonStyles}
`;

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({
  children,
  type = "submit",
  variant = "primary",
  href,
  ...rest
}) => {
  return (
    <>
      {href ? (
        <SLink href={href} type={type} variant={variant}>
          {children || "Click"}
        </SLink>
      ) : (
        <SButton type={type} variant={variant} {...rest}>
          {children || "Click"}
        </SButton>
      )}
    </>
  );
};
