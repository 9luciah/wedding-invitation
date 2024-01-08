import React from 'react';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper.css';

SwiperCore.use([Pagination]);

export default function GallerySwiper() {
  const imageUrls = ['/images/wiz1.jpeg', '/images/wiz2.jpeg', '/images/wiz3.jpeg'];

  return (
    <Container>
      <Swiper pagination={{ clickable: true, dynamicMainBullets: 3 }} modules={[Pagination]} loop>
        {React.Children.toArray(
          imageUrls.map((imageUrl) => (
            <SwiperSlide>
              <Image alt={imageUrl} src={imageUrl} />
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;

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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    background: white;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 755.7px;
`;
