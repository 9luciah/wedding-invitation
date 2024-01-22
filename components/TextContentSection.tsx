import React from 'react';
import { styled } from 'styled-components';
import PinkTitle from './PinkTitle';

export default function TextContentSection() {
  return (
    <Container>
      <PinkTitle smallText={'INVITATION'} largeText={'소중한 분들을 초대합니다'} />
      <ContentText>
        {'서로가 서로의 청춘 그 자체였던 두 사람,'}
        <br />
        {'열 번의 사계절을 지나 부부의 연을 맺고자 합니다.'}
        <br />
        <br />
        {'앞으로 함께 나아갈 수많은 계절,'}
        <br />
        {'그 시작의 자리에 귀한 걸음으로 축복해 주십시오.'}
      </ContentText>
      <FamilyNameWrapper>
        <DimmedText>{'(故)'}</DimmedText>
        <NameText>{' 강구룡 · 오진숙'}</NameText>
        <DimmedText>{' 의 아들'}</DimmedText>
        <NameText>{' 웅비'}</NameText>
        <br />
        <NameText>{' 주형복 · 박선순'}</NameText>
        <DimmedText>{' 의 딸'}</DimmedText>
        <NameText>{' 가영'}</NameText>
      </FamilyNameWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 110px;
  -webkit-text-stroke: 0.2px;
`;

const ContentText = styled.div`
  padding: 35px 0;
  font-size: 15.2px;
  letter-spacing: -0.5px;
  font-weight: 400;
  color: #585858;
  line-height: 2;
`;

const FamilyNameWrapper = styled.div`
  margin-top: 43px;
  font-size: 15.2px;
`;

const DimmedText = styled.span`
  color: #888;

  &:first-of-type {
    font-size: 13px;
  }
`;
const NameText = styled.span`
  color: #444;
`;
