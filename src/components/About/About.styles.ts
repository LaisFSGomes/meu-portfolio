import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
const aboutDraw = require("assets/icons/draw/drawabout.png");

export const AboutWrapper = styled(Box)({
  background: "#2C0041",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "2em",
});
export const AboutDraw = styled("div")({
  backgroundImage: `url(${aboutDraw})`,
  backgroundSize: "200px 200px",
  backgroundRepeat: "no-repeat",
  width: "200px",
  height: "200px",
  position: "absolute",
  top: 500,
  right: 0,
  zIndex: "1",
  "@media (max-width: 670px)": {
    top: 400,
    backgroundSize: "150px 150px",
    width: "150px",
    height: "150px",
  },
});
export const AboutText = styled(Typography)({
  fontSize: "1em",
  fontWeight: 400,
  paddingLeft: "20px",
  textAlign: "justify",
  color: "#FFFFFF",
  width: "60%",
  zIndex: "2",
  "@media (max-width: 460px)": {
    width: "80%",
  },
  "@media (max-width: 320px)": {
    width: "95%",
    fontSize: "0.8em",
  },
});
