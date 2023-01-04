import React from "react";
import styled from "styled-components";

const SWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SInput = styled.input`
  position: relative;
  background: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 12px;
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-bottom: ${({ theme }) => theme.border.input};
  display: inline-block;
  outline: none;
`;

const SLabel = styled.label`
  display: inline-block;
  margin-left: 0.75rem;
  margin-top: 0.5rem;
  text-transform: capitalize;
`;

interface Props {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export const Input: React.FC<Props> = ({
  label,
  type = "text",
  placeholder = "Insert text here",
}) => {
  return (
    <SWrapper>
      <SInput type={type} placeholder={placeholder} />
      <SLabel>{label}</SLabel>
    </SWrapper>
  );
};
