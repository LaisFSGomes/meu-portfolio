import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

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
export const ActionsButton = styled(Button)({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "#FFFFFF",
});
