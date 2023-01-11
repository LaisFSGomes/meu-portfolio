import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const SkillWrapper = styled(Box)({
  background: "#510E70",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  padding: "2px",
  width: "100px",
  height: "120px",
  zIndex: "2",
  "&:hover": {
    "& img": {
      transition: "all 0.5s ease-in-out",
      width: "53px",
      "@media (max-width: 800px)":{
        width: "43px",
      }
    },
  },
  "@media (max-width: 800px)": {
    width: "80px",
    height: "100px",
  },
  "@media (max-width: 570px)": {
    width: "75px",
    height: "95px",
  },
});
export const SkillImage = styled("img")({
  width: "50px",
  "@media (max-width: 800px)":{
    width: "40px",
  },
});
export const SkillTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.8em",
  color: "#FFFFFF",
  marginTop: "0.7em",
  textAlign: "center",
  "@media (max-width: 570px)": {
    fontSize: "0.6em",
  },
});
