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
        title: '제목',
        description: '상세',
        imageUrl: '',
        link: {
          mobileWebUrl: location.href,
          webUrl: location.href,
        },
      },
      buttons: [
        {
          title: '테스트',
          link: {
            mobileWebUrl: location.href,
            webUrl: location.href,
          },
        },
      ],
    });
  };

  return (
    <button type="button" onClick={handleShareToKakaoTalk}>
      카카오톡 공유하기
    </button>
  );
}

export default KakaoTalkShare;
