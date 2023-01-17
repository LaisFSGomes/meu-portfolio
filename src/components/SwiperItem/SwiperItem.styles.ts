import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const SwiperItemWrapper = styled(Box)({
  width: "100%",
  flexShrink: 0,
  display: "flex",
  height: "70vh",
  "&:hover": {
    "& > img": {
      width: "0px",
    },
    "& > div": {
      width: "100%",
      "& > h1": {
        color: "#2C0041",
      },
      "& > a": {
        color: "#2C0041",
      },
    },
  },
});

export const SwiperImage = styled("img")({
  width: "100%",
  height: "auto",
  userSelect: "none",
  objectFit: "none",
  objectPosition: "top center",
  transition: "width 2s ",
  "@media (max-width: 600px)": {
    objectPosition: "top left",
  },
});

export const SwiperItemInfo = styled(Box)({
  width: "0%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  color: "transparent",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 300,
  textDecoration: "none",
  transition: "width 2s, color 0.1s ",
  padding: "0 2em",
});

export const SwiperItemTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "2em",
  fontWeight: 400,
  textDecoration: "none",
  color: "transparent",
  textAlign: "center",
  transition: "color 0.1s ease-in-out",
  transitionDelay: "0.5s",
});

export const SwiperItemAcessLink = styled("a")({
  textDecoration: "none",
  color: "transparent",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 300,
  fontSize: "1.5em",
  textAlign: "center",
  transition: "color 0.1s ease-in-out",
  transitionDelay: "0.5s",
  "&:hover": {
    textDecoration: "underline",
  },
});
