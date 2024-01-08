import React from 'react';
import { styled } from 'styled-components';

interface Props {
  smallText: string;
  largeText: string;
}

export default function PinkTitle({ smallText, largeText }: Props) {
  return (
    <Container>
      <span>{smallText}</span> <br />
      <span>{largeText}</span>
    </Container>
  );
}

const Container = styled.div`
  color: #f79e9e;
  font-family: 'GowunDodum';

  :first-of-type {
    font-size: 13px;
    letter-spacing: 3px;
    line-height: 20px;
    opacity: 0.6;
    -webkit-text-stroke: 0 !important;
    font-family: 'Crimson Pro';
  }
  :last-of-type {
    font-size: 19.6px;
    letter-spacing: 0.5px;
    line-height: 2;
  }
`;
