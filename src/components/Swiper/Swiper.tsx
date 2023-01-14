import { SwiperItem } from "components/SwiperItem";
import React from "react"
import { SwiperList, SwiperWrapper } from "./Swiper.styles"

interface SwiperItemProps {
    src: string;
    alt: string;
}
interface SwiperProps {
    items: SwiperItemProps[];
}

export const Swiper: React.FC<SwiperProps> = ({items}) => {
  return (
    <SwiperWrapper>
        <SwiperList>
            {items.map((item, index) => {
                return <SwiperItem key={index} {...item} />
            })}
        </SwiperList>
    </SwiperWrapper>
  );
};
