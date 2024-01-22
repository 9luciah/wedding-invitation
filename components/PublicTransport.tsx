import React from 'react';

export const Subway = () => {
  return (
    <div>
      <span>{'지하철'}</span>
      <br />
      <br />
      <span>{'1,2호선 신도림역 1번 출구 (도보 10분)'}</span>
      <br />
      <span>{'1호선 구로역 3번 출구 (도보 5분)'}</span>
      <br />
      <br />
      <span>{'* 신도림역 1번 출구 앞 셔틀버스 수시운행'}</span>
    </div>
  );
};

export const Bus = () => {
  return (
    <div>
      <span>{'버스'}</span>
      <br />
      <br />
      <span>{'신도림동. 구로역 정류장 하차'}</span>
      <br />
      <span>{'(간선) 160, 503, 600, 662, 670'}</span>
      <br />
      <span>{'(지선) 6512, 6513, 6515, 6616, 6637, 6640'}</span>
      <br />
      <span>{'(일반) 10, 11-1, 11-2, 83, 88, 510'}</span>
      <br />
      <span>{'(좌석) 301, 320'}</span>
    </div>
  );
};

export const Car = () => {
  return (
    <div>
      <span>{'자가용'}</span>
      <br />
      <br />
      <span>{'건물주차장 및 외부 주차장 이용'}</span>
    </div>
  );
};

export const BusRental = () => {
  return (
    <div>
      <span>{'대절 버스'}</span>
      <br />
      <br />
      <span>{'(부산) 오전 8:00 동래역 3번 출구 앞'}</span>
      <br />
      <span>{'(진교) 오전 8:00 진교보건소 주차장'}</span>
      <br />
      <span>{'(진주) 오전 8:30 서진주 톨게이트 만남의광장'}</span>
    </div>
  );
};
