import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ContactMeWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 1em",
  "&.dark": {
    background: "#2C0041",
  },
  "&.light": {
    background: "#EDEDED",
  },
});

export const Container = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  "@media (max-width: 660px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (max-width: 360px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});
