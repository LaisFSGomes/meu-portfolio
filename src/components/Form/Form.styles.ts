import { Box } from "@mui/material";
import { styled } from "@mui/system";
const formDraw = require("assets/icons/draw/drawform.png");

export const FormWrapper = styled(Box)({
  background: "#2C0041",
  display: "grid",
  placeItems: "center",
});

export const FormDraw = styled("div")({
    backgroundImage: `url(${formDraw})`,
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