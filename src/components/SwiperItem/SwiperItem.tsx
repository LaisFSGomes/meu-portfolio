import React from "react";
import {
  SwiperImage,
  SwiperItemAcessLink,
  SwiperItemInfo,
  SwiperItemTitle,
  SwiperItemWrapper,
} from "./SwiperItem.styles";

interface SwiperItemProps {
  src: string;
  alt: string;
  title: string;
  link: string;
}

export const SwiperItem: React.FC<SwiperItemProps> = ({
  src,
  alt,
  title,
  link,
}) => {
  
  return (
    <SwiperItemWrapper>
      <SwiperImage src={src} alt={alt} id="imagem" />
      <SwiperItemInfo id="info">
        <SwiperItemTitle variant="h1"> {title} </SwiperItemTitle>
        <SwiperItemAcessLink href={link} target="_blank" rel="noreferrer">
          Acessar
        </SwiperItemAcessLink>
      </SwiperItemInfo>
    </SwiperItemWrapper>
  );
};
