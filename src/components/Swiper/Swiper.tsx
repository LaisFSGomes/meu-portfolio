import React from "react";
import { SwiperItem } from "components";
import Aos from "aos";
import "aos/dist/aos.css";
import { ModeContext } from "contexts";
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
  const { mode } = React.useContext(ModeContext);
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
      }
    }
  };
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <SwiperWrapper data-aos = "fade-up" ref={page}>
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
        <ActionsButton className= {mode} onClick={handlePrev}>
          <ArrowBackIosRoundedIcon fontSize="large" />
        </ActionsButton>
        <ActionsButton className= {mode} onClick={handleNext}>
          <ArrowForwardIosRoundedIcon fontSize="large" />
        </ActionsButton>
      </Actions>
    </SwiperWrapper>
  );
};
