import React from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const SWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const SInput = styled.input<{ textDark?: boolean }>`
  position: relative;
  background: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 12px;
  color: ${({ theme, textDark }) =>
    textDark ? theme.color.spaceCadet : theme.color.white};
  border: none;
  border-bottom: ${({ theme }) => theme.border.input};
  display: inline-block;
  outline: none;
  font-size: ${({ theme }) => theme.font.size.regular};

  &:focus {
    border-bottom: ${({ theme }) => theme.border.inputFocus};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.charcoal};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.color.charcoal};
  }
`;

const SLabel = styled.label`
  display: inline-block;
  margin-left: 0.75rem;
  margin-top: 0.5rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.charcoal};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

interface Props {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  textDark?: boolean;
}

export const Input: React.FC<Props> = ({
  register,
  name,
  label,
  type = "text",
  placeholder = "Insert text here",
  required,
  textDark,
}) => {
  return (
    <SWrapper>
      <SInput
        textDark={textDark}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        required={required}
      />
      <SLabel>{label}</SLabel>
    </SWrapper>
  );
};
