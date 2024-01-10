/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { styled } from 'styled-components';

export default function Calendar() {
  return (
    <Container>
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
              <td>
                <span className={'dday'}>{'9'}</span>
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
    </Container>
  );
}

const Container = styled.div`
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
`;

const TitleDay = styled.span`
  margin-top: 7px;
  font-size: 16px;
  color: #544f4f;
  letter-spacing: 0;
  opacity: 0.8;
`;

const CalendarWrapper = styled.div`
  display: block;
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

  .pinkText {
    color: #f79e9e;
  }
`;
