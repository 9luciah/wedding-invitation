import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoTalkShare() {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
  }, []);

  const handleShareToKakaoTalk = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '3월 9일 강웅비 ❤️ 주가영 결혼합니다.',
        description: '',
        imageUrl: 'https://main.d2ia4lq1j9ieuf.amplifyapp.com/images/1.jpg',
        link: {
          mobileWebUrl: location.href,
          webUrl: location.href,
        },
      },
      buttons: [
        {
          title: '모바일청첩장',
          link: {
            mobileWebUrl: location.href,
            webUrl: location.href,
          },
        },
        {
          title: '위치 보기',
          link: {
            mobileWebUrl: 'https://map.naver.com/p/entry/place/1070501110?c=15.00,0,0,0,dh',
            webUrl: 'https://map.naver.com/p/entry/place/1070501110?c=15.00,0,0,0,dh',
          },
        },
      ],
    });
  };

  return (
    <button type="button" onClick={handleShareToKakaoTalk}>
      <img alt="/images/ico_kakaotalk_share.png" src="/images/ico_kakaotalk_share.png" />
      <span>카카오톡으로 초대장 보내기</span>
    </button>
  );
}

export default KakaoTalkShare;
