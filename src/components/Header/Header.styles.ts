import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
const headerDrawDark = require("assets/icons/draw/drawheader-dark.png");
const headerDrawLight = require("assets/icons/draw/drawheader-light.png");

export const HeaderWrapper = styled(Box)({
  height: "80vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "0 2em",
  zIndex: "-100",
  paddingTop: "50px",
  "&.dark": {
    background: "#2C0041",
  },
  "&.light": {
    background: "#EDEDED",
  },
  "@media (max-width: 760px)": {
    padding: "0em",
    paddingLeft: "1em",
  },
  "@media (max-width: 600px)": {
    height: "270px",
    paddingTop: "40px",
  },
});

export const HeaderDrawDark = styled("div")({
  backgroundImage: `url(${headerDrawDark})`,
  backgroundSize: "260px 250px",
  backgroundRepeat: "no-repeat",
  width: "260px",
  height: "250px",
  position: "absolute",
  top: 0,
  left: "-100px",
  zIndex: "1",
});
export const HeaderDrawLight = styled("div")({
  backgroundImage: `url(${headerDrawLight})`,
  backgroundSize: "260px 250px",
  backgroundRepeat: "no-repeat",
  width: "260px",
  height: "250px",
  position: "absolute",
  top: 0,
  left: "-100px",
  zIndex: "1",
});

export const PersonalWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  zIndex: "1",
});

export const Title = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "2em",
  fontWeight: 400,
  "&.dark": {
    color: "#FFFFFF",
  },
  "&.light": {
    color: "#6B1D86",
  },
  "@media (max-width: 760px)": {
    fontSize: "1.5em",
  },
});

export const Name = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  color: "#FFFFFF",
  fontSize: "3em",
  fontWeight: 400,
  paddingLeft: "20px",
  "&.dark": {
    color: "#FFFFFF",
  },
  "&.light": {
    color: "#6B1D86",
  },
  "@media (max-width: 760px)": {
    fontSize: "2em",
    paddingLeft: "10px",
  },
});

export const Job = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "1em",
  fontWeight: 400,
  paddingLeft: "20px",
  "&.dark": {
    color: "#BFB7B7",
  },
  "&.light": {
    color: "#7A7A7A",
  },
  "@media (max-width: 760px)": {
    fontSize: "0.7em",
    paddingLeft: "10px",
  },
});

export const ActionsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingTop: "30px",
  "@media (max-width: 760px)": {
    flexDirection: "column",
    gap: "10px",
  },
});

export const Image = styled("img")({
  height: "400px",
  display: "inline",
  "@media (max-width: 600px)": {
    display: "none",
  },
});
