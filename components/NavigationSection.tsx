import React from 'react';

export default function NavigationSection() {
  return (
    <ul>
      <li>
        <a href="http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=37.5056056&elng=126.8838985&etitle=%eb%8d%94%eb%a7%81%ed%81%ac%ed%98%b8%ed%85%94%20%ec%84%9c%ec%9a%b8">
          <div>
            <img alt="/images/ico_navermap.png" src="/images/ico_navermap.png" />
            <span>네이버지도</span>
          </div>
        </a>
        <a href="https://apis.openapi.sk.com/tmap/app/routes?appKey=MzpTeqQznV5KMVMOxMCPu7pxZP2sQKfF1557407z&name=%eb%8d%94%eb%a7%81%ed%81%ac%ed%98%b8%ed%85%94%20%ec%84%9c%ec%9a%b8&lon=126.8838985&lat=37.5056056">
          <div>
            <img alt="/images/ico_tmap.png" src="/images/ico_tmap.png" />
            <span>티맵</span>
          </div>
        </a>
        <a href="https://map.kakao.com/link/to/%eb%8d%94%eb%a7%81%ed%81%ac%ed%98%b8%ed%85%94%20%ec%84%9c%ec%9a%b8,37.5056056,126.8838985">
          <div>
            <img alt="/images/ico_kakaomap.png" src="/images/ico_kakaomap.png" />
            <span>카카오맵</span>
          </div>
        </a>
      </li>
    </ul>
  );
}
