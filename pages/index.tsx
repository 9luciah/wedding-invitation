/* eslint-disable camelcase */
import React from 'react';
import { styled } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import NameSection from '../components/NameSection';
import TextContentSection from '../components/TextContentSection';
import GallerySection from '../components/GallerySection';
import MapSection from '../components/MapSection';
import Calendar from '../components/Calendar';

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <GlobalStyle />
        <TitleWrapper>
          <Title>{'2024 / 03 / 09'}</Title>
          <SubTitle>{'SATURDAY'}</SubTitle>
        </TitleWrapper>
        <Image src={'/images/wiz3.jpeg'} />
        <NameSection />
        <TextContentSection />
        <GallerySection />
        <div>
          <MapSection />
        </div>
        <div>
          <Calendar />
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  background-color: white;
  overflow: auto;

  @media screen and (min-width: 440px) {
    background-color: #efefef;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: white;

  @media screen and (min-width: 425px) {
    width: 425px;
    background-color: white;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 0 30px;
  box-sizing: border-box;
`;

const Title = styled.span`
  width: 100%;
  margin-bottom: 5px;
  color: #49413a;
  font-size: 30px;
  line-height: 20px;
  letter-spacing: -0.2px;
  font-family: 'CrimsonPro';
`;

const SubTitle = styled.span`
  width: 100%;
  color: #49413a;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-stroke: 0;
  font-family: 'CrimsonPro';
`;

const Image = styled.img`
  width: calc(100% - 48px);
  height: auto;
  padding: 0 24px;
`;
