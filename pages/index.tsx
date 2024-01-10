/* eslint-disable camelcase */
import React from 'react';
import { styled } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import NameSection from '../components/NameSection';
import TextContentSection from '../components/TextContentSection';
import GallerySection from '../components/GallerySection';
import MapSection from '../components/MapSection';
import NavigationSection from '../components/NavigationSection';
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
        <NaviContainer>
          <NavigationSection />
        </NaviContainer>
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

const NaviContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  -webkit-text-stroke: 0.2px;

  ul {
    width: 100%;
    list-style: none;
    list-style-image: none;
    box-sizing: border-box;
    padding: 0px 33px;
  }

  ul > li {
    display: flex;
    font-size: 14.2px;
  }

  ul > li > a {
    display: flex;
    box-sizing: border-box;
    text-align: center;
    font-size: 13.1px;
    display: flex;
    align-items: center;
    margin: 0 3px;
    border: 1px solid #eaeaea;
    width: 33.333%;
    background: #fff;
    height: 40px;
    border-radius: 8px;
    color: #222;
    text-decoration: none;
  }

  ul > li > a > div {
    width: 100%;
  }

  ul > li > a > div > img {
    width: 17px;
    height: 17px;
    margin-right: 5px;
    margin-bottom: -4px;
  }

  ul > li > a > div > span {
    font-weight: 500;
    color: #000;
    position: relative;
    font-size: 13px;
  }
`;
