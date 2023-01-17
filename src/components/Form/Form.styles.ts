import { styled } from "@mui/system";
import { Box } from "@mui/material";
const formDrawDark = require("assets/icons/draw/drawform-dark.png");
const formDrawLight = require("assets/icons/draw/drawform-light.png");

export const FormWrapper = styled(Box)({
  display: "grid",
  placeItems: "center",
  "&.dark": {
    background: "#2C0041",
  },
  "&.light": {
    background: "#EDEDED",
  },
});

export const FormDrawDark = styled("div")({
  backgroundImage: `url(${formDrawDark})`,
  backgroundSize: "300px 300px",
  backgroundRepeat: "no-repeat",
  width: "300px",
  height: "300px",
  position: "absolute",
  top: 1300,
  left: "-100px",
  zIndex: "1",
});

export const FormDrawLight = styled("div")({
  backgroundImage: `url(${formDrawLight})`,
  backgroundSize: "300px 300px",
  backgroundRepeat: "no-repeat",
  width: "300px",
  height: "300px",
  position: "absolute",
  top: 1300,
  left: "-100px",
  zIndex: "1",
});

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  paddingBottom: "2em",
  gap: "0.7em",
  zIndex: "10",
  "@media (max-width: 570px)": {
    width: "80%",
  },
  "@media (max-width: 290px)": {
    width: "90%",
  },
});
