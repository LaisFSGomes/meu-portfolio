import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
const headerDraw = require("assets/icons/draw/Vectordrawing.png");

export const HeaderWrapper = styled(Box)({
    height: "80vh",
    background: "#2C0041",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 2em",
    zIndex: "-100",
    paddingTop: "50px",
  "@media (max-width: 760px)": {
    padding: "0em",
    paddingLeft: "1em",
  },
  "@media (max-width: 600px)": {
    height: "270px",
    paddingTop: "40px",
  },
});

export const HeaderDraw = styled("div")({
  backgroundImage: `url(${headerDraw})`,
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
  color: "#FFFFFF",
  fontSize: "2em",
  fontWeight: 400,
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
  "@media (max-width: 760px)": {
    fontSize: "2em",
    paddingLeft: "10px",
  },
});

export const Job = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  color: "#BFB7B7",
  fontSize: "1em",
  fontWeight: 400,
  paddingLeft: "20px",
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
