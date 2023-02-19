import React from "react";
import styled from "styled-components";

const SWrapper = styled.div<{ noPadding?: boolean }>`
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => theme.border.input};
  border-radius: ${({ theme }) => theme.radius.rounded};
  padding: ${({ noPadding }) => (noPadding ? "0" : "1rem 0")};
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

const SCardBody = styled.div<{ noPadding?: boolean }>`
  padding: ${({ noPadding }) => (noPadding ? "0" : "0 1rem")};
  color: ${({ theme }) => theme.color.spaceCadet};
`;

interface Props {
  title?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

const Card: React.FC<Props> = ({ title, children, noPadding }) => {
  return (
    <SWrapper noPadding={noPadding}>
      {title && (
        <SCardHeader>
          <SCardTitle>{title}</SCardTitle>
          <SCardLine />
        </SCardHeader>
      )}
      <SCardBody noPadding={noPadding}>{children}</SCardBody>
    </SWrapper>
  );
};

export default Card;
