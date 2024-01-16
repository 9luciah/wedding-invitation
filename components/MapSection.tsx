import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

function MapSection() {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const position = new window.kakao.maps.LatLng(37.50555074304467, 126.88405195737671);
        const options = {
          center: position,
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        const marker = new window.kakao.maps.Marker({ position });
        marker.setMap(map);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
  }, []);

  return <div id={'map'} style={{ width: '425px', height: '300px', marginTop: '35px' }} />;
}

export default MapSection;
