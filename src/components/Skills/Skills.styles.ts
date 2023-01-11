import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const SkillsWrapper = styled(Box)({
  background: "#2C0041",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "2em",
});

export const Container = styled(Box)({
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridGap: "1em",
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
