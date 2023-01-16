import { SwiperItem } from "components/SwiperItem";
import React from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {
  Actions,
  ActionsButton,
  Carousel,
  SwiperWrapper,
} from "./Swiper.styles";
interface SwiperItemProps {
  src: string;
  alt: string;
  title: string;
  link: string;
}
interface SwiperProps {
  items: SwiperItemProps[];
}

export const Swiper: React.FC<SwiperProps> = ({ items }) => {
  const carousel = React.useRef();
  const page = React.useRef();

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (carousel.current && page.current) {
      const carouselElement = carousel.current as HTMLDivElement;
      const pageElement = page.current as HTMLDivElement;
      const scrollWidth = pageElement.scrollWidth;
      carouselElement.scrollLeft += scrollWidth;
      if (
        carouselElement.scrollLeft >=
        carouselElement.scrollWidth - carouselElement.scrollLeft / 2
      ) {
        carouselElement.scrollLeft = 0;
      }
      console.log(scrollWidth);
    }
  };
  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (carousel.current && page.current) {
      const carouselElement = carousel.current as HTMLDivElement;
      const pageElement = page.current as HTMLDivElement;
      const scrollWidth = pageElement.scrollWidth;
      carouselElement.scrollLeft -= scrollWidth;
      if (carouselElement.scrollLeft <= 0) {
        carouselElement.scrollLeft =
          carouselElement.scrollWidth - carouselElement.scrollLeft / 2;
          // carouselElement.scrollWidth - carouselElement.scrollLeft/6;
      }
      console.log(scrollWidth);
    }
  };

  return (
    <SwiperWrapper ref={page}>
      <Carousel ref={carousel}>
        {items.map((item, index) => (
          <SwiperItem
            key={index}
            src={item.src}
            alt={item.alt}
            link={item.link}
            title={item.title}
          />
        ))}
      </Carousel>
      <Actions>
        <ActionsButton onClick={handlePrev}>
          <ArrowBackIosRoundedIcon fontSize="large" />
        </ActionsButton>
        <ActionsButton onClick={handleNext}>
          <ArrowForwardIosRoundedIcon fontSize="large" />
        </ActionsButton>
      </Actions>
    </SwiperWrapper>
  );
};
