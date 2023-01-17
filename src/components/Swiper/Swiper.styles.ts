import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const SwiperWrapper = styled(Box)({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "70vh",
  zIndex: "10",
  "@media (max-width: 900px)": {
    width: "100%",
  },
});

export const Carousel = styled(Box)({
  width: "100%",
  display: "flex",
  overflow: "auto",
  overflowY: "hidden",
  scrollBehavior: "smooth",
  listStyle: "none",
  borderRadius: "20px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const Actions = styled(Box)({
  width: "10%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const ActionsButton = styled("button")({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  "&.dark": {
    color: "#FFFFFF",
  },
  "&.light": {
    color: "#5A1779",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
});
