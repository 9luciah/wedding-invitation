import React from 'react';

export default function ContactSection() {
  const contactInfos = [
    {
      ico_suffix: '1.png',
      text: '신랑에게 연락하기',
      phone: '01057726484',
    },
    {
      ico_suffix: '2.png',
      text: '신부에게 연락하기',
      phone: '01068551697',
    },
  ];

  const parentContactInfos = [
    {
      ico_suffix: '1.png',
      text: '어머니 오진숙',
      phone: '01029376484',
    },
    {
      ico_suffix: '2.png',
      text: '아버지 주형복',
      phone: '01065891697',
    },
    {
      ico_suffix: '2.png',
      text: '어머니 박선순',
      phone: '01025891697',
    },
  ];

  const makeButton = (phoneNumber: string, iconSuffix: string) => {
    return (
      <span>
        <a href={`tel:${phoneNumber}`}>
          <img alt={`/images/ico_tel_${iconSuffix}`} src={`/images/ico_tel_${iconSuffix}`} />
        </a>
        <a href={`sms:${phoneNumber}`}>
          <img alt={`/images/ico_sms_${iconSuffix}`} src={`/images/ico_sms_${iconSuffix}`} />
        </a>
      </span>
    );
  };

  return (
    <>
      <div className={'text'}>
        {'참석이 어려우신 분들을 위해'}
        <br />
        {'계좌번호를 기재하였습니다.'}
        <br />
        {'너그러운 마음으로 양해 부탁드립니다.'}
      </div>
      <ul>
        {React.Children.toArray(
          contactInfos.map((contactInfo) => (
            <li>
              <span className={'contactText'}>{contactInfo.text}</span>
              {makeButton(contactInfo.phone, contactInfo.ico_suffix)}
            </li>
          )),
        )}
      </ul>
      <div className={'text'}>{'혼주에게 연락하기'}</div>
      <ul>
        <li>
          <span className={'parentContactText'} style={{ color: '#8DB9B7' }}>
            {'신랑측 혼주\r'}
          </span>
          <span className={'parentContactText'}>{parentContactInfos[0].text}</span>
          {makeButton(parentContactInfos[0].phone, parentContactInfos[0].ico_suffix)}
        </li>
        <li>
          <span className={'parentContactText'} style={{ color: '#F79E9E' }}>
            {'신부측 혼주\r'}
          </span>
          <span className={'parentContactText'}>{parentContactInfos[1].text}</span>
          {makeButton(parentContactInfos[1].phone, parentContactInfos[1].ico_suffix)}
          <span className={'parentContactText'}>{parentContactInfos[2].text}</span>
          {makeButton(parentContactInfos[2].phone, parentContactInfos[2].ico_suffix)}
        </li>
      </ul>
    </>
  );
}
