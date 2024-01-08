import React from 'react';
import { styled } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import NameSection from '../components/NameSection';
import TextContentSection from '../components/TextContentSection';
import GallerySection from '../components/GallerySection';
import MapSection from '../components/MapSection';

export default function Home() {
  return (
    <Container>
      <link href={'https://fonts.googleapis.com/css?family=Crimson Pro'} rel={'stylesheet'} />
      <link href={'https://webfontworld.github.io/yangheeryu/GowunDodum.css'} rel={'stylesheet'} />
      <GlobalStyle />
      <TitleWrapper>
        <Title>{'2024 / 03 / 09'}</Title>
        <SubTitle>{'SATURDAY'}</SubTitle>
      </TitleWrapper>
      <NameSection />
      <TextContentSection />
      <GallerySection />
      <MapSection />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 33px 30px;
`;

const Title = styled.span`
  margin-bottom: 5px;
  color: #49413a;
  font-size: 30px;
  line-height: 20px;
  letter-spacing: -0.2px;
`;

const SubTitle = styled.span`
  color: #49413a;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-stroke: 0;
`;
