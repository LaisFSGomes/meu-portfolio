import React from "react";
import { SwiperImage, SwiperItemInfo, SwiperItemWrapper } from "./SwiperItem.styles";

interface SwiperItemProps {
  src: string;
  alt: string;
}

export const SwiperItem: React.FC<SwiperItemProps> = ({ src, alt }) => {
  return (

    <SwiperItemWrapper>
      <SwiperImage  src={src} alt={alt} id="imagem"/>
      <SwiperItemInfo id="info">
        <h3>{alt}</h3>
      </SwiperItemInfo >
    </SwiperItemWrapper>
  );
};
