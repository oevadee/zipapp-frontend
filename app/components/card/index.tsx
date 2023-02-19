import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const SWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => theme.border.input};
  border-radius: ${({ theme }) => theme.radius.rounded};
  padding: 1rem 0;
  max-width: ${({ theme }) => theme.maxWidth.desktop};
`;

const SCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const SCardTitle = styled.h2`
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.spaceCadet};
`;

const SCardLine = styled.div`
  height: 0.125rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
`;

const SCardBody = styled.div`
  padding: 0 1rem;
`;

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <SWrapper>
      <SCardHeader>
        <SCardTitle>{title}</SCardTitle>
        <SCardLine />
      </SCardHeader>
      <SCardBody>{children}</SCardBody>
    </SWrapper>
  );
};

export default Card;
