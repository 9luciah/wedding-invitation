import React from 'react';

export default function ContactSection() {
  return (
    <ul>
      <li>
        <span>신랑에게 연락하기</span>
        <span>
          <a href="tel:01000000000">
            <img alt="/images/ico_tel_1.png" src="/images/ico_tel_1.png" />
          </a>
          <a href="sms:01000000000">
            <img alt="/images/ico_sms_1.png" src="/images/ico_sms_1.png" />
          </a>
        </span>
      </li>
      <li>
        <span>신부에게 연락하기</span>
        <span>
          <a href="tel:01000000000">
            <img alt="/images/ico_tel_2.png" src="/images/ico_tel_2.png" />
          </a>
          <a href="sms:01000000000">
            <img alt="/images/ico_sms_2.png" src="/images/ico_sms_2.png" />
          </a>
        </span>
      </li>
    </ul>
  );
}
