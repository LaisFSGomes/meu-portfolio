import React from "react";
import { SwiperImage, SwiperItemWrapper } from "./SwiperItem.styles";

interface SwiperItemProps {
  src: string;
  alt: string;
}

export const SwiperItem: React.FC<SwiperItemProps> = ({ src, alt }) => {
  return (
    <SwiperItemWrapper>
      <SwiperImage src={src} alt={alt} />
    </SwiperItemWrapper>
  );
};
