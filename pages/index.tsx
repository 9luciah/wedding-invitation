/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable camelcase */
import React from 'react';
import { styled } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import NameSection from '../components/NameSection';
import TextContentSection from '../components/TextContentSection';
import GallerySection from '../components/GallerySection';
import MapSection from '../components/MapSection';
import NavigationSection from '../components/NavigationSection';
import ContactSection from '../components/ContactSection';
import KakaoTalkShare from '../components/KakaoTalkShare';
import PinkTitle from '../components/PinkTitle';
import { Subway, Bus, Car, BusRental } from '../components/PublicTransport';
import BankAcctNo from '../components/BankAcctNo';

export default function Home() {
  return (
    <Container>
      <script
        src={'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js'}
        integrity={'sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8'}
        crossOrigin={'anonymous'}
      />
      <Wrapper>
        <GlobalStyle />
        <TitleWrapper>
          <Title>{'2024 / 03 / 09'}</Title>
          <SubTitle>{'SATURDAY'}</SubTitle>
        </TitleWrapper>
        <Image src={'/images/wiz3.jpeg'} />
        <NameSection />
        <TextContentSection />
        <div>
          <GallerySection />
        </div>
        <CalendarContainer>
          <TitleSection>
            <TitleDate>{'2024.03.09'}</TitleDate>
            <TitleDay>{'토요일 오후 2시'}</TitleDay>
          </TitleSection>
          <CalendarWrapper>
            <CalendarTable>
              <thead>
                <tr>
                  <th className={'pinkText'}>{'일'}</th>
                  <th>{'월'}</th>
                  <th>{'화'}</th>
                  <th>{'수'}</th>
                  <th>{'목'}</th>
                  <th>{'금'}</th>
                  <th>{'토'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td className={'pinkText'}>{'1'}</td>
                  <td>{'2'}</td>
                </tr>
                <tr>
                  <td className={'pinkText'}>{'3'}</td>
                  <td>{'4'}</td>
                  <td>{'5'}</td>
                  <td>{'6'}</td>
                  <td>{'7'}</td>
                  <td>{'8'}</td>
                  <td className={'selected'}>
                    <span>{'9'}</span>
                  </td>
                </tr>
                <tr>
                  <td className={'pinkText'}>{'10'}</td>
                  <td>{'11'}</td>
                  <td>{'12'}</td>
                  <td>{'13'}</td>
                  <td>{'14'}</td>
                  <td>{'15'}</td>
                  <td>{'16'}</td>
                </tr>
                <tr>
                  <td className={'pinkText'}>{'17'}</td>
                  <td>{'18'}</td>
                  <td>{'19'}</td>
                  <td>{'20'}</td>
                  <td>{'21'}</td>
                  <td>{'22'}</td>
                  <td>{'23'}</td>
                </tr>
                <tr>
                  <td className={'pinkText'}>{'24'}</td>
                  <td>{'25'}</td>
                  <td>{'26'}</td>
                  <td>{'27'}</td>
                  <td>{'28'}</td>
                  <td>{'29'}</td>
                  <td>{'30'}</td>
                </tr>
                <tr>
                  <td className={'pinkText'}>{'31'}</td>
                </tr>
              </tbody>
            </CalendarTable>
          </CalendarWrapper>
        </CalendarContainer>
        <div style={{ marginTop: '80px' }}>
          <PinkTitle smallText={'LOCATION'} largeText={'오시는 길'} />
          <AddressWrapper>
            <span>더링크호텔 5층 가든홀</span>
            <span>서울 구로구 경인로 610</span>
            <span>Tel. 02-852-5000</span>
          </AddressWrapper>
          <MapSection />
        </div>
        <NaviContainer>
          <NavigationSection />
        </NaviContainer>
        <PublicTransportContainer>
          <Subway />
          <Bus />
          <Car />
          <BusRental />
        </PublicTransportContainer>
        <ContactContainer>
          <PinkTitle smallText={'ACCOUNT'} largeText={'마음 전하실 곳'} />
          <ContactSection />
        </ContactContainer>
        <BankAcctNo title={'신랑측 계좌번호'} contents={[['농협 111', '강웅비']]} />
        <BankAcctNo
          title={'신부측 계좌번호'}
          contents={[
            ['국민은행 111', '주가영'],
            ['농협', '주형복'],
            ['농협', '박선순'],
          ]}
        />
        <KaKaoTalkShareWrapper>
          <KakaoTalkShare />
        </KaKaoTalkShareWrapper>
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

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  -webkit-text-stroke: 0.2px;

  span {
    &:nth-child(1) {
      padding: 30px 0 10px;
      font-size: 18.5px;
    }

    &:nth-child(2) {
      font-size: 16px;
      color: #544f4f;
      letter-spacing: 0;
      opacity: 0.8;
      padding: 0 0 20px 0;
    }

    &:nth-child(3) {
      font-size: 14.2px;
      color: #544f4f;
      letter-spacing: 0;
      opacity: 0.8;
    }
  }
`;

const NaviContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 20px 0;
  -webkit-text-stroke: 0.2px;

  & > div {
    width: 100%;
    text-align: left;
  }

  & > div > span {
    padding-left: 36px;

    &:nth-child(1) {
      color: #49413a;
      font-size: 16px;
      font-weight: bold;
      line-height: 3.5;
    }

    &:nth-child(3) {
      font-size: 15.2px;
      color: #585858;
    }
  }

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

const PublicTransportContainer = styled.div`
  margin-bottom: 80px;
  div {
    text-align: left;
    margin: 10px 36px;
    padding: 30px 0;
    border-top: 1px solid #eeeeee;
    -webkit-text-stroke: 0.2px;
  }

  div > span {
    &:nth-child(1) {
      color: #49413a;
      font-size: 16px;
      font-weight: bold;
    }

    &:nth-child(n + 4) {
      color: #585858;
      font-size: 15.2px;
      line-height: 1.7;
    }

    &:last-child {
      line-height: 0;
    }
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 60px;
  -webkit-text-stroke: 0.2px;

  .text {
    padding: 35px 0;
    font-size: 15.2px;
    letter-spacing: -0.5px;
    font-weight: 400;
    color: #585858;
    line-height: 2;
  }

  .contactText {
    font-size: 16px;
  }

  .parentContactText {
    font-size: 15.2px;
  }

  ul {
    display: flex;
    width: 100%;
    list-style: none;
    list-style-image: none;
    box-sizing: border-box;
    padding: 0px 33px;
  }

  ul > li {
    text-align: center;
    width: 50%;
  }

  ul > li > span {
    display: block;
    margin-bottom: 20px;
  }

  ul > li > span > a {
    margin: 5px;
  }

  ul > li > span > a > img {
    width: 32px;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 80px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleDate = styled.span`
  font-size: 21.5px;
  opacity: 0.95;
  color: #544f4f;
  letter-spacing: 1px;
  font-size: 19.6px;
`;

const TitleDay = styled.span`
  margin-top: 7px;
  font-size: 16px;
  color: #544f4f;
  letter-spacing: 0;
  opacity: 0.8;
  font-size: 13px;
`;

const CalendarWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 280px;
  padding: 15px 0;
  margin: 35px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-color: #eee;
`;

const CalendarTable = styled.table`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;

  border-collapse: collapse;
  border-spacing: 0;

  th {
    font-weight: normal;
    height: 50px;
  }

  .pinkText {
    color: #f79e9e;
  }

  .selected {
    width: 35px;
    height: 35px;
    color: white;
    background-color: #f79e9e;
    border-radius: 50%;
  }
`;

const KaKaoTalkShareWrapper = styled.div`
  padding: 70px 0 20px 0;

  button {
    border: none;
    background: transparent;
  }

  button > span {
    font-family: 'GowunDodum';
    font-size: 15.2px;
    letter-spacing: -0.5px;
    font-weight: 400;
    color: #585858;
    line-height: 2;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke: 0.2px;
  }

  button > img {
    width: 16px;
    padding-right: 8px;
    position: relative;
    top: 2px;
  }
`;
