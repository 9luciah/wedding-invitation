import React from 'react';
import { styled } from 'styled-components';
import GallerySwiper from './GallerySwiper';
import PinkTitle from './PinkTitle';

export default function GallerySection() {
  return (
    <Container>
      <PinkTitle smallText={'GALLERY'} largeText={'웨딩 갤러리'} />
      <GallerySwiper />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  -webkit-text-stroke: 0.2px;
  width: 100%;
  max-height: 946px;
`;
