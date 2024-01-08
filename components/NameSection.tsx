import React from 'react';
import { styled } from 'styled-components';

export default function NameSection() {
  return (
    <Container>
      <Name>{'강웅비  ·  주가영'}</Name>
      <DatePlaceText>
        {'2024년 3월 9일 토요일 오후 2시 '}
        <br />
        {' 더링크호텔 5층 가든홀'}
      </DatePlaceText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'GowunDodum';
  -webkit-text-stroke: 0.2px;
`;

const Name = styled.span`
  padding: 30px 0 20px;
  font-size: 18.5px;
`;

const DatePlaceText = styled.span`
  line-height: 1.8;
  font-size: 15.2px;
  color: #544f4f;
  margin-bottom: 108px;
`;
