import React from 'react';
import { styled } from 'styled-components';
import PinkTitle from './PinkTitle';

export default function TextContentSection() {
  return (
    <Container>
      <PinkTitle smallText={'INVITATION'} largeText={'소중한 분들을 초대합니다'} />
      <ContentText>
        {'함께 있을 때 가장 나다운 모습이 되고'}
        <br />
        {'함께 있을 때 미래를 꿈꾸게 하는 사람을 만나'}
        <br />
        {'함께 맞는 열 번째 봄, 결혼합니다.'}
        <br />
        <br />
        {'지금처럼 서로에게 가장 친한 친구가 되어'}
        <br />
        {'예쁘고 행복하게 잘 살겠습니다.'}
        <br />
        <br />
        {'저희 두 사람의 새로운 시작을'}
        <br />
        {'함께하시어 축복해 주시면 감사하겠습니다.'}
      </ContentText>
      <FamilyNameWrapper>
        <DimmedText>{'(故)'}</DimmedText>
        <NameText>{' 강구룡 · 오진숙'}</NameText>
        <DimmedText>{' 의 아들'}</DimmedText>
        <NameText>{' 강웅비'}</NameText>
        <br />
        <NameText>{' 주형복 · 박선순'}</NameText>
        <DimmedText>{' 의 딸'}</DimmedText>
        <NameText>{' 주가영'}</NameText>
      </FamilyNameWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 110px;
  font-family: 'GowunDodum';
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
