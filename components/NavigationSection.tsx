import React from 'react';

export default function NavigationSection() {
  const lng = 126.8838985;
  const lat = 37.5056056;
  const encodedTitle = '%eb%8d%94%eb%a7%81%ed%81%ac%ed%98%b8%ed%85%94%20%ec%84%9c%ec%9a%b8';

  const navigationInfos = [
    {
      app: '네이버지도',
      img: '/images/ico_navermap.png',
      url: `http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=${lat}&elng=${lng}&etitle=${encodedTitle}`,
    },
    {
      app: '티맵',
      img: '/images/ico_tmap.png',
      url: `https://apis.openapi.sk.com/tmap/app/routes?appKey=${process.env.NEXT_PUBLIC_TMAP_APP_KEY}&name=${encodedTitle}&lon=${lng}&lat=${lat}`,
    },
    {
      app: '카카오맵',
      img: '/images/ico_kakaomap.png',
      url: `https://map.kakao.com/link/to/${encodedTitle},${lat},${lng}`,
    },
  ];

  return (
    <>
      <div>
        <span>네비게이션</span>
        <br />
        <span>원하시는 앱을 선택하시면 길안내가 시작됩니다.</span>
      </div>
      <ul>
        <li>
          {React.Children.toArray(
            navigationInfos.map((naviInfo) => (
              <a href={naviInfo.url}>
                <div>
                  <img alt={naviInfo.img} src={naviInfo.img} />
                  <span>{naviInfo.app}</span>
                </div>
              </a>
            )),
          )}
        </li>
      </ul>
    </>
  );
}
