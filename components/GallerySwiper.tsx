import React from 'react';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

export default function GallerySwiper() {
  const imageUrls = [
    '/images/2.jpg',
    '/images/20-3.jpeg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
    '/images/12.jpg',
    '/images/13.jpg',
    '/images/14.jpg',
    '/images/15.jpg',
    '/images/16.jpg',
    '/images/17.jpg',
    '/images/18.jpeg',
    '/images/19.jpg',
    '/images/20.jpg',
  ];

  return (
    <StyledSwiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      modules={[Pagination]}
      loop
    >
      {React.Children.toArray(
        imageUrls.map((imageUrl) => (
          <SwiperSlide>
            <img alt={imageUrl} src={imageUrl} />
          </SwiperSlide>
        )),
      )}
    </StyledSwiper>
  );
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-top: 30px;

  .swiper-slide {
    width: 100%;
  }

  .swiper-pagination-bullet {
    width: 5.3px;
    height: 5.3px;
    margin: 0 4px;
    background: #000;
    opacity: 0.2;
    border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    width: 8px;
    height: 8px;
    margin: 0 4px;
    background: #000;
    opacity: 1;
    border-radius: 50%;
  }

  .swiper-pagination {
    position: relative;
    padding-top: 46px;
  }

  img {
    width: 100%;
    max-height: 756px;
  }
`;
