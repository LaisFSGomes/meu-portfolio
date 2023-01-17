import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const SkillsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "2em",
  "&.dark": {
    background: "#2C0041",
  },
  "&.light": {
    background: "#EDEDED",
  },
});

export const Container = styled(Box)({
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridGap: "1em",
  paddingBottom: "2em",
  zIndex: "10",
  "@media (max-width: 900px)": {
    gridTemplateColumns: "repeat(6, 1fr)",
  },
  "@media (max-width: 800px)": {
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  "@media (max-width: 570px)": {
    gridGap: "0.7em",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  "@media (max-width: 420px)": {
    gridGap: "0.5em",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media (max-width: 290px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});
