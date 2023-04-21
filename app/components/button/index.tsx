import * as React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "text";

type StyleProps = {
  variant?: ButtonVariant;
  textDark?: boolean;
};

const buttonStyles = css<StyleProps>`
  color: ${({ theme, textDark }) =>
    textDark ? theme.color.spaceCadet : theme.color.white};
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

const SSpan = styled.span`
  ${buttonStyles}
`;

interface Props extends StyleProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({
  children,
  type = "submit",
  variant = "primary",
  href,
  textDark = false,
  ...rest
}) => {
  return (
    <>
      {href ? (
        <Link href={href} type={type}>
          <SSpan variant={variant} textDark={textDark}>
            {children || "Click"}
          </SSpan>
        </Link>
      ) : (
        <SButton type={type} variant={variant} textDark={textDark} {...rest}>
          {children || "Click"}
        </SButton>
      )}
    </>
  );
};
